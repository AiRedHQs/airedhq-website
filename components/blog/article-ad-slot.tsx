"use client";

import { useEffect, useRef, useState } from "react";
import type { ArticleAdSlot as ArticleAdSlotType } from "@/src/types/blog";

const ADSENSE_PUBLISHER_ID = "ca-pub-2453493824530034";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function ArticleAdSlot({ slot }: { slot: ArticleAdSlotType }) {
  const adRef = useRef<HTMLModElement>(null);
  const [isUnfilled, setIsUnfilled] = useState(false);

  useEffect(() => {
    const ad = adRef.current;
    if (!ad || slot.provider !== "adsense" || ad.dataset.adInitialized === "true") return;

    const updateFillStatus = () => setIsUnfilled(ad.dataset.adStatus === "unfilled");
    const observer = new MutationObserver(updateFillStatus);
    observer.observe(ad, { attributes: true, attributeFilter: ["data-ad-status"] });

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      ad.dataset.adInitialized = "true";
    } catch (error) {
      console.error("AdSense initialization failed:", error);
    }

    updateFillStatus();
    return () => observer.disconnect();
  }, [slot.provider, slot.providerSlotId]);

  if (!slot.enabled) return null;

  const canRequestAd = slot.provider === "adsense" && Boolean(slot.providerSlotId);

  return (
    <aside
      aria-label="Advertisement"
      data-ad-placement={slot.placement}
      className="my-14 min-h-[132px] w-full max-w-full text-center sm:min-h-[156px]"
    >
      <div className="mb-2 text-[11px] uppercase tracking-[.04em] text-white/40">Advertisement</div>
      <div className="flex min-h-[108px] w-full items-center justify-center overflow-hidden bg-white/[0.018] sm:min-h-[132px]">
        {canRequestAd && !isUnfilled ? (
          <ins
            ref={adRef}
            className="adsbygoogle block min-h-[108px] w-full max-w-full sm:min-h-[132px]"
            data-ad-client={ADSENSE_PUBLISHER_ID}
            data-ad-slot={slot.providerSlotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <span className="sr-only">Advertisement space reserved</span>
        )}
      </div>
    </aside>
  );
}
