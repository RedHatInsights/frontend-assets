const { defineConfig } = require('eslint/config');
const fecPlugin = require('@redhat-cloud-services/eslint-config-redhat-cloud-services');
const tsParser = require('@typescript-eslint/parser');
const tseslint = require('typescript-eslint');

module.exports = defineConfig(
  fecPlugin,
  {
    ignores: ['node_modules/*', 'dist/*', 'src/**/*.tsx'],
  },
  tseslint.configs.recommended,
  {
    files: ['*.js'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
