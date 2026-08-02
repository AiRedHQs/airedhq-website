import { describe, expect, it } from "vitest";
import { calculate } from "./engines";
import { calculators } from "../../constants/calculators";

describe("calculator registry", () => {
  it("publishes exactly 31 unique calculators", () => {
    expect(calculators).toHaveLength(31);
    expect(new Set(calculators.map(({ slug }) => slug)).size).toBe(31);
    expect(calculators.every(({ published }) => published)).toBe(true);
  });
  it("provides substantial FAQs and unique metadata", () => {
    expect(calculators.every(({ faqs }) => faqs.length >= 10)).toBe(true);
    expect(new Set(calculators.map(({ seoTitle }) => seoTitle)).size).toBe(31);
    expect(new Set(calculators.map(({ seoDescription }) => seoDescription)).size).toBe(31);
  });
  it("calculates every published default scenario without NaN", () => {
    for (const definition of calculators) {
      const values = Object.fromEntries(definition.fields.map((field) => [field.key, field.defaultValue]));
      const result = calculate(definition.engine, values);
      expect(Number.isFinite(result.headline.value), definition.slug).toBe(true);
      expect(result.metrics.every((metric) => Number.isFinite(metric.value)), definition.slug).toBe(true);
    }
  });
  it("uses every declared input in its calculator result", () => {
    for (const definition of calculators) {
      const defaults = Object.fromEntries(definition.fields.map((field) => [field.key, field.defaultValue]));
      for (const field of definition.fields) {
        const contextualDefaults = field.key === "prepaymentStart" ? { ...defaults, annualPrepayment: 100000 } : defaults;
        const contextualBaseline = JSON.stringify(calculate(definition.engine, contextualDefaults));
        const candidate = field.defaultValue === field.min ? Math.min(field.max, field.defaultValue + field.step) : field.min;
        if (candidate === field.defaultValue) continue;
        const changed = JSON.stringify(calculate(definition.engine, { ...contextualDefaults, [field.key]: candidate }));
        expect(changed, `${definition.slug}:${field.key}`).not.toBe(contextualBaseline);
      }
    }
  });
});

describe("financial engines", () => {
  it("uses effective monthly conversion for SIP", () => {
    const result = calculate("sip", { monthly: 1000, stepUp: 0, rate: 12, years: 1, inflation: 6 });
    expect(result.headline.value).toBeCloseTo(12766, -1);
    expect(result.metrics[0].value).toBe(12000);
  });
  it("reduces purchasing power under inflation", () => {
    const result = calculate("lumpsum", { principal: 100000, rate: 10, years: 10, inflation: 6 });
    expect(result.metrics[2].value).toBeLessThan(result.headline.value);
  });
  it("reconciles a standard EMI and rewards prepayment", () => {
    const result = calculate("emi", { principal: 5000000, rate: 8.5, years: 20, emiStepUp: 5, extraEmis: 1, annualPrepayment: 100000, prepaymentStart: 2 });
    expect(result.headline.value).toBeCloseTo(43391, -1);
    expect(result.metrics.find(({ label }) => label === "Interest saved")!.value).toBeGreaterThan(0);
    expect(result.schedule!.at(-1)!.balance).toBe(0);
  });
  it("shows flat-rate borrowing as costlier in the sample", () => {
    const result = calculate("flat-rate", { principal: 500000, rate: 12, years: 5, extraEmis: 0, annualPrepayment: 0, prepaymentStart: 1, emiStepUp: 0 });
    expect(result.comparison![0].value).toBeGreaterThan(result.comparison![1].value);
  });
  it("applies the AY 2026-27 rebate through 12 lakh", () => {
    expect(calculate("income-tax", { principal: 1200000, deductions: 0 }).headline.value).toBe(0);
    expect(calculate("income-tax", { principal: 1500000, deductions: 75000 }).headline.value).toBeGreaterThan(0);
  });
  it("calculates stock weighted average", () => {
    expect(calculate("stock-average", { price1: 500, qty1: 100, price2: 400, qty2: 50 }).headline.value).toBeCloseTo(466.67, 2);
  });
  it("deducts brokerage and statutory assumptions from P&L", () => {
    const result = calculate("brokerage", { buyPrice: 100, sellPrice: 110, quantity: 100, brokerageRate: .03, chargesRate: .12 });
    expect(result.headline.value).toBeLessThan(1000);
  });
});
