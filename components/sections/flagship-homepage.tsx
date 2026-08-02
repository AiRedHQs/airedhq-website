import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroProductVisual } from "@/components/sections/hero-product-visual";
import { Button } from "@/components/ui/button";
import { cn } from "@/src/lib/utils";

type ProductId = "hiared" | "gobazaar" | "yojiq";

const products = [
  {
    id: "hiared",
    name: "hiARed",
    href: "/products/hiared",
    logo: "/hiared/hiARed Logo Purple Dark Transparent.png",
    preview: "/hiared/hiared-product-preview-transparent.webp",
    previewAlt:
      "hiARed recruitment dashboard showing transparency scoring, resume screening and hiring pipeline",
    logoSize: "h-10 md:h-12",
    eyebrow: "Transparent AI recruitment",
    headline: "Smarter hiring.\nFaster decisions.",
    headlineAccent: "Smarter",
    sentence:
      "hiARed brings transparency scores, resume screening, candidate ranking and end-to-end hiring stages into one recruitment workspace.",
    usps: [
      "Company Transparency Score",
      "Resume Screening",
      "Candidate Ranking",
      "End-to-End Pipeline",
    ],
  },
  {
    id: "gobazaar",
    name: "GoBazaar",
    href: "/products/gobazaar",
    logo: "/gobazaar/GoBazaar Logo Dark Transparent Trimmed.png",
    preview: "/gobazaar/gobazaar-product-preview-transparent.webp",
    previewAlt:
      "GoBazaar local discovery interface showing Jaipur markets, offers and nearby businesses",
    logoSize: "h-10 md:h-12",
    eyebrow: "Hyperlocal discovery",
    headline: "Discover local.\nGrow local.",
    headlineAccent: "Discover",
    sentence:
      "GoBazaar helps people discover bazaars, food, shopping, fairs and nearby offers while merchants manage local visibility.",
    usps: ["Market Discovery", "Nearby Offers", "Food & Fair Pins", "Merchant Dashboard"],
  },
  {
    id: "yojiq",
    name: "YojIQ",
    href: "/products/yojiq",
    logo: "/yojiq/YOJIQLogoTranparent for Dark Background 820X208.png",
    preview: "/yojiq/yojiq-product-preview-transparent-clean.webp",
    previewAlt:
      "YojIQ personal finance application showing budgets, emergency funds and expense analytics",
    logoSize: "h-10 md:h-12",
    eyebrow: "Personal finance clarity",
    headline: "Plan smarter.\nSpend better.",
    headlineAccent: "smarter",
    sentence:
      "YojIQ gives people a calmer way to manage budgets, emergency funds, insurance, savings goals and investments.",
    usps: ["Budget Health", "Emergency Fund", "Expense Charts", "Investment Summary"],
  },
] as const;

const accent = {
  hiared: "text-[#6102f5]",
  gobazaar: "text-product-gobazaar",
  yojiq: "text-product-yojiq",
} satisfies Record<ProductId, string>;

const productSectionBackground = {
  hiared:
    "radial-gradient(circle at 78% 48%, rgba(97,2,245,0.13), transparent 38%), #07070a",
  gobazaar: "radial-gradient(circle at 78% 48%, #123872 0%, #091b39 30%, #050910 68%)",
  yojiq:
    "radial-gradient(circle at 78% 48%, rgba(132,204,22,0.14), transparent 38%), #070907",
} satisfies Record<ProductId, string>;

const productCta = {
  hiared:
    "border-[#6102f5]/55 bg-[#6102f5]/10 text-[#b58cff] hover:bg-[#6102f5]/18 hover:text-white",
  gobazaar:
    "border-product-gobazaar/55 bg-product-gobazaar/10 text-product-gobazaar hover:bg-product-gobazaar/18 hover:text-white",
  yojiq:
    "border-product-yojiq/55 bg-product-yojiq/10 text-product-yojiq hover:bg-product-yojiq/18 hover:text-white",
} satisfies Record<ProductId, string>;

type ClientCompany = {
  name: string;
  logoFile: string;
  surface: "light" | "dark";
  category: string;
  headline: string;
  description: string;
  reach: string;
  offerings: readonly string[];
  accent: string;
};

