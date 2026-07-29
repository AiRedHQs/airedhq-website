import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const industryIndex = [
  [GraduationCap, "Education", "Learning platforms, classroom systems and immersive training.", "01"],
  [HeartPulse, "Healthcare", "Accessible workflows, secure systems and human-centered experiences.", "02"],
  [Users, "HR Tech", "Recruitment, workforce intelligence and people operations.", "03"],
  [BadgeDollarSign, "Finance", "Privacy-aware planning and understandable decision support.", "04"],
  [ShoppingBag, "Retail & Local Commerce", "Discovery, merchant tools and location-aware experiences.", "05"],
  [Landmark, "Government", "Clear, resilient public platforms designed for broad access.", "06"],
  [Factory, "Manufacturing", "Operational software, spatial training and industrial visualization.", "07"],
  [Building2, "Enterprise SaaS", "Multi-role platforms, dashboards and complex workflows.", "08"],
] as const;

const principles = [
  ["Understand the operating reality", "Map users, decisions, constraints and consequences before selecting technology."],
  ["Design the trust model", "Make permissions, sensitive data, explanations and accountability visible in the product."],
  ["Engineer for repeated use", "Build systems that remain understandable under real operational pressure."],
] as const;

export function IndustriesExperiencePage() {
  return (
    <main className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(35,136,255,.1),transparent_32rem),radial-gradient(circle_at_48%_70%,rgba(97,2,245,.09),transparent_28rem)]" />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-16 py-20 lg:grid-cols-[.76fr_1.24fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5a9fe8]">
              Industries · Product experience transferred
            </p>
            <h1 className="mt-7 max-w-[9ch] text-[clamp(4rem,7vw,7.4rem)] font-semibold leading-[.89]">
              Different industries. The same demand for <span className="text-[#2f91e8]">clarity.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/52">
              AiRedHQ applies product lessons from recruitment, local discovery, finance and
              immersive technology to complex digital systems across industries.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/88"
            >
              Discuss your industry <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative min-h-[36rem]">
            <div className="absolute right-0 top-[4%] w-[66%]">
              <Image
                src="/hiared/hiared-product-preview-transparent.webp"
                alt="Recruitment operations product"
                width={1536}
                height={1024}
                className="h-auto w-full object-contain opacity-85 drop-shadow-[0_2rem_5rem_rgba(97,2,245,.15)]"
                priority
              />
            </div>
            <div className="absolute bottom-[2%] left-0 w-[58%]">
              <Image
                src="/gobazaar/gobazaar-product-preview-transparent.webp"
                alt="Location-aware local commerce product"
                width={1693}
                height={929}
                className="h-auto w-full object-contain opacity-90 drop-shadow-[0_2rem_5rem_rgba(35,136,255,.15)]"
                priority
              />
            </div>
            <div className="absolute bottom-[3%] right-[2%] w-[25%]">
              <Image
                src="/yojiq/yojiq-product-preview-transparent-clean.webp"
                alt="Privacy-aware personal finance product"
                width={1536}
                height={1024}
                className="h-auto w-full object-contain drop-shadow-[0_2rem_4rem_rgba(140,223,40,.12)]"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Where we work
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Systems shaped around the work, not a <span className="text-[#2f91e8]">template.</span>
              </h2>
            </div>
            <div className="border-t border-white/10">
              {industryIndex.map(([Icon, title, description, number]) => (
                <article
                  key={title}
                  className="group grid gap-4 border-b border-white/10 py-7 transition-colors hover:bg-white/[.025] sm:grid-cols-[3rem_13rem_1fr_2rem] sm:items-center"
                >
                  <Icon className="size-5 text-[#5a9fe8] transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="max-w-xl text-sm leading-6 text-white/40">{description}</p>
                  <span className="font-mono text-[10px] text-white/25">{number}</span>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
            Product experience, transferred
          </p>
          <h2 className="mt-6 max-w-[13ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
            We learn by operating products in the real world.
          </h2>
          <div className="mt-24 space-y-32">
            <article className="grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#8a4cff]">HR Tech · Enterprise</span>
                <h3 className="mt-6 text-4xl font-semibold leading-[1] sm:text-6xl">Decisions need evidence and accountability.</h3>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                  hiARed informs how we design multi-role workflows, explainable AI,
                  sensitive decisions and operational visibility.
                </p>
              </div>
              <Image src="/hiared/hiared-product-preview-transparent.webp" alt="hiARed product interface" width={1536} height={1024} className="h-auto w-full object-contain" />
            </article>
            <article className="grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
              <Image src="/gobazaar/gobazaar-product-preview-transparent.webp" alt="GoBazaar discovery map" width={1693} height={929} className="h-auto w-full object-contain lg:order-1" />
              <div className="lg:order-2">
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#3898ff]">Retail · Local Commerce</span>
                <h3 className="mt-6 text-4xl font-semibold leading-[1] sm:text-6xl">Context changes what relevance means.</h3>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                  GoBazaar shapes our approach to search, maps, location integrity,
                  marketplace trust and consumer-to-merchant experiences.
                </p>
              </div>
            </article>
            <article className="grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#8cdf28]">Finance · Consumer Products</span>
                <h3 className="mt-6 text-4xl font-semibold leading-[1] sm:text-6xl">Sensitive information demands restraint.</h3>
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/45">
                  YojIQ informs privacy-first architecture, progressive disclosure and
                  interfaces that help people understand consequential information.
                </p>
              </div>
              <div className="relative min-h-[34rem]">
                <Image src="/yojiq/yojiq-product-preview-transparent-clean.webp" alt="YojIQ financial planning application" fill className="object-contain" sizes="(max-width: 1024px) 90vw, 50vw" />
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-[#080a0d] py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                Beyond our products
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] sm:text-7xl">
                Technology where the operating environment is <span className="text-[#2f91e8]">demanding.</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-white/50">
              Education, healthcare, government and manufacturing each impose different
              constraints. We adapt architecture, interaction and delivery to those realities.
            </p>
          </div>
          <div className="mt-20 grid gap-4 lg:grid-cols-3">
            {[
              ["/services/ar-vr-use-cases.webp", "Education & Training", "Learning systems, simulations, classroom orchestration and accessible content."],
              ["/services/ai-use-cases.webp", "Healthcare & Public Systems", "Secure workflows, knowledge access and interfaces designed for clarity."],
              ["/services/cloud-use-cases.webp", "Manufacturing & Enterprise", "Operational platforms, infrastructure, automation and immersive training."],
            ].map(([image, title, description], index) => (
              <article key={title} className={index === 1 ? "lg:mt-14" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0c1016]">
                  <Image src={image} alt="" fill className="object-cover opacity-80 transition duration-700 hover:scale-[1.03]" sizes="(max-width: 1024px) 90vw, 30vw" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/40">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36">
        <Container className="max-w-[96rem]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
            How we enter a domain
          </p>
          <div className="mt-12 grid gap-px bg-white/10 lg:grid-cols-3">
            {principles.map(([title, description], index) => (
              <article key={title} className="min-h-80 bg-[#050608] p-8">
                <span className="font-mono text-[10px] text-[#5a9fe8]">0{index + 1}</span>
                <h3 className="mt-20 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/40">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid min-h-[34rem] max-w-[96rem] place-items-center bg-[radial-gradient(circle_at_50%_100%,rgba(47,145,232,.3),transparent_58%)] text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5a9fe8]">
              Bring us the operating problem
            </p>
            <h2 className="mx-auto mt-6 max-w-[13ch] text-5xl font-semibold leading-[.95] sm:text-7xl">
              Build for the reality of your industry.
            </h2>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-semibold text-black">
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
