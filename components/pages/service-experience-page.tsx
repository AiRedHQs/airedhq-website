"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  Activity,
  Apple,
  ArrowLeft,
  ArrowRight,
  Bell,
  Blocks,
  Box,
  Bot,
  Brain,
  Cloud,
  Component,
  Database,
  Eye,
  Factory,
  GitBranch,
  Globe,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  MousePointer2,
  PanelsTopLeft,
  Palette,
  Scan,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Users,
  WifiOff,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Button } from "@/components/ui/button";
import type { PageContent } from "@/data/site-pages";

type ServiceDetail = {
  visual: "ai" | "web" | "mobile" | "design" | "spatial" | "cloud";
  headline: string;
  accentWord: string;
  accent: string;
  icon: LucideIcon;
  proof: string;
  outcome: string;
  capabilities: Array<{ title: string; description: string }>;
  process: string[];
  technologies: string[];
  industries: string[];
  useCases: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const serviceDetails: Record<string, ServiceDetail> = {
  ai: {
    visual: "ai",
    headline: "AI that improves real work.",
    accentWord: "improves",
    accent: "#9b5cff",
    icon: Brain,
    proof:
      "Our work on hiARed informs how we design explainable AI workflows, human review and multi-role decision systems.",
    outcome:
      "Move from an AI idea to a dependable product capability grounded in your workflow, data and users.",
    capabilities: [
      { title: "AI Assistants", description: "Task-focused assistants designed around real roles, permissions and business context." },
      { title: "RAG Systems", description: "Retrieval pipelines that give models relevant, governed and traceable context." },
      { title: "Workflow Automation", description: "Human-aware automation for repetitive operational and knowledge workflows." },
      { title: "LLM Integration", description: "Model capabilities embedded into products with evaluation, safeguards and observability." },
    ],
    process: ["Use case", "Data", "Prototype", "Evaluate", "Integrate", "Monitor"],
    technologies: ["OpenAI", "Gemini", "LangChain", "Node.js", "PostgreSQL", "Redis"],
    industries: ["Recruitment", "Education", "Finance", "Enterprise Operations"],
    useCases: [
      { title: "Knowledge assistant", description: "Answer role-specific questions from governed company information with citations." },
      { title: "Document intelligence", description: "Extract, classify and review high-volume documents with human approval." },
      { title: "Operational automation", description: "Connect AI decisions to existing tools, policies and accountable workflows." },
    ],
    faqs: [
      { question: "Where should an AI project begin?", answer: "With a clear workflow, user need and success condition. Model selection follows those decisions." },
      { question: "Can you work with private company data?", answer: "Yes. Architecture is shaped around access controls, data boundaries, retention and the sensitivity of the use case." },
      { question: "How do you reduce unreliable AI output?", answer: "We combine grounded context, structured outputs, evaluation, human review and monitoring based on the risk of the workflow." },
    ],
  },
  web: {
    visual: "web",
    headline: "Web products built to endure.",
    accentWord: "endure.",
    accent: "#2f91d4",
    icon: Globe,
    proof:
      "hiARed and GoBazaar give us practical experience with multi-role platforms, dashboards, search, maps and operational workflows.",
    outcome:
      "Create a fast, accessible web product with architecture your team can understand, operate and extend.",
    capabilities: [
      { title: "SaaS Platforms", description: "Secure multi-role products with clear workflows, permissions and product analytics." },
      { title: "Dashboards", description: "Dense operational interfaces designed for scanning, comparison and repeated action." },
      { title: "Customer Portals", description: "Self-service experiences that connect users to accounts, services and support." },
      { title: "Enterprise Systems", description: "Maintainable applications that integrate complex data and business processes." },
    ],
    process: ["Discover", "Architecture", "UX", "Build", "Validate", "Scale"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    industries: ["SaaS", "HR Tech", "Retail", "Enterprise"],
    useCases: [
      { title: "Multi-role SaaS", description: "Purpose-built workspaces for customers, operators and administrators." },
      { title: "Operational dashboard", description: "Bring live business signals and repeated actions into one clear interface." },
      { title: "Self-service portal", description: "Reduce support friction through secure account and service workflows." },
    ],
    faqs: [
      { question: "Can you modernize an existing application?", answer: "Yes. We assess the current product, identify risk and modernize incrementally where a full rewrite is not justified." },
      { question: "Do you build both frontend and backend systems?", answer: "Yes. We design the product interface, application architecture, APIs, data model and delivery foundation as needed." },
      { question: "How do you protect performance as a product grows?", answer: "Performance budgets, server rendering, caching, observability and disciplined component architecture are built into delivery." },
    ],
  },
  mobile: {
    visual: "mobile",
    headline: "Mobile products people keep.",
    accentWord: "keep.",
    accent: "#84cc16",
    icon: Smartphone,
    proof:
      "YojIQ and GoBazaar inform how we design focused mobile flows, privacy-sensitive data and location-aware experiences.",
    outcome:
      "Turn a mobile use case into a responsive, dependable product that earns a place in the user's daily routine.",
    capabilities: [
      { title: "iOS Applications", description: "Polished Apple-platform experiences with platform-aware interaction and release quality." },
      { title: "Android Applications", description: "Reliable experiences designed for diverse devices, contexts and connectivity." },
      { title: "Cross-platform Delivery", description: "Flutter and React Native where shared delivery creates meaningful product value." },
      { title: "Mobile Product Systems", description: "APIs, notifications, offline states, analytics and release operations." },
    ],
    process: ["User flow", "Prototype", "Platform", "Build", "Test", "Release"],
    technologies: ["Flutter", "React Native", "Apple", "Android", "Node.js", "Firebase"],
    industries: ["Finance", "Local Commerce", "Education", "Field Operations"],
    useCases: [
      { title: "Daily consumer product", description: "Focused mobile journeys designed for repeat use and clear progress." },
      { title: "Location-aware experience", description: "Discovery, maps, notifications and contextual actions around the user." },
      { title: "Field operations", description: "Reliable workflows for teams working across devices and connectivity conditions." },
    ],
    faqs: [
      { question: "Native or cross-platform?", answer: "We choose based on product experience, platform features, team needs, release strategy and long-term ownership." },
      { question: "Do you handle App Store and Play Store delivery?", answer: "Yes. Release preparation, signing, store requirements and rollout planning can be included." },
      { question: "Can the app work with limited connectivity?", answer: "Yes. Offline and degraded-connectivity behavior can be designed when the use case requires it." },
    ],
  },
  "ui-ux": {
    visual: "design",
    headline: "Design that makes complexity clear.",
    accentWord: "clear.",
    accent: "#f59e0b",
    icon: Palette,
    proof:
      "Our product ecosystem forces design decisions to survive real workflows, multiple roles, edge cases and continuous iteration.",
    outcome:
      "Align user needs, business constraints and engineering reality in a design system ready to become a product.",
    capabilities: [
      { title: "Product Discovery", description: "Clarify users, problems, workflows and assumptions before investing in execution." },
      { title: "UX Architecture", description: "Organize complex tasks and information into understandable product journeys." },
      { title: "Interface Design", description: "Responsive, accessible interfaces with deliberate hierarchy and interaction." },
      { title: "Design Systems", description: "Reusable foundations that connect brand, product design and coded components." },
    ],
    process: ["Research", "Synthesis", "Flows", "Prototype", "Validate", "Systemize"],
    technologies: ["Figma", "Storybook", "Adobe XD", "Sketch", "React", "TypeScript"],
    industries: ["SaaS", "Finance", "Healthcare", "Enterprise"],
    useCases: [
      { title: "Complex workflow redesign", description: "Make high-friction operational tasks easier to understand and complete." },
      { title: "Design system", description: "Unify fragmented products through tokens, components and interaction standards." },
      { title: "New product validation", description: "Test structure and behavior before committing to full engineering." },
    ],
    faqs: [
      { question: "Do you work before engineering begins?", answer: "Yes, and we also work alongside engineering so design decisions remain feasible and consistent through delivery." },
      { question: "Can you improve an existing product?", answer: "Yes. We can audit usability, hierarchy, accessibility and system consistency, then prioritize improvements." },
      { question: "Will the design system translate into code?", answer: "That is the goal. Tokens, component states and responsive behavior are defined with implementation in mind." },
    ],
  },
  "ar-vr": {
    visual: "spatial",
    headline: "Immersion with a practical purpose.",
    accentWord: "purpose.",
    accent: "#ec4899",
    icon: Box,
    proof:
      "Our immersive learning and simulation experience keeps spatial technology focused on comprehension, practice and performance.",
    outcome:
      "Use space, presence and interaction only where they make training, visualization or understanding meaningfully better.",
    capabilities: [
      { title: "Training Simulations", description: "Safe, repeatable practice for complex procedures and operational scenarios." },
      { title: "Immersive Learning", description: "Interactive environments that turn abstract material into direct experience." },
      { title: "Virtual Tours", description: "Guided spatial experiences for places, products and environments." },
      { title: "Industrial Visualization", description: "3D systems that reveal equipment, processes and information in context." },
    ],
    process: ["Scenario", "Storyboard", "Prototype", "3D build", "Comfort test", "Deploy"],
    technologies: ["Unity", "Three.js", "Blender", "Meta Quest", "Apple", "Android"],
    industries: ["AR Games", "AR Visualization", "VR Training", "VR Students", "VR in Education"],
    useCases: [
      { title: "Safety training", description: "Practice hazardous or expensive procedures in a controlled environment." },
      { title: "Equipment visualization", description: "Reveal systems, sequences and hidden information in spatial context." },
      { title: "Immersive learning", description: "Turn abstract topics into guided, interactive experiences." },
    ],
    faqs: [
      { question: "When is AR/VR the right choice?", answer: "When spatial understanding, safe practice or presence improves the outcome enough to justify the medium." },
      { question: "Can immersive experiences run in a browser?", answer: "Some experiences can use WebXR or interactive 3D; others require dedicated mobile or headset delivery." },
      { question: "How do you manage motion comfort?", answer: "Comfort constraints influence locomotion, camera behavior, interaction, frame rate and testing from the beginning." },
    ],
  },
  cloud: {
    visual: "cloud",
    headline: "Infrastructure that stays out of the way.",
    accentWord: "way.",
    accent: "#06b6d4",
    icon: Cloud,
    proof:
      "Operating our own products makes deployment reliability, observability, cost awareness and recovery practical concerns, not abstractions.",
    outcome:
      "Give product teams a repeatable delivery system with clearer operational risk and less release friction.",
    capabilities: [
      { title: "Cloud Architecture", description: "Secure, maintainable environments shaped around product scale and team ownership." },
      { title: "CI/CD Pipelines", description: "Automated build, test and deployment paths that make releases routine." },
      { title: "Observability", description: "Logs, metrics, alerts and traces that make product health understandable." },
      { title: "Infrastructure Automation", description: "Repeatable configuration and operational workflows that reduce manual risk." },
    ],
    process: ["Assess", "Model", "Secure", "Automate", "Observe", "Improve"],
    technologies: ["DigitalOcean", "Cloudflare", "Docker", "GitHub Actions", "PostgreSQL", "Redis"],
    industries: ["SaaS", "Enterprise", "Finance", "High-growth Products"],
    useCases: [
      { title: "Release automation", description: "Move tested changes from source to production through repeatable gates." },
      { title: "Platform reliability", description: "Make service health, incidents and ownership visible to the team." },
      { title: "Scale readiness", description: "Remove architecture and delivery bottlenecks before growth exposes them." },
    ],
    faqs: [
      { question: "Can you improve an existing cloud setup?", answer: "Yes. We begin with architecture, delivery, security, reliability and cost signals before recommending changes." },
      { question: "Do you support automated deployments?", answer: "Yes. CI/CD, environment management, testing gates and rollback strategy are core parts of reliable delivery." },
      { question: "How do you approach monitoring?", answer: "Monitoring is designed around user impact, service health and actionable ownership rather than collecting data without a response plan." },
    ],
  },
};

const capabilityIcons: Record<ServiceDetail["visual"], LucideIcon[]> = {
  ai: [Bot, Database, Workflow, ShieldCheck],
  web: [PanelsTopLeft, LayoutDashboard, Users, Blocks],
  mobile: [Apple, Smartphone, WifiOff, Bell],
  design: [Search, MousePointer2, Component, Accessibility],
  spatial: [Scan, GraduationCap, Eye, Factory],
  cloud: [Cloud, GitBranch, Activity, Database],
};

const technologyLogos: Record<string, string> = {
  "Next.js": "/technology/nextdotjs.svg",
  React: "/technology/react.svg",
  "React Native": "/technology/react.svg",
  TypeScript: "/technology/typescript.svg",
  "Node.js": "/technology/nodedotjs.svg",
  PostgreSQL: "/technology/postgresql.svg",
  Redis: "/technology/redis.svg",
  Gemini: "/technology/googlegemini.svg",
  Flutter: "/technology/flutter.svg",
  Docker: "/technology/docker.svg",
  Cloudflare: "/technology/cloudflare.svg",
  "GitHub Actions": "/technology/githubactions.svg",
  OpenAI: "/technology/openai.svg",
  LangChain: "/technology/langchain.svg",
  Apple: "/technology/apple.svg",
  Android: "/technology/android.svg",
  Firebase: "/technology/firebase.svg",
  Figma: "/technology/figma.svg",
  Storybook: "/technology/storybook.svg",
  "Adobe XD": "/technology/xd.svg",
  Sketch: "/technology/sketch.svg",
  Unity: "/technology/unity.svg",
  "Three.js": "/technology/threejs.svg",
  Blender: "/technology/blender.svg",
  "Meta Quest": "/technology/meta.svg",
  DigitalOcean: "/technology/digitalocean.svg",
};

const monochromeTechnologyLogos = new Set([
  "OpenAI",
  "Next.js",
  "Apple",
  "LangChain",
  "Three.js",
]);

const serviceVisualImages: Record<ServiceDetail["visual"], string> = {
  ai: "/services/ai-use-cases.webp",
  web: "/services/web-use-cases.webp",
  mobile: "/services/mobile-use-cases.webp",
  design: "/services/design-use-cases.webp",
  spatial: "/services/ar-vr-use-cases.webp",
  cloud: "/services/cloud-use-cases.webp",
};

export function ServiceExperiencePage({ page }: { page: PageContent }) {
  const detail = serviceDetails[page.slug];
  const Icon = detail.icon;
  const headlineParts = detail.headline.split(detail.accentWord);

  return (
    <div className="overflow-hidden bg-[#050608] text-white">
      <section className="relative min-h-[calc(100svh-4rem)]">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at 76% 44%, ${detail.accent}20, transparent 28rem)`,
          }}
          aria-hidden="true"
        />
        <Container className="relative grid min-h-[calc(100svh-4rem)] max-w-[96rem] items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Breadcrumb
              items={[{ label: "Solutions", href: "/solutions" }, { label: page.title }]}
              className="mb-12 text-white/42"
            />
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
              {page.title}
            </p>
            <h1 className="mt-7 max-w-[11ch] text-6xl font-semibold leading-[0.92] sm:text-7xl lg:text-[6.2rem]">
              {headlineParts[0]}
              <span style={{ color: detail.accent }}>{detail.accentWord}</span>
              {headlineParts[1]}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{page.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#capabilities">View Capabilities</Link>
              </Button>
            </div>
          </div>
          <ServiceGraphic detail={detail} Icon={Icon} />
        </Container>
      </section>

      <ServiceUseCases detail={detail} />

      <section id="capabilities" className="py-20 md:py-28">
        <Container className="max-w-[96rem]">
          <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
                Capabilities
              </p>
              <h2 className="mt-6 max-w-[9ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
                Built around the{" "}
                <span style={{ color: detail.accent }}>product.</span>
              </h2>
              <p className="mt-8 max-w-sm leading-7 text-white/48">{detail.proof}</p>
            </div>
            <div className="border-t border-white/10">
              {detail.capabilities.map((capability, index) => (
                <motion.article
                  key={capability.title}
                  className="group border-b border-white/10 py-9"
                  initial={{ y: 18 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${detail.accent}16`, color: detail.accent }}
                    >
                      {(() => {
                        const CapabilityIcon = capabilityIcons[detail.visual][index];
                        return <CapabilityIcon size={23} aria-hidden="true" />;
                      })()}
                    </span>
                    <h3 className="text-2xl font-semibold md:text-3xl">{capability.title}</h3>
                  </div>
                  <p className="mt-4 max-w-2xl leading-7 text-white/48 sm:pl-[4.25rem]">
                    {capability.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <DeliveryPath detail={detail} />
      <TechnologyShowcase detail={detail} />
      <IndustryShowcase detail={detail} />

      <section className="bg-[#080a0e] py-20 md:py-28">
        <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
              Common questions
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[0.95] md:text-7xl">
              Before we{" "}
              <span style={{ color: detail.accent }}>begin.</span>
            </h2>
          </div>
          <div className="border-t border-white/10">
            {detail.faqs.map((faq) => (
              <details key={faq.question} className="border-b border-white/10 py-6">
                <summary className="cursor-pointer list-none pr-8 text-xl font-medium outline-none focus-visible:underline">
                  {faq.question}
                </summary>
                <p className="max-w-2xl pt-4 leading-7 text-white/48">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-28 text-center md:py-40">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${detail.accent}24, transparent 38rem)`,
          }}
          aria-hidden="true"
        />
        <Container className="relative max-w-[96rem]">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            Work with AiRedHQ
          </p>
          <h2 className="mx-auto mt-6 max-w-[12ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
            Let&apos;s turn the right idea into a real{" "}
            <span style={{ color: detail.accent }}>product.</span>
          </h2>
          <Button asChild size="lg" className="group mt-10">
            <Link href="/contact">
              Start a Project
              <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}

function ServiceGraphic({ detail, Icon }: { detail: ServiceDetail; Icon: LucideIcon }) {
  const visual = {
    ai: <AIWorkflowVisual accent={detail.accent} />,
    web: <WebProductVisual accent={detail.accent} />,
    mobile: <MobileProductVisual accent={detail.accent} />,
    design: <DesignSystemVisual accent={detail.accent} />,
    spatial: <SpatialTrainingVisual accent={detail.accent} />,
    cloud: <CloudPipelineVisual accent={detail.accent} />,
  }[detail.visual];

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[42rem]"
      initial={{ scale: 0.96 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      aria-label={`${detail.headline} product interface example`}
    >
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35">
        <Icon size={16} style={{ color: detail.accent }} aria-hidden="true" />
        Product system
      </div>
      {visual}
    </motion.div>
  );
}

function VisualShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg bg-[#090c11] shadow-[0_0_0_1px_rgba(255,255,255,.12),0_28px_80px_rgba(0,0,0,.38)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-white/8 px-4" aria-hidden="true">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
      </div>
      {children}
    </div>
  );
}

export function AIWorkflowVisual({ accent }: { accent: string }) {
  return (
    <VisualShell>
      <div className="grid min-h-[28rem] grid-cols-[8rem_1fr]">
        <div className="border-r border-white/8 p-4">
          <p className="text-xs font-semibold text-white/80">Knowledge Ops</p>
          {["Overview", "Sources", "Evaluations", "Activity"].map((item, index) => (
            <div key={item} className={`mt-4 text-[11px] ${index === 0 ? "text-white" : "text-white/32"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/35">Assistant workflow</p>
              <h3 className="mt-1 font-semibold">Policy answer with human review</h3>
            </div>
            <span className="rounded-full px-3 py-1 text-[10px]" style={{ color: accent, backgroundColor: `${accent}18` }}>Active</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {["Question", "Retrieve", "Generate", "Approve"].map((step, index) => (
              <motion.div key={step} className="rounded-md bg-white/[0.045] p-3" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 4, delay: index * 0.4, repeat: Infinity }}>
                <span className="font-mono text-[9px] text-white/25">0{index + 1}</span>
                <p className="mt-3 text-xs font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-md bg-white/[0.035] p-4">
              <p className="text-[10px] uppercase tracking-[.16em] text-white/30">Grounded response</p>
              <p className="mt-3 text-sm leading-6 text-white/68">The parental leave policy provides 16 weeks of paid leave for eligible team members.</p>
              <div className="mt-4 flex gap-2">
                <span className="rounded bg-white/5 px-2 py-1 text-[9px] text-white/40">Policy handbook</span>
                <span className="rounded bg-white/5 px-2 py-1 text-[9px] text-white/40">HR update</span>
              </div>
            </div>
            <div className="space-y-3">
              {[["Grounding", "Verified"], ["Risk", "Low"], ["Human review", "Required"]].map(([label, value]) => (
                <div key={label} className="flex justify-between rounded-md bg-white/[0.035] p-3 text-[11px]">
                  <span className="text-white/38">{label}</span><span style={{ color: accent }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export function WebProductVisual({ accent }: { accent: string }) {
  return (
    <VisualShell>
      <div className="min-h-[28rem] p-5">
        <div className="flex items-center justify-between">
          <div><p className="text-xs text-white/32">Workspace / Operations</p><h3 className="mt-1 font-semibold">Product control center</h3></div>
          <span className="rounded-md bg-white/[0.05] px-3 py-2 text-[10px] text-white/55">Deploy preview</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[["Active users", "Live"], ["API health", "Healthy"], ["Release", "Ready"]].map(([label, value], index) => (
            <div key={label} className="rounded-md bg-white/[0.04] p-4">
              <p className="text-[10px] text-white/30">{label}</p><p className="mt-3 text-lg font-semibold" style={{ color: index === 1 ? accent : "white" }}>{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-md bg-white/[0.035] p-4">
            <div className="flex justify-between text-[10px] text-white/30"><span>Requests over time</span><span>Last 24 hours</span></div>
            <svg className="mt-5 h-32 w-full" viewBox="0 0 300 110" fill="none" aria-hidden="true">
              <path d="M0 91 C35 72 42 78 71 60 S118 72 145 42 S188 58 218 28 S263 35 300 8" stroke={accent} strokeWidth="2" />
              <path d="M0 91 C35 72 42 78 71 60 S118 72 145 42 S188 58 218 28 S263 35 300 8 V110 H0Z" fill={`${accent}12`} />
            </svg>
          </div>
          <div className="rounded-md bg-white/[0.035] p-4">
            <p className="text-[10px] uppercase tracking-[.15em] text-white/30">Architecture</p>
            {["Web application", "API layer", "PostgreSQL", "Cache"].map((item, index) => (
              <div key={item} className="mt-3 flex items-center gap-3 text-xs text-white/60">
                <span className="size-1.5 rounded-full" style={{ backgroundColor: index < 3 ? accent : "#84cc16" }} />{item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export function MobileProductVisual({ accent }: { accent: string }) {
  return (
    <div className="relative mx-auto h-[34rem] max-w-[38rem]">
      {[
        { left: "8%", top: "11%", rotate: -6, title: "Today", lines: ["Tasks", "Updates", "Messages"] },
        { left: "38%", top: "2%", rotate: 0, title: "Your progress", lines: ["Primary action", "Recent activity", "Next step"] },
        { left: "68%", top: "13%", rotate: 6, title: "Activity", lines: ["Synced", "Offline ready", "Secure"] },
      ].map((phone, index) => (
        <motion.div
          key={phone.title}
          className="absolute h-[29rem] w-[11rem] rounded-[2rem] bg-[#090c11] p-2 shadow-[0_0_0_1px_rgba(255,255,255,.18),0_24px_50px_rgba(0,0,0,.4)]"
          style={{ left: phone.left, top: phone.top, rotate: phone.rotate }}
          animate={{ y: [0, index === 1 ? -5 : 4, 0] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-full rounded-[1.55rem] bg-[#0d1218] p-4">
            <div className="mx-auto h-3 w-12 rounded-full bg-black" />
            <p className="mt-8 text-[10px] text-white/30">{phone.title}</p>
            <div className="mt-4 h-20 rounded-lg p-3" style={{ backgroundColor: `${accent}16` }}>
              <span className="text-[9px] text-white/35">Overview</span>
              <div className="mt-4 h-2 rounded-full bg-white/8"><div className="h-full w-2/3 rounded-full" style={{ backgroundColor: accent }} /></div>
            </div>
            {phone.lines.map((line, lineIndex) => (
              <div key={line} className="mt-3 rounded-md bg-white/[0.045] p-3">
                <div className="flex items-center gap-2 text-[9px] text-white/55"><span className="size-1.5 rounded-full" style={{ backgroundColor: lineIndex === 0 ? accent : "rgba(255,255,255,.2)" }} />{line}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function DesignSystemVisual({ accent }: { accent: string }) {
  return (
    <VisualShell>
      <div className="grid min-h-[28rem] grid-cols-[7rem_1fr]">
        <div className="border-r border-white/8 p-4 text-[10px] text-white/32">
          <p className="font-semibold text-white/70">Design system</p>
          {["Foundations", "Components", "Patterns", "Accessibility"].map((item) => <p key={item} className="mt-5">{item}</p>)}
        </div>
        <div className="p-5">
          <div className="flex justify-between"><div><p className="text-[10px] text-white/30">Component library</p><h3 className="mt-1 font-semibold">Product foundations</h3></div><span className="text-[10px]" style={{ color: accent }}>AA checked</span></div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-md bg-white/[0.035] p-4">
              <p className="text-[10px] text-white/30">Buttons / states</p>
              <div className="mt-5 flex flex-wrap gap-2"><span className="rounded-md px-4 py-2 text-xs text-black" style={{ backgroundColor: accent }}>Primary</span><span className="rounded-md border border-white/15 px-4 py-2 text-xs">Secondary</span></div>
              <div className="mt-5 grid grid-cols-4 gap-2">{["#050608", accent, "#ffffff", "#737780"].map((color) => <span key={color} className="aspect-square rounded-md" style={{ backgroundColor: color }} />)}</div>
            </div>
            <div className="rounded-md bg-white/[0.035] p-4">
              <p className="text-[10px] text-white/30">User flow</p>
              <div className="mt-5 space-y-3">{["Discover", "Compare", "Decide"].map((step, index) => <div key={step} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full text-[9px]" style={{ backgroundColor: `${accent}20`, color: accent }}>{index + 1}</span><span className="text-xs text-white/58">{step}</span></div>)}</div>
            </div>
          </div>
          <div className="mt-4 rounded-md bg-white/[0.035] p-4">
            <p className="text-[10px] text-white/30">Responsive component anatomy</p>
            <div className="mt-4 grid grid-cols-[0.7fr_1.3fr] gap-3"><div className="h-20 rounded bg-white/5" /><div className="space-y-2"><div className="h-3 w-2/3 rounded bg-white/10" /><div className="h-2 rounded bg-white/5" /><div className="h-2 w-4/5 rounded bg-white/5" /></div></div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

export function SpatialTrainingVisual({ accent }: { accent: string }) {
  return (
    <VisualShell>
      <div className="relative min-h-[28rem] overflow-hidden p-5">
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:32px_32px] [transform:perspective(420px)_rotateX(58deg)_scale(1.4)]" aria-hidden="true" />
        <div className="relative flex justify-between"><div><p className="text-[10px] text-white/30">Training simulation</p><h3 className="mt-1 font-semibold">Equipment inspection</h3></div><span className="rounded-full px-3 py-1 text-[10px]" style={{ color: accent, backgroundColor: `${accent}16` }}>Step 03 / 06</span></div>
        <div className="absolute left-[34%] top-[34%] h-40 w-52 border border-white/15 bg-white/[0.025] [transform:skewY(-6deg)]">
          <div className="absolute left-6 top-7 size-16 rounded-full border" style={{ borderColor: accent }} />
          <div className="absolute bottom-7 right-7 h-16 w-24 border border-white/10" />
        </div>
        <motion.div className="absolute left-[52%] top-[43%] size-5 rounded-full border-2" style={{ borderColor: accent }} animate={{ scale: [1, 1.5, 1], opacity: [1, .4, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <div className="absolute bottom-6 left-5 right-5 grid grid-cols-3 gap-3">
          {[["Task", "Inspect valve"], ["Safety", "Area clear"], ["Tracking", "Hands detected"]].map(([label, value]) => <div key={label} className="rounded-md bg-black/55 p-3 backdrop-blur"><p className="text-[9px] text-white/30">{label}</p><p className="mt-2 text-[11px] text-white/65">{value}</p></div>)}
        </div>
      </div>
    </VisualShell>
  );
}

export function CloudPipelineVisual({ accent }: { accent: string }) {
  return (
    <VisualShell>
      <div className="min-h-[28rem] p-5">
        <div className="flex justify-between"><div><p className="text-[10px] text-white/30">Production delivery</p><h3 className="mt-1 font-semibold">Release pipeline</h3></div><span className="text-[10px]" style={{ color: accent }}>All systems operational</span></div>
        <div className="mt-8 grid grid-cols-4 gap-3">
          {["Commit", "Test", "Build", "Deploy"].map((step, index) => <motion.div key={step} className="relative rounded-md bg-white/[0.04] p-3 text-center text-xs text-white/60" animate={{ borderColor: [accent + "18", accent, accent + "18"] }} transition={{ duration: 4, delay: index * .5, repeat: Infinity }} style={{ borderWidth: 1 }}><span className="mb-2 block font-mono text-[9px] text-white/25">0{index + 1}</span>{step}</motion.div>)}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_.8fr]">
          <div className="rounded-md bg-white/[0.035] p-4">
            <p className="text-[10px] uppercase tracking-[.15em] text-white/30">Services</p>
            {["Web application", "API workers", "PostgreSQL cluster", "Redis cache"].map((service, index) => <div key={service} className="mt-3 flex items-center justify-between rounded bg-black/20 px-3 py-2 text-[11px]"><span className="text-white/55">{service}</span><span style={{ color: index === 2 ? "#84cc16" : accent }}>{index === 2 ? "Replicated" : "Healthy"}</span></div>)}
          </div>
          <div className="space-y-4">
            <div className="rounded-md bg-white/[0.035] p-4"><p className="text-[10px] text-white/30">Response time</p><p className="mt-3 text-xl font-semibold text-white/75">Within budget</p><div className="mt-4 h-1 rounded bg-white/8"><div className="h-full w-3/4 rounded" style={{ backgroundColor: accent }} /></div></div>
            <div className="rounded-md bg-white/[0.035] p-4"><p className="text-[10px] text-white/30">Rollback</p><p className="mt-3 text-sm text-white/65">Previous release ready</p></div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function ServiceUseCases({ detail }: { detail: ServiceDetail }) {
  return (
    <section className="bg-[#080a0e] py-20 md:py-28">
      <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">Where it creates value</p>
            <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[.95] md:text-7xl">
              Practical use, not a capability{" "}
              <span style={{ color: detail.accent }}>checklist.</span>
            </h2>
          <p className="mt-8 max-w-lg text-lg leading-8 text-white/48">{detail.outcome}</p>
        </div>
        <div className="border-t border-white/10">
          {detail.useCases.map((useCase, index) => {
            const UseCaseIcon = capabilityIcons[detail.visual][index];
            return (
              <motion.article
                key={useCase.title}
                className="group border-b border-white/10 py-8"
                initial={{ y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
              >
                <div className="flex items-center gap-5">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ color: detail.accent, backgroundColor: `${detail.accent}16` }}
                  >
                    <UseCaseIcon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="mt-4 max-w-2xl leading-7 text-white/45 sm:pl-[4.25rem]">
                  {useCase.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function DeliveryPath({ detail }: { detail: ServiceDetail }) {
  const isLinear = detail.visual === "web" || detail.visual === "cloud";
  const isVertical = detail.visual === "mobile";
  const isCircular = detail.visual === "design";

  return (
    <section className="bg-[#080a0e] py-20 md:py-28">
      <Container className="max-w-[96rem]">
        <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">Delivery path</p>
        <h2 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[0.95] md:text-7xl">
          A clear path from decision to <span style={{ color: detail.accent }}>delivery.</span>
        </h2>

        {isLinear && (
          <ol className="relative mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            <span className="absolute left-0 right-0 top-7 hidden h-px bg-white/12 lg:block" aria-hidden="true" />
            {detail.process.map((step, index) => (
              <li key={step} className="relative">
                <span className="flex size-14 items-center justify-center rounded-full bg-[#080a0e] font-mono text-xs shadow-[0_0_0_1px_rgba(255,255,255,.14)]" style={{ color: detail.accent }}>0{index + 1}</span>
                <h3 className="mt-6 text-lg font-semibold">{step}</h3>
              </li>
            ))}
          </ol>
        )}

        {isVertical && (
          <ol className="relative mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-3">
            {detail.process.map((step, index) => (
              <li key={step} className="relative flex min-h-28 items-center gap-4 rounded-lg bg-[#0d1015] p-5">
                <span className="z-10 flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#101419] font-mono text-xs" style={{ color: detail.accent, boxShadow: `0 0 0 1px ${detail.accent}55` }}>0{index + 1}</span>
                <h3 className="text-lg font-semibold">{step}</h3>
              </li>
            ))}
          </ol>
        )}

        {isCircular && (
          <ol className="relative mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 rounded-[3rem] border border-white/10 p-6 sm:grid-cols-3 md:p-8">
            {detail.process.map((step, index) => (
              <li key={step} className="flex min-h-28 flex-col items-center justify-center rounded-full bg-white/[0.035] text-center">
                <span className="font-mono text-xs" style={{ color: detail.accent }}>0{index + 1}</span>
                <h3 className="mt-2 font-semibold">{step}</h3>
              </li>
            ))}
          </ol>
        )}

        {!isLinear && !isVertical && !isCircular && (
          <ol className="relative mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 900 330" preserveAspectRatio="none" aria-hidden="true">
              <path d="M80 75 C260 10 640 10 820 75 C930 125 930 205 820 255 C640 320 260 320 80 255" fill="none" stroke={detail.accent} strokeOpacity=".28" strokeWidth="2" strokeDasharray="5 8" />
            </svg>
            {detail.process.map((step, index) => (
              <li key={step} className={`relative z-10 ${index > 2 ? "sm:[grid-row:2]" : ""} ${index === 3 ? "sm:[grid-column:3]" : index === 4 ? "sm:[grid-column:2]" : index === 5 ? "sm:[grid-column:1]" : ""}`}>
                <div className="flex min-h-24 items-center gap-4 rounded-lg bg-[#0d1015] p-4 shadow-[0_0_0_1px_rgba(255,255,255,.08)]">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full font-mono text-xs" style={{ color: detail.accent, backgroundColor: `${detail.accent}16` }}>0{index + 1}</span>
                  <h3 className="text-xl font-semibold">{step}</h3>
                </div>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}

function TechnologyShowcase({ detail }: { detail: ServiceDetail }) {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid max-w-[96rem] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">Technology</p>
          <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[.95] md:text-7xl">
            Chosen for the <span style={{ color: detail.accent }}>product.</span>
          </h2>
          <p className="mt-7 max-w-md leading-7 text-white/45">The stack follows the experience, security, delivery and ownership needs of the product.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {detail.technologies.map((technology) => {
            const logo = technologyLogos[technology];
            return (
              <div
                key={technology}
                className="group flex aspect-[1.35/1] items-center justify-center rounded-lg p-6 transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(145deg, ${detail.accent}12, #0c1016 62%)`,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,.08), 0 18px 40px rgba(0,0,0,.18)",
                }}
                title={technology}
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={technology}
                    width={112}
                    height={48}
                    className={`h-10 w-auto max-w-[7rem] object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 ${
                      monochromeTechnologyLogos.has(technology) ? "brightness-0 invert" : ""
                    }`}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-center">
                    <Blocks size={28} style={{ color: detail.accent }} aria-hidden="true" />
                    <span className="text-sm font-medium text-white/60">{technology}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function IndustryShowcase({ detail }: { detail: ServiceDetail }) {
  const icons = [Landmark, GraduationCap, ShoppingBag, Factory];
  const slideCount = detail.industries.length;
  const carouselId = `industry-carousel-${detail.visual}`;

  return (
    <section className="bg-[#080a0e] py-20 md:py-28">
      <Container className="max-w-[96rem]">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">Relevant industries</p>
          <h2 className="mt-6 text-5xl font-semibold leading-[.95] md:text-7xl">
            Applied in real product <span style={{ color: detail.accent }}>contexts.</span>
          </h2>
        </div>
        <div
          className={`industry-carousel industry-carousel--${slideCount} relative mt-16 overflow-hidden`}
          id={carouselId}
          role="region"
          aria-roledescription="carousel"
          aria-label="Relevant industry examples"
        >
          <div className="industry-carousel-stage">
            {detail.industries.map((industry, frameIndex) => {
              const previousIndex = (frameIndex - 1 + slideCount) % slideCount;
              const nextIndex = (frameIndex + 1) % slideCount;
              const visibleSlides = [previousIndex, frameIndex, nextIndex];
              return (
                <div
                  key={industry}
                  className={`industry-carousel-frame${frameIndex === 0 ? " is-active" : ""}`}
                  data-carousel-slide
                  aria-hidden={frameIndex !== 0}
                  aria-label={`${industry}, slide ${frameIndex + 1} of ${slideCount}`}
                >
                  <div
                    className="grid items-center gap-3"
                    style={{ gridTemplateColumns: "minmax(4rem, 0.24fr) minmax(0, 1fr) minmax(4rem, 0.24fr)" }}
                  >
                    {visibleSlides.map((industryIndex, position) => {
                      const visibleIndustry = detail.industries[industryIndex];
                      const IndustryIcon = icons[industryIndex % icons.length];
                      const isActive = position === 1;

                      return (
                        <article
                          key={`${position}-${visibleIndustry}`}
                          className="relative overflow-hidden rounded-lg bg-[#0a0d12]"
                          style={{
                            minHeight: isActive ? "30rem" : "23rem",
                            opacity: isActive ? 1 : 0.42,
                            transform: `scale(${isActive ? 1 : 0.9})`,
                          }}
                          aria-hidden={!isActive}
                        >
                          <Image
                            src={serviceVisualImages[detail.visual]}
                            alt={isActive ? `${visibleIndustry} example` : ""}
                            fill
                            className="object-cover"
                            style={{
                              filter: isActive ? "none" : "blur(8px) saturate(.55)",
                              transform: "scale(2.08)",
                              transformOrigin: [
                                "top left",
                                "top right",
                                "bottom left",
                                "bottom right",
                              ][industryIndex % 4],
                            }}
                            sizes={isActive ? "(min-width: 768px) 64vw, 76vw" : "(min-width: 768px) 18vw, 12vw"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/35 to-transparent" />
                          {isActive && (
                            <div className="absolute" style={{ right: "2rem", bottom: "2rem", left: "2rem" }}>
                              <div className="flex items-center gap-4">
                                <span
                                  className="flex size-11 items-center justify-center rounded-lg"
                                  style={{ color: detail.accent, backgroundColor: `${detail.accent}18` }}
                                >
                                  <IndustryIcon size={22} aria-hidden="true" />
                                </span>
                                <h3 className="text-2xl font-semibold md:text-3xl">{visibleIndustry}</h3>
                              </div>
                              <p className="mt-4 max-w-xl leading-7 text-white/58">
                                A practical context for {detail.headline.toLowerCase()}
                              </p>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    data-carousel-previous
                    className="absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white outline-none backdrop-blur transition hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Previous industry"
                  >
                    <ArrowLeft size={19} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    data-carousel-next
                    className="absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white outline-none backdrop-blur transition hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Next industry"
                  >
                    <ArrowRight size={19} aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-7 flex items-center justify-center gap-2" aria-label="Select industry slide">
          {detail.industries.map((industry, index) => (
            <button
              type="button"
              key={industry}
              data-carousel-dot={index}
              className={`industry-carousel-dot h-1.5 w-6 rounded-full bg-white/20 outline-none transition-all hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-white${index === 0 ? " is-active" : ""}`}
              style={{
                boxShadow: `inset 0 0 0 1px ${detail.accent}30`,
              }}
              aria-label={`Show ${industry}`}
              aria-current={index === 0 ? "true" : undefined}
            />
          ))}
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var root=document.getElementById(${JSON.stringify(carouselId)});if(!root||root.dataset.ready)return;var slides=Array.from(root.querySelectorAll('[data-carousel-slide]'));var dots=Array.from(root.parentElement.querySelectorAll('[data-carousel-dot]'));var current=0,timer;function show(next){current=(next+slides.length)%slides.length;slides.forEach(function(slide,index){var active=index===current;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));});dots.forEach(function(dot,index){var active=index===current;dot.classList.toggle('is-active',active);if(active)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});}function stop(){clearInterval(timer);}function start(){stop();if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(function(){show(current+1);},4500);}root.querySelectorAll('[data-carousel-previous]').forEach(function(button){button.addEventListener('click',function(){show(current-1);start();});});root.querySelectorAll('[data-carousel-next]').forEach(function(button){button.addEventListener('click',function(){show(current+1);start();});});dots.forEach(function(dot,index){dot.addEventListener('click',function(){show(index);start();});});root.addEventListener('mouseenter',stop);root.addEventListener('mouseleave',start);root.dataset.ready='true';start();})();`,
          }}
        />
      </Container>
    </section>
  );
}
