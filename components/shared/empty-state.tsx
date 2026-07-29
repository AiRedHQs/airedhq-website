import Link from "next/link";

import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";

export function EmptyState({
  title,
  description,
  actionLabel = "Back to Home",
  actionHref = "/",
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <GlassCard className="mx-auto max-w-xl p-8 text-center">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
      <div className="mt-6 flex justify-center">
        <Button asChild variant="outline">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      </div>
    </GlassCard>
  );
}
