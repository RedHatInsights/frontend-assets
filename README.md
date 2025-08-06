# Frontend Assets

A comprehensive system for managing SVG assets as React components with module federation support for cloud.redhat.com applications.

## 🎯 Overview

This repository automatically converts SVG files into TypeScript React components and exposes them via webpack module federation. It provides a complete workflow for managing icons, logos, and other visual assets across Red Hat's cloud applications.

## 📚 Quick Start

### For Consumers

Looking to use an icon in your application? Check out our **[Component Mappings](./COMPONENT_MAPPINGS.md)** for:
- 📋 Complete list of available components
- 🖼️ Visual previews of all icons
- 💻 Usage examples with ScalprumComponent
- 📖 Props documentation

### For Contributors

Adding or modifying SVG assets:

```bash
# 1. Add your SVG file to the appropriate directory under src/
cp my-icon.svg src/icons/

# 2. Generate React components and update module federation config
npm run generate-modules

# 3. Commit your changes (pre-commit hooks will validate everything)
git add .
git commit -m "Add new icon"
```

## 🏗️ Architecture

### Directory Structure

```
src/
├── partners-icons/            # External images that are not internally given by Red Hat
├── technology-icons/         # Red Hat technology icons
```

### Generated Components

Each SVG file becomes a TypeScript React component with:
- **TypeScript Support**: Full type definitions
- **PatternFly Integration**: Optional PatternFly Icon wrapper
- **Flexible Props**: Separate props for SVG and Icon wrapper
- **Module Federation**: Automatic exposure via webpack

## 🚀 Development

### Prerequisites

- Node.js ≥16.0.0
- npm ≥7.0.0

### Installation

```bash
npm install
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run generate-modules` | Generate React components and update module federation config |
| `npm run validate-config` | Validate that module federation config is up-to-date |
| `npm run build` | Generate components and build the application |
| `npm run dev` | Start development server with hot reload |
| `npm run verify` | Validate config and build (used in CI) |
| `npm run lint` | Run ESLint on source files |

### Adding New Assets

1. **Add SVG File**: Place your SVG in the appropriate `src/` subdirectory
2. **Run Generation**: Execute `npm run generate-modules`
3. **Review Output**: Check the generated `.tsx` file and updated `fec.config.js`
4. **Test Locally**: Use `npm run dev` to test your changes
5. **Commit**: Git hooks will automatically validate your changes

### Component Usage

Components are consumed via module federation using ScalprumComponent:

```typescript
import { ScalprumComponent } from '@scalprum/react-core';

// Basic usage
<ScalprumComponent
  scope="frontend-assets"
  module="./IconsIconAutomation"
/>

// With PatternFly wrapper
<ScalprumComponent
  scope="frontend-assets"
  module="./IconsIconAutomation"
  pfIconWrapper={true}
  iconProps={{ size: "md" }}
/>

// With custom SVG props
<ScalprumComponent
  scope="frontend-assets"
  module="./IconsIconAutomation"
  svgProps={{ width: "32", height: "32", fill: "red" }}
/>
```

## 🔧 Configuration

### Module Federation

The system automatically maintains the module federation configuration in `fec.config.js`. Each SVG file is exposed as:

```javascript
moduleFederation: {
  exposes: {
    "./IconsIconAutomation": path.resolve(__dirname, 'src', 'icons/icon__automation.tsx'),
    // ... more entries
  }
}
```

### Component Props

All generated components support these props:

```typescript
type ComponentProps = {
  pfIconWrapper?: boolean;           // Use PatternFly Icon wrapper
  iconProps?: IconComponentProps;    // Props for PatternFly Icon
  svgProps?: React.SVGProps<SVGSVGElement>; // Props for SVG element
};
```

## 🛡️ Quality Assurance

### Pre-Commit Hooks

Husky pre-commit hooks automatically:
- ✅ Validate module federation configuration
- ✅ Run ESLint checks
- ❌ Prevent commits with out-of-sync configurations

### CI/CD Integration

The `npm run verify` command ensures:
- Configuration is up-to-date
- All components build successfully
- No linting errors

### Validation System

The validation script (`scripts/validate-config.js`) checks:
- All SVG files have corresponding module federation entries
- No orphaned entries exist
- Paths are correctly formatted with `path.resolve`

## 📁 Generated Files

The system generates several files automatically:

| File | Purpose |
|------|---------|
| `src/**/*.tsx` | React components for each SVG |
| `fec.config.js` | Updated module federation configuration |
| `COMPONENT_MAPPINGS.md` | Documentation with usage examples |

**⚠️ Important**: Never manually edit generated `.tsx` files or the module federation configuration in `fec.config.js`. These are automatically maintained by the generation script.

## 🔍 Troubleshooting

### Common Issues

**Module federation config out of sync:**
```bash
npm run generate-modules
git add fec.config.js
git commit -m "Update module federation config"
```

**Pre-commit hook failures:**
- Ensure you've run `npm run generate-modules` after adding/removing SVGs
- Check that all files are properly committed
- Run `npm run validate-config` to see specific issues

**Build failures:**
- Verify SVG files are valid XML
- Check for unsupported SVG features (see scripts documentation)
- Ensure file names follow naming conventions

### Getting Help

1. Check the [Component Mappings](./COMPONENT_MAPPINGS.md) for usage examples
2. Review the [Scripts Documentation](./scripts/README.md) for technical details
3. Run `npm run validate-config` for configuration issues
4. Check the generated `.tsx` files for component-specific problems

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Add** your SVG assets to the appropriate directory
4. **Run** `npm run generate-modules`
5. **Test** your changes with `npm run dev`
6. **Commit** your changes (hooks will validate)
7. **Submit** a pull request

### Naming Conventions

- Use kebab-case for SVG filenames: `my-icon.svg`
- Place files in appropriate directories based on usage
- Avoid special characters and spaces in filenames


## 🔗 Related Documentation

- [Component Mappings](./COMPONENT_MAPPINGS.md) - Complete component reference
- [Scripts Documentation](./scripts/README.md) - Technical implementation details
- [PatternFly Icons](https://www.patternfly.org/v4/design-guidelines/styles/icons) - Icon design guidelines
