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
      className="sticky top-0 z-40 border-b border-white/10 bg-[#07090d]/96 shadow-[0_10px_30px_rgba(0,0,0,.2)] backdrop-blur-xl lg:border-b-0 lg:bg-background/24 lg:shadow-none"
      animate={{ y: hidden ? -72 : 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <BrandMark />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </motion.header>
  );
}
