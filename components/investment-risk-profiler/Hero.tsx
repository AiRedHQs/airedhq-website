"use client";

export default function Hero() {
  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#84cc1620,transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-20 px-6 py-24 lg:grid-cols-[1fr_480px] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-400">
            FREE INVESTMENT TOOL
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Investment
            <br />
            Risk Profiler
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Discover your investment personality using an industry-inspired
            assessment. Understand your risk tolerance, receive a suggested
            portfolio allocation and estimate your future wealth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("assessment")}
              className="rounded-xl bg-lime-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
            >
              Start Free Assessment
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("why-this-matters")}
              className="rounded-xl border border-white/15 px-8 py-4 font-semibold transition hover:border-lime-400"
            >
              Learn More
            </button>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl font-bold text-lime-400">15</div>
              <div className="mt-2 text-white/60">
                Industry-inspired assessment questions
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-3xl font-bold text-lime-400">3</div>
              <div className="mt-2 text-white/60">Investor profiles</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Sample Risk Score</p>
              <h2 className="mt-2 text-6xl font-bold">82</h2>
            </div>

            <div className="rounded-full bg-lime-400 px-4 py-2 font-semibold text-black">
              Aggressive
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Equity</span>
                <span>70%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-full w-[70%] rounded-full bg-lime-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Debt</span>
                <span>20%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-full w-[20%] rounded-full bg-sky-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Gold</span>
                <span>10%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10">
                <div className="h-full w-[10%] rounded-full bg-yellow-400" />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-black/30 p-6">
            <p className="text-sm text-white/60">
              Suggested Monthly Investment
            </p>
            <h3 className="mt-3 text-4xl font-bold">₹20,000</h3>

            <div className="mt-6 flex justify-between">
              <span className="text-white/60">Projected Wealth</span>
              <span className="font-semibold text-lime-400">₹2.84 Cr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}