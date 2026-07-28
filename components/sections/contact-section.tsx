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
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-5">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Contact
            </Badge>
            <div className="space-y-4">
              <h2
                id="contact-heading"
                className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                Tell us what you&apos;re building.
              </h2>
              <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                Share your product idea, platform challenge or partnership opportunity.
                We&apos;ll help shape the right next step.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactPaths.map((path) => (
              <GlassCard key={path.title} className="space-y-3 p-4">
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

        <GlassCard className="p-5 sm:p-6 lg:p-8">
          <ContactForm />
        </GlassCard>
      </Container>
    </section>
  );
}
