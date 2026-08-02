import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/brand";
import { getBlogArticleSummaries } from "@/src/lib/blog";
import { calculators } from "@/constants/calculators";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    "/blog",
    "/calculators",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogArticles = getBlogArticleSummaries();
  const categories = [...new Set(blogArticles.map((article) => article.category))].map((category) => ({
    url: `${siteConfig.url}/blog/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));
  const articles = blogArticles.map((article) => ({
    url: `${siteConfig.url}${article.route}`,
    lastModified: new Date(article.frontmatter.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const calculatorPages: MetadataRoute.Sitemap = calculators.map((calculator) => ({
    url: `${siteConfig.url}/calculators/${calculator.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...categories, ...articles, ...calculatorPages];
}
