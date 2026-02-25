export interface TnSidebarItem {
  id?: string;
  label: string;
  route?: string;
  href?: string;
  icon?: string;
  badge?: string | number;
  active?: boolean;
  disabled?: boolean;
}
