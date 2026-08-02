import type { CalculatorEngineId, CalculatorResult, ProjectionPoint, ScheduleRow } from "./types";

const VERSION = "2026.08";
const safe = (value: number, fallback = 0) => Number.isFinite(value) ? value : fallback;
const monthlyRate = (annualPercent: number) => (1 + annualPercent / 100) ** (1 / 12) - 1;
const realValue = (future: number, inflation: number, years: number) => future / (1 + inflation / 100) ** years;

function projection(principal: number, annualContribution: number, rate: number, inflation: number, years: number): ProjectionPoint[] {
  let value = principal;
  return Array.from({ length: Math.max(1, Math.floor(years)) }, (_, index) => {
    value = (value + annualContribution) * (1 + rate / 100);
    return { label: `Year ${index + 1}`, nominal: value, real: realValue(value, inflation, index + 1) };
  });
}

function amortise(principal: number, annualRate: number, years: number, extraEmis = 0, annualPrepayment = 0, prepaymentStart = 1, stepUp = 0) {
  const rate = annualRate / 1200;
  const months = Math.max(1, Math.round(years * 12));
  const baseEmi = rate === 0 ? principal / months : principal * rate * (1 + rate) ** months / ((1 + rate) ** months - 1);
  let balance = principal;
  let totalInterest = 0;
  const schedule: ScheduleRow[] = [];
  for (let month = 1; month <= months && balance > 0.01; month += 1) {
    const year = Math.floor((month - 1) / 12);
    const payment = baseEmi * (1 + stepUp / 100) ** year;
    const interest = balance * rate;
    let paid = Math.min(balance + interest, payment);
    if (month % 12 === 0) paid += Math.min(balance + interest - paid, baseEmi * extraEmis);
    if (month % 12 === 0 && year + 1 >= prepaymentStart) paid += Math.min(balance + interest - paid, annualPrepayment);
    const principalPaid = Math.max(0, paid - interest);
    balance = Math.max(0, balance - principalPaid);
    totalInterest += interest;
    schedule.push({ period: month, payment: paid, principal: principalPaid, interest, balance });
  }
  return { emi: baseEmi, totalInterest, schedule, months: schedule.length };
}

function resultSchedule(standard: ScheduleRow[], optimised: ScheduleRow[], values: Record<string, number>) {
  return safe(values.extraEmis) > 0 || safe(values.annualPrepayment) > 0 || safe(values.emiStepUp) > 0 ? optimised : standard;
}

function taxBySlabs(income: number, slabs: Array<[number, number]>) {
  let tax = 0;
  let previous = 0;
  for (const [limit, rate] of slabs) {
    const taxable = Math.max(0, Math.min(income, limit) - previous);
    tax += taxable * rate;
    previous = limit;
    if (income <= limit) break;
  }
  return tax;
}

