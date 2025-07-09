export interface CallToAction {
  text?: string;
  href?: string;
  icon?: string;
  variant?: 'primary' | 'secondary';
  target?: string;
  rel?: string;
}

export interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
  target?: string;
  rel?: string;
}

export interface MenuLink extends Link {
  links?: Array<MenuLink>;
}

export interface Hero {
  title?: string;
  subtitle?: string;
  tagline?: string;
  content?: string;
  actions?: Array<CallToAction>;
  image?: any;
  id?: string;
  bg?: string;
}

export interface Feature {
  title?: string;
  description?: string;
  icon?: string;
  link?: Link;
}

export interface Features {
  id?: string;
  tagline?: string;
  title?: string;
  subtitle?: string;
  columns?: number;
  items?: Array<Feature>;
}

export interface Brand {
  src?: string;
  alt?: string;
}

export interface Brands {
  id?: string;
  title?: string;
  subtitle?: string;
  images?: Array<Brand>;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: {
    basic?: {
      title?: string;
      type?: string;
      image?: string;
    };
    optional?: {
      description?: string;
      siteName?: string;
      imageWidth?: number;
      imageHeight?: number;
    };
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    creator?: string;
  };
}

export interface HeaderData {
  links: Array<MenuLink>;
  actions: Array<CallToAction>;
}

export interface FooterData {
  links: Array<{
    title: string;
    links: Array<Link>;
  }>;
  secondaryLinks: Array<Link>;
  socialLinks: Array<Link>;
  footNote: string;
} 