"use client";

import { motion } from "framer-motion";
import { Brain, Boxes, Cloud, Globe, Palette, Smartphone } from "lucide-react";

import { ServiceCard } from "@/components/services/service-card";
import type { Solution } from "@/data/solutions";
import { fadeUp, hoverLift, staggerContainer } from "@/src/lib/motion";

const solutionIcons = {
  brain: Brain,
  boxes: Boxes,
  cloud: Cloud,
  globe: Globe,
  palette: Palette,
  smartphone: Smartphone,
} satisfies Record<Solution["icon"], typeof Brain>;

type SolutionsGridProps = {
  solutions: Solution[];
};

export function SolutionsGrid({ solutions }: SolutionsGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {solutions.map((solution) => (
        <motion.article key={solution.title} variants={fadeUp} whileHover={hoverLift}>
          <ServiceCard
            title={solution.title}
            description={solution.description}
            icon={solutionIcons[solution.icon]}
            action={{
              label: "Learn More",
              href: solution.href,
            }}
            className="min-h-[18rem] rounded-lg border-border/80 bg-card/66 p-6 shadow-2xl shadow-black/20 hover:border-primary/30 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-ring"
          />
        </motion.article>
      ))}
    </motion.div>
  );
}
