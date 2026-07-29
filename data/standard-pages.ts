import { featuredProducts } from "@/data/products";
import { solutions } from "@/data/solutions";
import { caseStudyPreviews, industries, innovationConcepts } from "@/data/trust";
import type { PageContent } from "@/data/site-pages";

export const standardPages: Record<string, PageContent> = {
  about: {
    slug: "about",
    label: "About",
    title: "Product-led innovation, engineered with care.",
    description:
      "AiRedHQ designs, builds, launches and scales products that create measurable business outcomes.",
    sections: [
      {
        title: "Mission",
        blocks: [
          {
            title: "Build outcomes",
            body: "Design, build, launch and scale products that create measurable business outcomes.",
          },
        ],
      },
      {
        title: "Vision",
        blocks: [
          {
            title: "Global product innovation",
            body: "Become a globally respected product innovation company known for practical AI, immersive technology and beautifully engineered software.",
          },
        ],
      },
      {
        title: "Timeline",
        blocks: [
          {
            title: "Phase 1",
            body: "Launch the corporate website, product ecosystem, case study structure and design system.",
          },
          {
            title: "Phase 2",
            body: "Expand hiARed, launch GoBazaar publicly and release the YojIQ MVP.",
          },
          {
            title: "Phase 3",
            body: "Explore AI agents, enterprise platforms, partnerships and developer ecosystem opportunities.",
          },
        ],
      },
      {
        title: "Values",
        blocks: [
          {
            title: "Product-first",
            body: "Products demonstrate capability before services monetize capability.",
          },
          {
            title: "Privacy by design",
            body: "Sensitive product experiences are designed with trust and restraint.",
          },
          {
            title: "Performance-first",
            body: "Interfaces and systems should feel fast, clear and reliable.",
          },
        ],
      },
      {
        title: "Leadership placeholder",
        blocks: [
          {
            title: "Coming Soon",
            body: "Leadership profiles will be added when approved bios and imagery are available.",
          },
        ],
      },
      {
        title: "Technology",
        blocks: [
          {
            title: "Modern stack",
            body: "Next.js, React, TypeScript, AI integrations, cloud architecture and reusable systems.",
          },
        ],
      },
      {
        title: "Culture",
        blocks: [
          {
            title: "Engineering-driven",
            body: "AiRedHQ values practical product thinking, clean architecture and thoughtful user experience.",
          },
        ],
      },
    ],
  },
  products: {
    slug: "products",
    label: "Products",
    title: "Products that prove how AiRedHQ builds.",
    description:
      "AiRedHQ's product ecosystem demonstrates capability before services enter the story.",
    sections: [
      {
        title: "Product Portfolio",
        blocks: featuredProducts.map((p) => ({
          title: p.name,
          body: `${p.tagline}. ${p.description}`,
        })),
      },
      {
        title: "Product Philosophy",
        blocks: [
          {
            title: "Build first",
            body: "Every product exists to solve a real problem and validate engineering capability.",
          },
        ],
      },
    ],
  },
  solutions: {
    slug: "solutions",
    label: "Solutions",
    title: "Services backed by product experience.",
    description:
      "We build our own products. We help others build theirs through practical AI, immersive technology and modern engineering.",
    sections: [
      {
        title: "Core Solutions",
        blocks: solutions.map((s) => ({ title: s.title, body: s.description })),
      },
      {
        title: "How We Work",
        blocks: [
          {
            title: "Discover to scale",
            body: "Discovery, strategy, UX, development, QA, launch and continuous improvement.",
          },
        ],
      },
    ],
  },
  industries: {
    slug: "industries",
    label: "Industries",
    title: "Building digital products across industries.",
    description:
      "Our engineering expertise spans startups, enterprises, education, healthcare, government and emerging technologies.",
    sections: [
      {
        title: "Industries",
        blocks: industries.map((i) => ({ title: i.title, body: i.description })),
      },
    ],
  },
  "innovation-lab": {
    slug: "innovation-lab",
    label: "Innovation Lab",
    title: "Always Building What's Next",
    description:
      "AiRedHQ continuously experiments with AI, immersive technologies and new product ideas.",
    sections: [
      {
        title: "Current Experiments",
        blocks: innovationConcepts.map((c) => ({ title: c.title, body: c.description })),
      },
      {
        title: "Research Areas",
        blocks: [
          {
            title: "AI",
            body: "Exploring AI where it creates real product and workflow value.",
          },
          {
            title: "AR/VR",
            body: "Testing immersive training, visualization and learning experiences.",
          },
          {
            title: "Emerging Tech",
            body: "Evaluating new interaction models through practical product experiments.",
          },
        ],
      },
    ],
  },
  "case-studies": {
    slug: "case-studies",
    label: "Case Studies",
    title: "Product proof, prepared for deeper stories.",
    description:
      "Case study templates are ready for verified outcomes. No fake metrics are published.",
    sections: [
      {
        title: "Templates",
        blocks: caseStudyPreviews.map((c) => ({
          title: c.name,
          body: `Challenge: ${c.challenge}. Solution: ${c.solution}. Outcome: ${c.outcome}.`,
        })),
      },
    ],
  },
  careers: {
    slug: "careers",
    label: "Careers",
    title: "Build practical products with AiRedHQ.",
    description:
      "AiRedHQ is building a culture for product-minded designers, engineers and operators.",
    sections: [
      {
        title: "Life at AiRedHQ",
        blocks: [
          {
            title: "Product-led work",
            body: "Teams work on internal products and client platforms informed by real product learning.",
          },
        ],
      },
      {
        title: "Benefits",
        blocks: [
          {
            title: "Meaningful work",
            body: "Build software that solves practical problems.",
          },
          {
            title: "Learning culture",
            body: "Grow across AI, product, design and engineering.",
          },
        ],
      },
      {
        title: "Open Positions placeholder",
        blocks: [
          {
            title: "Coming Soon",
            body: "Open roles will be listed when hiring plans are active.",
          },
        ],
      },
      {
        title: "Hiring Process",
        blocks: [
          {
            title: "Conversation",
            body: "Start with fit, interests and product thinking.",
          },
          {
            title: "Practical review",
            body: "Discuss real work and how you approach decisions.",
          },
        ],
      },
    ],
  },
  contact: {
    slug: "contact",
    label: "Contact",
    title: "Tell us what you're building.",
    description:
      "Share your product idea, platform challenge or partnership opportunity.",
    sections: [
      {
        title: "Inquiry Paths",
        blocks: [
          {
            title: "Business inquiry",
            body: "Explore product and platform opportunities.",
          },
          { title: "Project inquiry", body: "Share what you want to build." },
          { title: "Partnership", body: "Discuss ecosystem collaboration." },
          { title: "Career opportunities", body: "Connect around future roles." },
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy-policy",
    label: "Privacy",
    title: "Privacy Policy",
    description: "A practical privacy placeholder for AiRedHQ's Version 1 website.",
    sections: [
      {
        title: "Privacy-first approach",
        blocks: [
          {
            title: "Data care",
            body: "AiRedHQ designs products with privacy by design and secure defaults.",
          },
          {
            title: "Website inquiries",
            body: "Contact form handling should be connected to an approved backend before public launch.",
          },
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    label: "Terms",
    title: "Terms & Conditions",
    description: "A practical terms placeholder for AiRedHQ's Version 1 website.",
    sections: [
      {
        title: "Use of website",
        blocks: [
          {
            title: "Informational content",
            body: "This website explains AiRedHQ products, services and company direction.",
          },
          {
            title: "Future updates",
            body: "Formal legal terms should be reviewed before public launch.",
          },
        ],
      },
    ],
  },
};
