# Frontend Assets

## Project Overview

Static asset repository that converts SVG files into TypeScript React components and exposes them via webpack module federation. Consumed by all HCC (Hybrid Cloud Console) applications through `ScalprumComponent`.

**Not a typical frontend app** — this repo has no routes, no pages, no API calls. It is a library of 227+ federated React icon components generated from SVG source files.

## Tech Stack

- **Runtime**: React 18, TypeScript, PatternFly 6
- **Build**: webpack via `@redhat-cloud-services/frontend-components-config` (fec CLI)
- **Module Federation**: Scope `frontend-assets`, exposes each icon as a separate module
- **Code Generation**: Node.js scripts that convert SVGs to TSX components
- **CI/CD**: Tekton/Konflux pipelines, legacy Travis CI
- **Deployment**: Frontend CRD on OpenShift, served at `/apps/frontend-assets`

## Project Structure

```text
src/
  technology-icons/     # Red Hat technology icons (~87 SVGs)
  partners-icons/       # External partner logos (~116 SVGs)
  patternfly-icons/     # PatternFly icon library (2 SVGs)
  console-logos/        # Red Hat console logos (~16 SVGs)
  red-hat-logos/        # Red Hat brand logos (3 SVGs)
  background-images/    # Background images (~3 SVGs)
  demo.tsx              # Demo app entry point (manually maintained)
  backgroundMetadata.js # Auto-generated background metadata

scripts/
  validate-config.js    # Validates fec.config.js matches SVG files
  svg-parser.js         # Parses SVG content, extracts attributes
  css-parser.js         # Converts CSS to React inline styles
  metadata-generator.js # Generates SvgMetadata from file paths
  documentation-generator.js  # Generates COMPONENT_MAPPINGS.md
  cleanup.js            # Removes generated TSX files before regeneration
  utils.js              # dashToCamelCase, upperCaseFirstLetter helpers

config/
  frontend.yml          # Frontend CRD template for OpenShift deployment

Root files:
  generate-modules.js   # Main code generation entry point
  fec.config.js         # Module federation config (auto-generated exposes section)
  webpack.demo.config.js # Demo app webpack config
  COMPONENT_MAPPINGS.md # Auto-generated component reference
  eslint.config.js      # ESLint config (ignores generated .tsx files)
  .husky/pre-commit     # Runs validate-config + lint
```

## Code Generation Pipeline

The core workflow that converts SVGs to React components:

```text
SVG files (src/*/*.svg)
  -> generate-modules.js (orchestrator)
    -> cleanup.js (delete existing .tsx files)
    -> metadata-generator.js (file path -> component name mapping)
    -> svg-parser.js + css-parser.js (parse SVG XML -> JSX attributes)
    -> Write .tsx files (one per SVG)
    -> Update fec.config.js (module federation exposes)
    -> Write COMPONENT_MAPPINGS.md (documentation)
    -> Write backgroundMetadata.js (dark/light metadata)
```

### Generated Component Structure

Each SVG becomes a React component with this signature:

```typescript
type ComponentProps = {
  pfIconWrapper?: boolean;           // Wrap in PatternFly <Icon>
  iconProps?: IconComponentProps;     // Props for PatternFly Icon wrapper
  svgProps?: React.SVGProps<SVGSVGElement>; // Props for SVG element
};
```

Components support optional PatternFly `<Icon>` wrapping and custom SVG props.

### Background Metadata

SVGs can embed background treatment hints via `<desc>` tags:

```xml
<desc>background:dark</desc>
```

The generator extracts this and sets `ComponentName.backgroundMetadata = 'dark'` as a static property.

## How Icons Are Consumed

Downstream HCC apps use `ScalprumComponent` from `@scalprum/react-core`:

```typescript
<ScalprumComponent
  scope="frontend-assets"
  module="./AnsibleIcon"
  svgProps={{ width: "32", height: "32" }}
/>
```

Module names follow the pattern: `./{PascalCaseName}Icon` (e.g., `./AnsibleIcon`, `./AwsIcon`).

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run generate-modules` | Regenerate all TSX components + update fec.config.js |
| `npm run validate-config` | Check fec.config.js is in sync with SVG files |
| `npm run build` | Generate + full webpack build |
| `npm run dev` | Start demo app with hot reload (port 8003) |
| `npm run lint` | ESLint on source files (excludes generated .tsx) |
| `npm run verify` | validate-config + build (CI command) |

## Coding Conventions

1. **Never manually edit generated files**: `.tsx` component files, `fec.config.js` exposes section, `COMPONENT_MAPPINGS.md`, and `backgroundMetadata.js` are all auto-generated. Edit the SVG source or the generation scripts instead.
2. **SVG naming**: Use kebab-case filenames (`my-icon.svg`). The generator converts to PascalCase component names (`MyIconIcon`).
3. **Category placement**: Place SVGs in the correct subdirectory under `src/` based on type (technology vs partner vs console logo, etc.).
4. **Always run `npm run generate-modules`** after adding, removing, or modifying SVG files. Pre-commit hooks will catch out-of-sync configs.
5. **ESLint ignores generated TSX**: The eslint config has `ignores: ['src/**/*.tsx']`. Only scripts and config files are linted.
6. **Conventional commits**: Use `type(scope): description` format.

## Common Pitfalls

1. **Forgetting to regenerate**: Adding an SVG without running `npm run generate-modules` will cause pre-commit hook failure and CI failure.
2. **Invalid SVG XML**: SVGs with malformed XML, unsupported namespaces, or unusual attributes may fail parsing. Check `svg-parser.js` for supported attribute conversions.
3. **Duplicate component names**: Two SVGs with the same base filename in different directories will produce naming collisions. The component name comes from the filename only, not the directory.
4. **Generated .tsx in git**: The generated `.tsx` files ARE committed to git (unlike typical generated code). This is by design — they are the build input for webpack.
5. **No test suite**: This repo has no unit tests or E2E tests. Validation is done via `npm run validate-config` (config sync check) and `npm run lint`.
6. **CSS-in-SVG complexity**: SVGs with embedded `<style>` tags are converted to inline styles by `css-parser.js`. Complex CSS (animations, pseudo-selectors) may not convert correctly.

## Documentation Index

- [Component Mappings](./COMPONENT_MAPPINGS.md) — auto-generated list of all available components with usage examples
- [Scripts Documentation](./scripts/README.md) — technical details on code generation scripts
- [Asset Contribution Guidelines](./docs/asset-contribution-guidelines.md) — how to add, modify, or remove SVG assets
- [Architecture Guidelines](./docs/architecture-guidelines.md) — system design, module federation, deployment
