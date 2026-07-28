export type Solution = {
  title: string;
  description: string;
  href: string;
  icon: "brain" | "boxes" | "cloud" | "globe" | "palette" | "smartphone";
};

export type SolutionHighlight = {
  title: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    title: "Artificial Intelligence",
    description:
      "Custom AI assistants, workflow automation, RAG systems, LLM integrations and intelligent business applications.",
    href: "/solutions/ai",
    icon: "brain",
  },
  {
    title: "Web Applications",
    description:
      "Scalable SaaS platforms, dashboards, portals and enterprise software engineered for growth.",
    href: "/solutions/web-applications",
    icon: "globe",
  },
  {
    title: "Mobile Applications",
    description:
      "High-performance Android and iOS applications with seamless user experiences.",
    href: "/solutions/mobile-apps",
    icon: "smartphone",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-driven interfaces, design systems and delightful user experiences.",
    href: "/solutions/ui-ux",
    icon: "palette",
  },
  {
    title: "AR / VR",
    description:
      "Immersive learning, industrial simulations, training and virtual experiences.",
    href: "/solutions/ar-vr",
    icon: "boxes",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud-native architecture, CI/CD pipelines, monitoring and infrastructure automation.",
    href: "/solutions/cloud",
    icon: "cloud",
  },
];

export const solutionHighlights: SolutionHighlight[] = [
  {
    title: "Product-first thinking",
    description:
      "Every solution is informed by products we've successfully built ourselves.",
  },
  {
    title: "Modern Engineering",
    description: "AI-native development with scalable architecture.",
  },
  {
    title: "Long-term Partnership",
    description: "From concept to launch and beyond.",
  },
];
