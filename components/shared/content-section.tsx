import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import { MotionRevealGroup, MotionRevealItem } from "@/components/shared/motion-reveal";

export type ContentBlock = {
  title: string;
  body: string;
};

export function ContentSection({
  id,
  title,
  description,
  blocks,
}: {
  id?: string;
  title: string;
  description?: string;
  blocks: ContentBlock[];
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className="border-t border-border/60 py-16 sm:py-20"
    >
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="text-base leading-8 text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <MotionRevealGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blocks.map((block) => (
            <MotionRevealItem key={block.title}>
              <GlassCard className="h-full space-y-3 p-5">
                <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{block.body}</p>
              </GlassCard>
            </MotionRevealItem>
          ))}
        </MotionRevealGroup>
      </Container>
    </section>
  );
}
