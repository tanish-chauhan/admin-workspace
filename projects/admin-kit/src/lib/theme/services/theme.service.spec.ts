import { TestBed } from '@angular/core/testing';
import { TnThemeService } from './theme.service';

describe('TnThemeService', () => {
  let service: TnThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TnThemeService);
    localStorage.clear();
    document.documentElement.removeAttribute('data-tn-theme');
  });

  it('should initialize with default theme when no persisted value exists', () => {
    const applied = service.initialize({ defaultTheme: 'healthcare' });

    expect(applied).toBe('healthcare');
    expect(service.getActiveTheme()).toBe('healthcare');
  });

  it('should persist and apply a supported theme', () => {
    service.initialize({ defaultTheme: 'light', persistTheme: true });
    service.setTheme('banking');

    expect(document.documentElement.getAttribute('data-tn-theme')).toBe('banking');
    expect(localStorage.getItem('tn-admin-kit-theme')).toBe('banking');
  });

  it('should cycle across all themes', () => {
    service.initialize({ defaultTheme: 'light', persistTheme: false });
    const nextTheme = service.cycleTheme();

    expect(nextTheme).toBe('dark');
    expect(service.getActiveTheme()).toBe('dark');
  });
});
