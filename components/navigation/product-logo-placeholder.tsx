import type { ProductId } from "@/src/types/brand";
import { cn } from "@/src/lib/utils";

type ProductLogoPlaceholderProps = {
  productId: ProductId;
  label: string;
  size?: "default" | "large";
};

const accentClass: Record<ProductId, string> = {
  hiared: "bg-product-hiared/12 text-product-hiared ring-product-hiared/25",
  gobazaar: "bg-product-gobazaar/12 text-product-gobazaar ring-product-gobazaar/25",
  yojiq: "bg-product-yojiq/12 text-product-yojiq ring-product-yojiq/25",
};

export function ProductLogoPlaceholder({
  productId,
  label,
  size = "default",
}: ProductLogoPlaceholderProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md font-semibold ring-1",
        size === "large" ? "size-14 text-base" : "size-10 text-sm",
        accentClass[productId],
      )}
      aria-hidden="true"
    >
      {label.slice(0, 2)}
    </span>
  );
}
