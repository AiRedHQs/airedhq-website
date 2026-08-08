import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  Braces,
  GraduationCap,
  Orbit,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const experiments = [
  [
    Bot,
    "AI agents",
    "Task-focused systems that can reason across tools while preserving review and accountability.",
    "AI",
  ],
  [
    Braces,
    "Developer tools",
    "Utilities that reduce repetitive engineering work and make product systems easier to understand.",
    "DEV",
  ],
  [
    GraduationCap,
    "Learning technology",
    "Interactive learning experiences shaped by AI, simulation and accessibility.",
    "EDU",
  ],
  [
    Workflow,
    "Business automation",
    "Operational workflows that connect fragmented knowledge, decisions and handoffs.",
    "OPS",
  ],
  [
    Boxes,
    "Spatial products",
    "AR and VR concepts for training, visualization and practical learning.",
    "XR",
  ],
  [
    Sparkles,
    "Experimental products",
    "Small product bets used to test an interaction, need or emerging market.",
    "R&D",
  ],
] as const;

export function InnovationLabExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_38%,rgba(97,2,245,.14),transparent_30rem),radial-gradient(circle_at_45%_72%,rgba(35,136,255,.08),transparent_28rem)]" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-16 py-20 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#8a4cff]">
              Innovation Lab · Experiments before announcements
            </p>
            <h1 className="mt-7 max-w-[9ch] text-[clamp(4rem,7.3vw,7.8rem)] font-semibold leading-[.88]">
              Always building what comes <span className="text-[#8a4cff]">next.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/50">
              A working space for testing AI, immersive technology and product ideas
              before they become roadmaps, services or standalone products.
            </p>
          </div>
          <div
            className="relative grid min-h-[34rem] place-items-center"
            aria-hidden="true"
          >
            <div className="absolute size-[28rem] rounded-full border border-dashed border-white/10" />
            <div className="absolute size-[18rem] rounded-full border border-white/8" />
            <Orbit className="size-24 text-[#8a4cff]" strokeWidth={0.8} />
            {experiments.map(([Icon, , , code], index) => {
              const positions = [
                "left-[8%] top-[10%]",
                "right-[7%] top-[17%]",
                "right-[2%] bottom-[18%]",
                "left-[12%] bottom-[8%]",
                "left-[1%] top-[48%]",
                "right-[32%] bottom-[2%]",
              ];
              return (
                <div
                  key={code}
                  className={`absolute flex items-center gap-3 border border-white/10 bg-[#090b0e] px-4 py-3 ${positions[index]}`}
                >
                  <Icon className="size-4 text-[#8a4cff]" />
                  <span className="font-mono text-[10px] text-white/55">{code}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
              What the lab is for
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
              Reduce uncertainty through <span className="text-[#8a4cff]">making.</span>
            </h2>
          </div>
          <div className="space-y-16 text-2xl leading-10 text-white/68 sm:text-3xl sm:leading-[1.45]">
            <p>Explore a real problem before committing to a product category.</p>
            <p>
              Test whether emerging technology improves the work or merely decorates it.
            </p>
            <p>
              Turn useful experiments into reusable knowledge, prototypes and product
              decisions.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-40">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
            Current fields of inquiry
          </p>
          <div className="mt-14 grid gap-x-14 lg:grid-cols-2">
            {experiments.map(([Icon, title, description, code]) => (
              <article
                key={title}
                className="group grid grid-cols-[3rem_1fr] gap-5 border-t border-white/10 py-9"
              >
                <Icon className="size-5 text-[#8a4cff] transition-transform group-hover:rotate-6 group-hover:scale-110" />
                <div>
                  <div className="flex items-center justify-between gap-6">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <span className="font-mono text-[10px] text-white/25">{code}</span>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/42">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#09070d] py-28 sm:py-40">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
                Experiment path
              </p>
              <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
                Small bets. Explicit learning.
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#8a4cff] to-[#2388ff]" />
              {[
                [
                  "Frame",
                  "Define the user, decision and evidence that would make the experiment useful.",
                ],
                ["Prototype", "Build only enough fidelity to test the risky assumption."],
                [
                  "Observe",
                  "Collect behavior and technical evidence without inflating early signals.",
                ],
                ["Decide", "Advance, reshape, reuse or stop the idea."],
              ].map(([title, description]) => (
                <article key={title} className="relative pb-14 pl-14">
                  <span
                    className="absolute left-2 top-1 size-3 rounded-full bg-[#8a4cff] shadow-[0_0_0_6px_rgba(138,76,255,.1)]"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/42">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid min-h-[32rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(97,2,245,.27),transparent_58%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#8a4cff]">
              A useful experiment starts with a difficult question
            </p>
            <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Explore what the next product could become.
            </h2>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
