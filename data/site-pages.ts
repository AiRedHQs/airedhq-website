import type { ProductId } from "@/src/types/brand";

export type PageContent = {
  slug: string;
  label: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    description?: string;
    blocks: Array<{ title: string; body: string }>;
  }>;
};

export type ProductPageContent = PageContent & {
  productId: ProductId;
  faqs: Array<{ question: string; answer: string }>;
};

export const productPages: Record<string, ProductPageContent> = {
  hiared: {
    slug: "hiared",
    productId: "hiared",
    label: "Product",
    title: "hiARed",
    description:
      "An AI Recruitment Ecosystem for recruiters, hiring managers, candidates and administrators.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Built for modern hiring",
            body: "hiARed brings recruitment workflows, candidate management and hiring analytics into one product-led platform.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            title: "Hiring work is fragmented",
            body: "Recruiters and hiring teams often move across disconnected tools, manual screening steps and scattered decision workflows.",
          },
        ],
      },
      {
        title: "Solution",
        blocks: [
          {
            title: "AI-assisted recruitment operations",
            body: "The platform is designed around intelligent workflows for resumes, interviews, offers and multi-role collaboration.",
          },
        ],
      },
      {
        title: "Features",
        blocks: [
          {
            title: "Applicant tracking",
            body: "Manage candidate pipelines with clear status and role context.",
          },
          {
            title: "Resume management",
            body: "Organize profiles and hiring documents around reusable workflows.",
          },
          {
            title: "Interview workflows",
            body: "Coordinate interviews, feedback and decisions across hiring teams.",
          },
        ],
      },
      {
        title: "Benefits",
        blocks: [
          {
            title: "Clearer decisions",
            body: "Bring hiring context into structured, reviewable workflows.",
          },
          {
            title: "Faster coordination",
            body: "Reduce repeated handoffs between recruiters and hiring managers.",
          },
          {
            title: "Better visibility",
            body: "Use analytics-ready workflows to understand pipeline progress.",
          },
        ],
      },
      {
        title: "Technology",
        blocks: [
          {
            title: "AI workflows",
            body: "Designed for AI-assisted screening, matching and hiring operations.",
          },
          {
            title: "Role-based dashboards",
            body: "Built for recruiters, hiring managers, candidates and administrators.",
          },
        ],
      },
      {
        title: "Roadmap",
        blocks: [
          {
            title: "Product expansion",
            body: "Future roadmap work focuses on deeper analytics, automation and enterprise hiring flows.",
          },
        ],
      },
      {
        title: "Screenshots placeholder",
        blocks: [
          {
            title: "Coming Soon",
            body: "Product screenshots will be added when approved visuals are available.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is hiARed a real AiRedHQ product?",
        answer: "Yes. hiARed is part of AiRedHQ's product ecosystem.",
      },
      {
        question: "Are customer metrics available?",
        answer: "Public case metrics will be added only when verified.",
      },
    ],
  },
  gobazaar: {
    slug: "gobazaar",
    productId: "gobazaar",
    label: "Product",
    title: "GoBazaar",
    description:
      "A Hyperlocal Discovery Platform connecting people with nearby businesses, offers, services and events.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Local discovery product",
            body: "GoBazaar helps consumers explore nearby businesses while giving merchants a stronger digital presence.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            title: "Local discovery is scattered",
            body: "People need clearer ways to find offers, services, events and trusted local businesses.",
          },
        ],
      },
      {
        title: "Solution",
        blocks: [
          {
            title: "A connected marketplace experience",
            body: "GoBazaar is structured around business listings, maps, categories, offers, events and merchant tools.",
          },
        ],
      },
      {
        title: "Features",
        blocks: [
          {
            title: "Business listings",
            body: "Create structured local discovery profiles.",
          },
          { title: "Offers and events", body: "Surface timely local opportunities." },
          {
            title: "Merchant dashboard",
            body: "Support business visibility and operations.",
          },
        ],
      },
      {
        title: "Benefits",
        blocks: [
          {
            title: "Better discovery",
            body: "Help users find relevant places and services nearby.",
          },
          {
            title: "Merchant presence",
            body: "Give local businesses a clearer digital footprint.",
          },
          {
            title: "Community relevance",
            body: "Organize discovery around local context.",
          },
        ],
      },
      {
        title: "Technology",
        blocks: [
          {
            title: "Search and maps",
            body: "Designed for location-aware discovery and structured category browsing.",
          },
        ],
      },
      {
        title: "Roadmap",
        blocks: [
          {
            title: "Public launch path",
            body: "Future roadmap work focuses on broader public discovery and merchant growth tools.",
          },
        ],
      },
      {
        title: "Screenshots placeholder",
        blocks: [
          {
            title: "Coming Soon",
            body: "Approved product screenshots will be added when available.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Who is GoBazaar for?",
        answer: "Consumers, local businesses and merchants.",
      },
      {
        question: "Are reviews and maps planned?",
        answer: "Yes. They are part of the documented product capability set.",
      },
    ],
  },
  yojiq: {
    slug: "yojiq",
    productId: "yojiq",
    label: "Product",
    title: "YojIQ",
    description:
      "A privacy-first Smart Financial Planning Platform for budgeting, emergency funds and financial awareness.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Practical financial awareness",
            body: "YojIQ helps individuals build healthier money habits through clear planning tools and privacy-first experiences.",
          },
        ],
      },
      {
        title: "Problem",
        blocks: [
          {
            title: "Personal finance can feel opaque",
            body: "Many people need simple guidance around budgets, emergency funds, insurance and literacy.",
          },
        ],
      },
      {
        title: "Solution",
        blocks: [
          {
            title: "Guided planning tools",
            body: "YojIQ focuses on budgeting, expense management, emergency fund planning and financial learning.",
          },
        ],
      },
      {
        title: "Features",
        blocks: [
          { title: "Budgeting", body: "Plan and understand spending categories." },
          { title: "Emergency funds", body: "Create practical resilience goals." },
          {
            title: "Insurance awareness",
            body: "Improve understanding before decisions are made.",
          },
        ],
      },
      {
        title: "Benefits",
        blocks: [
          { title: "Clarity", body: "Make financial planning easier to understand." },
          { title: "Privacy-first", body: "Treat financial data with care by design." },
          { title: "Healthier habits", body: "Support consistent planning behavior." },
        ],
      },
      {
        title: "Technology",
        blocks: [
          {
            title: "Privacy-aware architecture",
            body: "Built around sensitive user context and responsible product design.",
          },
        ],
      },
      {
        title: "Roadmap",
        blocks: [
          {
            title: "MVP direction",
            body: "Future roadmap work focuses on financial literacy, planning flows and privacy-first tools.",
          },
        ],
      },
      {
        title: "Screenshots placeholder",
        blocks: [
          {
            title: "Coming Soon",
            body: "Product screenshots will be added when approved visuals are available.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is YojIQ investment advice?",
        answer:
          "YojIQ is positioned around awareness, literacy and planning, not unsupported claims.",
      },
      { question: "Who is YojIQ for?", answer: "Students, professionals and families." },
    ],
  },
};

