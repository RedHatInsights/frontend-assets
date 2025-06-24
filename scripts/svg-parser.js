/* eslint-disable @typescript-eslint/no-require-imports */
const { dashToCamelCase } = require('./utils');
const { parseStyleString, parseCssRules } = require('./css-parser');

/**
 * Parses SVG content and extracts attributes from the root SVG element
 * @param {string} svgContent - Raw SVG content
 * @returns {Object} Object containing SVG attributes and inner content
 */
function parseSvgContent(svgContent) {
  // Match the opening SVG tag with its attributes
  const svgTagMatch = svgContent.match(/<svg([^>]*)>/i);
  if (!svgTagMatch) {
    throw new Error('Invalid SVG: No opening <svg> tag found');
  }

  // Extract attributes from the SVG tag
  const attributesString = svgTagMatch[1];
  const attributes = {};

  // Parse attributes
  const attributeRegex = /(\w+(?:-\w+)*)=["']([^"']*)["']/g;
  let match;
  while ((match = attributeRegex.exec(attributesString)) !== null) {
    const [, name, value] = match;

    // Skip namespaced attributes that React doesn't support
    if (name.includes(':')) {
      continue;
    }

    // Skip Adobe Illustrator specific attributes
    if (['i', 'graph'].includes(name)) {
      continue;
    }

    // Skip Inkscape export attributes (these come from inkscape:export-* after namespace removal)
    if (name.startsWith('export-')) {
      continue;
    }

    // Skip other invalid attributes
    if (
      [
        'docname',
        'dc',
        'rdf',
        'cc',
        'svg',
        'inkscape',
        'sodipodi',
        'wiid',
        'class',
        'exportXdpi',
        'exportYdpi',
        'exportFilename',
        'dataName',
        'data-name',
        'version',
        'output_extension',
        'enable-background',
      ].includes(name)
    ) {
      continue;
    }

    // Handle special attribute conversions
    if (name === 'xlink') {
      // Convert xlink to xlinkHref if it's a href reference
      continue; // Skip for now as it needs special handling
    }

    if (name === 'data-name') {
      attributes.dataName = value;
      continue;
    }

    if (name === 'aria-hidden') {
      attributes['aria-hidden'] = value;
      continue;
    }

    if (name === 'ariaHidden') {
      attributes['aria-hidden'] = value;
      continue;
    }

    if (name === 'xml:space') {
      attributes.xmlSpace = value;
      continue;
    }

    if (name === 'space') {
      // This is likely xml:space that got parsed without the namespace
      attributes.xmlSpace = value;
      continue;
    }

    // Handle style attribute specially
    if (name === 'style') {
      const styleObj = parseStyleString(value);
      if (styleObj) {
        // Filter out invalid CSS properties
        const validStyle = {};
        Object.keys(styleObj).forEach((prop) => {
          if (
            !['enableBackground', 'overflow', 'imageRendering'].includes(prop)
          ) {
            validStyle[prop] = styleObj[prop];
          }
        });

        if (Object.keys(validStyle).length > 0) {
          attributes.style = JSON.stringify(validStyle);
        }
      }
      continue;
    }

    // Convert kebab-case to camelCase for React props
    const reactPropName =
      name === 'xmlns'
        ? 'xmlns'
        : name.includes('-')
          ? dashToCamelCase(name)
          : name;
    attributes[reactPropName] = value;
  }

  // Extract the inner content (everything between <svg> and </svg>)
  const innerContentMatch = svgContent.match(/<svg[^>]*>(.*)<\/svg>/is);
  let innerContent = innerContentMatch ? innerContentMatch[1].trim() : '';

  // Clean up the inner content
  innerContent = cleanSvgInnerContent(innerContent);

  return { attributes, innerContent };
}

/**
 * Cleans up SVG inner content by removing invalid elements and converting attributes
 * @param {string} innerContent - SVG inner content
 * @returns {string} Cleaned inner content
 */
