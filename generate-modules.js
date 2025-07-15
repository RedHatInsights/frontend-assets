/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const fs = require('fs');
const { glob } = require('glob');
const util = require('util');

// Import our modular functions
const { dashToCamelCase, upperCaseFirstLetter } = require('./scripts/utils');
const { parseSvgContent } = require('./scripts/svg-parser');
const { generateSvgMetadata } = require('./scripts/metadata-generator');
const {
  generateMarkdownDocumentation,
} = require('./scripts/documentation-generator');
const { cleanupGeneratedIcons } = require('./scripts/cleanup');

const projectBase = path.resolve(__dirname);
const iconsBase = path.resolve(projectBase, 'src');

const promisiFiedWriteFile = util.promisify(fs.writeFile);

/**
 * Find all SVG files in a directory
 * @param {string} dir - Directory to search
 * @returns {Promise<string[]>} Array of SVG file paths
 */
async function findAllSvgFiles(dir) {
  return await glob('**/*.svg', { cwd: dir, absolute: true });
}

/**
 * Generates the content for a TSX file based on the provided SVG metadata.
 * @param {Object} metadata - The metadata object for the SVG file.
 * @returns {string} The generated TSX file content as a string.
 */
function generateTSXFileContent(metadata) {
  const { name, filePath } = metadata;
  const svgContent = fs.readFileSync(path.join(iconsBase, filePath), 'utf8');
  const camelCaseName = dashToCamelCase(name);
  const componentName = upperCaseFirstLetter(`${camelCaseName}Icon`);

  // Add component mapping for documentation
  addComponentMapping(metadata, componentName);

  try {
    const { attributes, innerContent } = parseSvgContent(svgContent);

    // Create default attributes with fallbacks
    const defaultAttributes = {
      width: attributes.width || '24',
      height: attributes.height || '24',
      viewBox:
        attributes.viewBox ||
        `0 0 ${attributes.width || '24'} ${attributes.height || '24'}`,
      xmlns: 'http://www.w3.org/2000/svg',
      ...attributes,
    };

    // Detect if there are any fill colors (inline or CSS) in the content
    const hasInlineFills = innerContent.includes('fill=');
    const hasCssFills =
      innerContent.includes('fill:') || innerContent.includes('fill:#');
    const hasGradients =
      innerContent.includes('linearGradient') ||
      innerContent.includes('radialGradient');
    const hasStopColors =
      innerContent.includes('stopColor') || innerContent.includes('stop-color');
    const hasAnyFills =
      hasInlineFills || hasCssFills || hasGradients || hasStopColors;

    // Only add fill="currentColor" if the SVG doesn't already have specific fill colors
    if (!hasAnyFills) {
      defaultAttributes.fill = 'currentColor';
    }

    // Generate the attributes string for the SVG element
    const attributesEntries = Object.entries(defaultAttributes);
    const svgAttributes = attributesEntries
      .map(([key, value]) => {
        if (
          key === 'style' &&
          typeof value === 'string' &&
          value.startsWith('{')
        ) {
          // Handle style object - convert JSON string back to object syntax
          return `style={${value}}`;
        }
        return `${key}="${value}"`;
      })
      .join('\n    ');

    const tsxContent = `import React from 'react';
import { Icon, IconComponentProps } from '@patternfly/react-core';

export type ${componentName}Props = {
  pfIconWrapper?: boolean;
  iconProps?: IconComponentProps;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

export const ${componentName} = (props: ${componentName}Props) => {
  const svgElement = (
    <svg
      ${svgAttributes}
      {...props.svgProps}
    >
      ${innerContent}
    </svg>
  );

  if (props.pfIconWrapper) {
    return (
      <Icon
        aria-label="${name}"
        className="${name}-icon"
        {...props.iconProps}
      >
        {svgElement}
      </Icon>
    );
  }

  return svgElement;
};

export default ${componentName};

`;
    return tsxContent;
  } catch (error) {
    console.error(`Error parsing SVG content for ${name}:`, error);
    // Fallback to simpler approach if parsing fails
    const tsxContent = `import React from 'react';
import { Icon, IconComponentProps } from '@patternfly/react-core';

export type ${componentName}Props = {
  pfIconWrapper?: boolean;
  iconProps?: IconComponentProps;
  svgProps?: React.SVGProps<SVGSVGElement>;
};

export const ${componentName} = (props: ${componentName}Props) => {
  const svgElement = ${svgContent
    .replace('<svg', '<svg {...props.svgProps}')
    .replace(/xmlns="[^"]*"/g, '')};

  if (props.pfIconWrapper) {
    return (
      <Icon
        aria-label="${name}"
        className="${name}-icon"
        {...props.iconProps}
      >
        {svgElement}
      </Icon>
    );
  }

  return svgElement;
};

export default ${componentName};

`;
    return tsxContent;
  }
}

/**
 * Writes the generated TSX content to a file.
 * @param {Object} metadata - The metadata object for the SVG file.
 * @param {string} content - The content to write to the TSX file.
 */
function writeTSXFile(metadata, content) {
  const tsxFilePath = path.join(iconsBase, metadata.sourceFilePath);
  return promisiFiedWriteFile(tsxFilePath, content)
    .then(() => {
      console.log(`Generated TSX file: ${tsxFilePath}`);
    })
    .catch((err) => {
      console.error(`Error writing TSX file ${tsxFilePath}:`, err);
    });
}

