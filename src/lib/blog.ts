import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  blogArticleRegistry,
  blogArticleSeo,
  blogArticleVisualTopics,
  blogCategories,
  blogDisclaimers,
  defaultArticleAds,
} from "@/constants/blog";
import type {
  BlogArticle,
  BlogCategory,
  BlogFaq,
  BlogFrontmatter,
  ArticleVisual,
  RelatedArticle,
  TableOfContentsItem,
} from "@/src/types/blog";

const BLOG_DIRECTORY = path.join(process.cwd(), "public", "Blogs");

const mojibakeReplacements: Array<[string, string]> = [
  ["â€™", "’"],
  ["â€˜", "‘"],
  ["â€œ", "“"],
  ["â€", "”"],
  ["â€“", "–"],
  ["â€”", "—"],
  ["â€¦", "…"],
  ["â†’", "→"],
  ["â†“", "↓"],
  ["â‚¹", "₹"],
  ["â‰ˆ", "≈"],
  ["â‰¥", "≥"],
  ["â‰¤", "≤"],
  ["â€¢", "•"],
  ["Ã—", "×"],
  ["Â°", "°"],
  ["Â·", "·"],
];

function repairEncoding(value: string) {
  return mojibakeReplacements.reduce(
    (result, [broken, corrected]) => result.replaceAll(broken, corrected),
    value,
  );
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function stripPrivateInstructions(source: string) {
  return source.replace(/^\s*<!--[\s\S]*?-->\s*/, "");
}

const privateBlockLabels = [
  "Internal CTA",
  "Download CTA placeholder",
  "Product CTA",
  "Recruiter CTA",
  "Candidate CTA",
  "Employer CTA",
];

function stripEditorialScaffolding(content: string) {
  const privateLabel = privateBlockLabels.join("|");
  return content
    .replace(
      new RegExp(`^\\*\\*(?:${privateLabel}|[^\\n*]*CTA(?: placeholder)?):?\\*\\*[^\\n]*\\n(?:^(?!#{1,6} ).*\\n?){0,6}`, "gmi"),
      "",
    )
    .replace(/^Suggested (?:heading|copy):.*(?:\n|$)/gim, "")
    .replace(/^Implementation note:.*(?:\n|$)/gim, "")
    .replace(/^Editor(?:ial)? note:.*(?:\n|$)/gim, "")
    .replace(/^`?\{\{(?:CTA|COMPONENT)_[A-Z0-9_:]+\}\}`?\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n");
}

const privateRanges: Record<string, Array<[RegExp, RegExp]>> = {
  "04-ai-in-recruitment-screening-hiring.md": [[/^## Recommended AI architecture for a job portal$/m, /^## How to measure AI recruitment performance$/m]],
  "06-find-trusted-local-businesses-near-you.md": [[/^## Google Trends research plan$/m, /^## Key takeaways$/m]],
  "07-best-markets-near-me-clothes-electronics-food-home.md": [[/^## Recommended URLs$/m, /^## Key takeaways$/m]],
  "08-ai-powered-local-discovery-nearby-businesses.md": [[/^## Recommended architecture for an AI local discovery platform$/m, /^## Key takeaways$/m]],
  "09-create-personal-financial-plan-step-by-step.md": [[/^## Recommended architecture for a financial planning tool$/m, /^## Key takeaways$/m]],
  "10-sip-calculator-financial-goals.md": [[/^## Recommended SIP calculator architecture$/m, /^## Key takeaways$/m]],
  "11-retirement-planning-india-corpus.md": [[/^## Recommended retirement calculator architecture$/m, /^## Key takeaways$/m]],
  "12-emergency-fund-calculator-monthly-savings.md": [[/^## Recommended emergency-fund calculator architecture$/m, /^## Common emergency-fund mistakes$/m]],
  "13-ar-vr-labs-schools-setup-implementation.md": [
    [/^## Recommended technical architecture$/m, /^## Implementation timeline$/m],
    [/^## Implementation dashboard$/m, /^## Internal links$/m],
    [/^## Internal links$/m, /^## Key takeaways$/m],
  ],
  "14-ar-vr-lab-setup-cost-schools-india.md": [[/^## Recommended budget calculator architecture$/m, /^## Key takeaways$/m]],
  "15-ar-vr-labs-student-learning-engagement-skills.md": [[/^## SEO and content architecture$/m, /^## Key takeaways$/m]],
};

function stripPrivateRanges(content: string, sourceFile: string) {
  return (privateRanges[sourceFile] ?? []).reduce((result, [startPattern, endPattern]) => {
    const start = result.search(startPattern);
    if (start < 0) return result;
    const remainder = result.slice(start);
    const end = remainder.search(endPattern);
    return end < 0 ? result.slice(0, start).trim() : `${result.slice(0, start).trim()}\n\n${remainder.slice(end)}`;
  }, content);
}

const genericMarketGuide = `
> The best local market is not necessarily the most famous one. It is the market that fits what you need, is practical to reach, and gives you enough information to shop with confidence.

## Start with the purpose of your visit

Before searching for a market, define what you are buying. A wholesale clothing district, a neighbourhood vegetable market and a weekend craft bazaar solve very different problems. Write down the category, budget, preferred travel time and whether you need retail quantities, bulk prices or a specialist seller.

This small step improves every search that follows. Instead of asking for “the best market,” you can look for a market that is strong in a specific category and open at the time you can visit.

## Compare markets using useful evidence

Use the same criteria for every candidate market:

| Question | What to check |
|---|---|
| Is it relevant? | Main product categories, retail or wholesale focus, and typical buyer |
| Is it open? | Day-specific hours, weekly closure, festival changes and last verification date |
| Is it practical? | Travel time, nearest public transport, walking distance and parking constraints |
| Is pricing understandable? | Fixed-price versus bargaining, minimum quantities and payment options |
| Is the information trustworthy? | Recent first-party updates, current photos and consistent details across sources |
| Is it accessible? | Surface conditions, crowd levels, step-free access and rest facilities |

Do not treat a high rating as a complete answer. A market can be popular yet unsuitable for a particular product, budget, mobility need or time of day.

## Verify opening hours before travelling

Market hours are often less predictable than shopping-mall hours. Individual shops may open at different times, and wholesale activity can begin much earlier than retail trade. Weekly closures, weather, public works, elections and festivals can also change normal schedules.

Check a recent source and, for an important trip, confirm directly with a merchant or market association. A useful listing should show when its hours were last verified rather than presenting old information as live status.

## Understand retail, wholesale and mixed markets

Retail markets usually sell individual items and are easier for casual shopping. Wholesale markets may offer better unit pricing but can require minimum quantities, early visits or trade knowledge. Mixed markets serve both audiences, although the best time and seller can differ.

Ask about quantity, return terms and whether the quoted price includes tax, delivery or alterations. The lowest visible price is not always the lowest total cost.

## Plan the route, not just the destination

A market ten kilometres away can take longer to reach than one across the city if traffic or transfers are difficult. Compare estimated travel time at the hour you intend to leave. Look at the final walking route, not only the nearest station name.

For crowded districts, public transport may be more practical than parking. If you need to carry bulky goods, identify a legal pickup point and ask whether the seller can arrange delivery.

## Shop with a simple safety checklist

- Keep payment confirmation and request an invoice for consequential purchases.
- Check warranty, exchange and return terms before paying.
- Test electronics and inspect packaged goods where appropriate.
- Avoid sharing unnecessary identity or banking information.
- Use well-lit routes and plan transport home before late-evening visits.
- Verify accessibility and crowd conditions if anyone in your group needs additional support.

No guide can guarantee quality or safety. Treat listings as a starting point for your own checks.

## Choose the best time to visit

Early visits can mean fresher produce, easier movement and more time with sellers. Midday may be quieter in some markets but uncomfortable in hot weather. Evenings can bring the fullest street-food and leisure experience alongside larger crowds.

The right time depends on the market’s trading rhythm and your goal. Visit wholesale districts early, compare durable goods when sellers have time to explain them, and avoid peak crowding when accessibility matters.

## Build a shortlist you can reuse

Save two or three suitable markets with notes about their strengths, route, closure day and the sellers you trust. After visiting, update your own record while the details are fresh. A small, verified shortlist is more useful than dozens of unexamined search results.

## Questions to ask before you go

1. Does this market specialise in what I need?
2. Are the hours recent and day-specific?
3. Is it retail, wholesale or mixed?
4. What is the realistic door-to-door travel time?
5. What payment, invoice, return and warranty terms apply?
6. Are accessibility and crowd conditions suitable for my group?

Local discovery works best when a map is combined with context. Location tells you where a market is; verified details help you decide whether the trip is worthwhile.
`;

function assertPublishableContent(content: string, sourceFile: string) {
  const forbidden = /Internal CTA|Suggested (?:heading|copy)|CTA placeholder|Editorial and SEO notes|Pre-publication checklist|\{\{(?:CTA|COMPONENT|URL|BRAND|SITE)_[A-Z0-9_:]+\}\}|\[CITY(?:-SLUG)?\]|Internal-link plan|Recommended (?:URL|.+ calculator|AI|technical) architecture|Google Trends research plan|Supporting content cluster|Original research opportunities|Product actions|Implementation dashboard/i;
  const match = content.match(forbidden);
  if (match) throw new Error(`Private editorial content remains in ${sourceFile}: ${match[0]}`);
}

function normalizeSystemTokens(content: string, category: BlogCategory) {
  const categoryCta = blogCategories[category].cta;

  return content
    .replace(
      /^\s*`?\{\{INTERNAL_LINK_ATS_FRIENDLY_RESUME\}\}`?\s*$/gm,
      "[Read the ATS-friendly resume guide](/blog/careers/ats-friendly-resume)",
    )
    .replace(
      /^\s*`?\{\{(?:CTA|COMPONENT)_[A-Z0-9_]+(?::[A-Z0-9_]+)?\}\}`?\s*$/gm,
      `[${categoryCta.label}](${categoryCta.href})`,
    )
    .replace(/\{\{CONTACT_ROUTE\}\}/g, "/contact")
    .replace(/\{\{URL_REPORT_MARKET_UPDATE\}\}/g, "/contact")
    .replace(/\{\{SITE_URL\}\}/g, "https://airedhq.com");
}

function separatePublicContent(content: string) {
  const editorialMarker = /\n---\s*\n+## Editorial and SEO notes for maintainers/i;
  const markerMatch = editorialMarker.exec(content);
  const publicBody = markerMatch ? content.slice(0, markerMatch.index) : content;
  const sourcesMatch = content.match(/\n## Sources\s*\n([\s\S]*?)(?=\n## Pre-publication checklist|$)/i);
  const sources = sourcesMatch ? `\n\n## Sources\n${sourcesMatch[1].trim()}\n` : "";

  return `${publicBody.trim()}${sources}`;
}

function removeRedundantNavigation(content: string) {
  return content
    .replace(/^# .+\n+/, "")
    .replace(/\n## Quick navigation\s*\n[\s\S]*?(?=\n## )/i, "\n");
}

function extractFaqs(content: string): { content: string; faqs: BlogFaq[] } {
  const faqStart = content.search(/\n## Frequently asked questions\s*\n/i);
  if (faqStart < 0) return { content, faqs: [] };

  const beforeFaq = content.slice(0, faqStart).trim();
  const faqAndAfter = content.slice(faqStart).replace(/^\n## Frequently asked questions\s*\n/i, "");
  const nextSection = faqAndAfter.search(/\n## (?!#)/);
  const faqBody = nextSection >= 0 ? faqAndAfter.slice(0, nextSection) : faqAndAfter;
  const afterFaq = nextSection >= 0 ? faqAndAfter.slice(nextSection) : "";
  const questionPattern = /^### (.+)$/gm;
  const matches = [...faqBody.matchAll(questionPattern)];
  const faqs = matches.map((match, index) => ({
    question: repairEncoding(match[1].trim()),
    answer: faqBody
      .slice((match.index ?? 0) + match[0].length, matches[index + 1]?.index ?? faqBody.length)
      .trim(),
  }));

  return {
    content: `${beforeFaq}${afterFaq ? `\n\n${afterFaq.trim()}` : ""}`,
    faqs,
  };
}

function buildTableOfContents(content: string): TableOfContentsItem[] {
  return [...content.matchAll(/^(##|###) (.+)$/gm)]
    .map((match) => ({
      id: slugifyHeading(match[2]),
      title: match[2].replace(/[`*_~]/g, "").trim(),
      level: match[1] === "##" ? (2 as const) : (3 as const),
    }))
    .filter((item) => item.title.toLowerCase() !== "sources");
}

function splitAtSafeHeadings(content: string): [string, string, string, string, string] {
  const headingPositions = [...content.matchAll(/^## .+$/gm)].map((match) => match.index ?? 0);
  const findNearest = (target: number, minimum: number) =>
    headingPositions.find((position) => position >= target && position > minimum) ?? content.length;
  const first = findNearest(content.length * 0.16, 0);
  const second = findNearest(content.length * 0.34, first);
  const third = findNearest(content.length * 0.52, second);
  const fourth = findNearest(content.length * 0.72, third);

  return [
    content.slice(0, first).trim(),
    content.slice(first, second).trim(),
    content.slice(second, third).trim(),
    content.slice(third, fourth).trim(),
    content.slice(fourth).trim(),
  ];
}

function dateValue(value: unknown, fallback: string) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const parsed = new Date(`${value}T00:00:00.000Z`);
    if (!Number.isNaN(parsed.getTime())) return value;
  }
  return fallback;
}

function parseArticle(
  sourceFile: string,
  category: BlogCategory,
  slug: string,
): Omit<BlogArticle, "relatedArticles"> {
  const source = fs.readFileSync(path.join(BLOG_DIRECTORY, sourceFile), "utf8");
  const parsed = matter(stripPrivateInstructions(source));
  const categoryConfig = blogCategories[category];
  let content = repairEncoding(parsed.content);
  content = separatePublicContent(content);
  content = stripEditorialScaffolding(content);
  content = stripPrivateRanges(content, sourceFile);
  content = removeRedundantNavigation(content);
  content = normalizeSystemTokens(content, category);

  const isGenericMarketGuide = sourceFile.startsWith("05-");
  if (isGenericMarketGuide) content = genericMarketGuide.trim();

  assertPublishableContent(content, sourceFile);

  const extracted = extractFaqs(content);
  content = extracted.content.trim();

  const title = isGenericMarketGuide
    ? "How to Find the Best Local Markets in Any City"
    : repairEncoding(String(parsed.data.title ?? slug));
  const description = isGenericMarketGuide
    ? "A practical framework for finding, comparing and verifying useful local markets in any city."
    : repairEncoding(String(parsed.data.description ?? categoryConfig.description));
  const publishedAt = dateValue(parsed.data.publishedAt, "2026-07-30");
  const updatedAt = dateValue(parsed.data.updatedAt, publishedAt);
  const frontmatter: BlogFrontmatter = {
    title,
    seoTitle: isGenericMarketGuide
      ? "How to Find the Best Local Markets in Any City"
      : repairEncoding(String(parsed.data.seoTitle ?? title)),
    seoDescription: blogArticleSeo[slug].description,
    description,
    publishedAt,
    updatedAt,
    category: isGenericMarketGuide ? "Local Market Discovery" : String(parsed.data.category ?? categoryConfig.label),
    readingTime: isGenericMarketGuide ? "18 minutes" : String(parsed.data.readingTime ?? "20 minutes"),
    language: String(parsed.data.language ?? "en-IN"),
    keywords: blogArticleSeo[slug].keywords,
  };
  const route = `/blog/${category}/${slug}`;

  return {
    sourceFile,
    slug,
    route,
    category,
    categoryLabel: categoryConfig.label,
    accent: categoryConfig.accent,
    frontmatter,
    author: "AiRedHQ Editorial Team",
    content,
    contentSegments: splitAtSafeHeadings(content),
    tableOfContents: buildTableOfContents(content),
    faqs: extracted.faqs,
    disclaimer: blogDisclaimers[category],
    cta: categoryConfig.cta,
    adSlots: defaultArticleAds.map((slot) => ({ ...slot })),
    heroVisual: {
      src: `/blog/images/${slug}-hero.webp`,
      alt: blogArticleSeo[slug].heroAlt,
      caption: `${title} — an original editorial visual by AiRedHQ.`,
    },
    inlineVisuals: [
      {
        src: `/blog/images/${slug}-inside.webp`,
        alt: blogArticleSeo[slug].inlineAlt,
        caption: blogArticleSeo[slug].inlineAlt,
      },
      ...blogArticleVisualTopics[slug].map((topic, index) => ({
        src: `/blog/images/${slug}-inside-${index + 2}.webp`,
        alt: topic,
        caption: topic,
      })),
    ] as [ArticleVisual, ArticleVisual, ArticleVisual, ArticleVisual],
  };
}

let articleCache: BlogArticle[] | undefined;

export function getAllBlogArticles(): BlogArticle[] {
  if (articleCache) return articleCache;

  const baseArticles = blogArticleRegistry.map(([sourceFile, category, slug]) =>
    parseArticle(sourceFile, category, slug),
  );

  articleCache = baseArticles.map((article) => {
    const relatedArticles: RelatedArticle[] = baseArticles
      .filter((candidate) => candidate.category === article.category && candidate.slug !== article.slug)
      .slice(0, 3)
      .map((candidate) => ({
        title: candidate.frontmatter.title,
        description: candidate.frontmatter.description,
        href: candidate.route,
        category: candidate.category,
      }));

    return { ...article, relatedArticles };
  });

  return articleCache;
}

export function getBlogArticle(category: string, slug: string) {
  return getAllBlogArticles().find(
    (article) => article.category === category && article.slug === slug,
  );
}

export function getArticlesByCategory(category: BlogCategory) {
  return getAllBlogArticles().filter((article) => article.category === category);
}

export function getBlogCategory(category: string) {
  return category in blogCategories ? blogCategories[category as BlogCategory] : undefined;
}
