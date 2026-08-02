import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  Eye,
  Gauge,
  Layers3,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const operatingPrinciples = [
  [Layers3, "Products before promises", "We establish capability by designing, shipping and improving products of our own."],
  [Eye, "Clarity over theatre", "Interfaces, decisions and technical tradeoffs should remain understandable to the people who use and operate them."],
  [LockKeyhole, "Privacy by design", "Trust is treated as an architectural requirement, especially in recruitment and financial products."],
  [Gauge, "Performance is product quality", "Speed, accessibility and reliability shape the experience as much as visual design does."],
] as const;

const direction = [
  {
    label: "Now",
    title: "Establish the product ecosystem.",
    description:
      "Strengthen hiARed, GoBazaar and YojIQ while documenting the product and engineering lessons behind them.",
  },
  {
    label: "Next",
    title: "Take the products further.",
    description:
      "Expand hiARed, prepare GoBazaar for public launch and move YojIQ from MVP toward a fuller planning experience.",
  },
  {
    label: "Ahead",
    title: "Build the next category of tools.",
    description:
      "Explore AI agents, enterprise platforms, immersive technology and a broader developer ecosystem.",
  },
] as const;

export function AboutExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(35,136,255,.1),transparent_30rem),radial-gradient(circle_at_58%_72%,rgba(97,2,245,.08),transparent_32rem)]" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-16 py-20 lg:grid-cols-[.83fr_1.17fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5a9fe8]">
              About AiRedHQ · Product innovation company
            </p>
            <h1 className="mt-7 max-w-[10ch] text-[clamp(4rem,7.2vw,7.6rem)] font-semibold leading-[.89]">
              We prove what we know by what we <span className="text-[#2f91e8]">build.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/52">
              AiRedHQ designs, launches and improves its own products, then carries that
              operating experience into ambitious work with other organizations.
            </p>
            <Link
              href="/products"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/88"
            >
              Explore our products <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative min-h-[35rem]" aria-label="AiRedHQ product ecosystem">
            <div className="absolute left-[4%] top-[4%] w-[54%]">
              <Image
                src="/airedhq/Logo 2X1 Transparent.png"
                alt="AiRedHQ"
                width={1200}
                height={600}
                className="h-auto w-full opacity-20"
                priority
              />
            </div>
            <div className="absolute right-0 top-[14%] w-[68%]">
              <Image
                src="/hiared/hiared-product-preview-transparent.webp"
                alt="hiARed recruitment product interface"
                width={1536}
                height={1024}
                className="h-auto w-full object-contain opacity-82"
                priority
              />
            </div>
            <div className="absolute bottom-[1%] left-0 w-[59%]">
              <Image
                src="/gobazaar/gobazaar-product-preview-transparent.webp"
                alt="GoBazaar local discovery product interface"
                width={1693}
                height={929}
                className="h-auto w-full object-contain opacity-88"
                priority
              />
            </div>
            <div className="absolute bottom-[1%] right-[2%] w-[24%]">
              <Image
                src="/yojiq/yojiq-product-preview-transparent-clean.webp"
                alt="YojIQ personal finance product interface"
                width={1536}
                height={1024}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-2">
            <article className="lg:pr-16">
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
                Mission
              </p>
              <h2 className="mt-7 max-w-[13ch] text-5xl font-semibold leading-[.96] sm:text-7xl">
                Design, build, launch and scale products that create meaningful outcomes.
              </h2>
            </article>
            <article className="flex flex-col justify-end lg:border-l lg:border-white/10 lg:pl-16">
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
                Vision
              </p>
              <p className="mt-7 max-w-xl text-2xl font-medium leading-9 text-white/72 sm:text-3xl sm:leading-10">
                Become a globally respected product innovation company known for practical AI,
                immersive technology and beautifully engineered software.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-40">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.68fr_1.32fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
                The operating model
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Products create the <span className="text-[#8a4cff]">proof.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                We encounter the same difficult decisions our partners do: what to build,
                what to leave out, how to earn trust and how to keep a system maintainable.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-gradient-to-b from-[#6102f5] via-[#2388ff] to-[#8cdf28]" />
              {[
                ["01", "Observe a real problem", "Start with the operating reality, not a technology trend.", "#6102f5"],
                ["02", "Build the product", "Turn research into a focused system with clear users, workflows and boundaries.", "#7d47ff"],
                ["03", "Operate and learn", "Use product feedback to expose assumptions, friction and architectural weaknesses.", "#2388ff"],
                ["04", "Transfer the experience", "Bring tested product judgment into the platforms we build with partners.", "#8cdf28"],
              ].map(([number, title, description, accent]) => (
                <article key={title} className="relative grid gap-5 pb-20 pl-16 sm:grid-cols-[12rem_1fr]">
                  <span
                    className="absolute left-0 grid size-9 place-items-center rounded-full bg-[#050608] font-mono text-[10px]"
                    style={{ border: `1px solid ${accent}`, color: accent }}
                  >
                    {number}
                  </span>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="max-w-xl text-sm leading-7 text-white/42">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#080a0d] py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
            Our products are our evidence
          </p>
          <div className="mt-14 space-y-8">
            {[
              {
                name: "hiARed",
                statement: "Making consequential hiring decisions more transparent.",
                href: "/products/hiared",
                image: "/hiared/hiared-product-preview-transparent.webp",
                accent: "#6102f5",
              },
              {
                name: "GoBazaar",
                statement: "Making nearby businesses, bazaars, offers and events easier to discover.",
                href: "/products/gobazaar",
                image: "/gobazaar/gobazaar-product-preview-transparent.webp",
                accent: "#2388ff",
              },
              {
                name: "YojIQ",
                statement: "Making financial planning understandable without surrendering privacy.",
                href: "/products/yojiq",
                image: "/yojiq/yojiq-product-preview-transparent-clean.webp",
                accent: "#8cdf28",
              },
            ].map((product, index) => (
              <article
                key={product.name}
                className="group grid min-h-[28rem] items-center gap-10 overflow-hidden py-10 lg:grid-cols-[.72fr_1.28fr]"
              >
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <span className="block h-px w-14" style={{ backgroundColor: product.accent }} aria-hidden="true" />
                  <h3 className="mt-5 text-4xl font-semibold sm:text-6xl">{product.name}</h3>
                  <p className="mt-5 max-w-md text-lg leading-8 text-white/52">{product.statement}</p>
                  <Link
                    href={product.href}
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold"
                    style={{ color: product.accent }}
                  >
                    See the product <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className={`relative min-h-[25rem] ${index % 2 ? "lg:order-1" : ""}`}>
                  <Image
                    src={product.image}
                    alt={`${product.name} product interface`}
                    fill
                    className="object-contain transition duration-700 group-hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 90vw, 55vw"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-40">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[.76fr_1.24fr]">
            <div>
              <Blocks className="size-8 text-[#5a9fe8]" />
              <h2 className="mt-8 max-w-[10ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
                The principles behind the work.
              </h2>
            </div>
            <div className="border-t border-white/10">
              {operatingPrinciples.map(([Icon, title, description]) => (
                <article
                  key={title}
                  className="group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[3rem_14rem_1fr] sm:items-start"
                >
                  <Icon className="size-5 text-[#5a9fe8] transition-transform group-hover:scale-110" />
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-7 text-white/42">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative bg-[#08070b] py-28 sm:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(97,2,245,.14),transparent_45rem)]" />
        <Container className="relative max-w-[96rem]">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/35">
                Direction, not invented history
              </p>
              <h2 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
                Where we are going matters more than a decorative timeline.
              </h2>
            </div>
            <Sparkles className="size-10 text-[#8a4cff]" />
          </div>
          <div className="mt-20 grid gap-px bg-white/10 lg:grid-cols-3">
            {direction.map((item) => (
              <article key={item.label} className="min-h-[23rem] bg-[#08070b] p-8">
                <p className="font-mono text-xs text-[#8a4cff]">{item.label}</p>
                <h3 className="mt-24 text-3xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/42">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid min-h-[34rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(35,136,255,.26),transparent_58%)] text-center">
          <div>
            <ArrowDownRight className="mx-auto size-8 text-[#5a9fe8]" />
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[.24em] text-[#5a9fe8]">
              Build with people who build products
            </p>
            <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Bring us a problem worth understanding.
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
