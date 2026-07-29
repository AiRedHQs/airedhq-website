"use client";

import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { BrandMark } from "@/components/navigation/brand-mark";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
  });

  return (
    <motion.header
      className="sticky top-0 z-40 bg-background/24 backdrop-blur-xl"
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <BrandMark />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </motion.header>
  );
}
