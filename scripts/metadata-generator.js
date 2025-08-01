/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { upperCaseFirstLetter } = require('./utils');

/**
 * @typedef {Object} SvgMetadata
 * @property {string} name - The base name of the SVG file (without extension)
 * @property {string} filePath - The relative path to the SVG file from the icons base directory
 * @property {string} sourceFilePath - The relative path to the corresponding TSX file from the icons base directory
 */

/**
 * Generate metadata for an SVG file.
 * @param {string} file - The path to the SVG file.
 * @param {string} iconsBase - The base directory for icons.
 * @returns {SvgMetadata} The generated metadata object for the SVG file.
 */
function generateSvgMetadata(file, iconsBase) {
  const relativePath = file.replace(iconsBase, '');
  const dirPath = path.dirname(relativePath);
  const baseName = path.basename(file, '.svg');

  // Create a unique name by incorporating directory structure
  // Convert directory separators and dashes to meaningful parts
  const dirParts = dirPath
    .split(path.sep)
    .filter((part) => part && part !== '.')
    .map((part) => part.replace(/[-_]/g, ' '))
    .map((part) =>
      part
        .split(' ')
        .map((word) => upperCaseFirstLetter(word))
        .join(''),
    )
    .join('');

  // Clean the base name and ensure it's a valid identifier
  // Replace all non-alphanumeric characters with spaces, then camelCase
  const cleanBaseName = baseName
    .replace(/[^a-zA-Z0-9]/g, ' ') // Replace all non-alphanumeric with spaces
    .split(' ')
    .filter((word) => word.length > 0) // Remove empty parts
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : upperCaseFirstLetter(word),
    )
    .join('');

  // Use only the cleaned filename without directory prefix for component naming
  const uniqueName = upperCaseFirstLetter(cleanBaseName);

  const metadata = {
    name: uniqueName,
    originalName: baseName,
    file,
    filePath: relativePath,
    sourceFilePath: relativePath.replace(/\.svg$/, '.tsx'),
  };

  return metadata;
}

module.exports = {
  generateSvgMetadata,
};
