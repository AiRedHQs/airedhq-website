import Link from "next/link";

import { BrandMark } from "@/components/navigation/brand-mark";
import { Container } from "@/components/layout/container";
import { footerGroups, socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 top-10 -z-10 size-72 rounded-full bg-product-hiared/10 blur-3xl"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 hidden -translate-x-1/2 text-[12rem] font-semibold leading-none text-foreground/[0.03] lg:block"
        aria-hidden="true"
      >
        AiRedHQ
      </p>
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr]">
          <div className="space-y-5">
            <BrandMark />
            <h2 className="max-w-md text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Products first. Services with proof.
            </h2>
            <p className="max-w-md text-pretty text-base leading-7 text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-xl">
              <h2 className="text-sm font-semibold text-foreground">Newsletter</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Product updates and engineering notes are coming soon.
              </p>
            </div>
            <div className="flex flex-wrap gap-3" aria-label="Social links">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md text-sm font-medium text-muted-foreground outline-none transition-colors duration-premium hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4"
          >
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h2 className="text-sm font-semibold text-foreground">{group.title}</h2>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-md text-sm leading-6 text-muted-foreground outline-none transition-colors duration-premium hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
