"use client";

import { motion } from "framer-motion";

import { cn } from "@/src/lib/utils";

type LivingBackgroundTone = "neutral" | "hiared" | "gobazaar" | "yojiq" | "lab";

type LivingBackgroundProps = {
  tone?: LivingBackgroundTone;
  intensity?: "quiet" | "normal" | "strong";
  className?: string;
};

const toneClass: Record<LivingBackgroundTone, string> = {
  neutral:
    "from-primary/10 via-product-gobazaar/10 to-product-hiared/12 [--orb-one:hsl(var(--product-hiared)/0.18)] [--orb-two:hsl(var(--product-gobazaar)/0.14)] [--orb-three:hsl(var(--product-yojiq)/0.1)]",
  hiared:
    "from-product-hiared/24 via-product-hiared/12 to-primary/8 [--orb-one:hsl(var(--product-hiared)/0.28)] [--orb-two:hsl(var(--product-hiared)/0.16)] [--orb-three:hsl(var(--product-gobazaar)/0.08)]",
  gobazaar:
    "from-product-gobazaar/24 via-product-gobazaar/12 to-primary/8 [--orb-one:hsl(var(--product-gobazaar)/0.28)] [--orb-two:hsl(var(--product-gobazaar)/0.16)] [--orb-three:hsl(var(--product-hiared)/0.08)]",
  yojiq:
    "from-product-yojiq/20 via-product-yojiq/10 to-primary/8 [--orb-one:hsl(var(--product-yojiq)/0.24)] [--orb-two:hsl(var(--product-yojiq)/0.14)] [--orb-three:hsl(var(--product-gobazaar)/0.08)]",
  lab: "from-product-hiared/18 via-product-gobazaar/10 to-background [--orb-one:hsl(var(--product-hiared)/0.2)] [--orb-two:hsl(var(--product-gobazaar)/0.14)] [--orb-three:hsl(var(--product-yojiq)/0.07)]",
};

const opacityClass = {
  quiet: "opacity-55",
  normal: "opacity-75",
  strong: "opacity-95",
};

export function LivingBackground({
  tone = "neutral",
  intensity = "normal",
  className,
}: LivingBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden transition-colors duration-1000",
        opacityClass[intensity],
        className,
      )}
      aria-hidden="true"
    >
      <motion.div
        className={cn(
          "absolute inset-[-18%] bg-[radial-gradient(circle_at_20%_20%,var(--orb-one),transparent_28rem),radial-gradient(circle_at_78%_18%,var(--orb-two),transparent_30rem),radial-gradient(circle_at_48%_82%,var(--orb-three),transparent_34rem)]",
          toneClass[tone],
        )}
        animate={{
          x: ["-2%", "2%", "-2%"],
          y: ["-1%", "2%", "-1%"],
          scale: [1, 1.04, 1],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute inset-[-10%] bg-gradient-to-br blur-3xl",
          toneClass[tone],
        )}
        animate={{ rotate: [0, 6, 0], opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-[-20%] h-[70%] w-[14rem] -translate-x-1/2 rotate-12 bg-gradient-to-b from-primary/12 to-transparent blur-3xl"
        animate={{ x: ["-18%", "18%", "-18%"], opacity: [0.18, 0.34, 0.18] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--border)/0.16)_1px,transparent_1px),linear-gradient(hsl(var(--border)/0.13)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_50%_35%,black,transparent_74%)]"
        animate={{ backgroundPosition: ["0px 0px", "72px 72px", "0px 0px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="surface-noise absolute inset-0 opacity-[0.08]"
        animate={{ opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {Array.from({ length: 14 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute size-1 rounded-full bg-foreground/35"
          style={{
            left: `${6 + ((index * 17) % 88)}%`,
            top: `${10 + ((index * 23) % 78)}%`,
          }}
          animate={{ y: [0, index % 2 ? 12 : -12, 0], opacity: [0.12, 0.42, 0.12] }}
          transition={{
            duration: 12 + index,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
