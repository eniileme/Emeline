/** Site-wide constants — edit copy and links here as the site grows. */

export const SITE = {
  name: "Emeline Le Guillou",
  tagline: "Portfolio & notes",
  linkedinUrl: "https://www.linkedin.com/in/emeline-l-758a0873/",
  email: "emelineleguillou@gmail.com",
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const MAIN_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/learning", label: "Learning" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];
