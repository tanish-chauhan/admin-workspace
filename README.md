# Admin Workspace

Angular 18 workspace for the `@tanish-chauhan/admin-kit` library.

## What this repo contains

- Library source: `projects/admin-kit`
- Build output: `dist/admin-kit`
- Root package scripts for build, test, lint, versioning, and publish

## Prerequisites

- Node.js LTS (compatible with Angular 18)
- npm

## Getting started

```bash
npm ci
npm run build:admin-kit
npm test
npm run lint
```

## NPM scripts

- `npm run build:admin-kit`: Build the library into `dist/admin-kit`
- `npm test`: Run unit tests
- `npm run lint`: Run ESLint
- `npm run format -- .`: Format files with Prettier
- `npm run commit`: Create a conventional commit message with Commitizen
- `npm run pre-release:patch`: Bump patch version and push tags
- `npm run pre-release:minor`: Bump minor version and push tags
- `npm run pre-release:major`: Bump major version and push tags
- `npm run publish`: Build library and publish `dist/admin-kit` to npm

## Dependency update workflow (npm)

1. Check outdated packages:
   ```bash
   npm outdated
   ```
2. Update allowed versions from `package.json` ranges:
   ```bash
   npm update
   ```
3. Optional security fixes:
   ```bash
   npm audit fix
   ```
4. Validate after update:
   ```bash
   npm run build:admin-kit
   npm test
   npm run lint
   ```

For major-version upgrades, update `package.json` ranges explicitly, run `npm install`, and retest.

## Publishing

See `RELEASE.md` for the release checklist and publish flow.

## Contributing

See `CONTRIBUTING.md` for local workflow, commit rules, and quality checks.
