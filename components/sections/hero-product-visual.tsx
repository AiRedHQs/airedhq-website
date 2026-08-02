"use client";

import Image from "next/image";

export function HeroProductVisual() {
  return (
    <div
      className="hero-product-visual relative mx-auto w-full max-w-2xl origin-center perspective-[1400px] lg:-mr-8 lg:max-w-none lg:scale-[1.08] xl:-mr-14"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        event.currentTarget.style.setProperty("--hero-rotate-x", `${-y * 6}deg`);
        event.currentTarget.style.setProperty("--hero-rotate-y", `${x * 8}deg`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--hero-rotate-x", "0deg");
        event.currentTarget.style.setProperty("--hero-rotate-y", "0deg");
      }}
    >
      <div className="hero-product-float will-change-transform">
        <div className="hero-product-parallax">
          <Image
            src="/airedhq/homepage-hero-transparent.webp"
            alt="AiRedHQ product suite featuring hiARed, GoBazaar and YojIQ"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 1023px) 100vw, 64vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
