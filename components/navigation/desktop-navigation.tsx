"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { desktopNavItems, productNavItems } from "@/constants/navigation";
import { ProductLogoPlaceholder } from "@/components/navigation/product-logo-placeholder";
import { cn } from "@/src/lib/utils";

export function DesktopNavigation() {
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProducts = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsProductsOpen(true);
  };

  const closeProducts = () => {
    closeTimeout.current = setTimeout(() => setIsProductsOpen(false), 120);
  };

  React.useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  return (
    <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
      <div className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
        <button
          type="button"
          aria-expanded={isProductsOpen}
          aria-controls="products-mega-menu"
          onClick={() => setIsProductsOpen((value) => !value)}
          onFocus={openProducts}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsProductsOpen(false);
            }
          }}
          className={cn(
            "inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-medium text-muted-foreground outline-none transition-colors duration-premium hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isProductsOpen && "text-foreground",
          )}
        >
          Products
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-premium",
              isProductsOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence>
          {isProductsOpen ? (
            <motion.div
              id="products-mega-menu"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-full z-50 mt-3 w-[34rem] rounded-lg border border-border bg-card/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl"
              onMouseEnter={openProducts}
              onMouseLeave={closeProducts}
            >
              <div className="grid gap-2">
                {productNavItems.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md p-3 outline-none transition-colors duration-premium hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    <ProductLogoPlaceholder
                      productId={product.id}
                      label={product.label}
                    />
                    <span className="space-y-1">
                      <span className="block text-sm font-semibold text-foreground">
                        {product.label}
                      </span>
                      <span className="block text-sm leading-5 text-muted-foreground">
                        {product.description}
                      </span>
                    </span>
                    <span className="text-sm font-medium text-muted-foreground transition-colors duration-premium group-hover:text-foreground">
                      Learn More
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

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
