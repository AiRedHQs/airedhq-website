import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function PageCTA({
  title = "Ready to build with AiRedHQ?",
  description = "Share what you want to create and we will help shape the right path from idea to launch.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-border/60 py-16 sm:py-20">
      <Container>
        <div className="rounded-lg border border-border bg-card/70 p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            {description}
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start a Project
                <ArrowRight
                  className="transition-transform duration-premium group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
