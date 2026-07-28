"use client";

import * as React from "react";
import { Toaster } from "sonner";

import { BrandProvider } from "@/components/providers/brand-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BrandProvider>
        <MotionProvider>
          {children}
          <Toaster richColors closeButton position="bottom-right" />
        </MotionProvider>
      </BrandProvider>
    </ThemeProvider>
  );
}
