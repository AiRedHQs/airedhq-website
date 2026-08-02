import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePage } from "@/components/pages/blog-article-page";
import { siteConfig } from "@/constants/brand";
import { getBlogArticle, getBlogArticleSummaries } from "@/src/lib/blog";

type ArticlePageProps = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return getBlogArticleSummaries().map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = await getBlogArticle(category, slug);
  if (!article) return {};
  const url = new URL(article.route, siteConfig.url);

  return {
    title: article.frontmatter.seoTitle ?? article.frontmatter.title,
    description: article.frontmatter.seoDescription,
    keywords: article.frontmatter.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      title: article.frontmatter.title,
      description: article.frontmatter.seoDescription,
      url,
      siteName: siteConfig.name,
      publishedTime: article.frontmatter.publishedAt,
      modifiedTime: article.frontmatter.updatedAt,
      authors: [article.author],
      section: article.categoryLabel,
      tags: article.frontmatter.keywords,
      images: [{ url: article.heroVisual.src, alt: article.heroVisual.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.frontmatter.title,
      description: article.frontmatter.seoDescription,
      images: [article.heroVisual.src],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = await getBlogArticle(category, slug);
  if (!article) notFound();
  const articleUrl = `${siteConfig.url}${article.route}`;
  const articleImages = [article.heroVisual, ...article.inlineVisuals].map(
    (visual) => `${siteConfig.url}${visual.src}`,
  );
  const wordCount = article.content.trim().split(/\s+/).length;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.frontmatter.title,
      description: article.frontmatter.seoDescription,
      datePublished: article.frontmatter.publishedAt,
      dateModified: article.frontmatter.updatedAt,
      author: { "@type": "Organization", name: article.author, url: siteConfig.url },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: articleUrl,
      inLanguage: article.frontmatter.language ?? "en-IN",
      articleSection: article.categoryLabel,
      isAccessibleForFree: true,
      wordCount,
      keywords: article.frontmatter.keywords.join(", "),
      about: article.frontmatter.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })),
      image: articleImages,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Notes", item: `${siteConfig.url}/blog` },
        { "@type": "ListItem", position: 3, name: article.categoryLabel, item: `${siteConfig.url}/blog/${article.category}` },
        { "@type": "ListItem", position: 4, name: article.frontmatter.title, item: articleUrl },
      ],
    },
    ...(article.faqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/\[(.*?)\]\(.*?\)|[`*_~>#-]/g, "$1").replace(/\s+/g, " ").trim(),
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <BlogArticlePage article={article} />
    </>
  );
}
