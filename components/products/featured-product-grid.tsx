"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { ProductCard } from "@/components/products/product-card";
import type { FeaturedProduct } from "@/data/products";
import { fadeUp, hoverLift, staggerContainer } from "@/src/lib/motion";
import { cn } from "@/src/lib/utils";

type FeaturedProductGridProps = {
  products: FeaturedProduct[];
};

export function FeaturedProductGrid({ products }: FeaturedProductGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {products.map((product, index) => (
        <AnimatedProductCard key={product.id} product={product} index={index} />
      ))}
    </motion.div>
  );
}

function AnimatedProductCard({
  product,
  index,
}: {
  product: FeaturedProduct;
  index: number;
}) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 28, mass: 0.35 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 28, mass: 0.35 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [1.6, -1.6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-1.8, 1.8]);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={hoverLift}
      animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="h-full outline-none"
    >
      <ProductCard
        productId={product.id}
        name={product.name}
        tagline={product.tagline}
        description={product.description}
        logoSize="large"
        action={{
          label: "Learn More",
          href: product.href,
        }}
        className={cn(
          "min-h-[24rem] rounded-lg border-border/80 bg-card/66 p-6 shadow-2xl shadow-black/25 hover:border-primary/30",
          "focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-ring",
        )}
      />
    </motion.article>
  );
}
