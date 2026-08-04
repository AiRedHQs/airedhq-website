export default function WhyThisMatters() {
  const cards = [
    {
      title: "Know Your Risk Profile",
      description:
        "Identify whether your investment style is Conservative, Moderate or Aggressive before making investment decisions.",
    },
    {
      title: "Recommended Asset Allocation",
      description:
        "Receive an indicative allocation across Equity, Debt and Gold based on your responses.",
    },
    {
      title: "Reduce Emotional Investing",
      description:
        "Understand how your behaviour changes during market volatility and avoid impulsive investment decisions.",
    },
    {
      title: "Estimate Future Wealth",
      description:
        "See how your monthly investments could grow over your selected investment horizon.",
    },
    {
      title: "Professional PDF Report",
      description:
        "Download a comprehensive report containing your score, profile, allocation and recommendations.",
    },
    {
      title: "Free & Private",
      description:
        "No signup required. Your responses remain private and are processed only for generating your report.",
    },
  ];

  return (
    <section
      id="why-this-matters"
      className="scroll-mt-6 border-t border-white/10 bg-[#080808] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            WHY USE THIS TOOL
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Invest based on your
            <span className="text-lime-400"> personality</span>, not market
            emotions.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            Every investor has a different ability and willingness to take risk.
            This assessment helps identify your investment profile before you
            start investing.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-lime-400/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-xl font-bold text-lime-400">
                ✓
              </div>

              <h3 className="mt-8 text-2xl font-semibold">{card.title}</h3>
              <p className="mt-5 leading-7 text-white/60">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}