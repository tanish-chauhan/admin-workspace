import { DOCUMENT } from '@angular/common';
import { inject, Inject, Injectable } from '@angular/core';
import { TN_AVAILABLE_THEMES, TnThemeName, TnThemeServiceConfig } from './theme.model';

const DEFAULT_THEME_CONFIG: Required<TnThemeServiceConfig> = {
  attributeName: 'data-tn-theme',
  storageKey: 'tn-admin-kit-theme',
  defaultTheme: 'light',
  persistTheme: true,
};

@Injectable({
  providedIn: 'root',
})
export class TnThemeService {
  private config: Required<TnThemeServiceConfig> = DEFAULT_THEME_CONFIG;
  private document = inject(DOCUMENT);
  /**
   * Call once during app bootstrap to configure behavior and apply the first theme.
   */
  initialize(config: TnThemeServiceConfig = {}): TnThemeName {
    this.config = { ...DEFAULT_THEME_CONFIG, ...config };

    const storedTheme = this.config.persistTheme ? this.getStoredTheme() : null;
    const themeToApply = this.isThemeSupported(storedTheme)
      ? storedTheme
      : this.config.defaultTheme;

    this.setTheme(themeToApply);
    return themeToApply;
  }

  setTheme(theme: TnThemeName): void {
    if (!this.isThemeSupported(theme)) {
      throw new Error(`Unsupported theme "${theme}".`);
    }

    this.document.documentElement.setAttribute(this.config.attributeName, theme);
    if (this.config.persistTheme) {
      this.safeSetItem(this.config.storageKey, theme);
    }
  }

  getActiveTheme(): TnThemeName {
    const activeTheme = this.document.documentElement.getAttribute(
      this.config.attributeName,
    ) as TnThemeName | null;

    return this.isThemeSupported(activeTheme) ? activeTheme : this.config.defaultTheme;
  }

  getAvailableThemes(): readonly TnThemeName[] {
    return TN_AVAILABLE_THEMES;
  }

  /**
   * Cycles to the next available theme. Useful for demo environments and quick toggles.
   */
  cycleTheme(): TnThemeName {
    const themes = this.getAvailableThemes();
    const currentTheme = this.getActiveTheme();
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    this.setTheme(nextTheme);
    return nextTheme;
  }

  toggleLightDark(): TnThemeName {
    const nextTheme = this.getActiveTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
    return nextTheme;
  }

  isThemeSupported(theme: string | null | undefined): theme is TnThemeName {
    return !!theme && TN_AVAILABLE_THEMES.includes(theme as TnThemeName);
  }

  private getStoredTheme(): TnThemeName | null {
    const stored = this.safeGetItem(this.config.storageKey);
    return this.isThemeSupported(stored) ? stored : null;
  }

  private safeGetItem(key: string): string | null {
    try {
      return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  private safeSetItem(key: string, value: string): void {
    try {
      globalThis.localStorage?.setItem(key, value);
    } catch {
      // Ignore storage write failures; theme still applies at runtime.
    }
  }
}
