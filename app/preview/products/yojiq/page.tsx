import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  CircleDollarSign,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Umbrella,
  WalletCards,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const journey = [
  [WalletCards, "Plan the month", "Create a deliberate budget across the categories that shape everyday life."],
  [PiggyBank, "Build resilience", "Turn an emergency-fund target into a visible and achievable progression."],
  [Umbrella, "Understand protection", "Keep insurance context and renewal awareness alongside the rest of the plan."],
  [ChartNoAxesCombined, "See the longer view", "Connect savings goals and investment summaries to future priorities."],
] as const;

export default function YojIQPreviewPage() {
  return (
    <main className="overflow-hidden bg-[#070a07] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_88%,rgba(140,223,40,.13),transparent_32rem)]" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] place-items-center py-20 text-center">
          <div>
            <Image
              src="/yojiq/YOJIQLogoTranparent for Dark Background 820X208.png"
              alt="YojIQ"
              width={820}
              height={208}
              className="mx-auto h-auto w-44 object-contain"
              priority
            />
            <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cdf28]">
              Manual-first financial planning · Private beta
            </p>
            <h1 className="mx-auto mt-6 max-w-[14ch] text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-[.9]">
              Make money feel <span className="text-[#8cdf28]">understandable.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/55">
              A calmer way to plan budgets, build an emergency fund and understand the
              financial habits shaping your future.
            </p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#8cdf28] px-5 py-3 text-sm font-semibold text-[#071006]">
              Join the waitlist <ArrowRight className="size-4" />
            </Link>
            <div className="relative mx-auto mt-10 h-[30rem] w-full max-w-3xl">
              <div className="absolute left-1/2 top-16 size-[32rem] -translate-x-1/2 rounded-full border border-[#8cdf28]/12" />
              <Image
                src="/yojiq/yojiq-product-preview-transparent-clean.webp"
                alt="YojIQ personal finance application"
                fill
                priority
                className="object-contain drop-shadow-[0_3rem_5rem_rgba(140,223,40,.14)]"
                sizes="(max-width: 768px) 90vw, 48rem"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cdf28]">Why YojIQ</p>
            <h2 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Financial tools show numbers. People need a <span className="text-[#8cdf28]">plan.</span>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-xl leading-8 text-white/68">
              Personal finance is often split between expense trackers, calculators,
              insurance documents and investment apps. YojIQ brings planning decisions
              into one understandable view.
            </p>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {[
                ["Less financial noise", "Focus on decisions instead of endless transaction detail."],
                ["One connected picture", "See today’s budget beside protection and future goals."],
                ["Progress you can explain", "Understand why a goal is on track or needs attention."],
                ["No false certainty", "Planning support without presenting guidance as guaranteed outcomes."],
              ].map(([title, description]) => (
                <article key={title} className="bg-[#070a07] p-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/40">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative grid aspect-square max-w-xl place-items-center justify-self-center rounded-full border border-[#8cdf28]/18">
            <div className="absolute inset-[14%] rounded-full border border-[#8cdf28]/12" />
            <div className="absolute inset-[29%] rounded-full border border-[#8cdf28]/10" />
            <LockKeyhole className="size-24 text-[#8cdf28]" strokeWidth={1.2} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cdf28]">The YojIQ USP</p>
            <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
              Privacy begins with what the product <span className="text-[#8cdf28]">doesn&apos;t collect.</span>
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/48">
              YojIQ starts with intentional manual planning. Users stay aware of every
              number they enter and remain in control of the financial picture they build.
            </p>
            <div className="mt-10 space-y-5">
              {[
                "No bank connection required for the core planning experience",
                "Clear separation between entered values and calculated guidance",
                "Sensitive financial context treated as private by design",
              ].map((item) => (
                <div key={item} className="flex gap-4 text-sm text-white/65">
                  <ShieldCheck className="size-5 shrink-0 text-[#8cdf28]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#090d09] py-28 sm:py-36">
        <Container className="max-w-[90rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cdf28]">One planning journey</p>
          <h2 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
            See the next decision before it becomes urgent.
          </h2>
          <div className="relative mt-24">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-[#8cdf28] via-[#8cdf28]/30 to-transparent md:left-1/2" />
            {journey.map(([Icon, title, description], index) => (
              <article
                key={title}
                className={`relative mb-10 ml-14 min-h-64 w-auto border border-white/8 bg-[#0b100b] p-7 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  index % 2 ? "md:ml-auto" : ""
                }`}
              >
                <span className={`absolute top-8 size-3 rounded-full bg-[#8cdf28] shadow-[0_0_24px_rgba(140,223,40,.7)] ${
                  index % 2 ? "-left-[3.05rem]" : "-left-[3.05rem] md:-right-[3.05rem] md:left-auto"
                }`} />
                <Icon className="size-7 text-[#8cdf28]" />
                <p className="mt-10 font-mono text-[10px] text-[#8cdf28]">0{index + 1}</p>
                <h3 className="mt-4 text-3xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/42">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="grid max-w-[96rem] gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <CircleDollarSign className="size-9 text-[#8cdf28]" />
            <h2 className="mt-8 text-5xl font-semibold leading-[.95] sm:text-7xl">
              Guidance without pretending to know your future.
            </h2>
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {[
              ["Budget health", "Understand whether planned spending remains aligned with income and priorities."],
              ["Emergency readiness", "See progress against a user-defined safety-fund target."],
              ["Insurance awareness", "Track policy context and renewal information without replacing professional advice."],
              ["Investment summary", "Bring manually entered portfolio context into the wider plan without promising returns."],
            ].map(([title, description]) => (
              <article key={title} className="grid gap-4 py-8 sm:grid-cols-[12rem_1fr]">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-white/42">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid min-h-[34rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(140,223,40,.25),transparent_58%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8cdf28]">Private beta</p>
            <h2 className="mx-auto mt-6 max-w-[13ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Plan with clarity. Move with confidence.
            </h2>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#8cdf28] px-5 py-3 text-sm font-semibold text-[#071006]">
              Join the waitlist <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
