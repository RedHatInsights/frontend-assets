# Frontend Assets Scripts

This directory contains utility scripts for managing SVG assets and their conversion to React components with module federation support.

## Scripts Overview

### Core Scripts

- **`validate-config.js`** - Validates module federation configuration
- **`cleanup.js`** - Removes generated TSX files 
- **`utils.js`** - String manipulation utilities
- **`css-parser.js`** - CSS parsing and React style conversion
- **`svg-parser.js`** - SVG content parsing and cleaning
- **`metadata-generator.js`** - SVG metadata generation
- **`documentation-generator.js`** - Markdown documentation generation

## Configuration Validation

### Purpose

The `validate-config.js` script ensures that the module federation configuration in `fec.config.js` stays in sync with the available SVG files. This prevents deployment issues where components are referenced but not properly exposed.

### How It Works

1. **Scans SVG Files**: Finds all `.svg` files in the `src/` directory
2. **Generates Expected Config**: Creates the expected module federation entries based on current SVG files
3. **Compares Configurations**: Compares current `fec.config.js` with expected configuration
4. **Reports Differences**: Provides detailed error messages if configurations don't match

### Usage

```bash
# Run validation manually
npm run validate-config

# Run as part of build process (includes validation)
npm run verify
```

### Error Types

The validator detects three types of configuration issues:

1. **Missing Modules**: SVG files exist but aren't exposed in module federation
2. **Extra Modules**: Module federation references non-existent SVG files  
3. **Path Mismatches**: Module paths don't match expected file locations

### Example Error Output

```
❌ MODULE FEDERATION CONFIG VALIDATION FAILED

The module federation configuration in fec.config.js is out of sync with the current SVG files.

1. Missing 5 module(s) in current config:
   - ./IconsNewIcon
   - ./LogosNewLogo
   - ... and 3 more

🔧 HOW TO FIX:

1. Run the generation script to update the configuration:
   npm run generate-modules

2. Commit the updated fec.config.js file:
   git add fec.config.js
   git commit -m "Update module federation config"
```

## Integration with CI/CD

The validation is integrated into the build process:

- **`npm run verify`** - Runs validation before building
- **Exit codes**: Returns 0 for success, 1 for failure (CI-friendly)
- **Detailed logging**: Provides clear error messages for developers

## Best Practices

### For Developers

1. **Always run generation**: After adding/removing SVG files, run `npm run generate-modules`
2. **Commit config changes**: Always commit `fec.config.js` changes along with SVG changes
3. **Use verify command**: Run `npm run verify` before submitting PRs

### For CI/CD

```bash
# In your CI pipeline
npm run verify  # This includes validation + build
```

### Pre-commit Hooks

Consider adding validation to pre-commit hooks:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run validate-config"
    }
  }
}
```

## Troubleshooting

### Common Issues

**Q: Validation fails after adding new SVG files**
A: Run `npm run generate-modules` to update the module federation config

**Q: Validation fails after removing SVG files**  
A: Run `npm run generate-modules` to clean up old module federation entries

**Q: Path mismatch errors**
A: This usually indicates the generation script wasn't run after moving files

### Manual Recovery

If the configuration gets severely out of sync:

```bash
# Clean slate approach
npm run generate-modules  # Regenerates everything
git add fec.config.js COMPONENT_MAPPINGS.md src/
git commit -m "Regenerate module federation config"
```

## Architecture

### Validation Flow

```
SVG Files → Expected Config → Compare → Report
    ↓           ↓              ↓         ↓
  Scan src/   Generate     Current vs  Pass/Fail
              entries      Expected    + Details
```

### Module Structure

The scripts are modular for maintainability:

- **Separation of concerns**: Each script has a single responsibility
- **Reusable utilities**: Common functions are shared across scripts
- **Easy testing**: Modular structure enables unit testing
- **Clear dependencies**: Import structure shows relationships

## API Reference

### validate-config.js

```javascript
const { validateConfig } = require('./scripts/validate-config');

// Returns Promise<boolean>
const isValid = await validateConfig();
```

### Key Functions

- `validateConfig()` - Main validation function
- `generateExpectedModuleEntries()` - Creates expected config
- `getCurrentModuleEntries()` - Parses current config  
- `compareModuleEntries()` - Compares configurations 