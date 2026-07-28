import type { Variants } from "framer-motion";

export const motionDurations = {
  fast: 0.2,
  base: 0.32,
  slow: 0.4,
} as const;

export const easing = {
  premium: [0.22, 1, 0.36, 1],
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.base,
      ease: easing.premium,
    },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDurations.base,
      ease: easing.premium,
    },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDurations.base,
      ease: easing.premium,
    },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDurations.base,
      ease: easing.premium,
    },
  },
};

export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionDurations.base,
      ease: easing.premium,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const pageTransition = {
  duration: motionDurations.slow,
  ease: easing.premium,
} as const;

export const hoverLift = {
  y: -4,
  transition: {
    duration: motionDurations.fast,
    ease: easing.premium,
  },
} as const;
