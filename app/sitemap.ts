import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/products/hiared",
    "/products/gobazaar",
    "/products/yojiq",
    "/solutions",
    "/solutions/ai",
    "/solutions/web-development",
    "/solutions/mobile-development",
    "/solutions/ui-ux",
    "/solutions/ar-vr",
    "/solutions/cloud-devops",
    "/industries",
    "/innovation-lab",
    "/case-studies",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
