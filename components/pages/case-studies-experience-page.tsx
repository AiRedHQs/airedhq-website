import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Eye,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const cases = [
  {
    id: "hiared",
    number: "01",
    label: "AI Recruitment Ecosystem",
    title: "Making hiring intelligence explainable.",
    challenge:
      "Hiring teams work across fragmented tools, candidates face low-context job posts, and automated scoring can make consequential decisions harder to understand.",
    response:
      "hiARed connects job-post quality, company transparency, resume intelligence, job-fit signals and end-to-end hiring stages in one multi-role product.",
    evidence:
      "A working private-beta product experience with recruiter dashboards, transparency scoring, candidate screening and connected pipeline workflows.",
    demonstrates:
      "Explainable AI, human review, multi-role SaaS architecture and trust-sensitive product design.",
    image: "/hiared/hiared-product-preview-transparent.webp",
    href: "/products/hiared",
    accent: "#6102f5",
    Icon: BrainCircuit,
  },
  {
    id: "gobazaar",
    number: "02",
    label: "Hyperlocal Discovery Platform",
    title: "Turning a city into an understandable discovery layer.",
    challenge:
      "Local businesses, bazaars, events and offers are scattered across maps, social posts and incomplete directories, making nearby discovery unreliable.",
    response:
      "GoBazaar organizes local intent around an interactive map, structured place profiles, categories, current offers, events and merchant-managed context.",
    evidence:
      "An India-focused private-beta product interface covering local search, map markers, discovery categories, nearby offers and merchant workflows.",
    demonstrates:
      "Location-aware UX, search and mapping systems, marketplace trust and consumer-to-merchant product architecture.",
    image: "/gobazaar/gobazaar-product-preview-transparent.webp",
    href: "/products/gobazaar",
    accent: "#2388ff",
    Icon: MapPinned,
  },
  {
    id: "yojiq",
    number: "03",
    label: "Privacy-first Financial Planning",
    title: "Designing financial clarity without demanding more data.",
    challenge:
      "Budgeting, emergency planning, insurance and long-term goals often live in separate tools, while connected finance products can ask for more sensitive data than users want to share.",
    response:
      "YojIQ brings manual-first budgeting, emergency-fund progress, insurance awareness, savings goals and investment summaries into one calm mobile journey.",
    evidence:
      "An MVP-stage product experience demonstrating monthly planning, financial readiness and user-controlled data entry.",
    demonstrates:
      "Privacy-aware architecture, progressive disclosure, mobile product design and responsible decision support.",
    image: "/yojiq/yojiq-product-preview-transparent-clean.webp",
    href: "/products/yojiq",
    accent: "#8cdf28",
    Icon: ShieldCheck,
  },
] as const;

export function CaseStudiesExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_65%,rgba(97,2,245,.11),transparent_28rem),radial-gradient(circle_at_74%_30%,rgba(35,136,255,.09),transparent_30rem)]" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-16 py-20 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/38">
              Case studies · Product evidence
            </p>
            <h1 className="mt-7 max-w-[9ch] text-[clamp(4rem,7vw,7.4rem)] font-semibold leading-[.89]">
              Proof, documented with <span className="text-[#8a4cff]">restraint.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/52">
              Three products. Three real problem spaces. No invented customers, inflated
              outcomes or placeholder success metrics.
            </p>
          </div>
          <div className="relative min-h-[34rem]">
            <div className="absolute right-0 top-[4%] w-[70%]">
              <Image src={cases[0].image} alt="" width={1536} height={1024} className="h-auto w-full object-contain opacity-75" priority />
            </div>
            <div className="absolute bottom-[2%] left-[2%] w-[58%]">
              <Image src={cases[1].image} alt="" width={1693} height={929} className="h-auto w-full object-contain opacity-80" priority />
            </div>
            <div className="absolute bottom-[2%] right-[2%] w-[24%]">
              <Image src={cases[2].image} alt="" width={1536} height={1024} className="h-auto w-full object-contain" priority />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8">
        <Container className="grid max-w-[96rem] divide-y divide-white/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["3", "First-party product cases"],
            ["0", "Unverified customer metrics"],
            ["Private beta / MVP", "Evidence status shown openly"],
          ].map(([value, label]) => (
            <div key={label} className="py-8 md:px-10 first:pl-0">
              <p className="text-xl font-semibold">{value}</p>
              <p className="mt-2 text-xs text-white/35">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                How to read these stories
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Product progress is not the same as market <span className="text-[#8a4cff]">proof.</span>
              </h2>
            </div>
            <div className="border-t border-white/10">
              {[
                ["Challenge", "The documented product problem and the operating constraints around it."],
                ["Product response", "What AiRedHQ has designed and engineered to address that problem."],
                ["Current evidence", "What exists today, with product maturity stated explicitly."],
                ["What it demonstrates", "The transferable product and engineering capability behind the work."],
              ].map(([title, description], index) => (
                <article key={title} className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[3rem_12rem_1fr]">
                  <span className="font-mono text-[10px] text-white/25">0{index + 1}</span>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-white/42">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {cases.map((study, index) => {
        const Icon = study.Icon;
        return (
          <article
            key={study.id}
            className={index % 2 ? "bg-[#07101b] py-28 sm:py-36" : "bg-[#08070b] py-28 sm:py-36"}
          >
            <Container className="max-w-[96rem]">
              <div className="grid items-start gap-16 lg:grid-cols-[.76fr_1.24fr]">
                <div className="lg:sticky lg:top-28 lg:h-fit">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs" style={{ color: study.accent }}>{study.number}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/35">{study.label}</span>
                  </div>
                  <Icon className="mt-14 size-9" style={{ color: study.accent }} />
                  <h2 className="mt-8 text-5xl font-semibold leading-[.95] sm:text-7xl">{study.title}</h2>
                  <Link href={study.href} className="mt-9 inline-flex items-center gap-3 text-sm font-semibold" style={{ color: study.accent }}>
                    Explore the product <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div>
                  <div className="relative min-h-[32rem]">
                    <Image
                      src={study.image}
                      alt={`${study.id} product interface`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 90vw, 55vw"
                    />
                  </div>
                  <dl className="mt-10 border-t border-white/10">
                    {[
                      ["Challenge", study.challenge],
                      ["Product response", study.response],
                      ["Current evidence", study.evidence],
                      ["What it demonstrates", study.demonstrates],
                    ].map(([term, detail]) => (
                      <div key={term} className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[11rem_1fr]">
                        <dt className="text-sm font-semibold">{term}</dt>
                        <dd className="text-sm leading-7 text-white/45">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Container>
          </article>
        );
      })}

      <section className="py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <Eye className="size-8 text-[#5a9fe8]" />
            <h2 className="mt-8 text-5xl font-semibold leading-[.95] sm:text-7xl">
              What we will publish when the evidence exists.
            </h2>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {[
              "Verified adoption and usage",
              "Measured workflow improvements",
              "Approved customer narratives",
              "Performance and reliability outcomes",
            ].map((item) => (
              <div key={item} className="min-h-44 bg-[#050608] p-7">
                <CheckCircle2 className="size-5 text-[#5a9fe8]" />
                <p className="mt-10 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid min-h-[34rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(97,2,245,.26),transparent_58%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
              Build the next documented story
            </p>
            <h2 className="mx-auto mt-6 max-w-[13ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Bring us a problem worth solving properly.
            </h2>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black">
              Start a project <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