const clientCompanyOrder = [
  "Sensible-VR",
  "Nextechoasis",
  "STEMpedia",
  "Umety",
  "LaunchMyCareer",
  "Veative",
  "EmsigPro",
  "Next Education",
  "ThinkLABS",
] as const;

const clientCompanyData: readonly ClientCompany[] = [
  {
    name: "ThinkLABS",
    logoFile: "thinklabs-logo.png",
    surface: "light",
    category: "Educational Robotics / STEM EdTech",
    headline: "Hands-on robotics and programming for schools and colleges.",
    description:
      "An IIT Bombay-linked educational robotics venture that combined physical kits, visual programming tools and structured classroom learning.",
    reach: "Historically reported: 1M+ children across 2,000+ schools",
    offerings: [
      "Robotics learning systems",
      "Visual programming tools",
      "Teacher training",
    ],
    accent: "#4ead55",
  },
  {
    name: "Next Education",
    logoFile: "next-education-logo.png",
    surface: "light",
    category: "K-12 B2B EdTech / School SaaS",
    headline: "An integrated technology and academic partner for K-12 schools.",
    description:
      "Next Education provides curriculum, digital classrooms, learning products, school-management platforms and institutional support.",
    reach: "Company-reported: 12M+ students and 18,000+ schools",
    offerings: [
      "Digital curriculum",
      "School ERP and LMS",
      "Classroom and lab solutions",
    ],
    accent: "#438b3e",
  },
  {
    name: "Veative",
    logoFile: "veative-logo.png",
    surface: "light",
    category: "Immersive Learning / VR EdTech",
    headline: "Curriculum-aligned immersive learning with assessment built in.",
    description:
      "Veative combines VR and WebXR educational content with scoring, student progress and teacher-facing learning analytics.",
    reach: "Public industry reports: presence in 25+ countries",
    offerings: ["K-12 VR modules", "WebXR learning", "Assessment analytics"],
    accent: "#829451",
  },
  {
    name: "Umety",
    logoFile: "umety-logo.png",
    surface: "light",
    category: "K-12 XR Platform / Education VR",
    headline: "A complete immersive-classroom platform across devices.",
    description:
      "Umety brings together immersive lessons, education-first hardware, classroom orchestration, assessments and reporting.",
    reach: "Content library: 1,000+ lessons and 1,500+ interactive 3D models",
    offerings: [
      "Immersive lessons",
      "Education-first VR hardware",
      "Classroom management",
    ],
    accent: "#1f54ff",
  },
  {
    name: "LaunchMyCareer",
    logoFile: "launchmycareer-logo.png",
    surface: "light",
    category: "Career Guidance / Student Employability",
    headline: "Career discovery that moves from self-awareness to readiness.",
    description:
      "LaunchMyCareer combines assessments, counselling, immersive career exploration and future-skills development for young people.",
    reach: "Announced availability through 6,000+ CSC Academies",
    offerings: [
      "Career assessments",
      "Expert counselling",
      "Immersive career exploration",
    ],
    accent: "#6954d8",
  },
  {
    name: "EmsigPro",
    logoFile: "emsigpro-logo.png",
    surface: "light",
    category: "International Higher-Education Services",
    headline: "Guidance for Indian students pursuing higher education in Germany.",
    description:
      "EmsigPro supports programme selection, applications, visa preparation, language learning and student integration.",
    reach: "India-to-Germany education focus; no verified public volume",
    offerings: ["Admissions counselling", "Visa guidance", "German-language preparation"],
    accent: "#b52630",
  },
  {
    name: "STEMpedia",
    logoFile: "stempedia-logo.png",
    surface: "light",
    category: "Coding, AI and Educational Robotics",
    headline: "A connected ecosystem for coding, AI, robotics and making.",
    description:
      "STEMpedia combines PictoBlox software, programmable hardware, school innovation labs, curriculum and teacher training.",
    reach: "Company-reported: 300,000+ monthly active PictoBlox users",
    offerings: [
      "PictoBlox coding platform",
      "AI and robotics kits",
      "School innovation labs",
    ],
    accent: "#f0a400",
  },
  {
    name: "Nextechoasis",
    logoFile: "nextechoasis-logo.png",
    surface: "light",
    category: "XR Development / Immersive Training",
    headline: "Custom AR and VR experiences across learning and industry.",
    description:
      "Nextechoasis develops immersive applications and 3D content for education, training, real estate, agriculture and healthcare.",
    reach: "Multi-industry India-based services; no public deployment total",
    offerings: ["VR classrooms", "Training simulations", "Custom AR and VR applications"],
    accent: "#20252c",
  },
  {
    name: "Sensible-VR",
    logoFile: "sensible-vr-logo.png",
    surface: "light",
    category: "Offline-First Classroom VR",
    headline: "Practical, privacy-conscious VR designed around real classrooms.",
    description:
      "Sensible-VR focuses on durable education hardware, localized content, offline operation and teacher-friendly deployment.",
    reach: "Japan-based, founded in 2024; international school focus",
    offerings: [
      "Offline VR deployment",
      "Localized learning content",
      "Privacy-first classroom systems",
    ],
    accent: "#df2029",
  },
] as const;

