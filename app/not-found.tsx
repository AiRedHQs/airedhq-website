import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[calc(100svh-4rem)] place-items-center overflow-hidden bg-[#050608] py-20 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(97,2,245,.12),transparent_24rem),radial-gradient(circle_at_28%_70%,rgba(47,145,212,.08),transparent_26rem)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-semibold leading-none text-white/[0.018]"
        aria-hidden="true"
      >
        404
      </span>

      <Container className="relative grid max-w-[88rem] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/42">
            Error 404
          </p>
          <h1 className="mt-7 max-w-[9ch] text-6xl font-semibold leading-[0.92] sm:text-7xl lg:text-8xl">
            This page lost the{" "}
            <span className="text-[#9b5cff]">plot.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-white/52">
            The address may have changed, or the page may no longer exist. The rest
            of AiRedHQ is still exactly where we left it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/">
                <Home aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/solutions">
                Explore Solutions
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>

        <div className="not-found-face-container" aria-hidden="true">
          <svg className="not-found-face" viewBox="0 0 320 380">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="25"
            >
              <g className="not-found-face__eyes" transform="translate(0,112.5)">
                <g transform="translate(15,0)">
                  <polyline className="not-found-face__eye-lid" points="37,0 0,120 75,120" />
                  <polyline
                    className="not-found-face__pupil"
                    points="55,120 55,155"
                    strokeDasharray="35 35"
                  />
                </g>
                <g transform="translate(230,0)">
                  <polyline className="not-found-face__eye-lid" points="37,0 0,120 75,120" />
                  <polyline
                    className="not-found-face__pupil"
                    points="55,120 55,155"
                    strokeDasharray="35 35"
                  />
                </g>
              </g>
              <rect
                className="not-found-face__nose"
                x="132.5"
                y="112.5"
                width="55"
                height="155"
                rx="4"
                ry="4"
              />
              <g transform="translate(65,334)" strokeDasharray="102 102">
                <path className="not-found-face__mouth-left" d="M 0 30 C 0 30 40 0 95 0" />
                <path className="not-found-face__mouth-right" d="M 95 0 C 150 0 190 30 190 30" />
              </g>
            </g>
          </svg>
        </div>
      </Container>
    </section>
  );
}
