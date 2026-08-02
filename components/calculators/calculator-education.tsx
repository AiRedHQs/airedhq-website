import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { CalculatorDefinition } from "@/constants/calculators";
import { calculatorEducation } from "@/constants/calculator-content";

export function CalculatorEducation({ calculator }: { calculator: CalculatorDefinition }) {
  const content = calculatorEducation[calculator.slug] ?? {
    overview: `${calculator.name} turns the assumptions shown above into an educational estimate. It exposes the inputs, method and limitations instead of presenting an unexplained answer.`,
    definition: `${calculator.description} The result updates locally as an input changes, making it useful for scenario comparison rather than prediction.`,
    formula: `Result = disclosed ${calculator.shortName} method applied to your inputs`,
    formulaNotes: ["Inputs remain unrounded during calculation.", "Displayed currency values are rounded only for readability.", "Policy-driven assumptions are dated and linked to primary sources where applicable."],
    steps: ["Enter values that reflect the scenario you want to test.", "Move one assumption at a time to understand its effect.", "Compare nominal values with today’s purchasing power where available.", "Read the warnings and verify current rules before acting."],
    benefits: ["Updates immediately without a network request.", "Keeps assumptions visible and editable.", "Supports comparison instead of hiding methodology."],
    limitations: ["Results are estimates, not guarantees or approvals.", "Unentered taxes, fees and personal circumstances are excluded.", "Rules and rates can change after the stated review date."],
    example: `Use the default ${calculator.shortName} scenario as a starting point, then adjust each field to match your own assumptions.`,
  };
  return (
    <>
      <section className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]" aria-labelledby="calculator-overview">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[color:var(--calculator-accent)]">Understanding the calculator</p><h2 id="calculator-overview" className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">{calculator.name}: what it calculates.</h2></div>
        <div className="space-y-6 text-base leading-8 text-white/58"><p>{content.overview}</p><p>{content.definition}</p></div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[.7fr_1.3fr]" aria-labelledby="calculator-formula">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/35">Methodology</p><h2 id="calculator-formula" className="mt-5 text-4xl font-semibold sm:text-5xl">How the calculation works.</h2></div>
        <div><div className="overflow-x-auto bg-white/[0.045] p-6 font-mono text-base text-[color:var(--calculator-accent)] sm:p-8 sm:text-xl">{content.formula}</div><ul className="mt-7 space-y-3">{content.formulaNotes.map((note) => <li key={note} className="flex gap-3 text-sm leading-6 text-white/52"><CheckCircle2 className="mt-1 size-4 shrink-0 text-[color:var(--calculator-accent)]" />{note}</li>)}</ul><p className="mt-8 border-l-2 border-[color:var(--calculator-accent)] pl-5 text-sm leading-7 text-white/60"><strong className="text-white">Worked example.</strong> {content.example}</p></div>
      </section>

      <section className="mt-20 grid gap-px bg-white/10 lg:grid-cols-3">
        <article className="bg-[#07090c] p-7 sm:p-9"><h2 className="text-2xl font-semibold">How to use it</h2><ol className="mt-7 space-y-4">{content.steps.map((step, index) => <li key={step} className="flex gap-4 text-sm leading-6 text-white/52"><span className="text-[color:var(--calculator-accent)]">{index + 1}.</span>{step}</li>)}</ol></article>
        <article className="bg-[#07090c] p-7 sm:p-9"><h2 className="text-2xl font-semibold">What it helps with</h2><ul className="mt-7 space-y-4">{content.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm leading-6 text-white/52"><CheckCircle2 className="mt-1 size-4 shrink-0 text-[color:var(--calculator-accent)]" />{benefit}</li>)}</ul></article>
        <article className="bg-[#07090c] p-7 sm:p-9"><h2 className="text-2xl font-semibold">What it does not include</h2><ul className="mt-7 space-y-4">{content.limitations.map((limitation) => <li key={limitation} className="flex gap-3 text-sm leading-6 text-white/52"><AlertTriangle className="mt-1 size-4 shrink-0 text-[color:var(--calculator-accent)]" />{limitation}</li>)}</ul></article>
      </section>
      {calculator.policy ? <section className="mt-20 grid gap-10 bg-white/[0.035] p-7 sm:p-10 lg:grid-cols-[.7fr_1.3fr]" aria-labelledby="policy-basis"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[color:var(--calculator-accent)]">Rule basis</p><h2 id="policy-basis" className="mt-5 text-3xl font-semibold">FY {calculator.policy.financialYear}</h2><p className="mt-3 text-sm text-white/45">Method reviewed {calculator.policy.reviewedAt}.</p></div><div><p className="text-sm leading-7 text-white/55">Policy-linked estimates can become stale. Confirm current eligibility, rates, limits and filing treatment before acting.</p><ul className="mt-6 space-y-3">{calculator.policy.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[color:var(--calculator-accent)] underline-offset-4 hover:underline">{source.label}</a></li>)}</ul></div></section> : null}
    </>
  );
}
