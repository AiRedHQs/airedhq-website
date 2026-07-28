import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { CaseStudyCard } from "@/components/products/case-study-card";
import { MotionRevealGroup, MotionRevealItem } from "@/components/shared/motion-reveal";
import { caseStudyPreviews } from "@/data/trust";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
            Case Studies
          </Badge>
          <h2
            id="case-studies-heading"
            className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Product stories prepared for deeper proof.
          </h2>
        </div>

        <MotionRevealGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudyPreviews.map((study) => (
            <MotionRevealItem key={study.name}>
              <CaseStudyCard study={study} />
            </MotionRevealItem>
          ))}
        </MotionRevealGroup>
      </Container>
    </section>
  );
}