/**
 * @type {Record<string, string>}
 */
const exposedModuleEntries = {};

/**
 * @type {Array<{componentName: string, originalName: string, filePath: string, tsxPath: string}>}
 */
const componentMappings = [];

/**
 * @param {Object} metadata - The metadata object for the SVG file.
 */
function addExposedModuleEntry(metadata) {
  const exposedModuleName = `./${metadata.name}`;
  // Use path.resolve for unambiguous path resolution from fec.config.js directory
  // Remove leading slash from sourceFilePath and add 'src' prefix
  const cleanPath = metadata.sourceFilePath.replace(/^\/+/, '');
  const exposedModulePath = `path.resolve(__dirname, 'src', '${cleanPath}')`;
  exposedModuleEntries[exposedModuleName] = exposedModulePath;
}

/**
 * @param {Object} metadata - The metadata object for the SVG file.
 * @param {string} componentName - The generated component name.
 */
function addComponentMapping(metadata, componentName) {
  componentMappings.push({
    componentName,
    originalName: metadata.originalName,
    filePath: metadata.filePath,
    tsxPath: metadata.sourceFilePath,
  });
}

/**
 * Write the module federation config and documentation
 */
async function writeExposedModulesConfig() {
  const configPath = path.join(projectBase, 'fec.config.js');
  const currentConfigContent = fs.readFileSync(configPath, 'utf8');

  // Sort the exposed module entries alphabetically for consistent output
  const sortedExposedModuleEntries = Object.keys(exposedModuleEntries)
    .sort()
    .reduce((sorted, key) => {
      sorted[key] = exposedModuleEntries[key];
      return sorted;
    }, {});

  // Create the new 'exposes' entries string with correct indentation
  const exposesEntries = Object.entries(sortedExposedModuleEntries)
    .map(([key, value]) => `      ${JSON.stringify(key)}: ${value}`)
    .join(',\n');

  // Construct the entire new moduleFederation block, preserving comments and structure
  const newModuleFederationBlock = `/* eslint-disable prettier/prettier */
  moduleFederation: {
    exposes: {
${exposesEntries}
    },
  },
  /* eslint-enable prettier/prettier */`;

  // Regex to find the entire moduleFederation block, including the comments
  const configBlockRegex =
    /\/\* eslint-disable prettier\/prettier \*\/[\s\S]*?moduleFederation:[\s\S]*?\/\* eslint-enable prettier\/prettier \*\//;

  let newConfigContent;

  if (configBlockRegex.test(currentConfigContent)) {
    // If the block is found, replace it
    newConfigContent = currentConfigContent.replace(
      configBlockRegex,
      newModuleFederationBlock,
    );
  } else {
    // Fallback for when the block isn't found
    console.error(
      '❌ Could not find the target moduleFederation block in fec.config.js.',
    );
    console.error(
      'Please ensure the file contains the /* eslint-disable prettier/prettier */ comments around the moduleFederation object.',
    );
    throw new Error('Failed to update fec.config.js due to unexpected format.');
  }

  // Write the updated config
  await promisiFiedWriteFile(configPath, newConfigContent);
  console.log('✅ Updated fec.config.js with new module federation entries.');

  // Sort component mappings alphabetically for consistent documentation
  const sortedComponentMappings = componentMappings.sort((a, b) =>
    a.componentName.localeCompare(b.componentName),
  );

  // Generate and write the markdown documentation
  const markdownContent = generateMarkdownDocumentation(sortedComponentMappings);
  await promisiFiedWriteFile(
    path.join(projectBase, 'COMPONENT_MAPPINGS.md'),
    markdownContent,
  );

  console.log(
    `Generated documentation: ${path.join(
      projectBase,
      'COMPONENT_MAPPINGS.md',
    )}`,
  );
}

/**
 * Generates React components for the provided SVG files.
 * @param {string[]} svgFiles - An array of paths to SVG files.
 * @returns {Promise<void>} A promise that resolves when all TSX files are generated.
 */
async function processReactIcons(svgFiles) {
  const promises = [];
  for (const file of svgFiles) {
    const metadata = generateSvgMetadata(file, iconsBase);
    const tsxContent = generateTSXFileContent(metadata);
    promises.push(writeTSXFile(metadata, tsxContent));
    addExposedModuleEntry(metadata);
  }
  await Promise.all(promises);
  await writeExposedModulesConfig();
}

/**
 * Main execution function
 */
async function run() {
  console.log('Starting icon generation process...');

  // First, cleanup any existing generated TSX files
  console.log('Cleaning up existing generated files...');
  await cleanupGeneratedIcons(iconsBase);

  // Define the specific directories to search for icons.
  // More directories can be added to this array in the future.
  const iconFolders = ['technology-icons', 'partners'];
  let svgFiles = [];

  for (const folder of iconFolders) {
    const searchDirectory = path.join(iconsBase, folder);
    const filesInFolder = await findAllSvgFiles(searchDirectory);
    console.log(`Found ${filesInFolder.length} SVG files in ${searchDirectory}`);
    svgFiles = svgFiles.concat(filesInFolder);
  }

  console.log(`Found a total of ${svgFiles.length} SVG files to process.`);
  await processReactIcons(svgFiles);

  console.log('Icon generation complete!');
}

// Execute the script
(async () => {
  await run();
})().catch(console.error);
