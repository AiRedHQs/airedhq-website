"use client";

import { useMemo, useState } from "react";
import { Calculator, CircleAlert, RotateCcw } from "lucide-react";
import type { CalculatorDefinition } from "@/constants/calculators";
import { calculate } from "@/lib/calculators/engines";
import type { ResultMetric } from "@/lib/calculators/types";

const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 });
const format = (metric: ResultMetric) => metric.format === "percent" ? `${number.format(metric.value)}%` : metric.format === "months" ? `${number.format(metric.value)} months` : metric.format === "number" ? number.format(metric.value) : currency.format(metric.value);

function ProjectionChart({ points }: { points: NonNullable<ReturnType<typeof calculate>["nominal"]> }) {
  const max = Math.max(...points.flatMap((point) => [point.nominal, point.real ?? 0]), 1);
  const path = (key: "nominal" | "real") => points.map((point, index) => `${index ? "L" : "M"} ${(index / Math.max(1, points.length - 1)) * 100} ${100 - ((key === "real" ? point.real ?? point.nominal : point.nominal) / max) * 92}`).join(" ");
  return <figure className="mt-8"><svg viewBox="0 0 100 100" className="h-40 w-full overflow-visible" role="img" aria-label="Nominal and inflation-adjusted value projection"><path d={path("nominal")} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"/><path d={path("real")} fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke"/></svg><figcaption className="mt-3 flex gap-6 text-xs"><span>Solid: nominal</span><span className="opacity-55">Dashed: today’s purchasing power</span></figcaption></figure>;
}

