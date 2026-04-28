# Asset Contribution Guidelines

## Adding a New SVG Icon

### 1. Choose the Correct Directory

Place your SVG in the appropriate category under `src/`:

| Directory | Use For |
|-----------|---------|
| `src/technology-icons/` | Red Hat product and technology icons |
| `src/partners-icons/` | External partner and third-party logos |
| `src/patternfly-icons/` | PatternFly icon library additions |
| `src/console-logos/` | Red Hat Hybrid Cloud Console brand logos |
| `src/red-hat-logos/` | Red Hat corporate brand logos |
| `src/background-images/` | Background illustrations and decorative images |

### 2. File Naming

- Use **kebab-case**: `my-new-icon.svg`
- Avoid special characters, spaces, and underscores
- Use descriptive names: `ansible-automation-hub.svg` not `aah.svg`
- The filename becomes the component name: `my-new-icon.svg` becomes `MyNewIconIcon`

### 3. SVG Requirements

- Must be valid XML
- Prefer clean SVGs without editor metadata (Inkscape, Illustrator attributes are stripped automatically)
- Include `viewBox` attribute on the root `<svg>` element
- Avoid embedded fonts (use paths instead)
- For icons requiring a dark background, add: `<desc>background:dark</desc>` inside the `<svg>` element

### 4. Regenerate Components

```bash
npm run generate-modules
```

This will:
- Delete all existing generated `.tsx` files
- Create new `.tsx` components from all SVGs
- Update `fec.config.js` with module federation entries
- Update `COMPONENT_MAPPINGS.md` with documentation
- Update `src/backgroundMetadata.js` with background treatment data

### 5. Verify and Commit

```bash
# Check everything is in sync
npm run validate-config

# Review changes
git diff

# Stage all affected files
git add src/ fec.config.js COMPONENT_MAPPINGS.md

# Commit (pre-commit hooks will re-validate)
git commit -m "feat(icons): add my-new-icon partner logo"
```

## Modifying an Existing SVG

1. Replace the `.svg` file in its current directory
2. Run `npm run generate-modules`
3. Verify the generated `.tsx` file looks correct
4. Commit both the SVG and the regenerated `.tsx` file

## Removing an SVG

1. Delete the `.svg` file
2. Run `npm run generate-modules` (the cleanup step removes orphaned `.tsx` files)
3. Commit the removal

## What Gets Committed

All of these files are checked into git:

| File Type | Auto-Generated? | Committed? |
|-----------|----------------|------------|
| `src/**/*.svg` | No (source) | Yes |
| `src/**/*.tsx` | Yes | Yes |
| `fec.config.js` | Partially (exposes section) | Yes |
| `COMPONENT_MAPPINGS.md` | Yes | Yes |
| `src/backgroundMetadata.js` | Yes | Yes |

**Important**: Generated `.tsx` files must be committed. They are the webpack build input. The generation step runs during development, not during the container build.

## SVG Parsing Details

The code generation pipeline handles several SVG complexities:

- **Namespace attributes** (`xmlns:xlink`, `inkscape:*`, `sodipodi:*`): Stripped automatically
- **Kebab-case attributes**: Converted to camelCase for React (`stroke-width` becomes `strokeWidth`)
- **Inline styles**: Parsed and converted to React style objects
- **Embedded `<style>` tags**: CSS rules are extracted and converted to inline attributes where possible
- **`<desc>` tags**: Used for background metadata, then stripped from component output
- **`class` attributes**: Converted to `className`
- **Fill detection**: If no fill colors are found in the SVG, `fill="currentColor"` is added automatically

### Unsupported SVG Features

- CSS animations in embedded `<style>` tags
- CSS pseudo-selectors (`:hover`, `:focus`)
- External stylesheet references
- Embedded fonts (will render but may not display correctly)
- SVG `<use>` elements referencing external files
