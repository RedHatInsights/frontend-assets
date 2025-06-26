/**
 * Converts a dash-separated string to camelCase.
 * @param {string} str - The dash-separated string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function dashToCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Converts the first letter of a string to uppercase.
 * @param {string} str - The input string.
 * @returns {string} The string with the first letter converted to uppercase.
 */
function upperCaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts CSS property names from kebab-case to camelCase
 * @param {string} property - CSS property name
 * @returns {string} camelCase property name
 */
function cssPropertyToCamelCase(property) {
  return property.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

module.exports = {
  dashToCamelCase,
  upperCaseFirstLetter,
  cssPropertyToCamelCase,
};
