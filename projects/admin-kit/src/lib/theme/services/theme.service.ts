import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TnThemeService {
  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-tn-theme', theme);
  }

  toggleTheme() {
    const current =
      document.documentElement.getAttribute('data-tn-theme') === 'dark' ? 'light' : 'dark';

    this.setTheme(current as 'light' | 'dark');
  }
}
