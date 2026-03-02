/**
 * Navigation Items Configuration
 * Use this to configure the navigation menu items across the application
 */

export interface NavigationItem {
  label: string;
  link: string;
  icon?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Cases",
    link: "/cases",
  },
  {
    label: "Sobre",
    link: "/sobre",
  },
  {
    label: "Contato",
    link: "/contato",
  },
];

/**
 * Quick access links for footer or other sections
 */
export const footerLinks: NavigationItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Cases",
    link: "/cases",
  },
  {
    label: "Sobre Nós",
    link: "/sobre",
  },
  {
    label: "Contato",
    link: "/contato",
  },
];

/**
 * Social media links
 */
export const socialLinks = {
  instagram: "https://www.instagram.com/flexmedia.ind/",
  facebook: "https://www.facebook.com/flexmedia.ind",
  youtube: "https://www.youtube.com/@flexmedia7060",
  email: "vendas@flexmedia.com.br",
  phone: "(11) 5535-0050",
  whatsapp:
    "https://wa.me/5511911828983?text=Ol%C3%A1!%20Estava%20navegando%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
};

/**
 * Contact information
 */
export const contactInfo = {
  email: "vendas@flexmedia.com.br",
  phone: "(11) 5535-0050",
  support: "suporte@flexmedia.com.br",
};