export const servicePages: Record<
  string,
  PageContent & { faqs: Array<{ question: string; answer: string }> }
> = {
  ai: {
    slug: "ai",
    label: "Solution",
    title: "AI Services",
    description:
      "Custom AI assistants, workflow automation, RAG systems, LLM integrations and intelligent applications.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Practical AI",
            body: "We apply AI where it creates measurable product and workflow value.",
          },
        ],
      },
      {
        title: "Capabilities",
        blocks: [
          {
            title: "AI assistants",
            body: "Task-focused assistants for business workflows.",
          },
          {
            title: "RAG systems",
            body: "Retrieval workflows for context-aware applications.",
          },
          {
            title: "LLM integrations",
            body: "Modern AI capabilities embedded into products.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          { title: "Discover", body: "Identify the real workflow and data context." },
          { title: "Prototype", body: "Validate the interaction and model behavior." },
          { title: "Scale", body: "Engineer reliable production systems." },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          {
            title: "OpenAI and Gemini",
            body: "Applied with secure architecture and product-focused UX.",
          },
          { title: "Vector databases", body: "Used where retrieval and context matter." },
        ],
      },
      {
        title: "Industries",
        blocks: [
          {
            title: "Cross-industry AI",
            body: "Relevant to recruitment, education, finance, enterprise workflows and automation.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build AI for every workflow?",
        answer: "No. AI is used where it creates real business value.",
      },
    ],
  },
  web: {
    slug: "web",
    label: "Solution",
    title: "Web Development",
    description:
      "Scalable SaaS platforms, dashboards, portals and enterprise software engineered for growth.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Modern web platforms",
            body: "We design and build reliable web applications with strong architecture and UX.",
          },
        ],
      },
      {
        title: "Capabilities",
        blocks: [
          {
            title: "SaaS platforms",
            body: "Product-grade foundations for repeatable business workflows.",
          },
          { title: "Dashboards", body: "Clear operational interfaces for teams." },
          {
            title: "Portals",
            body: "Secure experiences for users, clients and partners.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          { title: "UX first", body: "Clarify workflows before implementation." },
          {
            title: "Component-driven",
            body: "Build reusable interfaces and maintainable systems.",
          },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          {
            title: "Next.js and React",
            body: "Performance-minded frontend foundations.",
          },
          {
            title: "Node and PostgreSQL",
            body: "Backend-ready architecture where needed.",
          },
        ],
      },
      {
        title: "Industries",
        blocks: [
          {
            title: "Enterprise and SaaS",
            body: "Useful for startups, internal tools and scalable product teams.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you build custom web apps?",
        answer: "Yes, with reusable architecture and production-quality code.",
      },
    ],
  },
  mobile: {
    slug: "mobile",
    label: "Solution",
    title: "Mobile Development",
    description:
      "High-performance Android and iOS applications with seamless user experiences.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Mobile products",
            body: "We build mobile experiences around clear user flows, performance and maintainability.",
          },
        ],
      },
      {
        title: "Capabilities",
        blocks: [
          { title: "Android", body: "Native and cross-platform mobile delivery." },
          { title: "iOS", body: "Polished interfaces for Apple platforms." },
          {
            title: "Flutter and React Native",
            body: "Cross-platform options where they fit the product.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          { title: "Prototype", body: "Validate mobile interactions early." },
          { title: "Ship", body: "Engineer stable releases and iteration loops." },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          { title: "Flutter", body: "Fast cross-platform product development." },
          { title: "React Native", body: "React-aligned mobile engineering." },
        ],
      },
      {
        title: "Industries",
        blocks: [
          {
            title: "Consumer and business apps",
            body: "Relevant to discovery, finance, education and field workflows.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support both Android and iOS?",
        answer: "Yes. Platform choice depends on product goals.",
      },
    ],
  },
  "ui-ux": {
    slug: "ui-ux",
    label: "Solution",
    title: "UI/UX Design",
    description:
      "Research-driven interfaces, design systems and delightful user experiences.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Design for usable products",
            body: "We design clear, accessible experiences for real workflows.",
          },
        ],
      },
      {
        title: "Capabilities",
        blocks: [
          { title: "UX research", body: "Understand users, tasks and decision points." },
          { title: "Design systems", body: "Reusable patterns for consistent products." },
          { title: "Prototypes", body: "Interactive validation before engineering." },
        ],
      },
      {
        title: "Process",
        blocks: [
          { title: "Discover", body: "Map user needs and product constraints." },
          { title: "Design", body: "Create accessible, responsive interfaces." },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          {
            title: "Component systems",
            body: "Design foundations that translate into code.",
          },
        ],
      },
      {
        title: "Industries",
        blocks: [
          {
            title: "Product-led teams",
            body: "Useful for startups, SaaS, enterprise and internal platforms.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only design screens?",
        answer: "No. We connect design decisions to product strategy and engineering.",
      },
    ],
  },
  "ar-vr": {
    slug: "ar-vr",
    label: "Solution",
    title: "AR/VR",
    description:
      "Immersive learning, industrial simulations, training and virtual experiences.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Immersive product experiences",
            body: "We use AR/VR where spatial interaction improves learning, training or visualization.",
          },
        ],
      },
      {
        title: "Capabilities",
        blocks: [
          {
            title: "Training simulations",
            body: "Practice complex workflows in immersive environments.",
          },
          { title: "Virtual tours", body: "Represent spaces and experiences digitally." },
          {
            title: "Industrial visualization",
            body: "Make systems easier to understand.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          {
            title: "Scenario design",
            body: "Define what immersion should help users do.",
          },
          { title: "Prototype", body: "Validate interaction before scaling." },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          {
            title: "3D and spatial UX",
            body: "Built around performance and user comfort.",
          },
        ],
      },
      {
        title: "Industries",
        blocks: [
          {
            title: "Education and manufacturing",
            body: "Useful for training, visualization and simulation.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you use AR/VR for every project?",
        answer: "No. Immersive technology is used where it supports the outcome.",
      },
    ],
  },
  cloud: {
    slug: "cloud",
    label: "Solution",
    title: "Cloud & DevOps",
    description:
      "Cloud-native architecture, CI/CD pipelines, monitoring and infrastructure automation.",
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            title: "Reliable product infrastructure",
            body: "We help products launch and scale with secure, maintainable cloud foundations.",
          },
        ],
      },
      {
        title: "Capabilities",
        blocks: [
          {
            title: "Cloud architecture",
            body: "Design deployment foundations for product growth.",
          },
          { title: "CI/CD", body: "Automate delivery and reduce release friction." },
          {
            title: "Monitoring",
            body: "Create visibility into reliability and performance.",
          },
        ],
      },
      {
        title: "Process",
        blocks: [
          { title: "Assess", body: "Understand environments and operational risk." },
          { title: "Automate", body: "Improve delivery and observability." },
        ],
      },
      {
        title: "Technologies",
        blocks: [
          {
            title: "DigitalOcean and Cloudflare",
            body: "Cloud platforms aligned with documented stack direction.",
          },
          {
            title: "Docker and GitHub Actions",
            body: "Repeatable deployments and automation.",
          },
        ],
      },
      {
        title: "Industries",
        blocks: [
          {
            title: "SaaS and enterprise",
            body: "Useful for teams that need stability and scale.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can AiRedHQ support launch and scale?",
        answer: "Yes, through cloud architecture, automation and monitoring.",
      },
    ],
  },
};
