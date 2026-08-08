import {
  ArrowDown,
  BriefcaseBusiness,
  Handshake,
  Lightbulb,
  MessagesSquare,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";

const inquiryPaths = [
  [
    BriefcaseBusiness,
    "Build a product",
    "A new platform, application or product experience.",
  ],
  [
    MessagesSquare,
    "Improve a system",
    "A product that needs clearer UX, stronger architecture or room to scale.",
  ],
  [
    Handshake,
    "Explore a partnership",
    "A product, technology or ecosystem collaboration.",
  ],
  [
    Users,
    "Work with us",
    "A conversation about future roles or specialist collaboration.",
  ],
] as const;

const usefulContext = [
  "The problem you are trying to solve",
  "Who needs the product and how they work today",
  "What already exists, if anything",
  "The decision, deadline or constraint shaping the work",
] as const;

export function ContactExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(78svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(35,136,255,.12),transparent_30rem),radial-gradient(circle_at_44%_70%,rgba(97,2,245,.09),transparent_28rem)]" />
        <Container className="relative grid min-h-[calc(78svh-4rem)] max-w-[96rem] items-end gap-16 pb-20 pt-24 lg:grid-cols-[1.18fr_.82fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">
              Contact · Begin with the problem
            </p>
            <h1 className="mt-7 max-w-[10ch] text-[clamp(4rem,7.5vw,8rem)] font-semibold leading-[.88]">
              Tell us what needs to <span className="text-[#2f91e8]">exist.</span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="max-w-lg text-xl leading-8 text-white/55">
              Share the product idea, operating problem or partnership you want to move
              forward. A clear brief is enough to begin.
            </p>
            <a
              href="#project-brief"
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#5a9fe8]"
            >
              Start the brief <ArrowDown className="size-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8">
        <Container className="max-w-[96rem]">
          <div className="grid lg:grid-cols-4">
            {inquiryPaths.map(([Icon, title, description], index) => (
              <article
                key={title}
                className="group py-8 lg:min-h-52 lg:border-l lg:border-white/8 lg:px-8 first:lg:border-l-0 first:lg:pl-0"
              >
                <Icon className="size-5 text-[#5a9fe8] transition-transform duration-300 group-hover:scale-110" />
                <h2 className="mt-8 text-lg font-semibold">{title}</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/38">
                  {description}
                </p>
                {index < inquiryPaths.length - 1 ? (
                  <div className="mt-8 h-px bg-white/8 lg:hidden" />
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="project-brief" className="scroll-mt-20 py-28 sm:py-40">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
              Project brief
            </p>
            <h2 className="mt-6 max-w-[9ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Give us the context, not a polished{" "}
              <span className="text-[#8a4cff]">pitch.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/43">
              Early ideas are welcome. The form helps us understand the conversation you
              need, rather than forcing every inquiry into the same sales process.
            </p>
          </div>

          <div className="relative bg-[#f3f4f2] p-6 text-[#090b0e] sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[.28] [background-image:linear-gradient(rgba(9,11,14,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(9,11,14,.06)_1px,transparent_1px)] [background-size:32px_32px]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-black/40">
                    AiRedHQ inquiry
                  </p>
                  <p className="mt-2 text-xl font-semibold">Start with what you know.</p>
                </div>
                <Lightbulb className="size-6 text-[#2388ff]" aria-hidden="true" />
              </div>
              <div className="[&_label]:text-[#090b0e] [&_input]:border-black/15 [&_input]:bg-white/70 [&_input]:text-[#090b0e] [&_input]:placeholder:text-black/30 [&_select]:border-black/15 [&_select]:bg-white/70 [&_select]:text-[#090b0e] [&_textarea]:border-black/15 [&_textarea]:bg-white/70 [&_textarea]:text-[#090b0e] [&_button]:border-black/15">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#080a0d] py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
              What makes a useful first message
            </p>
            <h2 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Enough signal to find the right next step.
            </h2>
          </div>
          <div className="border-t border-white/10">
            {usefulContext.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-white/10 py-7"
              >
                <span className="size-2 rounded-full bg-[#5a9fe8]" aria-hidden="true" />
                <p className="text-lg font-medium text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">
            Products first. Services with proof.
          </p>
          <p className="mx-auto mt-7 max-w-[18ch] text-4xl font-semibold leading-tight sm:text-6xl">
            We will begin by understanding the decision in front of you.
          </p>
        </Container>
      </section>
    </main>
  );
}
