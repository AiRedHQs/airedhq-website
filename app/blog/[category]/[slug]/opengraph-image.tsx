import { ImageResponse } from "next/og";
import { getAllBlogArticles, getBlogArticle } from "@/src/lib/blog";

export const alt = "AiRedHQ editorial note";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllBlogArticles().map((article) => ({ category: article.category, slug: article.slug }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const article = getBlogArticle(category, slug);
  if (!article) return new ImageResponse(<div>AiRedHQ Notes</div>, size);

  return new ImageResponse(
    <div style={{ background: "#050608", color: "white", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", color: article.accent, fontSize: 22, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: article.accent }} />
        {article.categoryLabel}
      </div>
      <div style={{ display: "flex", maxWidth: 1030, fontSize: 64, lineHeight: 1.04, fontWeight: 650 }}>{article.frontmatter.title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,.55)", fontSize: 24 }}>
        <span>AiRedHQ Notes</span><span>{article.frontmatter.readingTime}</span>
      </div>
    </div>,
    size,
  );
}

