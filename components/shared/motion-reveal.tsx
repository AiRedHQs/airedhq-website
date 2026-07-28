"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { fadeUp, hoverLift, staggerContainer } from "@/src/lib/motion";

type MotionRevealGroupProps = {
  children: React.ReactNode;
  className: string;
};

export function MotionRevealGroup({ children, className }: MotionRevealGroupProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionRevealItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} whileHover={hoverLift}>
      {children}
    </motion.div>
  );
}
