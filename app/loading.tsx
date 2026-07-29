import { Container } from "@/components/layout/container";
import { Skeleton } from "@/components/shared/skeleton";

export default function Loading() {
  return (
    <section className="py-20" aria-label="Loading page">
      <Container className="space-y-8">
        <Skeleton className="h-5 w-40" />
        <div className="space-y-4">
          <Skeleton className="h-14 w-full max-w-3xl" />
          <Skeleton className="h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-3/4 max-w-xl" />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
          <Skeleton className="h-48" />
        </div>
      </Container>
    </section>
  );
}
