import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ArticleGraphic } from "@/components/blog/article-graphic";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { blogCategories } from "@/constants/blog";
import { getArticlesByCategory, getBlogCategory } from "@/src/lib/blog";
import { createMetadata } from "@/src/lib/seo";
import type { BlogCategory } from "@/src/types/blog";

const categoryDescriptions: Partial<Record<BlogCategory, string>> = {
  careers:
    "Clear guidance for candidates, recruiters and teams building more transparent hiring systems. Hiring signals, interview design and fairer candidate experience.",
  "local-discovery":
    "Research and practical guidance for finding trustworthy businesses, markets and local experiences. Guides on reviews, ratings and choosing well locally.",
  "financial-planning":
    "Educational planning frameworks for budgets, resilience, long-term goals and informed decisions. Practical frameworks, worked examples and no product pitches.",
  "immersive-learning":
    "Evidence-led guidance for designing, operating and evaluating purposeful AR and VR learning. What works in AR and VR training, and how to measure it.",
};

export function generateStaticParams() {
  return Object.keys(blogCategories).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const config = getBlogCategory(category);
  if (!config) return {};
  return createMetadata({
    title: config.label,
    description: categoryDescriptions[category as BlogCategory] ?? config.description,
    path: `/blog/${category}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = getBlogCategory(category);
  if (!config) notFound();
  const articles = getArticlesByCategory(category as BlogCategory);

  return (
    <main
      className="min-h-screen bg-[#050608] py-20 text-white sm:py-28"
      style={{ "--article-accent": config.accent } as React.CSSProperties}
    >
      <Container className="max-w-[92rem]">
        <Breadcrumb
          className="text-white/38"
          items={[{ label: "Notes", href: "/blog" }, { label: config.label }]}
        />
        <div className="grid gap-12 pb-20 pt-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[color:var(--article-accent)]">
              AiRedHQ Notes
            </p>
            <h1 className="mt-6 max-w-[10ch] text-[clamp(3.6rem,7vw,7rem)] font-semibold leading-[.9]">
              {config.label}
            </h1>
          </div>
          <p className="max-w-xl text-xl leading-8 text-white/48">{config.description}</p>
        </div>
        <div className="border-t border-white/10">
          {articles.map((article) => (
            <Link
              key={article.route}
              href={article.route}
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[12rem_1fr_auto] md:items-center"
            >
              <ArticleGraphic
                category={article.category}
                accent={article.accent}
                compact
              />
              <div>
                <h2 className="max-w-3xl text-2xl font-semibold sm:text-3xl">
                  {article.frontmatter.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/38">
                  {article.frontmatter.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-white/28">
                <span>{article.frontmatter.readingTime}</span>
                <ArrowRight className="size-5 text-[color:var(--article-accent)] transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