export function FinanceCalculator({ calculator }: { calculator: CalculatorDefinition }) {
  const defaults = useMemo(() => Object.fromEntries(calculator.fields.map((field) => [field.key, field.defaultValue])), [calculator.fields]);
  const [values, setValues] = useState<Record<string, number>>(defaults);
  const loan = calculator.engine === "emi";
  const [resultMode, setResultMode] = useState<"standard" | "optimiser">("standard");
  const result = useMemo(() => calculate(calculator.engine, loan && resultMode === "standard" ? { ...values, emiStepUp: 0, extraEmis: 0, annualPrepayment: 0 } : values), [calculator.engine, loan, resultMode, values]);
  const displayedHeadline = loan && resultMode === "optimiser" ? result.metrics.find((metric) => metric.label === "Interest saved") ?? result.headline : result.headline;
  const visibleFields = loan && resultMode === "standard" ? calculator.fields.filter((field) => !["emiStepUp","extraEmis","annualPrepayment","prepaymentStart"].includes(field.key)) : calculator.fields;
  const updateValue = (key: string, value: number) => setValues((current) => ({ ...current, [key]: value }));

  return <section aria-label={`${calculator.name} inputs and results`} className="overflow-hidden bg-white/[0.035]">
    {loan ? <div className="flex border-b border-white/10 p-2" role="tablist" aria-label="Repayment view"><button type="button" role="tab" aria-selected={resultMode === "standard"} onClick={() => setResultMode("standard")} className={`min-h-11 px-5 text-sm font-semibold ${resultMode === "standard" ? "bg-[color:var(--calculator-accent)] text-black" : "text-white/55"}`}>Standard repayment</button><button type="button" role="tab" aria-selected={resultMode === "optimiser"} onClick={() => setResultMode("optimiser")} className={`min-h-11 px-5 text-sm font-semibold ${resultMode === "optimiser" ? "bg-[color:var(--calculator-accent)] text-black" : "text-white/55"}`}>Repayment optimiser</button></div> : null}
    <div className="grid lg:grid-cols-[1.02fr_.98fr]">
      <div className="p-6 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center bg-[color:var(--calculator-accent)] text-black"><Calculator className="size-5" aria-hidden="true" /></span><h2 className="text-xl font-semibold">Adjust your assumptions</h2></div><button type="button" onClick={() => setValues(defaults)} className="flex min-h-11 items-center gap-2 px-3 text-xs font-semibold text-white/50 transition-colors hover:text-[color:var(--calculator-accent)]"><RotateCcw className="size-4"/>Reset</button></div>
        <div className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {visibleFields.map((field) => { const id = `${calculator.slug}-${field.key}`; return <div key={field.key}>
            <div className="flex items-center justify-between gap-3"><label htmlFor={id} className="text-sm font-medium text-white/72">{field.label}</label><div className="flex min-w-[7.5rem] items-center justify-end bg-black/30 px-3 py-2 text-sm font-semibold">{field.prefix}<input aria-label={`${field.label} numeric value`} className="w-24 bg-transparent text-right text-white outline-none" type="number" min={field.min} max={field.max} step={field.step} value={values[field.key]} onInput={(event) => updateValue(field.key, Number(event.currentTarget.value))} onChange={(event) => updateValue(field.key, Number(event.currentTarget.value))}/>{field.suffix ? <span className="ml-1 text-white/45">{field.suffix}</span> : null}</div></div>
            <input id={id} aria-valuetext={`${field.prefix ?? ""}${values[field.key]} ${field.suffix ?? ""}`} className="mt-4 h-2 w-full cursor-pointer accent-[color:var(--calculator-accent)]" type="range" min={field.min} max={field.max} step={field.step} value={values[field.key]} onInput={(event) => updateValue(field.key, Number(event.currentTarget.value))} onChange={(event) => updateValue(field.key, Number(event.currentTarget.value))}/><div className="mt-2 flex justify-between text-[10px] text-white/30"><span>{field.prefix}{field.min.toLocaleString("en-IN")}</span><span>{field.prefix}{field.max.toLocaleString("en-IN")}</span></div>
          </div>; })}
        </div>
      </div>

      <div aria-live="polite" className="flex flex-col justify-between bg-[color:var(--calculator-accent)] p-6 text-black sm:p-10 lg:p-12">
        <div><p className="text-xs font-semibold uppercase tracking-[.18em] opacity-55">Your estimate</p><p className="mt-4 break-words text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none">{format(displayedHeadline)}</p><p className="mt-3 text-sm font-medium opacity-65">{displayedHeadline.label}</p></div>
        {result.nominal?.length ? <ProjectionChart points={result.nominal}/>: null}
        <div className="my-9 grid gap-px bg-black/15 sm:grid-cols-2">{result.metrics.filter((metric) => !loan || resultMode === "optimiser" || !["Interest saved","Time saved"].includes(metric.label)).map((metric) => <div key={metric.label} className="bg-black/[.07] p-4"><p className="text-xs opacity-55">{metric.label}</p><p className="mt-1 text-lg font-semibold">{format(metric)}</p></div>)}</div>
        {result.comparison && (!loan || resultMode === "optimiser") ? <div className="space-y-3">{result.comparison.map((scenario) => { const max = Math.max(...result.comparison!.map((item) => item.value),1); return <div key={scenario.label}><div className="flex justify-between gap-4 text-xs font-semibold"><span>{scenario.label}</span><span>{currency.format(scenario.value)}{scenario.detail ? ` · ${scenario.detail}` : ""}</span></div><div className="mt-2 h-2 bg-black/15"><div className="h-full bg-black/70" style={{width:`${scenario.value / max * 100}%`}}/></div></div>; })}</div> : null}
        {loan && result.schedule?.length ? <details className="mt-7 border-t border-black/15 pt-5"><summary className="cursor-pointer text-sm font-semibold">View amortisation schedule</summary><div className="mt-4 max-h-64 overflow-auto"><table className="w-full min-w-[34rem] text-right text-xs"><caption className="sr-only">Month-by-month loan repayment schedule</caption><thead className="sticky top-0 bg-[color:var(--calculator-accent)]"><tr><th className="py-2 text-left">Month</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead><tbody>{result.schedule.map((row) => <tr key={row.period} className="border-t border-black/10"><td className="py-2 text-left">{row.period}</td><td>{currency.format(row.payment)}</td><td>{currency.format(row.principal)}</td><td>{currency.format(row.interest)}</td><td>{currency.format(row.balance)}</td></tr>)}</tbody></table></div></details> : null}
        {result.warnings.map((warning) => <p key={warning} className="mt-5 flex gap-2 text-xs leading-5 opacity-70"><CircleAlert className="mt-0.5 size-4 shrink-0"/>{warning}</p>)}
        <p className="mt-7 text-xs leading-5 opacity-60">Educational estimate only. Methodology {result.methodologyVersion}. This is not a return promise, loan offer, tax filing or financial recommendation.</p>
      </div>
    </div>
  </section>;
}
