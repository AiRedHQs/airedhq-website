import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Info, UserRound } from "lucide-react";
import { ArticleAdSlot } from "@/components/blog/article-ad-slot";
import { ArticleEditorialImage } from "@/components/blog/article-editorial-image";
import { ArticleReadingProgress } from "@/components/blog/article-reading-progress";
import { ArticleTableOfContents } from "@/components/blog/article-table-of-contents";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import type { BlogArticle } from "@/src/types/blog";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function BlogArticlePage({ article }: { article: BlogArticle }) {
  const [first, second, third, fourth, fifth] = article.contentSegments;
  const [firstAd, secondAd] = article.adSlots;
  const [firstVisual, secondVisual, thirdVisual, fourthVisual] = article.inlineVisuals;

  return (
    <main
      className="page-theme overflow-hidden bg-[#050608] text-white"
      style={{ "--article-accent": article.accent, "--page-accent": article.accent } as CSSProperties}
    >
      <ArticleReadingProgress accent={article.accent} />

      <header className="relative pt-16 sm:pt-24">
        <Container className="max-w-[92rem]">
          <Breadcrumb
            className="text-white/38"
            items={[
              { label: "Notes", href: "/blog" },
              { label: article.categoryLabel },
            ]}
          />
          <div className="grid gap-12 pb-16 pt-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:pb-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[color:var(--article-accent)]">
                {article.categoryLabel}
              </p>
              <h1 className="mt-7 max-w-[15ch] text-[clamp(3rem,6vw,6.6rem)] font-semibold leading-[.91] tracking-[-.02em]">
                {article.frontmatter.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/52 sm:text-xl">
                {article.frontmatter.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/38">
                <span className="inline-flex items-center gap-2"><UserRound className="size-4" />{article.author}</span>
                <span className="inline-flex items-center gap-2"><CalendarDays className="size-4" />{dateFormatter.format(new Date(article.frontmatter.publishedAt))}</span>
                <span className="inline-flex items-center gap-2"><Clock3 className="size-4" />{article.frontmatter.readingTime}</span>
              </div>
            </div>
            <ArticleEditorialImage visual={article.heroVisual} priority />
          </div>
        </Container>
      </header>

      <div data-blog-article className="border-t border-white/8 py-16 sm:py-24">
        <Container className="max-w-[92rem]">
          <div className="lg:grid lg:grid-cols-[14rem_minmax(0,48rem)] lg:justify-center lg:gap-16 xl:grid-cols-[16rem_minmax(0,52rem)] xl:gap-24">
            <ArticleTableOfContents items={article.tableOfContents} />
            <article className="min-w-0">
              {article.disclaimer ? (
                <aside className="mb-12 flex gap-4 bg-white/[0.035] p-6 text-sm leading-6 text-white/52">
                  <Info className="mt-0.5 size-5 shrink-0 text-[color:var(--article-accent)]" aria-hidden="true" />
                  <p><strong className="font-semibold text-white/82">Important context.</strong> {article.disclaimer}</p>
                </aside>
              ) : null}

              <MarkdownContent content={first} />
              {firstAd ? <ArticleAdSlot key={`${article.slug}-${firstAd.id}`} slot={firstAd} /> : null}
              <MarkdownContent content={second} />
              <ArticleEditorialImage visual={firstVisual} className="my-14 sm:my-20" />
              <MarkdownContent content={third} />
              <ArticleEditorialImage visual={secondVisual} className="my-14 sm:my-20" />
              {secondAd ? <ArticleAdSlot key={`${article.slug}-${secondAd.id}`} slot={secondAd} /> : null}
              <MarkdownContent content={fourth} />
              <ArticleEditorialImage visual={thirdVisual} className="my-14 sm:my-20" />
              <MarkdownContent content={fifth} />
              <ArticleEditorialImage visual={fourthVisual} className="my-14 sm:my-20" />

              {article.faqs.length ? (
                <section className="mt-20" aria-labelledby="article-faqs">
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[color:var(--article-accent)]">Common questions</p>
                  <h2 id="article-faqs" className="mt-5 text-4xl font-semibold sm:text-5xl">Frequently asked questions</h2>
                  <div className="mt-10 border-t border-white/10">
                    {article.faqs.map((faq) => (
                      <details key={faq.question} className="group border-b border-white/10 py-6">
                        <summary className="cursor-pointer list-none pr-8 text-lg font-semibold marker:hidden">
                          {faq.question}
                        </summary>
                        <div className="pt-4"><MarkdownContent content={faq.answer} /></div>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="mt-20 bg-white/[0.04] p-7 sm:p-10" aria-labelledby="article-cta">
                <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[color:var(--article-accent)]">Built from product experience</p>
                <h2 id="article-cta" className="mt-5 max-w-xl text-3xl font-semibold sm:text-4xl">{article.cta.description}</h2>
                <Link
                  href={article.cta.href}
                  className="mt-8 inline-flex items-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[color:var(--article-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--article-accent)]"
                >
                  {article.cta.label}<ArrowRight className="size-4" />
                </Link>
              </section>
            </article>
          </div>
        </Container>
      </div>

      {article.relatedArticles.length ? (
        <section className="border-t border-white/8 py-20 sm:py-28">
          <Container className="max-w-[92rem]">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/30">Continue reading</p>
                <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">More from this field.</h2>
              </div>
              <div className="border-t border-white/10">
                {article.relatedArticles.map((related) => (
                  <Link key={related.href} href={related.href} className="group grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <h3 className="text-xl font-semibold transition-colors group-hover:text-[color:var(--article-accent)]">{related.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/38">{related.description}</p>
                    </div>
                    <ArrowRight className="size-5 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--article-accent)]" />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
