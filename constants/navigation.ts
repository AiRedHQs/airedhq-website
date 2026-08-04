import type { ProductId } from "@/src/types/brand";

export type NavItem = {
  label: string;
  href: string;
};

export type ProductNavItem = NavItem & {
  id: ProductId;
  description: string;
};

export const desktopNavItems: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const productNavItems: ProductNavItem[] = [
  {
    id: "hiared",
    label: "hiARed",
    href: "/products/hiared",
    description: "AI Recruitment Ecosystem",
  },
  {
    id: "gobazaar",
    label: "GoBazaar",
    href: "/products/gobazaar",
    description: "Hyperlocal Discovery Platform",
  },
  {
    id: "yojiq",
    label: "YojIQ",
    href: "/products/yojiq",
    description: "Smart Financial Planning Platform",
  },
];

export const footerGroups = [
  {
    title: "Products",
    links: productNavItems,
  },
  {
    title: "Solutions",
    links: [
      { label: "AI", href: "/solutions/ai" },
      { label: "Web", href: "/solutions/web-development" },
      { label: "Mobile", href: "/solutions/mobile-development" },
      { label: "UI/UX", href: "/solutions/ui-ux" },
      { label: "AR/VR", href: "/solutions/ar-vr" },
      { label: "Cloud", href: "/solutions/cloud-devops" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Innovation Lab", href: "/innovation-lab" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Calculators", href: "/calculators" },
	  { label: "Risk Profiler", href: "/investment-risk-profiler" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] satisfies Array<{
  title: string;
  links: NavItem[];
}>;

export const socialLinks: NavItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/airedhq" },
  { label: "GitHub", href: "https://github.com/AiRedHQs" },
  { label: "YouTube", href: "https://www.youtube.com/@airedhq" },
];