const clientCompanies = clientCompanyOrder.map((name) => {
  const company = clientCompanyData.find((item) => item.name === name);

  if (!company) {
    throw new Error(`Missing client company data for ${name}`);
  }

  return company;
});

const collaborationNodes = [
  { name: "Sensible-VR", x: 29, y: 42 },
  { name: "Nextechoasis", x: 8, y: 57 },
  { name: "STEMpedia", x: 18, y: 82 },
  { name: "Umety", x: 92, y: 48 },
  { name: "LaunchMyCareer", x: 78, y: 80 },
  { name: "Veative", x: 84, y: 18 },
  { name: "EmsigPro", x: 50, y: 91 },
  { name: "Next Education", x: 50, y: 8 },
  { name: "ThinkLABS", x: 14, y: 18 },
] as const;

export function FlagshipHomepage() {
  return (
    <>
      <Hero />
      <main className="bg-[#050608]">
        <ProductsIntroduction />
        {products.map((product) => (
          <ProductBand key={product.id} product={product} />
        ))}
        <CompanyCollaborations />
      </main>
    </>
  );
}

function CompanyCollaborations() {
  return (
    <section className="relative overflow-hidden bg-[#050608] py-20 md:py-32 lg:py-40">
      <Container className="max-w-[96rem]">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
              Selected Collaborations
            </p>
            <h2 className="mt-6 max-w-[10ch] text-5xl font-semibold leading-[0.95] text-balance text-white md:text-7xl lg:text-[5.5rem]">
              Built alongside <span className="text-[#2f91d4]">ambitious</span> teams.
            </h2>
          </div>
          <CollaborationNetwork />
        </div>

        <div
          id="client-collaboration-grid"
          className="client-collaboration-grid mt-14 grid grid-cols-2 gap-3 md:mt-20 md:gap-4 lg:mt-28 lg:grid-cols-3"
          aria-label="Companies AiRedHQ has worked with"
        >
          {clientCompanies.map((company, companyIndex) => (
            <article
              key={`${company.name}-panel`}
              data-company-panel={company.name}
              hidden
              className={cn(
                "client-company-panel relative col-span-2 min-h-[26rem] flex-col justify-between overflow-hidden rounded-lg p-6 sm:p-8 md:min-h-[30rem] md:p-12 lg:col-span-1",
                company.surface === "dark"
                  ? "bg-[#090b0f] text-white ring-1 ring-white/12"
                  : "bg-[#f1f2ef] text-[#101318]",
              )}
            >
              <div
                className="client-panel-pattern"
                data-variant={companyIndex % 3}
                style={{ "--client-pattern-accent": company.accent } as CSSProperties}
                aria-hidden="true"
              >
                <span />
              </div>
              <button
                type="button"
                data-company-close
                className={cn(
                  "absolute right-5 top-5 flex size-11 items-center justify-center rounded-full outline-none transition focus-visible:ring-2",
                  company.surface === "dark"
                    ? "bg-white/8 text-white/65 hover:bg-white hover:text-black focus-visible:ring-white"
                    : "bg-black/7 text-black/60 hover:bg-black hover:text-white focus-visible:ring-black",
                )}
                aria-label={`Close ${company.name} details`}
              >
                <X size={19} aria-hidden="true" />
              </button>
              <div className="relative z-10">
                <Image
                  src={`/clients/${company.logoFile}`}
                  alt={company.name}
                  width={520}
                  height={180}
                  className="h-20 w-auto max-w-[65%] object-contain object-left"
                />
                <p
                  className={cn(
                    "mt-14 text-xs font-semibold uppercase tracking-[0.26em]",
                    company.surface === "dark" ? "text-white/42" : "text-black/42",
                  )}
                >
                  {company.category}
                </p>
                <h3 className="mt-5 max-w-[19ch] text-4xl font-semibold leading-[1.02] md:text-5xl">
                  {company.headline}
                </h3>
                <p
                  className={cn(
                    "mt-7 max-w-2xl text-base leading-7 md:text-lg",
                    company.surface === "dark" ? "text-white/58" : "text-black/58",
                  )}
                >
                  {company.description}
                </p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {company.offerings.map((offering) => (
                    <span
                      key={offering}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium",
                        company.surface === "dark"
                          ? "bg-white/8 text-white/72"
                          : "bg-black/6 text-black/68",
                      )}
                    >
                      {offering}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 mt-12">
                <p
                  className={cn(
                    "text-xs font-semibold uppercase tracking-[0.2em]",
                    company.surface === "dark" ? "text-white/38" : "text-black/38",
                  )}
                >
                  Publicly reported reach or focus
                </p>
                <p
                  className={cn(
                    "mt-3 text-sm font-medium leading-6",
                    company.surface === "dark" ? "text-white/68" : "text-black/64",
                  )}
                >
                  {company.reach}
                </p>
              </div>
            </article>
          ))}

          {clientCompanies.map((company, index) => (
            <button
              type="button"
              key={company.name}
              data-company-select={company.name}
              className={cn(
                "client-company-logo group relative flex min-h-28 items-center justify-center overflow-hidden rounded-lg p-4 outline-none transition-transform duration-500 hover:-translate-y-1 sm:min-h-36 sm:p-6 lg:min-h-40",
                company.surface === "dark"
                  ? "bg-[#090b0f] text-white ring-1 ring-white/12"
                  : "bg-[#f1f2ef] text-black",
              )}
              style={{ transitionDelay: `${index * 20}ms` }}
              aria-label={`View collaboration with ${company.name}`}
              aria-pressed="false"
            >
              <Image
                src={`/clients/${company.logoFile}`}
                alt=""
                width={420}
                height={160}
                className="h-16 w-full max-w-[13rem] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var root=document.getElementById('client-collaboration-grid');if(!root||root.dataset.ready)return;var panels=Array.from(root.querySelectorAll('[data-company-panel]'));var buttons=Array.from(root.querySelectorAll('[data-company-select]'));function clearPosition(button){button.style.gridColumn='';button.style.gridRow='';}function close(){root.classList.remove('is-expanded');panels.forEach(function(panel){panel.hidden=true;panel.classList.remove('is-active');});buttons.forEach(function(button){button.classList.remove('is-selected');button.setAttribute('aria-pressed','false');clearPosition(button);});}function open(name){var panel=panels.find(function(item){return item.dataset.companyPanel===name;});if(!panel)return;var desktop=matchMedia('(min-width: 1024px)').matches;var railRow=1;root.classList.add('is-expanded');panels.forEach(function(item){var active=item===panel;item.hidden=!active;item.classList.toggle('is-active',active);});buttons.forEach(function(button){var active=button.dataset.companySelect===name;button.classList.toggle('is-selected',active);button.setAttribute('aria-pressed',String(active));if(desktop&&!active){button.style.gridColumn='2';button.style.gridRow=String(railRow++);}else{clearPosition(button);}});}buttons.forEach(function(button){button.addEventListener('click',function(){open(button.dataset.companySelect);});});root.querySelectorAll('[data-company-close]').forEach(function(button){button.addEventListener('click',close);});root.dataset.ready='true';})();`,
          }}
        />
      </Container>
    </section>
  );
}

function CollaborationNetwork() {
  return (
    <div
      className="group/network relative mx-auto aspect-[1.55/1] w-full max-w-3xl"
      aria-label="AiRedHQ collaboration network"
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="29"
          stroke="rgba(255,255,255,.05)"
          strokeDasharray="1 4"
        />
        {collaborationNodes.map((node, index) => (
          <line
            key={node.name}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="rgba(47,145,212,.46)"
            strokeWidth="0.3"
            strokeDasharray="2 2.8"
            vectorEffect="non-scaling-stroke"
            className="opacity-60 transition-opacity duration-500 group-hover/network:opacity-100"
            style={{ transitionDelay: `${index * 35}ms` }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0a0d12] shadow-[0_0_0_1px_rgba(47,145,212,.42),0_0_40px_rgba(47,145,212,.1)] transition-transform duration-500 group-hover/network:scale-105 md:size-28">
        <Image
          src="/airedhq/Logo 2X1 Transparent.png"
          alt="AiRedHQ"
          width={84}
          height={42}
          className="h-auto w-[4.5rem] object-contain md:w-[5.25rem]"
        />
      </div>

      {collaborationNodes.map((node) => {
        const company = clientCompanies.find((item) => item.name === node.name);
        if (!company) return null;

        return (
          <span
            key={node.name}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            className={cn(
              "absolute z-20 flex h-12 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md p-2 shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-110 focus:scale-110 md:h-14 md:w-28",
              company.surface === "dark"
                ? "bg-[#090b0f] ring-1 ring-white/14"
                : "bg-[#f1f2ef]",
            )}
            tabIndex={0}
          >
            <Image
              src={`/clients/${company.logoFile}`}
              alt={company.name}
              width={180}
              height={70}
              className="h-full w-full object-contain"
            />
          </span>
        );
      })}
    </div>
  );
}

function ProductsIntroduction() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      <Container className="grid max-w-[96rem] items-end gap-12 md:gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            Product portfolio
          </p>
          <h2 className="display-editorial text-safe mt-6 max-w-[13ch] font-semibold text-balance text-white">
            Different problems. One standard of{" "}
            <span className="text-[#2f91d4]">execution.</span>
          </h2>
        </div>
        <ProductIndexGraphic />
      </Container>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050608] pt-10 text-white sm:pt-14 md:pt-18 lg:pt-10">
      <HeroAtmosphere />
      <Container className="relative z-10 grid max-w-[96rem] items-center gap-5 pb-8 sm:gap-8 sm:pb-12 md:gap-10 md:pb-16 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[0.72fr_1.28fr] lg:gap-4 lg:py-12 xl:py-16">
        <div className="max-w-2xl">
          <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-white/48 sm:text-xs sm:tracking-[0.34em]">
            Product innovation company
          </p>
          <h1 className="display-signature text-safe max-w-[11ch] font-semibold tracking-normal text-balance">
            We build <span className="text-[#2f91d4]">products</span> that solve real
            problems.
          </h1>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-white/58 sm:mt-7 md:text-lg">
            Three products, built and operated by one team. We design, ship and improve
            the software we put our name on.
          </p>
          <div className="mt-7 flex flex-col items-start gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
            <Button
              asChild
              size="lg"
              className="group rounded-full border border-white bg-white px-6 text-black shadow-none hover:bg-white/90"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center text-sm font-medium text-white/76 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Start a Project
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        <HeroProductVisual />
      </Container>
    </section>
  );
}

function ProductBand({ product }: { product: (typeof products)[number] }) {
  const isGoBazaar = product.id === "gobazaar";
  const isYojIQ = product.id === "yojiq";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-18 md:py-24 lg:py-32",
        isYojIQ && "lg:py-40",
      )}
      style={{ background: productSectionBackground[product.id] }}
    >
      <Container
        className={cn(
          "relative z-10 grid items-center gap-9 md:gap-12 lg:gap-16",
          isGoBazaar
            ? "lg:grid-cols-[1.22fr_0.78fr]"
            : isYojIQ
              ? "lg:grid-cols-[0.88fr_1.12fr] lg:items-end"
              : "lg:grid-cols-[0.72fr_1.28fr]",
        )}
      >
        <div className={cn("max-w-xl", isGoBazaar && "lg:order-2 lg:justify-self-end")}>
          <Image
            src={product.logo}
            alt={product.name}
            width={720}
            height={240}
            className={cn("mb-8 w-auto object-contain", product.logoSize)}
          />
          <p
            className={cn(
              "mb-5 text-xs font-medium uppercase tracking-[0.28em]",
              accent[product.id],
            )}
          >
            {product.eyebrow}
          </p>
          <h2 className="whitespace-pre-line text-[2.65rem] font-semibold leading-[0.94] tracking-normal text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <HighlightedHeadline
              text={product.headline}
              highlight={product.headlineAccent}
              className={accent[product.id]}
            />
          </h2>
          <p className="mt-6 text-base leading-7 text-white/58 md:mt-7 md:text-lg">
            {product.sentence}
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 md:mt-10">
            {product.usps.map((usp) => (
              <li
                key={usp}
                className="flex items-center gap-3 border-l border-white/14 pl-3 text-sm font-medium text-white/82"
              >
                <Check className={cn("size-4 shrink-0", accent[product.id])} />
                {usp}
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="lg"
            className={cn(
              "group mt-10 rounded-full border px-6 shadow-none",
              productCta[product.id],
            )}
          >
            <Link href={product.href}>
              Learn More
              <span className="sr-only"> about {product.name}</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div
          className={cn(
            "product-preview-visual relative mx-auto w-full max-w-3xl will-change-transform lg:max-w-none",
            isGoBazaar && "lg:order-1",
            isYojIQ && "lg:-mb-16",
          )}
          data-product={product.id}
        >
          <Image
            src={product.preview}
            alt={product.previewAlt}
            width={product.id === "gobazaar" ? 1693 : 1536}
            height={product.id === "gobazaar" ? 929 : 1024}
            sizes="(max-width: 1023px) 100vw, 62vw"
            className={cn(
              "mx-auto h-auto max-h-[23rem] w-full object-contain md:max-h-[34rem] lg:max-h-none",
              isGoBazaar && "lg:w-[112%] lg:max-w-none",
              isYojIQ && "max-h-[21rem] md:max-h-[30rem] lg:max-h-none",
            )}
          />
          {product.id === "yojiq" && (
            <Image
              src="/yojiq/YOJIQLogoTranparent for Dark Background 820X208.png"
              alt=""
              width={820}
              height={208}
              aria-hidden="true"
              className="absolute right-[11%] top-[13%] h-auto w-[31%] object-contain"
            />
          )}
        </div>
      </Container>
    </section>
  );
}

function HighlightedHeadline({
  text,
  highlight,
  className,
}: {
  text: string;
  highlight: string;
  className: string;
}) {
  const highlightIndex = text.indexOf(highlight);

  if (highlightIndex === -1) {
    return text;
  }

  return (
    <>
      {text.slice(0, highlightIndex)}
      <span className={className}>{highlight}</span>
      {text.slice(highlightIndex + highlight.length)}
    </>
  );
}

function ProductIndexGraphic() {
  const indexItems = [
    { name: "hiARed", color: "#6102f5", offset: "lg:ml-0" },
    {
      name: "GoBazaar",
      color: "hsl(var(--product-gobazaar))",
      offset: "lg:ml-12",
    },
    {
      name: "YojIQ",
      color: "hsl(var(--product-yojiq))",
      offset: "lg:ml-24",
    },
  ].sort(
    (first, second) =>
      clientCompanyOrder.indexOf(first.name as (typeof clientCompanyOrder)[number]) -
      clientCompanyOrder.indexOf(second.name as (typeof clientCompanyOrder)[number]),
  );

  return (
    <div className="relative pb-2" aria-label="AiRedHQ products">
      <p className="mb-8 max-w-sm text-sm leading-6 text-white/48">
        Recruitment, local discovery and personal finance. Each product is shaped by the
        operating reality of its category.
      </p>
      <div className="space-y-7">
        {indexItems.map((item, index) => (
          <div
            key={item.name}
            className={cn("flex max-w-xl items-center gap-4", item.offset)}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            <span
              className="h-px flex-1"
              style={{
                background: `linear-gradient(90deg, ${item.color}, transparent)`,
              }}
              aria-hidden="true"
            />
            <span className="w-24 text-sm font-semibold text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_62%_50%,rgba(97,2,245,0.09),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(132,204,22,0.08),transparent_24%),linear-gradient(180deg,#050608,#07090d_52%,#050608)]" />
      <div className="surface-noise absolute inset-0 opacity-[0.05]" />
    </div>
  );
}
