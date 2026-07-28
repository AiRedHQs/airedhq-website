"use client";

import * as React from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

import { pageTransition } from "@/src/lib/motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user" transition={pageTransition}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
