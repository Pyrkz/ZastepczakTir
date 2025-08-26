export interface SubMenuItem {
  id: string;
  title: string;
  href: string;
  description?: string;
}

export interface SubMenuCategory {
  id: string;
  title: string;
  items: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  subMenuCategories?: SubMenuCategory[];
}

export interface NavigationConfig {
  mainItems: MenuItem[];
}