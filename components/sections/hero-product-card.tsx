import { ProductLogoPlaceholder } from "@/components/navigation/product-logo-placeholder";
import type { ProductNavItem } from "@/constants/navigation";
import { cn } from "@/src/lib/utils";

const accentClasses: Record<ProductNavItem["id"], string> = {
  hiared: "border-product-hiared/30 bg-product-hiared/10",
  gobazaar: "border-product-gobazaar/30 bg-product-gobazaar/10",
  yojiq: "border-product-yojiq/30 bg-product-yojiq/10",
};

type HeroProductCardProps = {
  product: ProductNavItem;
  className?: string;
};

export function HeroProductCard({ product, className }: HeroProductCardProps) {
  return (
    <article
      className={cn(
        "grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border p-3 shadow-2xl shadow-black/20 backdrop-blur-xl",
        "bg-card/72 text-card-foreground",
        accentClasses[product.id],
        className,
      )}
    >
      <ProductLogoPlaceholder productId={product.id} label={product.label} />
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-foreground">
          {product.label}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
          {product.description}
        </p>
      </div>
    </article>
  );
}
