import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tn-topnav',
  standalone: true,
  template: `
    <header class="tn-topnav">
      <button
        class="tn-topnav-toggle"
        type="button"
        (click)="menuToggle.emit()"
        [attr.aria-label]="toggleAriaLabel"
      >
        &#9776;
      </button>

      <div class="tn-topnav-title">{{ title }}</div>

      <div class="tn-topnav-actions">
        <ng-content></ng-content>
      </div>
    </header>
  `,
  styles: `
    .tn-topnav {
      height: 3.75rem;
      display: flex;
      align-items: center;
      gap: var(--tn-space-3);
      padding: 0 var(--tn-space-4);
      background: var(--tn-bg-surface);
      border-bottom: 1px solid var(--tn-border-color);
      position: sticky;
      top: 0;
      z-index: 700;
    }

    .tn-topnav-toggle {
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid var(--tn-border-color);
      border-radius: var(--tn-button-radius);
      background: var(--tn-bg-surface-muted);
      color: var(--tn-text-primary);
      cursor: pointer;
      font-size: 1rem;
    }

    .tn-topnav-toggle:hover {
      border-color: var(--tn-color-primary);
    }

    .tn-topnav-toggle:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 3px var(--tn-focus-ring);
    }

    .tn-topnav-title {
      font-weight: 600;
      color: var(--tn-text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tn-topnav-actions {
      margin-left: auto;
      display: inline-flex;
      gap: var(--tn-space-2);
      align-items: center;
    }
  `,
})
export class TnTopnavComponent {
  @Input() title = 'Dashboard';
  @Input() toggleAriaLabel = 'Toggle sidebar menu';

  @Output() menuToggle = new EventEmitter<void>();
}
