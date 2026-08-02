import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleEditorialImage } from "@/components/blog/article-editorial-image";
import { Container } from "@/components/layout/container";
import { blogCategories } from "@/constants/blog";
import { getBlogArticleSummaries } from "@/src/lib/blog";
import type { BlogCategory } from "@/src/types/blog";

const categoryOrder: BlogCategory[] = ["careers", "local-discovery", "financial-planning", "immersive-learning"];

export function BlogExperiencePage() {
  const articles = getBlogArticleSummaries();
  const featured = articles[0];

  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative py-24 sm:py-32 lg:py-40">
        <Container className="max-w-[92rem]">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">AiRedHQ Notes</p>
              <h1 className="mt-7 max-w-[10ch] text-[clamp(4rem,7.5vw,8rem)] font-semibold leading-[.88]">
                Useful thinking, documented with <span className="text-[#2f91e8]">care.</span>
              </h1>
            </div>
            <div className="pb-2">
              <p className="max-w-xl text-xl leading-8 text-white/52">
                Practical guides shaped by the products we build: transparent hiring, local discovery, financial planning and immersive learning.
              </p>
              <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-3">
                {categoryOrder.map((category) => (
                  <a key={category} href={`#${category}`} className="bg-white/[0.045] px-4 py-2 text-xs text-white/62 transition-colors hover:text-white">
                    {blogCategories[category].label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-20 sm:py-28">
        <Container className="max-w-[92rem]">
          <Link href={featured.route} className="group grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em]" style={{ color: featured.accent }}>Featured note</p>
              <h2 className="mt-6 max-w-[13ch] text-4xl font-semibold leading-[.96] transition-colors group-hover:text-white/76 sm:text-6xl">{featured.frontmatter.title}</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/44">{featured.frontmatter.description}</p>
              <span className="mt-8 inline-flex items-center gap-3 text-sm font-semibold" style={{ color: featured.accent }}>
                Read the article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <ArticleEditorialImage visual={featured.heroVisual} priority />
          </Link>
        </Container>
      </section>

      {categoryOrder.map((category) => {
        const config = blogCategories[category];
        const categoryArticles = articles.filter((article) => article.category === category);
        return (
          <section key={category} id={category} className="scroll-mt-24 py-24 sm:py-32">
            <Container className="max-w-[92rem]">
              <div className="grid gap-14 lg:grid-cols-[.6fr_1.4fr]">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em]" style={{ color: config.accent }}>{config.label}</p>
                  <h2 className="mt-6 text-4xl font-semibold leading-[.96] sm:text-6xl">Research with a practical next step.</h2>
                  <p className="mt-6 max-w-md text-sm leading-7 text-white/42">{config.description}</p>
                  <Link href={`/blog/${category}`} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold" style={{ color: config.accent }}>
                    View this collection <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="border-t border-white/10">
                  {categoryArticles.map((article) => (
                    <Link key={article.route} href={article.route} className="group grid gap-4 border-b border-white/10 py-8 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div>
                        <h3 className="max-w-3xl text-2xl font-semibold transition-colors group-hover:text-white/68">{article.frontmatter.title}</h3>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/38">{article.frontmatter.description}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-white/28">
                        <span>{article.frontmatter.readingTime}</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" style={{ color: config.accent }} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </main>
  );
}
