import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  BrainCircuit,
  CheckCircle2,
  Landmark,
  MessageSquareQuote,
  ScanSearch,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { HiARedProductEvidence } from "@/components/products/hiared-product-evidence";

const stages = ["Applied", "Screened", "Interviewed", "Decision", "Offer"];

const trustSignals = [
  [
    ScanSearch,
    "Job-post quality",
    "Detect missing responsibilities, vague requirements and low-effort listings before publication.",
  ],
  [
    BrainCircuit,
    "Job-fit score",
    "Compare role expectations with candidate evidence and explain the strongest matches and gaps.",
  ],
  [
    BadgeIndianRupee,
    "Salary and benefits",
    "Encourage clear compensation ranges, benefits, work mode and employment terms.",
  ],
  [
    MessageSquareQuote,
    "Company reviews",
    "Make moderated employee and candidate perspectives available when sufficient verified feedback exists.",
  ],
  [
    UsersRound,
    "Leadership context",
    "Show publicly disclosed leadership information and the people accountable for company direction.",
  ],
  [
    Landmark,
    "Company financials",
    "Surface verified or publicly available financial context without presenting estimates as facts.",
  ],
] as const;

export default function HiARedProductExperience() {
  return (
    <main className="overflow-hidden bg-[#050506] text-white">
      <section className="relative lg:min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(97,2,245,.16),transparent_34rem)]" />
        <Container className="relative grid max-w-[96rem] items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 lg:py-20">
          <div className="relative z-10">
            <Image
              src="/hiared/hiARed Logo Purple Dark Transparent.png"
              alt="hiARed"
              width={900}
              height={300}
              className="h-auto w-40 object-contain sm:w-44"
              priority
            />
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a4cff] sm:mt-10 sm:tracking-[0.24em] lg:mt-14">
              AI recruitment ecosystem · Private beta
            </p>
            <h1 className="display-signature text-safe mt-5 max-w-[9ch] font-semibold sm:mt-6">
              Hiring decisions made <span className="text-[#6102f5]">clear.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/58 sm:mt-8">
              Transparent scoring, intelligent screening and one connected journey from
              application to offer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-3 rounded-md bg-[#6102f5] px-5 py-3 text-sm font-semibold transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#7422ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b38aff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050506]"
              >
                Join the waitlist <ArrowRight className="size-4" />
              </Link>
              <a
                href="#system"
                className="inline-flex min-h-11 items-center rounded-md border border-white/15 px-5 py-3 text-sm text-white/75 transition-colors duration-300 hover:border-[#8a4cff]/70 hover:bg-[#6102f5]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a4cff]"
              >
                Explore the system
              </a>
            </div>
          </div>
          <div className="relative flex min-h-[19rem] items-center sm:min-h-[27rem] lg:min-h-[42rem]">
            <Image
              src="/hiared/hiared-product-preview-transparent.webp"
              alt="hiARed recruitment workspace with transparency scoring and hiring pipeline"
              width={1536}
              height={1024}
              className="h-auto w-[108%] max-w-none -translate-x-[4%] object-contain drop-shadow-[0_3rem_6rem_rgba(97,2,245,.18)] sm:w-full sm:translate-x-0 lg:w-[108%]"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8">
        <Container className="grid max-w-[96rem] divide-y divide-white/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["Private beta", "Current product status"],
            ["Human-reviewed AI", "Decision philosophy"],
            ["Application to offer", "Connected hiring journey"],
          ].map(([value, label]) => (
            <div key={value} className="px-0 py-8 md:px-10 first:pl-0">
              <p className="text-xl font-semibold">{value}</p>
              <p className="mt-2 text-xs text-white/38">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.68fr_1.32fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
                Why hiARed
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                A job listing should earn a candidate&apos;s{" "}
                <span className="text-[#6102f5]">trust.</span>
              </h2>
            </div>
            <div className="grid content-end gap-8 lg:pt-28">
              <p className="max-w-2xl text-xl leading-8 text-white/70">
                Hiring platforms usually optimize applications. hiARed is designed to
                improve the quality of the opportunity before anyone applies.
              </p>
              <div className="divide-y divide-white/10 border-y border-white/10">
                {[
                  [
                    "For candidates",
                    "Understand the role, company and trade-offs before investing time.",
                  ],
                  [
                    "For employers",
                    "Publish credible jobs and attract people who understand the opportunity.",
                  ],
                  [
                    "For hiring teams",
                    "Make decisions from shared evidence instead of scattered opinions.",
                  ],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="grid gap-3 py-6 sm:grid-cols-[2rem_10rem_1fr] sm:items-start sm:gap-5"
                  >
                    <CheckCircle2 className="size-5 text-[#8a4cff]" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm leading-6 text-white/48">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="system" className="scroll-mt-20 py-20 md:py-28 lg:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
                The decision system
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Know what happened.
                <br />
                Understand <span className="text-[#6102f5]">why.</span>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-xl text-lg leading-8 text-white/58">
                Explore the product through five real workflows. Every signal stays
                connected to its source, owner and next action.
              </p>
            </div>
          </div>
          <HiARedProductEvidence />
        </Container>
      </section>

      <section className="bg-[#08070b] py-20 md:py-28 lg:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid items-end gap-14 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
                Company transparency score
              </p>
              <p className="mt-8 text-[clamp(8rem,18vw,16rem)] font-semibold leading-[.72] text-[#6102f5]">
                92
              </p>
            </div>
            <div className="pb-3">
              <ShieldCheck className="size-9 text-[#8a4cff]" />
              <h2 className="mt-8 max-w-[12ch] text-5xl font-semibold leading-[.98] sm:text-7xl">
                A score should begin a conversation.
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/48">
                A visible framework for compensation clarity, role definition, process
                quality and candidate communication. No silent rejection logic disguised
                as intelligence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.76fr_1.24fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
                The hiARed USP
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Evaluate the opportunity, not only the{" "}
                <span className="text-[#6102f5]">candidate.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/48">
                hiARed creates a two-way trust system. Candidates are assessed for role
                fit, while employers are encouraged to publish complete, credible and
                reviewable opportunities.
              </p>
            </div>
            <div className="grid gap-4">
              {trustSignals.map(([Icon, title, description]) => (
                <article
                  key={title}
                  className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[3rem_12rem_1fr] sm:items-start"
                >
                  <Icon className="size-6 text-[#8a4cff]" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-white/44">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 lg:py-36">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
            One connected journey
          </p>
          <h2 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
            Every stakeholder. One hiring truth.
          </h2>
          <div className="mt-12 grid gap-0 md:mt-20 md:grid-cols-5">
            {stages.map((stage) => (
              <div
                key={stage}
                className="relative border-l border-white/12 py-5 pl-5 md:min-h-48 md:border-l-0 md:border-t md:pl-0 md:pt-7"
              >
                <span className="absolute -left-1.5 top-7 size-3 rounded-full bg-[#6102f5] md:-top-1.5 md:left-0" />
                <h3 className="mt-2 text-lg font-semibold">{stage}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="relative grid min-h-[26rem] max-w-[96rem] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_100%,rgba(97,2,245,.32),transparent_55%)] text-center sm:min-h-[30rem] lg:min-h-[34rem]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
              Private beta
            </p>
            <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Build a hiring process people can trust.
            </h2>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#6102f5] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#7422ff] hover:text-white"
            >
              Join the waitlist <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
