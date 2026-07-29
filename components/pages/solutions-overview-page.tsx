"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Brain,
  Cloud,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "AI assistants, workflow automation, RAG systems and LLM integrations designed around useful business outcomes.",
    href: "/solutions/ai",
    icon: Brain,
    color: "#9b5cff",
    capabilities: ["AI assistants", "RAG systems", "Automation", "LLM integration"],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Scalable SaaS platforms, dashboards, portals and enterprise systems engineered for sustained growth.",
    href: "/solutions/web-development",
    icon: Globe,
    color: "#2f91d4",
    capabilities: ["SaaS platforms", "Portals", "Dashboards", "Enterprise systems"],
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "High-performance Android and iOS products with clear interaction design and dependable architecture.",
    href: "/solutions/mobile-development",
    icon: Smartphone,
    color: "#84cc16",
    capabilities: ["Android", "iOS", "Flutter", "React Native"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Research, product strategy, design systems and prototypes that make complex workflows feel direct.",
    href: "/solutions/ui-ux",
    icon: Palette,
    color: "#f59e0b",
    capabilities: ["UX research", "Design systems", "Prototypes", "Product strategy"],
  },
  {
    number: "05",
    title: "AR / VR",
    description:
      "Immersive learning, training simulations, virtual tours and industrial visualization built for real use.",
    href: "/solutions/ar-vr",
    icon: Box,
    color: "#ec4899",
    capabilities: ["Immersive learning", "Simulation", "Virtual tours", "Visualization"],
  },
  {
    number: "06",
    title: "Cloud & DevOps",
    description:
      "Cloud-native architecture, delivery pipelines, monitoring and infrastructure automation for resilient products.",
    href: "/solutions/cloud-devops",
    icon: Cloud,
    color: "#06b6d4",
    capabilities: ["Cloud architecture", "CI/CD", "Monitoring", "Automation"],
  },
] as const;

const process = ["Discover", "Strategy", "UX", "Build", "QA", "Launch", "Scale"];

const faqs = [
  {
    question: "Can AiRedHQ join an existing product team?",
    answer:
      "Yes. We can own a defined product stream or work alongside your internal design, engineering and leadership teams.",
  },
  {
    question: "Do you work on early-stage ideas or established platforms?",
    answer:
      "Both. The engagement is shaped around the product's current maturity, from validation and prototyping to modernization and scale.",
  },
  {
    question: "How do you decide where AI belongs?",
    answer:
      "We begin with the workflow and desired outcome. AI is introduced only where it improves speed, quality, access or decision-making.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We support measurement, iteration, reliability and roadmap delivery so the product can continue improving after its first release.",
  },
] as const;

export function SolutionsOverviewPage() {
  return (
    <div className="overflow-hidden bg-[#050608] text-white">
      <SolutionsHero />
      <Capabilities />
      <ProductProof />
      <DeliveryPath />
      <TechnologyApproach />
      <SolutionsFaq />
      <SolutionsCta />
    </div>
  );
}

function SolutionsHero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(47,145,212,.13),transparent_28rem),radial-gradient(circle_at_62%_70%,rgba(97,2,245,.08),transparent_24rem)]"
        aria-hidden="true"
      />
      <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-16 py-20 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Breadcrumb
            items={[{ label: "Solutions" }]}
            className="mb-12 text-white/42"
          />
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/45">
            Product-backed solutions
          </p>
          <h1 className="mt-7 max-w-[11ch] text-6xl font-semibold leading-[0.92] text-balance sm:text-7xl lg:text-[6.6rem]">
            From idea to{" "}
            <span className="text-[#2f91d4]">impact.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">
            We build our own products. We help others build theirs through practical
            AI, immersive technology and modern engineering.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start a Project
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#capabilities">Explore Capabilities</Link>
            </Button>
          </div>
        </motion.div>
        <SolutionSystemGraphic />
      </Container>
    </section>
  );
}

