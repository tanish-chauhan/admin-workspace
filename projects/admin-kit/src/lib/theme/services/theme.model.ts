export const TN_AVAILABLE_THEMES = [
  'light',
  'dark',
  'banking',
  'healthcare',
  'ecommerce',
  'education',
  'government',
] as const;

export type TnThemeName = (typeof TN_AVAILABLE_THEMES)[number];

export interface TnThemeServiceConfig {
  /**
   * HTML attribute used to store the active theme. Can be overridden if a host app
   * already uses another attribute name for theming.
   */
  attributeName?: string;
  /**
   * Optional localStorage key for theme persistence.
   */
  storageKey?: string;
  /**
   * Theme applied when no saved theme exists.
   */
  defaultTheme?: TnThemeName;
  /**
   * Enable/disable persistence.
   */
  persistTheme?: boolean;
}
