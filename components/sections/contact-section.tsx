import { BriefcaseBusiness, Handshake, Mail, Users } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";

const contactPaths = [
  {
    title: "Business inquiry",
    description: "Explore how AiRedHQ can support a product or platform initiative.",
    icon: Mail,
  },
  {
    title: "Project inquiry",
    description: "Share what you want to build and where you are in the journey.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Partnership",
    description: "Discuss product, technology or ecosystem collaboration.",
    icon: Handshake,
  },
  {
    title: "Career opportunities",
    description: "Connect around roles, collaborations and future openings.",
    icon: Users,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28 lg:py-36"
    >
      <div
        className="absolute right-0 top-20 -z-10 size-72 rounded-full bg-product-gobazaar/10 blur-3xl"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute -left-4 bottom-10 -z-10 hidden text-[9rem] font-semibold leading-none text-foreground/[0.035] lg:block"
        aria-hidden="true"
      >
        Start
      </p>
      <Container className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-5">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Contact
            </Badge>
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="text-balance text-4xl font-semibold leading-[1] text-foreground sm:text-5xl lg:text-6xl"
              >
                Tell us what you&apos;re building.
              </h2>
              <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                Share your product idea, platform challenge or partnership opportunity.
                We&apos;ll help shape the right next step.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {contactPaths.map((path, index) => (
              <GlassCard
                key={path.title}
                className={[
                  "grid grid-cols-[auto_1fr] gap-4 p-4",
                  index % 2 === 1 ? "sm:ml-10" : "",
                ].join(" ")}
              >
                <div
                  className="flex size-10 items-center justify-center rounded-md bg-secondary text-foreground"
                  aria-hidden="true"
                >
                  <path.icon className="size-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">{path.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {path.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="relative overflow-hidden p-5 sm:p-6 lg:p-8">
          <div
            className="surface-noise absolute inset-0 opacity-[0.05]"
            aria-hidden="true"
          />
          <ContactForm />
        </GlassCard>
      </Container>
    </section>
  );
}
