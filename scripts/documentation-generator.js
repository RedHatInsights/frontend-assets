/**
 * Generates markdown documentation content mapping component names to source files.
 * @param {Array<{componentName: string, originalName: string, filePath: string, tsxPath: string}>} componentMappings - Array of component mappings
 * @returns {string} The markdown content as a string.
 */
function generateMarkdownDocumentation(componentMappings) {
  const sortedMappings = componentMappings.sort((a, b) =>
    a.componentName.localeCompare(b.componentName),
  );

  let markdownContent = `# Frontend Assets Icon Components

This file documents the generated React icon components and their usage with ScalprumComponent for dynamic loading.

## Usage

These components are designed to be used with ScalprumComponent for dynamic loading. They are not imported directly.

### Without PatternFly Wrapper (Preserves original SVG dimensions)
\`\`\`tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./ComponentName" 
  svgProps={{width: 50, height: 50}} 
/>
\`\`\`

### With PatternFly Wrapper (Uses PatternFly Icon styling)
\`\`\`tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./ComponentName" 
  pfIconWrapper={true} 
  iconProps={{size: "lg"}} 
/>
\`\`\`

### Combined Usage
\`\`\`tsx
<ScalprumComponent 
  scope="frontendAssets" 
  module="./ComponentName" 
  pfIconWrapper={true}
  iconProps={{size: "md"}}
  svgProps={{className: "custom-icon-class"}} 
/>
\`\`\`

## Props

All components accept the following props through ScalprumComponent:

- \`pfIconWrapper?: boolean\` - Whether to wrap the SVG in PatternFly's Icon component
- \`iconProps?: IconComponentProps\` - Props to pass to the PatternFly Icon wrapper (only used when pfIconWrapper is true)
- \`svgProps?: React.SVGProps<SVGSVGElement>\` - Props to pass directly to the SVG element

## Module Federation

These components are exposed through module federation with the scope \`frontendAssets\`. Each component can be loaded using its module name (e.g., \`./ComponentName\`).

## Component Mappings

| Preview | Component Name | Original SVG Name | Source SVG Path | Generated TSX Path |
|---|---|---|---|---|
`;

  sortedMappings.forEach((mapping) => {
    const { componentName, originalName, filePath, tsxPath } = mapping;
    // Create a relative path from the markdown file to the SVG file
    const svgPath = `src${filePath}`;
    const svgPreview = `<img src="${svgPath}" alt="${originalName}" width="24" height="24" />`;
    markdownContent += `| ${svgPreview} | \`${componentName}\` | \`${originalName}.svg\` | \`${filePath}\` | \`${tsxPath}\` |\n`;
  });

  markdownContent += `
## Generated Components

Total components generated: ${componentMappings.length}
`;

  return markdownContent;
}

module.exports = {
  generateMarkdownDocumentation,
};
