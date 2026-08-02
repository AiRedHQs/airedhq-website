import type { FeaturedProduct } from "@/data/products";

type ProductVisualCopy = {
  eyebrow: string;
  primary: string;
  secondary: string;
  tertiary: string;
  rows: string[];
  signature: string;
  accentClass: string;
  bgClass: string;
  borderClass: string;
};

const productVisualCopy = {
  hiared: {
    eyebrow: "AI hiring cockpit",
    primary: "Candidate pipeline",
    secondary: "AI assistant",
    tertiary: "Automation queue",
    rows: ["Sourcing", "Screening", "Interview", "Offer"],
    signature: "Pipeline intelligence",
    accentClass: "text-product-hiared",
    bgClass: "bg-product-hiared",
    borderClass: "border-product-hiared/30",
  },
  gobazaar: {
    eyebrow: "City discovery layer",
    primary: "Local map",
    secondary: "Merchant studio",
    tertiary: "Live offers",
    rows: ["Cafe", "Pharmacy", "Events", "Services"],
    signature: "Hyperlocal operating layer",
    accentClass: "text-product-gobazaar",
    bgClass: "bg-product-gobazaar",
    borderClass: "border-product-gobazaar/30",
  },
  yojiq: {
    eyebrow: "Private money OS",
    primary: "Budget health",
    secondary: "Goal planning",
    tertiary: "Privacy vault",
    rows: ["Essentials", "Emergency", "Insurance", "Savings"],
    signature: "Financial calm system",
    accentClass: "text-product-yojiq",
    bgClass: "bg-product-yojiq",
    borderClass: "border-product-yojiq/30",
  },
} satisfies Record<FeaturedProduct["id"], ProductVisualCopy>;

export function ProductExperienceVisual({ product }: { product: FeaturedProduct }) {
  const visual = productVisualCopy[product.id];

  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-lg border border-border bg-background/70 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl lg:min-h-[26rem]">
      <div
        className={`absolute -right-24 -top-24 size-72 rounded-full ${visual.bgClass}/20 blur-3xl`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--border)/0.16)_1px,transparent_1px),linear-gradient(hsl(var(--border)/0.16)_1px,transparent_1px)] bg-[size:38px_38px] opacity-45"
        aria-hidden="true"
      />
      <div className="surface-noise absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <p
        className={`pointer-events-none absolute -bottom-3 left-4 text-5xl font-semibold leading-none ${visual.accentClass} opacity-[0.08] sm:text-7xl`}
        aria-hidden="true"
      >
        {visual.signature}
      </p>

      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-center justify-between rounded-lg border border-border/80 bg-card/72 p-4 backdrop-blur-xl">
          <div>
            <p
              className={`text-xs font-medium uppercase tracking-wider ${visual.accentClass}`}
            >
              {visual.eyebrow}
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">{product.name}</p>
          </div>
          <span
            className={`flex size-11 items-center justify-center rounded-md ${visual.bgClass}/12 text-sm font-semibold ${visual.accentClass} ring-1 ring-current/25`}
            aria-hidden="true"
          >
            {product.name.slice(0, 2)}
          </span>
        </div>

        <div className="grid flex-1 gap-4 lg:grid-cols-[1fr_0.78fr]">
          <div className="relative overflow-hidden rounded-lg border border-border/80 bg-card/66 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{visual.primary}</p>
              <span className={`h-2 w-16 rounded-full ${visual.bgClass}/60`} />
            </div>
            <div
              className={[
                "mt-6 space-y-3",
                product.id === "yojiq"
                  ? "mx-auto max-w-56 rounded-[2rem] border border-border/80 bg-background/75 p-4 shadow-2xl shadow-black/30"
                  : "",
                product.id === "gobazaar"
                  ? "rounded-lg bg-[radial-gradient(circle_at_28%_32%,hsl(var(--product-gobazaar)/0.24),transparent_7rem),radial-gradient(circle_at_72%_58%,hsl(var(--product-gobazaar)/0.18),transparent_8rem)] p-3"
                  : "",
              ].join(" ")}
            >
              {visual.rows.map((row, index) => (
                <div
                  key={row}
                  className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border ${visual.borderClass} bg-background/55 p-3`}
                >
                  <span className={`size-2 rounded-full ${visual.bgClass}`} />
                  <span className="text-sm text-foreground">{row}</span>
                  <span className={`size-2 rounded-full ${visual.bgClass}`} aria-hidden="true" />
                </div>
              ))}
            </div>
            <div
              className={`absolute bottom-4 right-4 size-24 rounded-full ${visual.bgClass}/18 blur-3xl`}
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-border/80 bg-card/66 p-4">
              <p className="text-sm font-semibold text-foreground">{visual.secondary}</p>
              <div className="mt-5 space-y-2">
                <div className={`h-2 w-3/4 rounded-full ${visual.bgClass}/50`} />
                <div className="h-2 w-full rounded-full bg-secondary" />
                <div className="h-2 w-2/3 rounded-full bg-secondary" />
              </div>
            </div>
            <div className="rounded-lg border border-border/80 bg-card/66 p-4">
              <p className="text-sm font-semibold text-foreground">{visual.tertiary}</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((item) => (
                  <span
                    key={item}
                    className={`h-12 rounded-md border ${visual.borderClass} bg-background/55`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
