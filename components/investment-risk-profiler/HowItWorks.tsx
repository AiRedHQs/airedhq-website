export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Answer Questions",
      description:
        "Complete a short questionnaire designed to understand your financial goals, investment experience, and risk tolerance.",
    },
    {
      step: "02",
      title: "Get Your Risk Profile",
      description:
        "Your responses are analysed to determine whether your investment personality is Conservative, Moderate, or Aggressive.",
    },
    {
      step: "03",
      title: "Receive Asset Allocation",
      description:
        "Get an indicative allocation across Equity, Debt, and Gold based on your investment profile.",
    },
    {
      step: "04",
      title: "Download Your Report",
      description:
        "Receive a professional report containing your profile, recommendations, suggested allocation, and future wealth projection.",
    },
  ];

  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Four simple steps.
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60">
            The assessment takes approximately five minutes and provides a
            structured investment recommendation based on your responses.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.step}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="text-6xl font-black text-lime-400/20">
                {step.step}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-5 leading-7 text-white/60">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}