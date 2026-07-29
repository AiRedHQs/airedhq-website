import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Eye,
  FileSearch,
  GitBranch,
  Landmark,
  MessageSquareQuote,
  ScanSearch,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const capabilities = [
  [FileSearch, "Resume intelligence", "Structure skills, experience and role evidence without hiding the source resume."],
  [BrainCircuit, "Candidate intelligence", "Prioritize review with explainable signals and human control."],
  [GitBranch, "Connected pipeline", "Move applications, interviews, feedback and offers through one visible workflow."],
  [Eye, "Transparent decisions", "Keep scoring, ownership and decision context inspectable by the hiring team."],
] as const;

const stages = ["Applied", "Screened", "Interviewed", "Decision", "Offer"];

const trustSignals = [
  [ScanSearch, "Job-post quality", "Detect missing responsibilities, vague requirements and low-effort listings before publication."],
  [BrainCircuit, "Job-fit score", "Compare role expectations with candidate evidence and explain the strongest matches and gaps."],
  [BadgeIndianRupee, "Salary and benefits", "Encourage clear compensation ranges, benefits, work mode and employment terms."],
  [MessageSquareQuote, "Company reviews", "Make moderated employee and candidate perspectives available when sufficient verified feedback exists."],
  [UsersRound, "Leadership context", "Show publicly disclosed leadership information and the people accountable for company direction."],
  [Landmark, "Company financials", "Surface verified or publicly available financial context without presenting estimates as facts."],
] as const;

