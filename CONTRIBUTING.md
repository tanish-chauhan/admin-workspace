# Contributing

## Setup

```bash
npm ci
```

## Development commands

- Build library: `npm run build:admin-kit`
- Test library: `npm test`
- Lint: `npm run lint`
- Format files: `npm run format -- .`

## Commit workflow

This repository uses:

- `husky` for git hooks
- `lint-staged` in `pre-commit`
- `commitlint` in `commit-msg`
- `commitizen` for guided conventional commits

Use:

```bash
npm run commit
```

Supported commit types include `feat`, `fix`, `docs`, `refactor`, `test`, and `chore`.

## Pull request checklist

Before opening a PR:

1. Run `npm run build:admin-kit`
2. Run `npm test`
3. Run `npm run lint`
4. Ensure docs are updated for behavior or workflow changes

## Dependency updates

When updating npm dependencies:

1. Run `npm outdated`
2. Run `npm update` (or targeted package updates)
3. Re-run build/test/lint
4. Include update impact notes in your PR

## Releasing

Release and publish instructions are documented in `RELEASE.md`.
