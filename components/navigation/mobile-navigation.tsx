"use client";

import * as React from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/navigation/brand-mark";
import { Button } from "@/components/ui/button";
import { desktopNavItems, productNavItems } from "@/constants/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const mounted = React.useSyncExternalStore(
    React.useCallback(() => () => undefined, []),
    () => true,
    () => false,
  );
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="size-10 rounded-md border border-white/12 bg-[#0d1016] text-foreground shadow-[0_8px_24px_rgba(0,0,0,.24)] hover:border-white/22 hover:bg-[#151922]"
      >
        <Menu aria-hidden="true" />
      </Button>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#07090d]"
                >
                  <motion.div
                    initial={{ y: -16 }}
                    animate={{ y: 0 }}
                    exit={{ y: -16 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-svh flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] min-[390px]:px-5 sm:px-6"
                  >
                    <div className="flex items-center justify-between">
                      <BrandMark />
                      <Button
                        ref={closeButtonRef}
                        type="button"
                        size="icon"
                        variant="ghost"
                        aria-label="Close navigation menu"
                        onClick={() => setIsOpen(false)}
                        className="size-10 border border-white/12 bg-[#0d1016] hover:border-white/22 hover:bg-[#151922]"
                      >
                        <X aria-hidden="true" />
                      </Button>
                    </div>

                    <nav
                      aria-label="Mobile primary navigation"
                      className="mt-8 flex flex-1 flex-col gap-7"
                    >
                      <div className="space-y-3">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Products
                        </p>
                        <div className="grid gap-2">
                          <Link
                            href="/products"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-md px-1 py-3 text-xl font-medium text-foreground outline-none transition-colors duration-premium hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            View all products
                          </Link>
                          {productNavItems.map((product) => (
                            <Link
                              key={product.id}
                              href={product.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-md px-1 py-3 text-xl font-medium text-foreground outline-none transition-colors duration-premium hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              {product.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-1">
                        {desktopNavItems
                          .filter((item) => item.label !== "Products")
                          .map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="rounded-md px-1 py-3 text-xl font-medium text-foreground outline-none transition-colors duration-premium hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              {item.label}
                            </Link>
                          ))}
                      </div>
                    </nav>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
