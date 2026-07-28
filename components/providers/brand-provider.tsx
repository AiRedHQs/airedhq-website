"use client";

import * as React from "react";

import { brandTokens } from "@/constants/brand";
import type { BrandId, BrandToken } from "@/src/types/brand";

type BrandContextValue = {
  activeBrand: BrandToken;
  setActiveBrand: (brandId: BrandId) => void;
};

const BrandContext = React.createContext<BrandContextValue | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [activeBrandId, setActiveBrandId] = React.useState<BrandId>("airedhq");

  const value = React.useMemo<BrandContextValue>(
    () => ({
      activeBrand: brandTokens[activeBrandId],
      setActiveBrand: setActiveBrandId,
    }),
    [activeBrandId],
  );

  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}

export function useBrand() {
  const context = React.useContext(BrandContext);

  if (!context) {
    throw new Error("useBrand must be used within a BrandProvider.");
  }

  return context;
}
