@AGENTS.md

## Commands

```bash
# Install dependencies
npm install

# Regenerate all components from SVG sources
npm run generate-modules

# Validate module federation config is in sync
npm run validate-config

# Build (generate + webpack)
npm run build

# Start demo server (port 8003)
npm run dev

# Lint scripts (not generated .tsx files)
npm run lint

# Full CI validation (validate-config + build)
npm run verify
```

## Git Conventions

- **Commit format**: `type(scope): description`
- **Scopes**: `icons`, `scripts`, `config`, `ci`, `docs`
- **Types**: `feat`, `fix`, `chore`, `docs`, `refactor`
- **Examples**:
  - `feat(icons): add new partner logo for Acme Corp`
  - `fix(scripts): handle SVGs with embedded style tags`
  - `chore(config): update module federation entries`

## Key Files

- `generate-modules.js` — main code generation orchestrator
- `fec.config.js` — module federation config (auto-generated exposes)
- `scripts/svg-parser.js` — SVG XML to JSX conversion
- `scripts/validate-config.js` — config sync validation
- `config/frontend.yml` — Frontend CRD for OpenShift deployment
- `.husky/pre-commit` — runs validate-config + lint before each commit
