import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BrainCircuit,
  Code2,
  MessageSquareText,
  Search,
  Shapes,
} from "lucide-react";
import { CareerApplicationForm } from "@/components/forms/career-application-form";
import { Container } from "@/components/layout/container";

const disciplines = [
  [Shapes, "Product design", "Research, interaction design, systems thinking and visual craft."],
  [Code2, "Engineering", "Web, mobile, cloud and product architecture built for sustained use."],
  [BrainCircuit, "Applied AI", "Practical intelligence with evaluation, human review and clear boundaries."],
  [Blocks, "Product operations", "The discipline required to move ideas through launch and continuous improvement."],
] as const;

export function CareersExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(92svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(140,223,40,.08),transparent_28rem),radial-gradient(circle_at_50%_75%,rgba(35,136,255,.09),transparent_30rem)]" />
        <Container className="relative flex min-h-[calc(92svh-4rem)] max-w-[96rem] flex-col justify-end pb-20 pt-24">
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#8cdf28]">
            Careers · Build the company through the products
          </p>
          <h1 className="mt-7 max-w-[13ch] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[.88]">
            Work on problems that refuse easy <span className="text-[#8cdf28]">answers.</span>
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 sm:flex-row">
            <p className="max-w-xl text-base leading-7 text-white/50">
              AiRedHQ is building a culture for product-minded designers, engineers and
              operators who care about clarity, evidence and the quality of the finished work.
            </p>
            <Link href="#open-roles" className="inline-flex items-center gap-3 text-sm font-semibold text-[#8cdf28]">
              View open roles <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">The work</p>
            <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
              Internal products. Partner platforms. One standard of <span className="text-[#8cdf28]">care.</span>
            </h2>
          </div>
          <div className="grid gap-x-12 sm:grid-cols-2">
            {disciplines.map(([Icon, title, description]) => (
              <article key={title} className="border-t border-white/10 py-8">
                <Icon className="size-5 text-[#8cdf28]" />
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/42">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-40">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">How we want to work</p>
          <div className="mt-16 grid gap-16 lg:grid-cols-3">
            {[
              ["Think in products", "Understand the user, operating context and consequences before reaching for implementation."],
              ["Show the reasoning", "Make decisions discussable. Good work should survive questions, not depend on presentation."],
              ["Finish with care", "Accessibility, performance, details and maintainability are part of the product, not cleanup."],
            ].map(([title, description], index) => (
              <article key={title} className={index === 1 ? "lg:mt-24" : ""}>
                <span className="block h-px w-12 bg-[#8cdf28]" aria-hidden="true" />
                <h2 className="mt-7 text-4xl font-semibold leading-tight">{title}</h2>
                <p className="mt-5 text-sm leading-7 text-white/42">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#080a0d] py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">Hiring process</p>
            <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Conversation before ceremony.
            </h2>
          </div>
          <div className="border-t border-white/10">
            {[
              [MessageSquareText, "Context", "A conversation about your interests, work and the problems you want to solve."],
              [Search, "Practical review", "A discussion of real work, decisions and tradeoffs rather than abstract performance."],
              [Blocks, "Working fit", "Alignment on the role, collaboration style and expectations before either side commits."],
            ].map(([Icon, title, description]) => (
              <article key={title as string} className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[3rem_12rem_1fr]">
                <Icon className="size-5 text-[#8cdf28]" />
                <h3 className="font-semibold">{title as string}</h3>
                <p className="text-sm leading-7 text-white/42">{description as string}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="open-roles" className="scroll-mt-20 py-28 sm:py-40">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#8cdf28]">
              Open application
            </p>
            <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Tell us where you could contribute.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/42">
              No approved vacancies are published today, but product-minded specialists can
              submit an open application for future consideration.
            </p>
          </div>
          <div className="relative bg-[#f3f4f2] p-6 text-[#090b0e] sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[.28] [background-image:linear-gradient(rgba(9,11,14,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(9,11,14,.06)_1px,transparent_1px)] [background-size:32px_32px]"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="mb-8 border-b border-black/10 pb-6 text-xl font-semibold">
                Career application
              </p>
              <CareerApplicationForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
