import type { BrandToken, ProductId } from "@/src/types/brand";

export const siteConfig = {
  name: "AiRedHQ",
  url: "https://airedhq.com",
  description:
    "AiRedHQ is a product innovation company building practical AI, immersive technology, and modern software platforms.",
  keywords: [
    "Product Innovation Company",
    "AI Development Company",
    "AR VR Development Company",
    "Mobile App Development",
    "Web Application Development",
  ],
} as const;

export const brandTokens: Record<"airedhq" | ProductId, BrandToken> = {
  airedhq: {
    id: "airedhq",
    name: "AiRedHQ",
    accent: "hsl(var(--brand-airedhq))",
  },
  hiared: {
    id: "hiared",
    name: "hiARed",
    accent: "hsl(var(--brand-hiared))",
  },
  gobazaar: {
    id: "gobazaar",
    name: "GoBazaar",
    accent: "hsl(var(--brand-gobazaar))",
  },
  yojiq: {
    id: "yojiq",
    name: "YojIQ",
    accent: "hsl(var(--brand-yojiq))",
  },
};
