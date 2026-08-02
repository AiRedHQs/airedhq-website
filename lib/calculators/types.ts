export type CalculatorCategory = "investing" | "loans" | "planning" | "government" | "tax" | "markets";

export type CalculatorEngineId =
  | "sip" | "lumpsum" | "swp" | "roi" | "simple-interest" | "compound-interest"
  | "fd" | "rd" | "ppf" | "inflation" | "stock-average" | "xirr"
  | "emi" | "flat-rate" | "retirement" | "emergency" | "ssy" | "epf" | "nps"
  | "nsc" | "apy" | "scss" | "gratuity" | "income-tax" | "gst" | "tds"
  | "salary" | "brokerage";

export type CalculatorInputDefinition = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  prefix?: string;
  suffix?: string;
  help?: string;
};

export type ResultMetric = { label: string; value: number; format?: "currency" | "percent" | "number" | "months" };
export type ProjectionPoint = { label: string; nominal: number; real?: number };
export type ScheduleRow = { period: number; payment: number; principal: number; interest: number; balance: number };
export type ComparisonScenario = { label: string; value: number; detail?: string };

export type CalculatorResult = {
  headline: ResultMetric;
  metrics: ResultMetric[];
  nominal?: ProjectionPoint[];
  inflationAdjusted?: ProjectionPoint[];
  schedule?: ScheduleRow[];
  comparison?: ComparisonScenario[];
  warnings: string[];
  methodologyVersion: string;
};

export type OfficialSource = { label: string; url: string };
export type CalculatorPolicyVersion = {
  financialYear: "2026-27";
  effectiveFrom: string;
  reviewedAt: string;
  sources: OfficialSource[];
};
