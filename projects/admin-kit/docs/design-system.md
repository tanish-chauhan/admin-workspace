# Admin Kit Design System

## Goal

Provide a scalable and maintainable design system for admin products with domain-specific theming.

## Theme architecture

Admin Kit themes are based on CSS custom properties and a root HTML data attribute:

- Attribute: `data-tn-theme`
- Example: `<html data-tn-theme="healthcare">`

All tokens are defined in:

- `src/lib/theme/_variables.scss` (base and semantic token contracts)

Theme overrides are defined in:

- `src/lib/theme/_light.scss`
- `src/lib/theme/_dark.scss`
- `src/lib/theme/_banking.scss`
- `src/lib/theme/_healthcare.scss`
- `src/lib/theme/_ecommerce.scss`
- `src/lib/theme/_education.scss`
- `src/lib/theme/_government.scss`

## Token layers

1. Foundation tokens: spacing, radius, shadows, typography.
2. Semantic tokens: primary, surface, text, border, state colors.
3. Component tokens: sidebar, card, table header, button/input radius.

This layering keeps UI components stable, while themes only swap token values.

## Runtime theme API

Use `TnThemeService` from `@tanish-chauhan/admin-kit`.

Key methods:

- `initialize(config)`: sets defaults, loads persisted theme, and applies it.
- `setTheme(name)`: applies a specific supported theme.
- `getActiveTheme()`: returns current active theme.
- `getAvailableThemes()`: returns all supported themes.
- `cycleTheme()`: rotates through the theme list.
- `toggleLightDark()`: toggles only `light` and `dark`.

Supported theme names are exported as `TnThemeName`.

## Reusable layout components

Admin Kit now includes reusable standalone layout primitives:

- `tn-topnav`: top navigation bar with a menu toggle event.
- `tn-sidebar`: responsive sidebar (drawer on mobile, fixed on desktop).
- `tn-admin-kit`: shell component that composes topnav + sidebar and handles toggle wiring.

### Sidebar/topnav interaction

`tn-topnav` emits `menuToggle`, and `tn-admin-kit` maps it to sidebar open/close state.
`tn-sidebar` emits `closeRequested` (backdrop click) and `itemSelected`, which also closes sidebar on small screens.

This gives consistent behavior across desktop, tablet, and mobile without custom glue code in each app.

## Extending with a new theme

1. Create `src/lib/theme/_my-theme.scss`.
2. Override semantic/component tokens in `[data-tn-theme='my-theme']`.
3. Add `@forward 'my-theme';` in `src/lib/theme/_theme.scss`.
4. Add `'my-theme'` to `TN_AVAILABLE_THEMES` in `theme.model.ts`.

Keeping this order prevents runtime/service mismatch and style import gaps.

## Best practices for contributors

- Prefer semantic tokens in components (for example `--tn-text-primary`) instead of hardcoded colors.
- Use component tokens for UI-specific values when semantics are too broad.
- Keep comments only where intent is non-obvious.
- Preserve token names for backward compatibility; add new tokens instead of repurposing existing ones.
