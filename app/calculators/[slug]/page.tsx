import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ArticleAdSlot } from "@/components/blog/article-ad-slot";
import { CalculatorIcon } from "@/components/calculators/calculator-icon";
import { FinanceCalculator } from "@/components/calculators/finance-calculator";
import { CalculatorEducation } from "@/components/calculators/calculator-education";
import { Container } from "@/components/layout/container";
import { calculators, getCalculator } from "@/constants/calculators";
import { siteConfig } from "@/constants/brand";

type Props = { params: Promise<{ slug: string }> };
const adSlots = [
  { id: "article-ad-1" as const, placement: "after-introduction" as const, provider: "adsense" as const, providerSlotId: "6093986231", enabled: true },
  { id: "article-ad-2" as const, placement: "mid-article" as const, provider: "adsense" as const, providerSlotId: "6093986231", enabled: true },
];

export function generateStaticParams() { return calculators.filter(({ published }) => published).map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const calculator = getCalculator((await params).slug);
  if (!calculator) return {};
  const url = `${siteConfig.url}/calculators/${calculator.slug}`;
  return {
    title: calculator.seoTitle,
    description: calculator.seoDescription,
    keywords: calculator.keywords,
    alternates: { canonical: url },
    openGraph: { title: calculator.seoTitle, description: calculator.seoDescription, url, type: "website", siteName: siteConfig.name },
    twitter: { card: "summary_large_image", title: calculator.seoTitle, description: calculator.seoDescription },
  };
}

export default async function CalculatorPage({ params }: Props) {
  const calculator = getCalculator((await params).slug);
  if (!calculator) notFound();
  const related = calculators.filter((item) => item.slug !== calculator.slug && item.category === calculator.category).slice(0, 4);
  const schema = [
    { "@context": "https://schema.org", "@type": "WebApplication", name: calculator.name, description: calculator.seoDescription, url: `${siteConfig.url}/calculators/${calculator.slug}`, applicationCategory: "FinanceApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: calculator.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "Calculators", item: `${siteConfig.url}/calculators` }, { "@type": "ListItem", position: 3, name: calculator.name, item: `${siteConfig.url}/calculators/${calculator.slug}` }] },
  ];

  return (
    <main className="page-theme bg-[#050608] text-white" style={{ "--page-accent": "#a8ea52", "--calculator-accent": "#a8ea52" } as React.CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="pb-16 pt-28 sm:pb-20 sm:pt-40">
        <Container className="max-w-[92rem]">
          <nav aria-label="Breadcrumb" className="text-xs text-white/38"><Link href="/">Home</Link><span className="mx-2">/</span><Link href="/calculators">Calculators</Link><span className="mx-2">/</span><span>{calculator.shortName}</span></nav>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div><div className="flex items-center gap-3 text-[color:var(--calculator-accent)]"><CalculatorIcon name={calculator.icon} className="size-5" /><span className="text-[10px] font-semibold uppercase tracking-[.22em]">Free financial calculator</span></div><h1 className="mt-6 max-w-[13ch] text-[clamp(3.2rem,6.5vw,7rem)] font-semibold leading-[.9]">{calculator.name}</h1></div>
            <p className="max-w-xl text-lg leading-8 text-white/52">{calculator.description} Change every input and see the estimate update immediately.</p>
          </div>
        </Container>
      </section>
      <Container className="max-w-[92rem]"><FinanceCalculator calculator={calculator} /><ArticleAdSlot slot={adSlots[0]} /></Container>
      <section className="py-20 sm:py-28">
        <Container className="max-w-[92rem]">
          <CalculatorEducation calculator={calculator} />
          <ArticleAdSlot slot={adSlots[1]} />
        </Container>
      </section>
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-[92rem]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><h2 className="text-4xl font-semibold sm:text-5xl">Common questions.</h2><div className="border-t border-white/10">{calculator.faqs.map((faq) => <details key={faq.question} className="border-b border-white/10 py-6"><summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary><p className="pt-4 text-sm leading-7 text-white/50">{faq.answer}</p></details>)}</div></div>
          <div className="mt-24"><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/35">Continue calculating</p><div className="mt-7 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <Link key={item.slug} href={`/calculators/${item.slug}`} className="group bg-[#07090c] p-6"><CalculatorIcon name={item.icon} className="size-5 text-[color:var(--calculator-accent)]" /><h3 className="mt-8 font-semibold">{item.name}</h3><ArrowRight className="mt-5 size-4 text-white/30 transition-transform group-hover:translate-x-1" /></Link>)}</div></div>
        </Container>
      </section>
    </main>
  );
}
