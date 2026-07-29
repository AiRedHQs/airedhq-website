import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="grid min-h-[70dvh] place-items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted-foreground">
          This page is not available yet. Return to the AiRedHQ homepage to explore
          products, solutions and company information.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
