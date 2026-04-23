# Architecture Guidelines

## System Overview

```text
Developer adds SVG
       |
       v
npm run generate-modules
       |
       v
+------+------+------+------+
|      |      |      |      |
v      v      v      v      v
cleanup  metadata  svg-parser  css-parser  utils
(delete  (file->   (XML->JSX   (CSS->     (naming
 old     name      attributes)  inline)    helpers)
 .tsx)   mapping)
       |
       v
Write outputs:
  - src/**/*.tsx (React components)
  - fec.config.js (module federation exposes)
  - COMPONENT_MAPPINGS.md (docs)
  - src/backgroundMetadata.js (metadata)
       |
       v
npm run build (fec build)
       |
       v
dist/ (webpack bundle with federated modules)
       |
       v
Container image (Tekton/Konflux)
       |
       v
OpenShift pod at /apps/frontend-assets
       |
       v
HCC apps load icons via ScalprumComponent
```

## Module Federation

### Configuration

The `fec.config.js` file configures webpack module federation via `@redhat-cloud-services/frontend-components-config`:

- **Scope**: `frontend-assets`
- **Exposes**: One entry per SVG component (auto-generated)
- **Manifest**: Served at `/frontend-assets/fed-mods.json`
- **Static assets**: SVG/PNG/JPG files are copied to `dist/` via `CopyPlugin`

### Module Naming Convention

```text
SVG filename: src/technology-icons/ansible.svg
Component name: AnsibleIcon
Module name: ./AnsibleIcon
Module path: path.resolve(__dirname, 'src', 'technology-icons/ansible.tsx')
```

The module name is derived from the SVG filename only (not the directory). The `Icon` suffix is always appended.

### Consumer Pattern

HCC micro-frontend applications consume icons at runtime via Scalprum:

```typescript
import { ScalprumComponent } from '@scalprum/react-core';

// The scope and module are resolved at runtime via the manifest
<ScalprumComponent
  scope="frontend-assets"
  module="./AnsibleIcon"
  pfIconWrapper={true}
  iconProps={{ size: "md" }}
/>
```

## Deployment

### Frontend CRD

The `config/frontend.yml` defines the Frontend Custom Resource for OpenShift:

- **Image**: `quay.io/redhat-services-prod/rh-platform-experien-tenant/frontend-assets`
- **Path**: `/apps/frontend-assets`
- **Manifest**: `/frontend-assets/fed-mods.json`
- **FEO**: `feoConfigEnabled: true` (Frontend Experience Orchestrator)

### CI/CD Pipeline

**Tekton/Konflux** (primary):
- Pull request pipeline: `npm install` + `npm run lint` + `npm run validate-config`
- Push pipeline: Container image build and deployment
- Dockerfile: `./build-tools/Dockerfile`
- Namespace: `rh-platform-experien-tenant`

**Travis CI** (legacy):
- `.travis.yml` with custom release script
- Being phased out in favor of Konflux

### Container Build

The container build does NOT run `npm run generate-modules`. The generated `.tsx` files must already be committed. The build runs:

1. `npm install`
2. `fec build` (webpack production build)
3. Output to `dist/`

## Code Generation Scripts

### generate-modules.js (root)

Main orchestrator. Runs the full pipeline:
1. Calls `cleanupGeneratedIcons()` to remove stale `.tsx` files
2. Scans all 6 icon directories for `.svg` files
3. For each SVG: generates metadata, parses content, writes `.tsx` file
4. Updates `fec.config.js` with sorted module federation entries
5. Writes `COMPONENT_MAPPINGS.md` documentation
6. Writes `backgroundMetadata.js`

### scripts/svg-parser.js

Handles the SVG XML to JSX transformation:
- Extracts root `<svg>` attributes
- Filters out unsupported namespace attributes
- Converts kebab-case to camelCase
- Handles `style` attribute conversion to React objects
- Cleans inner content: removes comments, CDATA, metadata elements
- Converts embedded `<style>` tags to inline attributes via `css-parser.js`

### scripts/validate-config.js

Validation used by pre-commit hooks and CI:
- Generates expected module entries from current SVG files
- Parses current `fec.config.js` module federation config
- Compares for missing, extra, or path-mismatched entries
- Exits with code 1 on mismatch (blocks commit/CI)

### scripts/metadata-generator.js

Maps file paths to component metadata:
- Input: absolute SVG file path
- Output: `{ name, originalName, filePath, sourceFilePath }`
- Naming: filename kebab-case to PascalCase (directory path not included in name)

## Adding a New Icon Category

To add a new directory of icons (e.g., `src/custom-icons/`):

1. Create the directory under `src/`
2. Add the directory name to the `iconFolders` array in:
   - `generate-modules.js` (line with `const iconFolders = [...]`)
   - `scripts/validate-config.js` (matching `iconFolders` array)
3. Add SVG files to the new directory
4. Run `npm run generate-modules`
5. Verify with `npm run validate-config`

## Extending the SVG Parser

When SVGs use features not currently handled:

1. Check `scripts/svg-parser.js` for the attribute/element handling
2. Add conversion rules to `convertHtmlToJsxAttributes()` for new kebab-case attributes
3. Update `cleanSvgInnerContent()` for new element types to strip or convert
4. Add CSS property handling in `scripts/css-parser.js` if dealing with embedded styles
5. Test with `npm run generate-modules` and inspect the generated `.tsx` output
