# Admin Kit

Admin Kit provides a reusable design system foundation for Angular admin dashboards.
It includes a token-based theme architecture and multiple domain-ready themes:

- `light`
- `dark`
- `banking`
- `healthcare`
- `ecommerce`
- `education`
- `government`

## Install and use

1. Build/publish the package.
2. Import theme styles in your global stylesheet:

```scss
@use '@tanish-chauhan/admin-kit/src/lib/theme/theme';
```

3. Initialize and apply a theme in app bootstrap (example in `AppComponent`):

```ts
import { Component, OnInit } from '@angular/core';
import { TnThemeService } from '@tanish-chauhan/admin-kit';

@Component({
  selector: 'app-root',
  template: `<button (click)="switchTheme()">Switch Theme</button>`,
})
export class AppComponent implements OnInit {
  constructor(private readonly themeService: TnThemeService) {}

  ngOnInit(): void {
    this.themeService.initialize({
      defaultTheme: 'banking',
      persistTheme: true,
    });
  }

  switchTheme(): void {
    this.themeService.cycleTheme();
  }
}
```

4. Use the reusable layout components:

```ts
import { Component } from '@angular/core';
import { AdminKitComponent, TnSidebarItem } from '@tanish-chauhan/admin-kit';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [AdminKitComponent],
  template: `
    <tn-admin-kit [title]="'Operations'" [brand]="'Acme Admin'" [menuItems]="menuItems">
      <button topnav-actions type="button">Profile</button>
      <section>Page content goes here...</section>
    </tn-admin-kit>
  `,
})
export class AdminPageComponent {
  menuItems: TnSidebarItem[] = [
    { label: 'Overview', route: '/overview', icon: '🏠', active: true },
    { label: 'Reports', route: '/reports', icon: '📊' },
    { label: 'Users', route: '/users', icon: '👥', badge: 6 },
  ];
}
```

## Design system docs

Full theme/token documentation:

- `docs/design-system.md`

## Development scripts

- `ng build admin-kit`
- `ng test admin-kit`
