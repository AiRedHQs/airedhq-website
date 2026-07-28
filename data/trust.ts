import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Bot,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lightbulb,
  Rocket,
  School,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import type { ProductId } from "@/src/types/brand";

export type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WhyHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CaseStudyPreview = {
  productId: ProductId;
  name: string;
  challenge: string;
  solution: string;
  outcome: string;
  href: string;
};

export type InnovationConcept = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    title: "Education",
    description:
      "Digital learning platforms, immersive training and modern education tools.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description:
      "Accessible health workflows, secure platforms and patient-centered experiences.",
    icon: HeartPulse,
  },
  {
    title: "HR Tech",
    description:
      "Recruitment, workforce and people operations products for modern teams.",
    icon: Users,
  },
  {
    title: "Finance",
    description:
      "Privacy-aware financial tools, planning products and decision-support systems.",
    icon: BadgeDollarSign,
  },
  {
    title: "Retail",
    description: "Commerce, discovery and local business platforms built for growth.",
    icon: ShoppingBag,
  },
  {
    title: "Government",
    description: "Reliable public-sector platforms focused on clarity, access and scale.",
    icon: Landmark,
  },
  {
    title: "Manufacturing",
    description: "Industrial visualization, training systems and operational software.",
    icon: Factory,
  },
  {
    title: "Enterprise SaaS",
    description: "Scalable portals, dashboards and workflow systems for complex teams.",
    icon: Building2,
  },
];

export const whyAiRedHQ: WhyHighlight[] = [
  {
    title: "Product-first Innovation",
    description:
      "We validate our expertise by building our own products before offering similar capabilities to clients.",
    icon: Rocket,
  },
  {
    title: "Engineering Excellence",
    description: "Modern architecture, scalable engineering and maintainable code.",
    icon: ShieldCheck,
  },
  {
    title: "AI-native Thinking",
    description:
      "Artificial Intelligence is integrated where it creates real business value.",
    icon: Sparkles,
  },
  {
    title: "Long-term Partnership",
    description: "From strategy and design to launch and continuous improvement.",
    icon: Wrench,
  },
];

export const caseStudyPreviews: CaseStudyPreview[] = [
  {
    productId: "hiared",
    name: "hiARed",
    challenge: "Coming Soon",
    solution: "Coming Soon",
    outcome: "Coming Soon",
    href: "/case-studies/hiared",
  },
  {
    productId: "gobazaar",
    name: "GoBazaar",
    challenge: "Coming Soon",
    solution: "Coming Soon",
    outcome: "Coming Soon",
    href: "/case-studies/gobazaar",
  },
  {
    productId: "yojiq",
    name: "YojIQ",
    challenge: "Coming Soon",
    solution: "Coming Soon",
    outcome: "Coming Soon",
    href: "/case-studies/yojiq",
  },
];

export const innovationConcepts: InnovationConcept[] = [
  {
    title: "AI Agents",
    description: "Exploring task-focused agents that support real business workflows.",
    icon: Bot,
  },
  {
    title: "Developer Tools",
    description: "Concepts that improve how teams design, build and maintain software.",
    icon: Settings2,
  },
  {
    title: "Education Technology",
    description: "Learning products shaped by AI, interactivity and accessibility.",
    icon: School,
  },
  {
    title: "Creator Tools",
    description:
      "Systems that help creators plan, produce and operate with less friction.",
    icon: Lightbulb,
  },
  {
    title: "Business Automation",
    description: "Automation concepts for repeatable operations and decision support.",
    icon: Wrench,
  },
  {
    title: "Experimental Products",
    description: "Early product ideas that test new interaction models and markets.",
    icon: Sparkles,
  },
];
