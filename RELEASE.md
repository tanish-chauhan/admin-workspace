# Release Guide

This repository publishes the Angular library package `@tanish-chauhan/admin-kit`.

## Preconditions

- npm account has publish access to the package
- You are on the correct branch
- Working tree is clean
- CI or local checks pass

Run validation:

```bash
npm run build:admin-kit
npm test
npm run lint
```

## Version bump

Choose one based on change type:

```bash
npm run pre-release:patch
npm run pre-release:minor
npm run pre-release:major
```

These commands:

- run `npm version <type>`
- create a git tag
- push commit and tags (`git push --follow-tags`)

## Publish

```bash
npm run publish
```

This command builds the library and runs `npm publish --access public` from `dist/admin-kit`.

## Verify published package

After publish:

1. Confirm package/version on npm registry
2. Validate install in a sample consumer project
3. Announce release notes to consumers

## Rollback strategy

If a bad version is published, use npm deprecations and ship a corrected version immediately. Avoid unpublish for widely consumed versions unless policy allows it.
