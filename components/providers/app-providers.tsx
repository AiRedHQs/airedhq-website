"use client";

import * as React from "react";
import { Toaster } from "sonner";

import { AnalyticsPlaceholder } from "@/components/analytics/analytics-placeholder";
import { CookieConsentPlaceholder } from "@/components/privacy/cookie-consent-placeholder";
import { BrandProvider } from "@/components/providers/brand-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <BrandProvider>
        <MotionProvider>
          {children}
          <AnalyticsPlaceholder />
          <CookieConsentPlaceholder />
          <Toaster richColors closeButton position="bottom-right" />
        </MotionProvider>
      </BrandProvider>
    </ThemeProvider>
  );
}
