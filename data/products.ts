import type { ProductId } from "@/src/types/brand";

export type FeaturedProduct = {
  id: ProductId;
  name: string;
  tagline: string;
  description: string;
  href: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: "hiared",
    name: "hiARed",
    tagline: "AI Recruitment Ecosystem",
    description:
      "An AI-powered recruitment platform that helps recruiters, hiring managers and candidates streamline hiring through intelligent workflows, automation and analytics.",
    href: "/products/hiared",
  },
  {
    id: "gobazaar",
    name: "GoBazaar",
    tagline: "Hyperlocal Discovery Platform",
    description:
      "A modern platform helping users discover nearby businesses, offers, services and events while helping local merchants build their digital presence.",
    href: "/products/gobazaar",
  },
  {
    id: "yojiq",
    name: "YojIQ",
    tagline: "Smart Financial Planning Platform",
    description:
      "A privacy-first personal finance platform helping individuals budget, plan emergency funds, understand insurance and build healthier financial habits.",
    href: "/products/yojiq",
  },
];
