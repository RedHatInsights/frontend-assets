/* eslint-disable @typescript-eslint/no-require-imports */

/**
 * CI validation script that scans all SVG source files for characters that
 * would be interpreted as JSX expressions or template-literal expressions
 * in the generated TSX components.
 *
 * While the sanitization in svg-parser.js neutralises these at generation
 * time, this script provides defence-in-depth by catching dangerous SVGs
 * at commit/CI time before they enter the repository.
 *
 * Usage:  node scripts/validate-svg-safety.js
 * Exit 0: all SVGs are clean
 * Exit 1: at least one SVG contains suspicious content
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const projectBase = path.resolve(__dirname, '..');
const iconsBase = path.resolve(projectBase, 'src');

const iconFolders = [
  'technology-icons',
  'partners-icons',
  'patternfly-icons',
  'console-logos',
  'red-hat-logos',
  'background-images',
];

/**
 * Patterns that should never appear in SVG text content.
 * Each entry has a regex and a human-readable description.
 */
const DANGEROUS_PATTERNS = [
  {
    // Curly braces in text content — interpreted as JSX expressions.
    // Curly braces have no valid use in SVG text content (CSS uses them
    // but <style> blocks are stripped before this check runs).
    pattern: /[{}]/,
    description:
      'curly brace in text content (would become a JSX expression)',
  },
  {
    // Template literal expression: ${...}
    pattern: /\$\{[^}]*\}/,
    description: 'template-literal expression (${...})',
  },
  {
    // Backtick characters (used to break out of template literals)
    pattern: /`/,
    description: 'backtick character',
  },
];

/**
 * Check a single SVG file for dangerous content outside of <style> tags
 * and attribute values.
 *
 * @param {string} filePath - Path to SVG file
 * @returns {string[]} Array of warning messages (empty = safe)
 */
function checkSvgFile(filePath) {
  const warnings = [];
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract inner content (between <svg> and </svg>)
  const innerMatch = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
  if (!innerMatch) return warnings;

  let inner = innerMatch[1];

  // Remove <style> blocks (CSS legitimately uses { })
  inner = inner.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  // Remove attribute values (braces inside quotes are harmless)
  inner = inner.replace(/"[^"]*"/g, '""');
  inner = inner.replace(/'[^']*'/g, "''");

  // Check remaining text content for dangerous patterns
  for (const { pattern, description } of DANGEROUS_PATTERNS) {
    if (pattern.test(inner)) {
      const relativePath = path.relative(projectBase, filePath);
      warnings.push(`${relativePath}: contains ${description}`);
    }
  }

  return warnings;
}

async function main() {
  console.log('Scanning SVG files for JSX/template-literal injection risks...');

  let allWarnings = [];

  for (const folder of iconFolders) {
    const searchDir = path.join(iconsBase, folder);
    const files = await glob('**/*.svg', { cwd: searchDir, absolute: true });

    for (const file of files) {
      const warnings = checkSvgFile(file);
      allWarnings = allWarnings.concat(warnings);
    }
  }

  if (allWarnings.length > 0) {
    console.error(
      `\n\u274C Found ${allWarnings.length} SVG file(s) with potentially dangerous content:\n`,
    );
    allWarnings.forEach((w) => console.error(`  - ${w}`));
    console.error(
      '\nThese files contain characters that could be interpreted as',
    );
    console.error(
      'executable expressions in the generated TSX components.',
    );
    console.error(
      'Please remove or escape the flagged content before committing.\n',
    );
    process.exit(1);
  }

  console.log(
    `\u2705 All SVG files are clean (${iconFolders.length} directories scanned).`,
  );
}

main().catch((err) => {
  console.error('SVG safety validation failed:', err);
  process.exit(1);
});
