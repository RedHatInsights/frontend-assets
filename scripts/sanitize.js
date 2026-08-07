/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * Security utilities for sanitizing SVG content before JSX and template
 * literal interpolation.
 *
 * These functions prevent injection of executable expressions into the
 * generated TSX source code.  Without them, a crafted SVG could embed
 * JSX expressions ({expr}) or template-literal expressions (${expr})
 * that compile into the production bundle and execute in end-user browsers.
 */

/**
 * Escapes JSX expression delimiters ({ and }) that appear outside of
 * HTML/XML quoted attribute values.
 *
 * Curly braces inside quoted attribute values (e.g. d="M{10}") are harmless
 * because JSX treats them as literal string content.  Braces in text nodes,
 * however, start JSX expressions and must be neutralised.
 *
 * Must be called BEFORE convertHtmlToJsxAttributes() so that the only
 * braces present are from SVG source text, not from our own JSX constructs
 * (style={...} etc.).
 *
 * @param {string} content - SVG inner content (no JSX constructs yet)
 * @returns {string} Content with text-level { and } escaped
 */
function sanitizeJsxDelimiters(content) {
  return content.replace(
    /"[^"]*"|'[^']*'|([{}])/g,
    (match, brace) => {
      if (brace === '{') return "{'\\u007B'}";
      if (brace === '}') return "{'\\u007D'}";
      return match; // inside a quoted attribute value — leave as-is
    },
  );
}

/**
 * Escapes content for safe embedding inside a JS template literal.
 *
 * Neutralises:
 *   - backslashes  (\ -> \\)    — prevent forming escape sequences
 *   - backticks    (` -> \`)     — prevent closing the template literal
 *   - expressions  (${ -> \${)   — prevent template-literal interpolation
 *
 * @param {string} str - Content to escape (e.g. CSS text)
 * @returns {string} Escaped content safe for `...` interpolation
 */
function sanitizeForTemplateLiteral(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

module.exports = {
  sanitizeJsxDelimiters,
  sanitizeForTemplateLiteral,
};