function SolutionSystemGraphic() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[42rem]"
      initial={{ scale: 0.96 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      aria-label="AiRedHQ product experience connected to six solution capabilities"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="31" stroke="rgba(255,255,255,.08)" strokeDasharray="1 3" />
        {solutions.map((_, index) => {
          const angle = (index * Math.PI * 2) / solutions.length - Math.PI / 2;
          return (
            <motion.line
              key={index}
              x1="50"
              y1="50"
              x2={50 + Math.cos(angle) * 38}
              y2={50 + Math.sin(angle) * 38}
              stroke="rgba(47,145,212,.38)"
              strokeWidth=".25"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 + index * 0.08 }}
            />
          );
        })}
      </svg>
      <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#0b0e13] text-center shadow-[0_0_0_1px_rgba(255,255,255,.12),0_0_60px_rgba(47,145,212,.09)]">
        <span className="text-xs uppercase tracking-[0.22em] text-white/40">Built from</span>
        <strong className="mt-2 text-xl">Product proof</strong>
      </div>
      {solutions.map((solution, index) => {
        const angle = (index * Math.PI * 2) / solutions.length - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 40;
        const y = 50 + Math.sin(angle) * 40;
        const Icon = solution.icon;
        return (
          <motion.div
            key={solution.title}
            className="absolute flex size-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-lg bg-[#0a0c10]/95 text-center shadow-[0_0_0_1px_rgba(255,255,255,.1)] md:size-24"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={20} style={{ color: solution.color }} aria-hidden="true" />
            <span className="max-w-16 text-[10px] font-medium leading-tight text-white/65 md:text-xs">
              {solution.title}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-28 md:py-40">
      <Container className="max-w-[96rem]">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
              What we build
            </p>
            <h2 className="mt-6 max-w-[9ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
              Six disciplines. One product{" "}
              <span className="text-[#2f91d4]">mindset.</span>
            </h2>
          </div>
          <div>
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.article
                  key={solution.title}
                  className="group grid gap-6 border-t border-white/10 py-9 sm:grid-cols-[4rem_1fr_auto]"
                >
                  <span className="font-mono text-xs text-white/30">{solution.number}</span>
                  <div>
                    <div className="flex items-center gap-4">
                      <Icon size={22} style={{ color: solution.color }} aria-hidden="true" />
                      <h3 className="text-2xl font-semibold md:text-3xl">{solution.title}</h3>
                    </div>
                    <p className="mt-4 max-w-2xl leading-7 text-white/50">
                      {solution.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      {solution.capabilities.map((capability) => (
                        <span key={capability} className="text-xs text-white/35">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={solution.href}
                    aria-label={`Explore ${solution.title}`}
                    className="flex size-11 items-center justify-center rounded-full text-white/45 outline-none transition-all hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductProof() {
  return (
    <section className="bg-[#080a0e] py-28 md:py-40">
      <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            Product experience, transferred
          </p>
          <h2 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
            Your product benefits from lessons already{" "}
            <span className="text-[#9b5cff]">learned.</span>
          </h2>
        </div>
        <div className="space-y-10">
          {[
            ["hiARed", "AI workflows", "Complex multi-role recruitment and explainable decisions."],
            ["GoBazaar", "Location systems", "Discovery, maps, merchant tools and hyperlocal relevance."],
            ["YojIQ", "Trust by design", "Private financial workflows made understandable and actionable."],
          ].map(([product, lesson, detail], index) => (
            <motion.div
              key={product}
              className="grid grid-cols-[2rem_1fr] gap-5"
            >
              <span className="font-mono text-xs text-white/25">0{index + 1}</span>
              <div>
                <p className="text-sm text-[#2f91d4]">{product} / {lesson}</p>
                <p className="mt-2 text-xl leading-8 text-white/70">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DeliveryPath() {
  return (
    <section className="py-28 md:py-40">
      <Container className="max-w-[96rem]">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            How we work
          </p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.95] md:text-7xl">
            One continuous path from ambiguity to{" "}
            <span className="text-[#84cc16]">adoption.</span>
          </h2>
        </div>
        <ol className="mt-20 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-7">
          {process.map((step, index) => (
            <motion.li
              key={step}
              className="relative pt-7"
            >
              <span className="absolute left-0 top-0 h-px w-full bg-white/12" />
              <span className="absolute left-0 top-[-3px] size-[7px] rounded-full bg-[#2f91d4]" />
              <span className="font-mono text-xs text-white/30">0{index + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{step}</h3>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function TechnologyApproach() {
  const technologies = [
    { name: "Next.js", logo: "/technology/nextdotjs.svg", darkLogo: true },
    { name: "React", logo: "/technology/react.svg" },
    { name: "TypeScript", logo: "/technology/typescript.svg" },
    { name: "Node.js", logo: "/technology/nodedotjs.svg" },
    { name: "PostgreSQL", logo: "/technology/postgresql.svg" },
    { name: "Redis", logo: "/technology/redis.svg" },
    { name: "Google Gemini", logo: "/technology/googlegemini.svg" },
    { name: "Flutter", logo: "/technology/flutter.svg" },
    { name: "Docker", logo: "/technology/docker.svg" },
    { name: "Cloudflare", logo: "/technology/cloudflare.svg" },
    { name: "GitHub Actions", logo: "/technology/githubactions.svg" },
  ];
  return (
    <section className="bg-[#080a0e] py-28 md:py-40">
      <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            Technology with intent
          </p>
          <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
            Modern where it matters.{" "}
            <span className="text-[#2f91d4]">Stable</span> everywhere else.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
            We choose technology around product constraints, team capability,
            security and long-term ownership, not trend cycles.
          </p>
        </div>
        <div
          className="grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-4"
          aria-label="Technology capabilities"
        >
          {technologies.map((technology) => (
            <motion.figure
              key={technology.name}
              className="group relative flex aspect-[1.35/1] items-center justify-center bg-[#0a0c10] p-6 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2f91d4]"
              whileHover={{ backgroundColor: "rgba(255,255,255,.065)" }}
              title={technology.name}
              tabIndex={0}
            >
              <Image
                src={technology.logo}
                alt={technology.name}
                width={112}
                height={48}
                className={`h-9 w-auto max-w-[6rem] object-contain grayscale brightness-0 invert opacity-55 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:scale-110 group-focus-visible:opacity-100 sm:h-11 sm:max-w-[7rem] ${
                  "darkLogo" in technology
                    ? ""
                    : "group-hover:grayscale-0 group-hover:brightness-100 group-hover:invert-0 group-focus-visible:grayscale-0 group-focus-visible:brightness-100 group-focus-visible:invert-0"
                }`}
              />
              <figcaption className="sr-only">{technology.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SolutionsFaq() {
  return (
    <section className="py-28 md:py-40">
      <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            Common questions
          </p>
          <h2 className="mt-6 text-5xl font-semibold leading-[0.95] md:text-7xl">
            Before we <span className="text-[#9b5cff]">begin.</span>
          </h2>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-white/10 py-6">
              <summary className="cursor-pointer list-none pr-10 text-xl font-medium outline-none focus-visible:text-[#2f91d4]">
                {faq.question}
              </summary>
              <p className="max-w-2xl pt-4 leading-7 text-white/50">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SolutionsCta() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(47,145,212,.18),transparent_42rem)]"
        aria-hidden="true"
      />
      <Container className="relative max-w-[96rem] text-center">
        <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
          Build with AiRedHQ
        </p>
        <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
          Bring us the <span className="text-[#2f91d4]">problem,</span> not a
          predefined answer.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/50">
          We will help shape the product, technology and delivery path around the
          outcome you need.
        </p>
        <Button asChild size="lg" className="group mt-10">
          <Link href="/contact">
            Start a Project
            <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
