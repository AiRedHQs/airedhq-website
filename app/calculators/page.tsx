import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Radar } from "lucide-react";
import { CalculatorIcon } from "@/components/calculators/calculator-icon";
import { Container } from "@/components/layout/container";
import { calculators } from "@/constants/calculators";
import { siteConfig } from "@/constants/brand";

export const metadata: Metadata = {
  title: "Free Financial Calculators - SIP, EMI, FD, PPF and More",
  description:
    "Use free financial calculators for SIP, lump sum investments, home and car loan EMI, FD, RD, PPF, inflation, retirement and emergency funds.",
  keywords: [
    "financial calculators",
    "SIP calculator",
    "EMI calculator",
    "investment calculator",
    "loan calculator India",
  ],
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "Free Financial Calculators | AiRedHQ",
    description:
      "Transparent calculators for investing, loans, deposits and financial planning.",
    url: `${siteConfig.url}/calculators`,
    type: "website",
    images: ["/airedhq/og-default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Financial Calculators | AiRedHQ",
    description: "Transparent calculators for investing, loans, deposits and planning.",
    images: ["/airedhq/og-default.png"],
  },
};

export default function CalculatorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AiRedHQ Financial Calculators",
    url: `${siteConfig.url}/calculators`,
    hasPart: calculators.map((item) => ({
      "@type": "WebApplication",
      name: item.name,
      url: `${siteConfig.url}/calculators/${item.slug}`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
    })),
  };
  return (
    <main
      className="page-theme bg-[#050608] text-white"
      style={
        {
          "--page-accent": "#a8ea52",
          "--calculator-accent": "#a8ea52",
        } as React.CSSProperties
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="pb-20 pt-28 sm:pb-28 sm:pt-40">
        <Container className="max-w-[92rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[color:var(--calculator-accent)]">
            Financial planning tools
          </p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h1 className="max-w-[11ch] text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.88]">
              Calculate first. Decide with context.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/52">
              Explore transparent, adjustable calculators for investments, loans, deposits
              and essential financial goals. Every result shows its assumptions and
              remains an educational estimate.
            </p>
          </div>
        </Container>
      </section>
      <section className="pb-20 sm:pb-28">
        <Container className="max-w-[92rem]">
          <Link
            href="/investment-risk-profiler"
            className="group grid gap-8 border-y border-white/10 py-9 transition-colors hover:border-[color:var(--calculator-accent)]/45 md:grid-cols-[auto_1fr_auto] md:items-center"
          >
            <span className="grid size-14 place-items-center rounded-full bg-[color:var(--calculator-accent)]/10 text-[color:var(--calculator-accent)]">
              <Radar className="size-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-2xl font-semibold">
                Investment Risk Profiler
              </span>
              <span className="mt-2 block max-w-3xl text-sm leading-6 text-white/48">
                Explore how financial capacity, behaviour and time horizon can shape an
                educational equity, debt and gold allocation.
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--calculator-accent)]">
              Start assessment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Container>
      </section>
      <section className="pb-28 sm:pb-36">
        <Container className="max-w-[92rem]">
          {(
            ["investing", "loans", "planning", "government", "tax", "markets"] as const
          ).map((category) => {
            const items = calculators.filter((item) => item.category === category);
            if (!items.length) return null;
            return (
              <section
                key={category}
                className="mb-20"
                aria-labelledby={`category-${category}`}
              >
                <div className="mb-7 flex items-end justify-between gap-5">
                  <h2
                    id={`category-${category}`}
                    className="text-3xl font-semibold capitalize sm:text-4xl"
                  >
                    {category}
                  </h2>
                  <span className="text-xs text-white/35">{items.length} tools</span>
                </div>
                <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((calculator) => (
                    <Link
                      key={calculator.slug}
                      href={`/calculators/${calculator.slug}`}
                      className="group flex min-h-64 flex-col justify-between bg-[#07090c] p-7 transition-colors hover:bg-white/[0.055] sm:p-9"
                    >
                      <CalculatorIcon
                        name={calculator.icon}
                        className="size-7 text-[color:var(--calculator-accent)]"
                      />
                      <div className="mt-12">
                        <h3 className="text-2xl font-semibold">{calculator.name}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/45">
                          {calculator.description}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--calculator-accent)]">
                          Open calculator{" "}
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </Container>
      </section>
    </main>
  );
}