export default function HiARedProductExperience() {
  return (
    <main className="overflow-hidden bg-[#050506] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(97,2,245,.16),transparent_34rem)]" />
        <Container className="relative grid max-w-[96rem] items-center gap-12 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
          <div className="relative z-10">
            <Image
              src="/hiared/hiARed Logo Purple Dark Transparent.png"
              alt="hiARed"
              width={900}
              height={300}
              className="h-auto w-44 object-contain"
              priority
            />
            <p className="mt-14 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
              AI recruitment ecosystem · Private beta
            </p>
            <h1 className="mt-6 max-w-[9ch] text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-[.88]">
              Hiring decisions made <span className="text-[#6102f5]">clear.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/55">
              Transparent scoring, intelligent screening and one connected journey from
              application to offer.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-md bg-[#6102f5] px-5 py-3 text-sm font-semibold transition hover:bg-[#7422ff]">
                Join the waitlist <ArrowRight className="size-4" />
              </Link>
              <a href="#system" className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:border-white/35 hover:text-white">
                Explore the system
              </a>
            </div>
          </div>
          <div className="relative min-h-[34rem] lg:min-h-[42rem]">
            <div className="absolute inset-y-[8%] left-0 right-[-8%] flex items-center">
              <Image
                src="/hiared/hiared-product-preview-transparent.webp"
                alt="hiARed recruitment workspace with transparency scoring and hiring pipeline"
                width={1536}
                height={1024}
                className="h-auto w-full object-contain drop-shadow-[0_3rem_6rem_rgba(97,2,245,.18)]"
                priority
              />
            </div>
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

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.68fr_1.32fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
                Why hiARed
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                A job listing should earn a candidate&apos;s <span className="text-[#6102f5]">trust.</span>
              </h2>
            </div>
            <div className="grid content-end gap-8 lg:pt-28">
              <p className="max-w-2xl text-xl leading-8 text-white/70">
                Hiring platforms usually optimize applications. hiARed is designed to improve
                the quality of the opportunity before anyone applies.
              </p>
              <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                {[
                  ["For candidates", "Understand the role, company and trade-offs before investing time."],
                  ["For employers", "Publish credible jobs and attract people who understand the opportunity."],
                  ["For hiring teams", "Make decisions from shared evidence instead of scattered opinions."],
                ].map(([title, description]) => (
                  <article key={title} className="bg-[#050506] p-6">
                    <CheckCircle2 className="size-5 text-[#8a4cff]" />
                    <h3 className="mt-7 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/42">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="system" className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">The decision system</p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Know what happened.<br />Understand <span className="text-[#6102f5]">why.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/48">
                Speed matters, but hiring cannot become a black box. hiARed keeps evidence,
                scores, stages and ownership visible to the people responsible for the decision.
              </p>
            </div>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {capabilities.map(([Icon, title, description]) => (
                <article key={title} className="grid gap-5 py-9 sm:grid-cols-[3rem_1fr]">
                  <Icon className="size-6 text-[#8a4cff]" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/45">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#08070b] py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid items-end gap-14 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">Company transparency score</p>
              <p className="mt-8 text-[clamp(8rem,18vw,16rem)] font-semibold leading-[.72] text-[#6102f5]">92</p>
            </div>
            <div className="pb-3">
              <ShieldCheck className="size-9 text-[#8a4cff]" />
              <h2 className="mt-8 max-w-[12ch] text-5xl font-semibold leading-[.98] sm:text-7xl">
                A score should begin a conversation.
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/48">
                A visible framework for compensation clarity, role definition, process quality
                and candidate communication. No silent rejection logic disguised as intelligence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.76fr_1.24fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
                The hiARed USP
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Evaluate the opportunity, not only the <span className="text-[#6102f5]">candidate.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/48">
                hiARed creates a two-way trust system. Candidates are assessed for role fit,
                while employers are encouraged to publish complete, credible and reviewable
                opportunities.
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

      <section className="bg-[#08070b] py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-14 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">
              Company intelligence
            </p>
            <h2 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Know the company behind the <span className="text-[#6102f5]">job.</span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/48">
              A company profile can combine employer disclosures, moderated reviews and
              publicly verifiable information. Every signal carries a visible source and
              availability state.
            </p>
          </div>
          <div className="relative border border-white/10 bg-[#0c0c10] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-md bg-[#6102f5]/15">
                  <Building2 className="size-6 text-[#8a4cff]" />
                </span>
                <div>
                  <p className="font-semibold">Company transparency profile</p>
                  <p className="mt-1 text-xs text-white/38">Sources and verification shown per field</p>
                </div>
              </div>
              <span className="rounded-full border border-[#6102f5]/35 px-3 py-1 text-[10px] text-[#a97cff]">
                Availability varies
              </span>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                ["Salary range", "Employer disclosed"],
                ["Benefits", "Structured details"],
                ["Leadership", "Publicly verified"],
                ["Employee voice", "Moderated reviews"],
                ["Financial context", "Public records"],
                ["Hiring experience", "Candidate feedback"],
              ].map(([label, source]) => (
                <div key={label} className="bg-[#0c0c10] p-5">
                  <p className="text-sm font-medium">{label}</p>
                  <p className="mt-2 text-[11px] text-white/35">{source}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-5 text-white/30">
              hiARed should never fabricate missing company information. Unavailable,
              unverified and employer-supplied data are labeled distinctly.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">One connected journey</p>
          <h2 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">Every stakeholder. One hiring truth.</h2>
          <div className="mt-20 grid gap-0 md:grid-cols-5">
            {stages.map((stage, index) => (
              <div key={stage} className="relative border-l border-white/12 py-5 pl-5 md:min-h-48 md:border-l-0 md:border-t md:pl-0 md:pt-7">
                <span className="absolute -left-1.5 top-7 size-3 rounded-full bg-[#6102f5] md:-top-1.5 md:left-0" />
                <p className="font-mono text-[10px] text-[#8a4cff]">0{index + 1}</p>
                <h3 className="mt-5 text-lg font-semibold">{stage}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="relative grid min-h-[34rem] max-w-[96rem] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_100%,rgba(97,2,245,.32),transparent_55%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8a4cff]">Private beta</p>
            <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">Build a hiring process people can trust.</h2>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#6102f5] px-5 py-3 text-sm font-semibold">
              Join the waitlist <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
