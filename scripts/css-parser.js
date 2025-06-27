/* eslint-disable @typescript-eslint/no-require-imports */
const { cssPropertyToCamelCase } = require('./utils');

/**
 * Converts a CSS style string to a React style object
 * @param {string} styleString - CSS style string like "color: red; font-size: 14px;"
 * @returns {Object|null} React style object or null if parsing fails
 */
function parseStyleString(styleString) {
  if (!styleString || typeof styleString !== 'string') {
    return null;
  }

  const styleObj = {};
  const declarations = styleString.split(';').filter((decl) => decl.trim());

  for (const declaration of declarations) {
    const colonIndex = declaration.indexOf(':');
    if (colonIndex === -1) continue;

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      const camelProperty = cssPropertyToCamelCase(property);
      styleObj[camelProperty] = value;
    }
  }

  return Object.keys(styleObj).length > 0 ? styleObj : null;
}

/**
 * Parses CSS rules and extracts class-to-style mappings
 * @param {string} cssContent - CSS content
 * @param {Map} cssClassesToInline - Map to store class-to-style mappings
 */
function parseCssRules(cssContent, cssClassesToInline) {
  // Handle minified CSS where multiple classes share the same rule
  // Example: .cls-1{fill:#dedede;}.cls-2{fill:#ffb2b4;}.cls-11,.cls-14{fill:none;}

  // Split by } to get individual rules
  const rules = cssContent.split('}').filter((rule) => rule.trim());

  rules.forEach((rule) => {
    const ruleParts = rule.split('{');
    if (ruleParts.length === 2) {
      const selectors = ruleParts[0].trim();
      const styles = ruleParts[1].trim();

      // Extract class names (remove dots and split by commas)
      const classNames = selectors
        .split(',')
        .map((sel) => sel.trim().replace(/^\./, ''))
        .filter(
          (className) =>
            className && !className.includes(' ') && !className.includes(':'),
        );

      // Parse styles to extract fill, stroke, and other properties
      const styleProps = {};
      const declarations = styles.split(';').filter((decl) => decl.trim());

      declarations.forEach((declaration) => {
        const colonIndex = declaration.indexOf(':');
        if (colonIndex !== -1) {
          const property = declaration.slice(0, colonIndex).trim();
          const value = declaration.slice(colonIndex + 1).trim();

          // Convert CSS properties to React-compatible names
          if (property === 'fill') {
            styleProps.fill = value;
          } else if (property === 'stroke') {
            styleProps.stroke = value;
          } else if (property === 'stroke-width') {
            styleProps.strokeWidth = value;
          } else if (property === 'stroke-linecap') {
            styleProps.strokeLinecap = value;
          } else if (property === 'stroke-linejoin') {
            styleProps.strokeLinejoin = value;
          } else if (property === 'stroke-miterlimit') {
            styleProps.strokeMiterlimit = value;
          } else if (property === 'stroke-dasharray') {
            styleProps.strokeDasharray = value;
          } else if (property === 'stroke-dashoffset') {
            styleProps.strokeDashoffset = value;
          } else if (property === 'fill-opacity') {
            styleProps.fillOpacity = value;
          } else if (property === 'stroke-opacity') {
            styleProps.strokeOpacity = value;
          } else if (property === 'fill-rule') {
            styleProps.fillRule = value;
          }
        }
      });

      // Store the mapping for each class name (merge with existing properties)
      classNames.forEach((className) => {
        if (Object.keys(styleProps).length > 0) {
          const existingProps = cssClassesToInline.get(className) || {};
          const mergedProps = { ...existingProps, ...styleProps };
          cssClassesToInline.set(className, mergedProps);
        }
      });
    }
  });
}

module.exports = {
  parseStyleString,
  parseCssRules,
};
