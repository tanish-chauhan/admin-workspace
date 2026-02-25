import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TnSidebarComponent } from './components/layout/sidebar/sidebar.component';
import { TnSidebarItem } from './components/layout/sidebar/sidebar.models';
import { TnTopnavComponent } from './components/layout/topnav/topnav.component';

@Component({
  selector: 'tn-admin-kit',
  standalone: true,
  imports: [CommonModule, TnSidebarComponent, TnTopnavComponent],
  template: `
    <div class="tn-admin-layout">
      <tn-sidebar
        [brand]="brand"
        [items]="menuItems"
        [isOpen]="sidebarOpen"
        (itemSelected)="handleSidebarItemSelection()"
        (closeRequested)="closeSidebar()"
      />

      <div class="tn-admin-content-area">
        <tn-topnav [title]="title" (menuToggle)="toggleSidebar()">
          <ng-content select="[topnav-actions]"></ng-content>
        </tn-topnav>

        <main class="tn-admin-main">
          <ng-content></ng-content>
        </main>
      </div>
    </div>
  `,
  styles: `
    .tn-admin-layout {
      display: flex;
      min-height: 100dvh;
      background: var(--tn-bg-canvas);
      color: var(--tn-text-primary);
      font-family: var(--tn-font-family-base);
    }

    .tn-admin-content-area {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
    }

    .tn-admin-main {
      flex: 1;
      padding: var(--tn-space-4);
      overflow: auto;
    }
  `,
})
export class AdminKitComponent {
  @Input() title = 'Admin Dashboard';
  @Input() brand = 'Admin Kit';
  @Input() menuItems: readonly TnSidebarItem[] = [];

  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  handleSidebarItemSelection(): void {
    // On small screens, close the drawer after a navigation action.
    this.closeSidebar();
  }
}
