import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { desktopNavItems, productNavItems } from "@/constants/navigation";
import { cn } from "@/src/lib/utils";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      <details className="group relative">
        <summary className="inline-flex h-10 cursor-pointer list-none items-center gap-1 rounded-md px-3 text-sm font-medium text-muted-foreground outline-none transition-colors duration-premium hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
          Products
          <ChevronDown
            className="size-4 transition-transform duration-premium group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>

        <div
          role="menu"
          aria-label="Products"
          className="absolute left-0 top-full z-50 w-64 pt-3"
        >
          <div className="grid gap-1 rounded-lg border border-white/10 bg-[#090b10]/96 p-2 shadow-2xl shadow-black/45 backdrop-blur-xl">
            {productNavItems.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                role="menuitem"
                className="group/item flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold text-foreground outline-none transition-colors duration-premium hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "size-2 rounded-full",
                      product.id === "hiared" && "bg-[#6102f5]",
                      product.id === "gobazaar" && "bg-product-gobazaar",
                      product.id === "yojiq" && "bg-product-yojiq",
                    )}
                    aria-hidden="true"
                  />
                  {product.label}
                </span>
                <ArrowUpRight
                  className="size-4 text-white/35 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-white/80"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </details>

      {desktopNavItems
        .filter((item) => item.label !== "Products")
        .map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex h-10 items-center rounded-md px-3 text-sm font-medium text-muted-foreground outline-none transition-colors duration-premium hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {item.label}
          </Link>
        ))}

      <Button asChild size="sm" className="ml-2">
        <Link href="/contact">Start a Project</Link>
      </Button>
    </nav>
  );
}
