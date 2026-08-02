import { BookOpen, BrainCircuit, Landmark, MapPinned } from "lucide-react";
import type { BlogCategory } from "@/src/types/blog";

const categoryIcons = {
  careers: BrainCircuit,
  "local-discovery": MapPinned,
  "financial-planning": Landmark,
  "immersive-learning": BookOpen,
} satisfies Record<BlogCategory, typeof BookOpen>;

export function ArticleGraphic({
  category,
  accent,
  compact = false,
}: {
  category: BlogCategory;
  accent: string;
  compact?: boolean;
}) {
  const Icon = categoryIcons[category];

  return (
    <div
      className={`relative isolate overflow-hidden bg-[#080a0d] ${compact ? "aspect-[16/10]" : "min-h-72 sm:min-h-96"}`}
      style={{ "--article-accent": accent } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute -right-20 top-1/2 size-72 -translate-y-1/2 rounded-full border border-[color:var(--article-accent)]/30 opacity-40 sm:size-96" />
      <div className="absolute -right-2 top-1/2 size-44 -translate-y-1/2 rounded-full border border-white/8 sm:size-64" />
      <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-[color:var(--article-accent)] via-white/14 to-transparent" />
      <div className="absolute left-8 top-8 flex size-14 items-center justify-center bg-white/[0.045] text-[color:var(--article-accent)] sm:left-12 sm:top-12 sm:size-16">
        <Icon className="size-6 sm:size-7" strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-8 left-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[.24em] text-white/28 sm:left-12">
        <span className="size-1.5 rounded-full bg-[color:var(--article-accent)]" />
        AiRedHQ Notes
      </div>
    </div>
  );
}

