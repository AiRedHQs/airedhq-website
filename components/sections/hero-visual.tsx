"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { HeroProductCard } from "@/components/sections/hero-product-card";
import { productNavItems } from "@/constants/navigation";

export function HeroVisual() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.4 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      className="relative mx-auto aspect-[0.92] w-full max-w-[31rem] overflow-hidden rounded-lg border border-border bg-card/50 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl sm:aspect-[1.08] lg:max-w-none"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      aria-label="Abstract preview of AiRedHQ product ecosystem"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.26) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.26) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-product-gobazaar/20 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.68, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute right-2 top-8 size-44 rounded-full bg-product-hiared/20 blur-3xl"
        animate={{ y: [0, 14, 0], opacity: [0.36, 0.58, 0.36] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-4 left-4 size-40 rounded-full bg-product-yojiq/16 blur-3xl"
        animate={{ x: [0, 16, 0], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {[...Array(9)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute size-1 rounded-full bg-foreground/40"
          style={{
            left: `${14 + ((index * 17) % 72)}%`,
            top: `${12 + ((index * 23) % 74)}%`,
          }}
          animate={{ opacity: [0.18, 0.68, 0.18], y: [0, -8, 0] }}
          transition={{
            duration: 4 + (index % 3),
            delay: index * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      ))}

      <motion.div
        className="relative z-10 flex h-full flex-col justify-center gap-4"
        style={{ x: translateX, y: translateY }}
      >
        {productNavItems.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.2 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className={[
              "w-[86%]",
              index === 1 ? "ml-auto" : "",
              index === 2 ? "ml-8" : "",
            ].join(" ")}
          >
            <motion.div
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HeroProductCard product={product} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
