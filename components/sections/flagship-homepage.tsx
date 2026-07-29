"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/src/lib/utils";

type ProductId = "hiared" | "gobazaar" | "yojiq";

const products = [
  {
    id: "hiared",
    name: "hiARed",
    href: "/products/hiared",
    logo: "/hiared/hiARed Logo Purple Dark Transparent.png",
    preview: "/hiared/hiared-product-preview-transparent.webp",
    previewAlt:
      "hiARed recruitment dashboard showing transparency scoring, resume screening and hiring pipeline",
    logoSize: "h-12 md:h-14",
    eyebrow: "Transparent AI recruitment",
    headline: "Smarter hiring.\nFaster decisions.",
    sentence:
      "hiARed brings transparency scores, resume screening, candidate ranking and end-to-end hiring stages into one recruitment workspace.",
    usps: [
      "Company Transparency Score",
      "Resume Screening",
      "Candidate Ranking",
      "End-to-End Pipeline",
    ],
  },
  {
    id: "gobazaar",
    name: "GoBazaar",
    href: "/products/gobazaar",
    logo: "/gobazaar/GoBazaar Logo Dark Transparent Trimmed.png",
    preview: "/gobazaar/gobazaar-product-preview-transparent.webp",
    previewAlt:
      "GoBazaar local discovery interface showing Jaipur markets, offers and nearby businesses",
    logoSize: "h-14 md:h-16",
    eyebrow: "Hyperlocal discovery",
    headline: "Discover local.\nGrow local.",
    sentence:
      "GoBazaar helps people discover bazaars, food, shopping, fairs and nearby offers while merchants manage local visibility.",
    usps: ["Market Discovery", "Nearby Offers", "Food & Fair Pins", "Merchant Dashboard"],
  },
  {
    id: "yojiq",
    name: "YojIQ",
    href: "/products/yojiq",
    logo: "/yojiq/YOJIQLogoTranparent for Dark Background 820X208.png",
    preview: "/yojiq/yojiq-product-preview-transparent-clean.webp",
    previewAlt:
      "YojIQ personal finance application showing budgets, emergency funds and expense analytics",
    logoSize: "h-9 md:h-11",
    eyebrow: "Personal finance clarity",
    headline: "Plan smarter.\nSpend better.",
    sentence:
      "YojIQ gives people a calmer way to manage budgets, emergency funds, insurance, savings goals and investments.",
    usps: ["Budget Health", "Emergency Fund", "Expense Charts", "Investment Summary"],
  },
] as const;

const accent = {
  hiared: "text-[#6102f5]",
  gobazaar: "text-product-gobazaar",
  yojiq: "text-product-yojiq",
} satisfies Record<ProductId, string>;

const productSectionBackground = {
  hiared:
    "radial-gradient(circle at 78% 48%, rgba(97,2,245,0.13), transparent 38%), #07070a",
  gobazaar:
    "radial-gradient(circle at 78% 48%, #123872 0%, #091b39 30%, #050910 68%)",
  yojiq:
    "radial-gradient(circle at 78% 48%, rgba(132,204,22,0.14), transparent 38%), #070907",
} satisfies Record<ProductId, string>;

const productCta = {
  hiared:
    "border-[#6102f5]/55 bg-[#6102f5]/10 text-[#b58cff] hover:bg-[#6102f5]/18 hover:text-white",
  gobazaar:
    "border-product-gobazaar/55 bg-product-gobazaar/10 text-product-gobazaar hover:bg-product-gobazaar/18 hover:text-white",
  yojiq:
    "border-product-yojiq/55 bg-product-yojiq/10 text-product-yojiq hover:bg-product-yojiq/18 hover:text-white",
} satisfies Record<ProductId, string>;

export function FlagshipHomepage() {
  return (
    <>
      <Hero />
      <main className="bg-[#050608]">
        {products.map((product) => (
          <ProductBand key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050608] pt-24 text-white md:pt-28">
      <HeroAtmosphere />
      <Container className="relative z-10 grid min-h-[calc(100svh-4rem)] items-center gap-14 pb-20 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.34em] text-white/48">
            Product innovation company
          </p>
          <h1 className="max-w-[11ch] text-6xl font-semibold leading-[0.9] tracking-normal text-balance md:text-7xl lg:text-[5.8rem] xl:text-[6.8rem]">
            We build products that solve real problems.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/56 md:text-lg">
            Three product lines. One engineering standard. Practical software designed,
            built and improved in the real world.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group rounded-full border border-white bg-white px-6 text-black shadow-none hover:bg-white/90"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Link
              href="/contact"
              className="group inline-flex min-h-11 items-center text-sm font-medium text-white/76 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Start a Project
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        <HeroProductVisual />
      </Container>
    </section>
  );
}

function ProductBand({ product }: { product: (typeof products)[number] }) {
  return (
    <section
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{ background: productSectionBackground[product.id] }}
    >
      <Container className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="max-w-xl">
          <Image
            src={product.logo}
            alt={product.name}
            width={720}
            height={240}
            className={cn("mb-8 w-auto object-contain", product.logoSize)}
          />
          <p
            className={cn(
              "mb-5 text-xs font-medium uppercase tracking-[0.28em]",
              accent[product.id],
            )}
          >
            {product.eyebrow}
          </p>
          <h2 className="whitespace-pre-line text-5xl font-semibold leading-[0.94] tracking-normal text-balance md:text-6xl lg:text-7xl">
            {product.headline}
          </h2>
          <p className="mt-7 text-base leading-7 text-white/56 md:text-lg">
            {product.sentence}
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.usps.map((usp) => (
              <li
                key={usp}
                className="flex items-center gap-3 text-sm font-medium text-white/82"
              >
                <span className="flex size-6 items-center justify-center rounded-full border border-white/12 bg-white/[0.04]">
                  <Check className={cn("size-3.5", accent[product.id])} />
                </span>
                {usp}
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="lg"
            className={cn(
              "group mt-10 rounded-full border px-6 shadow-none",
              productCta[product.id],
            )}
          >
            <Link href={product.href}>
              Learn More
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <Image
            src={product.preview}
            alt={product.previewAlt}
            width={product.id === "gobazaar" ? 1693 : 1536}
            height={product.id === "gobazaar" ? 929 : 1024}
            sizes="(max-width: 1023px) 100vw, 62vw"
            className="h-auto w-full object-contain"
          />
          {product.id === "yojiq" && (
            <Image
              src="/yojiq/YOJIQLogoTranparent for Dark Background 820X208.png"
              alt=""
              width={820}
              height={208}
              aria-hidden="true"
              className="absolute right-[11%] top-[13%] h-auto w-[31%] object-contain"
            />
          )}
        </div>
      </Container>
    </section>
  );
}

function HeroProductVisual() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [2.5, -2.5]), {
    stiffness: 80,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3.5, 3.5]), {
    stiffness: 80,
    damping: 24,
  });

  return (
    <div
      className="relative perspective-[1400px] lg:-mr-20 xl:-mr-28"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/airedhq/homepage-hero-transparent.webp"
          alt="AiRedHQ product suite featuring hiARed, GoBazaar and YojIQ"
          width={1536}
          height={1024}
          priority
          sizes="(max-width: 1023px) 100vw, 64vw"
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </div>
  );
}

function HeroAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(37,99,235,0.11),transparent_30%),radial-gradient(circle_at_62%_50%,rgba(97,2,245,0.09),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(132,204,22,0.08),transparent_24%),linear-gradient(180deg,#050608,#07090d_52%,#050608)]" />
      <div className="surface-noise absolute inset-0 opacity-[0.05]" />
    </div>
  );
}
