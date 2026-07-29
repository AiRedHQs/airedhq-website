import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";

export type FAQ = {
  question: string;
  answer: string;
};

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="border-t border-border/60 py-16 sm:py-20">
      <Container className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">FAQs</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq.question} className="space-y-2 p-5">
              <h3 className="font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
