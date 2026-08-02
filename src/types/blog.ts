export type BlogCategory =
  | "careers"
  | "local-discovery"
  | "financial-planning"
  | "immersive-learning";

export type ArticleAdSlot = {
  id: "article-ad-1" | "article-ad-2";
  placement: "after-introduction" | "mid-article";
  provider?: "adsense" | "custom";
  providerSlotId?: string;
  enabled: boolean;
};

export type ArticleCta = {
  label: string;
  href: string;
  description: string;
};

export type TableOfContentsItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type RelatedArticle = {
  title: string;
  description: string;
  href: string;
  category: BlogCategory;
};

export type BlogFrontmatter = {
  title: string;
  seoTitle?: string;
  seoDescription: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  readingTime: string;
  language?: string;
  keywords: string[];
};

export type ArticleVisual = {
  src: string;
  alt: string;
  caption: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogArticle = {
  sourceFile: string;
  slug: string;
  route: string;
  category: BlogCategory;
  categoryLabel: string;
  accent: string;
  frontmatter: BlogFrontmatter;
  author: "AiRedHQ Editorial Team";
  content: string;
  contentSegments: [string, string, string, string, string];
  tableOfContents: TableOfContentsItem[];
  faqs: BlogFaq[];
  disclaimer?: string;
  cta: ArticleCta;
  adSlots: ArticleAdSlot[];
  heroVisual: ArticleVisual;
  inlineVisuals: [ArticleVisual, ArticleVisual, ArticleVisual, ArticleVisual];
  relatedArticles: RelatedArticle[];
};