function cleanSvgInnerContent(innerContent) {
  // Remove HTML comments which are not valid in JSX
  innerContent = innerContent.replace(/<!--[\s\S]*?-->/g, '');

  // Remove CDATA sections which are not valid in JSX
  innerContent = innerContent.replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, '');

  // Remove common SVG metadata elements that don't render
  innerContent = innerContent.replace(/<title[^>]*>.*?<\/title>/gis, '');
  innerContent = innerContent.replace(/<desc[^>]*>.*?<\/desc>/gis, '');
  innerContent = innerContent.replace(/<metadata[^>]*>.*?<\/metadata>/gis, '');
  innerContent = innerContent.replace(/<switch[^>]*>.*?<\/switch>/gis, '');
  innerContent = innerContent.replace(
    /<foreignObject[^>]*>.*?<\/foreignObject>/gis,
    '',
  );

  // Remove namespaced elements that React doesn't support
  innerContent = innerContent.replace(
    /<\/?(?:sodipodi|inkscape|rdf|cc|dc|i):[^>]*>/gi,
    '',
  );

  // Handle inline style tags - convert them to use dangerouslySetInnerHTML
  innerContent = innerContent.replace(
    /<style\s+type=["']text\/css["']>\s*([\s\S]*?)\s*<\/style>/gi,
    (match, cssContent) => {
      // Clean up the CSS content and escape it properly
      const cleanCss = cssContent.trim();
      return `<style dangerouslySetInnerHTML={{__html: \`${cleanCss}\`}} />`;
    },
  );

  // Also handle style tags without type attribute
  innerContent = innerContent.replace(
    /<style>\s*([\s\S]*?)\s*<\/style>/gi,
    (match, cssContent) => {
      const cleanCss = cssContent.trim();
      return `<style dangerouslySetInnerHTML={{__html: \`${cleanCss}\`}} />`;
    },
  );

  // Extract CSS fills and convert to inline attributes for better compatibility
  const cssClassesToInline = new Map();

  // Also check for style tags in the original content (not just dangerouslySetInnerHTML)
  innerContent = innerContent.replace(
    /<style[^>]*>\s*([\s\S]*?)\s*<\/style>/gi,
    (match, cssContent) => {
      // Parse CSS rules to extract class definitions
      parseCssRules(cssContent, cssClassesToInline);
      // Return empty string to remove the style tag since we're converting to inline
      return '';
    },
  );

  innerContent = innerContent.replace(
    /<style[^>]*dangerouslySetInnerHTML=\{\{__html: `([^`]*)`\}\}[^>]*>/g,
    (match, cssContent) => {
      // Parse CSS rules to extract class definitions
      parseCssRules(cssContent, cssClassesToInline);
      // Return empty string to remove the style tag since we're converting to inline
      return '';
    },
  );

  // Replace className references with inline style attributes
  cssClassesToInline.forEach((styleProps, className) => {
    // Create inline attributes from the style properties
    const inlineAttrs = [];
    Object.entries(styleProps).forEach(([prop, value]) => {
      inlineAttrs.push(`${prop}="${value}"`);
    });

    if (inlineAttrs.length > 0) {
      const inlineAttrString = inlineAttrs.join(' ');

      // Replace both class and className attributes
      const classRegex = new RegExp(`class="${className}"`, 'g');
      const classNameRegex = new RegExp(`className="${className}"`, 'g');
      innerContent = innerContent.replace(classRegex, inlineAttrString);
      innerContent = innerContent.replace(classNameRegex, inlineAttrString);
    }
  });

  // Convert HTML attributes to JSX attributes
  innerContent = convertHtmlToJsxAttributes(innerContent);

  return innerContent;
}

/**
 * Converts HTML attributes to JSX-compatible attributes
 * @param {string} content - HTML/SVG content
 * @returns {string} Content with JSX-compatible attributes
 */
function convertHtmlToJsxAttributes(content) {
  // Convert HTML 'class' attributes to JSX 'className'
  content = content.replace(/\sclass=/g, ' className=');

  // Remove invalid attributes from elements
  content = content.replace(
    /\s(?:inkscape|sodipodi|rdf|cc|dc|i):[\w-]+="[^"]*"/gi,
    '',
  );

  // Remove other invalid attributes
  content = content.replace(
    /\s(?:wiid|docname|exportXdpi|exportYdpi|exportFilename|dataName|data-name|version|output_extension|enable-background)="[^"]*"/gi,
    '',
  );

  // Fix xml:space to xmlSpace
  content = content.replace(/xml:space=/gi, 'xmlSpace=');

  // Fix xlink:href to xlinkHref
  content = content.replace(/xlink:href=/gi, 'xlinkHref=');

  // Fix aria-hidden to proper format (keep as aria-hidden)
  content = content.replace(/ariaHidden=/gi, 'aria-hidden=');

  // Convert common kebab-case SVG attributes to camelCase for React
  content = content.replace(/\sstop-color=/gi, ' stopColor=');
  content = content.replace(/\sstroke-width=/gi, ' strokeWidth=');
  content = content.replace(/\sfill-rule=/gi, ' fillRule=');
  content = content.replace(/\sstroke-linecap=/gi, ' strokeLinecap=');
  content = content.replace(/\sstroke-linejoin=/gi, ' strokeLinejoin=');
  content = content.replace(/\sstroke-miterlimit=/gi, ' strokeMiterlimit=');
  content = content.replace(/\sstroke-dasharray=/gi, ' strokeDasharray=');
  content = content.replace(/\sstroke-dashoffset=/gi, ' strokeDashoffset=');
  content = content.replace(/\sfill-opacity=/gi, ' fillOpacity=');
  content = content.replace(/\sstroke-opacity=/gi, ' strokeOpacity=');

  // Convert inline style strings to style objects or remove problematic ones
  content = content.replace(/style="([^"]*)"/gi, (match, styleString) => {
    // Try to parse and convert the style
    const styleObj = parseStyleString(styleString);
    if (styleObj && Object.keys(styleObj).length > 0) {
      // Filter out invalid CSS properties
      const validStyle = {};
      Object.keys(styleObj).forEach((prop) => {
        if (
          !['enableBackground', 'overflow', 'imageRendering'].includes(prop)
        ) {
          validStyle[prop] = styleObj[prop];
        }
      });

      if (Object.keys(validStyle).length > 0) {
        return `style={${JSON.stringify(validStyle)}}`;
      }
    }
    // Remove the style attribute if it can't be parsed or has no valid properties
    return '';
  });

  return content;
}

module.exports = {
  parseSvgContent,
  cleanSvgInnerContent,
  convertHtmlToJsxAttributes,
};
