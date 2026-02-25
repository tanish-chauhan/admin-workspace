import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TnSidebarItem } from './sidebar.models';

@Component({
  selector: 'tn-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="tn-sidebar" [class.tn-open]="isOpen">
      <header class="tn-sidebar-header">
        <strong class="tn-sidebar-brand">{{ brand }}</strong>
      </header>

      <nav class="tn-sidebar-nav" aria-label="Sidebar navigation">
        <a
          class="tn-sidebar-link"
          *ngFor="let item of items"
          [class.tn-active]="item.active"
          [class.tn-disabled]="item.disabled"
          [attr.href]="item.disabled ? null : item.href || item.route || '#'"
          (click)="onItemClick($event, item)"
        >
          <span class="tn-sidebar-icon" *ngIf="item.icon">{{ item.icon }}</span>
          <span class="tn-sidebar-label">{{ item.label }}</span>
          <span class="tn-sidebar-badge" *ngIf="item.badge !== undefined">
            {{ item.badge }}
          </span>
        </a>
      </nav>
    </aside>

    <button
      class="tn-sidebar-backdrop"
      [class.tn-visible]="isOpen"
      type="button"
      (click)="closeRequested.emit()"
      aria-label="Close sidebar"
    ></button>
  `,
  styles: `
    .tn-sidebar {
      width: 16rem;
      height: 100dvh;
      padding: var(--tn-space-4);
      background: var(--tn-sidebar-bg);
      color: var(--tn-sidebar-text);
      border-right: 1px solid var(--tn-border-color);
      transition: transform 220ms ease;
      overflow-y: auto;
      position: sticky;
      top: 0;
      z-index: 900;
    }

    .tn-sidebar-header {
      margin-bottom: var(--tn-space-4);
      padding-bottom: var(--tn-space-3);
      border-bottom: 1px solid color-mix(in srgb, var(--tn-sidebar-text) 15%, transparent);
    }

    .tn-sidebar-brand {
      font-size: 1rem;
      letter-spacing: 0.02em;
    }

    .tn-sidebar-nav {
      display: grid;
      gap: var(--tn-space-2);
    }

    .tn-sidebar-link {
      display: flex;
      align-items: center;
      gap: var(--tn-space-2);
      color: inherit;
      padding: var(--tn-space-3);
      border-radius: var(--tn-radius-md);
      text-decoration: none;
      cursor: pointer;
    }

    .tn-sidebar-link:hover {
      background: color-mix(in srgb, var(--tn-sidebar-text) 10%, transparent);
    }

    .tn-sidebar-link.tn-active {
      background: var(--tn-sidebar-active-bg);
      font-weight: 600;
    }

    .tn-sidebar-link.tn-disabled {
      opacity: 0.45;
      pointer-events: none;
    }

    .tn-sidebar-icon {
      width: 1.1rem;
      text-align: center;
      opacity: 0.88;
    }

    .tn-sidebar-label {
      flex: 1;
    }

    .tn-sidebar-badge {
      font-size: 0.75rem;
      min-width: 1.5rem;
      text-align: center;
      background: color-mix(in srgb, var(--tn-sidebar-text) 18%, transparent);
      padding: 0.125rem 0.4rem;
      border-radius: 999px;
    }

    .tn-sidebar-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      border: 0;
      margin: 0;
      background: rgba(2, 6, 23, 0.45);
      z-index: 850;
    }

    @media (max-width: 991.98px) {
      .tn-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        transform: translateX(-100%);
        box-shadow: var(--tn-shadow-md);
      }

      .tn-sidebar.tn-open {
        transform: translateX(0);
      }

      .tn-sidebar-backdrop.tn-visible {
        display: block;
      }
    }
  `,
})
export class TnSidebarComponent {
  @Input() brand = 'Admin';
  @Input() items: readonly TnSidebarItem[] = [];
  @Input() isOpen = false;

  @Output() itemSelected = new EventEmitter<TnSidebarItem>();
  @Output() closeRequested = new EventEmitter<void>();

  onItemClick(event: Event, item: TnSidebarItem): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    this.itemSelected.emit(item);
  }
}