export function calculate(engine: CalculatorEngineId, v: Record<string, number>): CalculatorResult {
  const years = Math.max(0, safe(v.years));
  const rate = safe(v.rate);
  const inflation = safe(v.inflation, 6);
  const warnings: string[] = [];
  let invested = safe(v.principal);
  let value = invested;
  let series: ProjectionPoint[] | undefined;

  if (engine === "sip") {
    let corpus = 0; invested = 0;
    const mr = monthlyRate(rate);
    const points: ProjectionPoint[] = [];
    for (let month = 0; month < years * 12; month += 1) {
      const contribution = safe(v.monthly) * (1 + safe(v.stepUp) / 100) ** Math.floor(month / 12);
      invested += contribution; corpus = (corpus + contribution) * (1 + mr);
      if ((month + 1) % 12 === 0) points.push({ label: `Year ${(month + 1) / 12}`, nominal: corpus, real: realValue(corpus, inflation, (month + 1) / 12) });
    }
    value = corpus; series = points;
  } else if (engine === "rd") {
    const mr = monthlyRate(rate); const months = years * 12;
    invested = safe(v.monthly) * months;
    value = mr === 0 ? invested : safe(v.monthly) * (((1 + mr) ** months - 1) / mr) * (1 + mr);
    series = projection(0, safe(v.monthly) * 12, rate, inflation, years);
  } else if (["lumpsum", "compound-interest", "nsc", "roi", "inflation"].includes(engine)) {
    value = invested * (1 + rate / 100) ** years;
    series = projection(invested, 0, rate, inflation, years);
  } else if (engine === "simple-interest") {
    value = invested * (1 + rate / 100 * years);
    series = Array.from({ length: Math.max(1, years) }, (_, i) => ({ label: `Year ${i + 1}`, nominal: invested * (1 + rate / 100 * (i + 1)), real: realValue(invested * (1 + rate / 100 * (i + 1)), inflation, i + 1) }));
  } else if (engine === "fd") {
    value = invested * (1 + rate / 400) ** (4 * years); series = projection(invested, 0, rate, inflation, years);
  } else if (["ppf", "ssy", "scss"].includes(engine)) {
    invested = safe(v.annual) * years;
    value = rate === 0 ? invested : safe(v.annual) * (((1 + rate / 100) ** years - 1) / (rate / 100)) * (1 + rate / 100);
    series = projection(0, safe(v.annual), rate, inflation, years);
  } else if (engine === "swp") {
    let corpus = safe(v.principal); let withdrawn = 0; let monthsSustained = 0; const mr = monthlyRate(rate); const points: ProjectionPoint[] = [];
    for (let m = 0; m < years * 12 && corpus > 0; m += 1) {
      const withdrawal = safe(v.monthly) * (1 + safe(v.stepUp) / 100) ** Math.floor(m / 12);
      corpus = Math.max(0, corpus * (1 + mr) - withdrawal); withdrawn += Math.min(withdrawal, corpus + withdrawal); monthsSustained = m + 1;
      if ((m + 1) % 12 === 0) points.push({ label: `Year ${(m + 1) / 12}`, nominal: corpus, real: realValue(corpus, inflation, (m + 1) / 12) });
    }
    return { headline: { label: "Estimated remaining corpus", value: corpus, format: "currency" }, metrics: [{ label: "Starting corpus", value: v.principal, format: "currency" }, { label: "Estimated withdrawals", value: withdrawn, format: "currency" }, { label: "Months sustained", value: monthsSustained, format: "months" }, { label: "Today’s purchasing power", value: realValue(corpus, inflation, years), format: "currency" }], nominal: points, warnings: corpus === 0 ? [`The corpus is depleted after approximately ${monthsSustained} months; extending the horizon beyond depletion will not change the result.`] : [], methodologyVersion: VERSION };
  } else if (engine === "emi" || engine === "flat-rate") {
    const base = amortise(v.principal, rate, years);
    const optimised = amortise(v.principal, rate, years, safe(v.extraEmis), safe(v.annualPrepayment), safe(v.prepaymentStart, 1), safe(v.emiStepUp));
    if (engine === "flat-rate") {
      const flatInterest = v.principal * rate / 100 * years;
      const flatEmi = (v.principal + flatInterest) / (years * 12);
      return { headline: { label: "Flat-rate monthly payment", value: flatEmi, format: "currency" }, metrics: [{ label: "Flat-rate interest", value: flatInterest, format: "currency" }, { label: "Reducing-balance EMI", value: base.emi, format: "currency" }, { label: "Reducing-balance interest", value: base.totalInterest, format: "currency" }], schedule: base.schedule, comparison: [{ label: "Flat-rate total", value: v.principal + flatInterest }, { label: "Reducing-rate total", value: v.principal + base.totalInterest }], warnings, methodologyVersion: VERSION };
    }
    return { headline: { label: "Monthly EMI", value: base.emi, format: "currency" }, metrics: [{ label: "Principal", value: v.principal, format: "currency" }, { label: "Total interest", value: base.totalInterest, format: "currency" }, { label: "Total repayment", value: v.principal + base.totalInterest, format: "currency" }, { label: "Interest saved", value: Math.max(0, base.totalInterest - optimised.totalInterest), format: "currency" }, { label: "Time saved", value: Math.max(0, base.months - optimised.months), format: "months" }], schedule: resultSchedule(base.schedule, optimised.schedule, v), comparison: [{ label: "Standard repayment", value: v.principal + base.totalInterest, detail: `${base.months} months` }, { label: "Optimised repayment", value: v.principal + optimised.totalInterest, detail: `${optimised.months} months` }], warnings, methodologyVersion: VERSION };
  } else if (engine === "emergency") {
    value = safe(v.monthly) * safe(v.months); invested = safe(v.current);
  } else if (engine === "retirement") {
    const expense = safe(v.monthly) * (1 + inflation / 100) ** years;
    value = expense * 12 * safe(v.retirementYears); invested = expense;
  } else if (engine === "epf") {
    const monthlyBase = safe(v.monthly);
    const employee = monthlyBase * safe(v.employeeRate, 12) / 100 * 12 * years;
    const employer = monthlyBase * safe(v.employerRate, 12) / 100 * 12 * years;
    invested = employee + employer; value = invested * (1 + rate / 100) ** (years / 2);
  } else if (engine === "nps") {
    invested = safe(v.monthly) * 12 * years; value = projection(0, safe(v.monthly) * 12, rate, inflation, years).at(-1)?.nominal ?? invested; series = projection(0, safe(v.monthly) * 12, rate, inflation, years);
  } else if (engine === "gratuity") {
    value = safe(v.monthly) * 15 / 26 * years; invested = 0;
  } else if (engine === "gst") {
    const gst = v.inclusive ? v.principal - v.principal / (1 + rate / 100) : v.principal * rate / 100;
    return { headline: { label: "GST amount", value: gst, format: "currency" }, metrics: [{ label: "Base value", value: v.inclusive ? v.principal - gst : v.principal, format: "currency" }, { label: "Invoice value", value: v.inclusive ? v.principal : v.principal + gst, format: "currency" }], warnings, methodologyVersion: VERSION };
  } else if (engine === "income-tax") {
    const taxable = Math.max(0, safe(v.principal) - safe(v.deductions));
    let tax = taxBySlabs(taxable, [[400000,0],[800000,.05],[1200000,.10],[1600000,.15],[2000000,.20],[2400000,.25],[Infinity,.30]]);
    if (taxable <= 1200000) tax = 0; tax *= 1.04;
    return { headline: { label: "Estimated tax including cess", value: tax, format: "currency" }, metrics: [{ label: "Taxable income", value: taxable, format: "currency" }, { label: "Estimated take-home before other deductions", value: Math.max(0, v.principal - tax), format: "currency" }], warnings: ["This simplified estimate excludes surcharge, marginal relief and special-rate income."], methodologyVersion: VERSION };
  } else if (engine === "tds") {
    value = safe(v.principal) * rate / 100; invested = safe(v.principal);
  } else if (engine === "salary") {
    const gross = safe(v.principal); const deductions = safe(v.deductions) + safe(v.monthly) * 12;
    value = Math.max(0, gross - deductions); invested = gross;
  } else if (engine === "brokerage") {
    const turnover = (safe(v.buyPrice) + safe(v.sellPrice)) * safe(v.quantity);
    const brokerage = turnover * safe(v.brokerageRate) / 100;
    const statutory = turnover * safe(v.chargesRate) / 100;
    const pnl = (safe(v.sellPrice) - safe(v.buyPrice)) * safe(v.quantity) - brokerage - statutory;
    return { headline: { label: "Net profit or loss", value: pnl, format: "currency" }, metrics: [{ label: "Turnover", value: turnover, format: "currency" }, { label: "Brokerage", value: brokerage, format: "currency" }, { label: "Estimated statutory charges", value: statutory, format: "currency" }], warnings: ["Exchange, STT, GST, SEBI and stamp-duty rates vary by segment and are editable assumptions here."], methodologyVersion: VERSION };
  } else if (engine === "stock-average") {
    invested = safe(v.price1) * safe(v.qty1) + safe(v.price2) * safe(v.qty2);
    value = invested / Math.max(1, safe(v.qty1) + safe(v.qty2));
    return { headline: { label: "Average purchase price", value, format: "currency" }, metrics: [{ label: "Total quantity", value: safe(v.qty1) + safe(v.qty2), format: "number" }, { label: "Total cost", value: invested, format: "currency" }], warnings, methodologyVersion: VERSION };
  } else if (engine === "apy") {
    invested = safe(v.monthly) * 12 * years; value = safe(v.pension) * 12;
  } else if (engine === "xirr") {
    const gain = safe(v.futureValue) - safe(v.principal);
    value = years > 0 && v.principal > 0 ? ((safe(v.futureValue) / v.principal) ** (1 / years) - 1) * 100 : 0;
    return { headline: { label: "Estimated annualised return", value, format: "percent" }, metrics: [{ label: "Cash invested", value: v.principal, format: "currency" }, { label: "Final value", value: v.futureValue, format: "currency" }, { label: "Gain", value: gain, format: "currency" }], warnings: ["Use a full dated cash-flow model for irregular transactions; this first version models one outflow and one inflow."], methodologyVersion: VERSION };
  }

  const real = realValue(value, inflation, years);
  return { headline: { label: engine === "inflation" ? "Estimated future cost" : engine === "emergency" ? "Emergency fund target" : "Estimated value", value, format: "currency" }, metrics: [{ label: engine === "emergency" ? "Current reserve" : "Amount contributed", value: invested, format: "currency" }, { label: engine === "emergency" ? "Funding gap" : "Estimated growth", value: Math.max(0, value - invested), format: "currency" }, { label: "Today’s purchasing power", value: real, format: "currency" }], nominal: series, warnings, methodologyVersion: VERSION };
}
