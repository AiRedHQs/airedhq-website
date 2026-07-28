import Link from "next/link";

import { BrandMark } from "@/components/navigation/brand-mark";
import { Container } from "@/components/layout/container";
import { footerGroups, socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-5">
            <BrandMark />
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="rounded-lg border border-border bg-card/60 p-4">
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

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
