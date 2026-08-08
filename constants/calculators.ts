import type {
  CalculatorCategory,
  CalculatorEngineId,
  CalculatorInputDefinition,
  CalculatorPolicyVersion,
} from "@/lib/calculators/types";

export type CalculatorIconName =
  "chart" | "wallet" | "home" | "car" | "landmark" | "calendar" | "shield" | "trend";
export type CalculatorDefinition = {
  slug: string;
  engine: CalculatorEngineId;
  category: CalculatorCategory;
  name: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  icon: CalculatorIconName;
  fields: CalculatorInputDefinition[];
  guidance: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  published: boolean;
  policy?: CalculatorPolicyVersion;
};

const money = (
  key: string,
  label: string,
  value: number,
  max = 100000000,
): CalculatorInputDefinition => ({
  key,
  label,
  min: 0,
  max,
  step: Math.max(100, Math.round(max / 1000)),
  defaultValue: value,
  prefix: "₹",
});
const percent = (
  key: string,
  label: string,
  value: number,
  max = 30,
): CalculatorInputDefinition => ({
  key,
  label,
  min: 0,
  max,
  step: 0.1,
  defaultValue: value,
  suffix: "%",
});
const duration = (value = 10, min = 1, max = 40): CalculatorInputDefinition => ({
  key: "years",
  label: "Time period",
  min,
  max,
  step: 1,
  defaultValue: value,
  suffix: "years",
});
const inflation = percent("inflation", "Inflation assumption", 6, 15);
const loan = (amount: number, years = 20) => [
  money("principal", "Loan amount", amount, 50000000),
  percent("rate", "Annual interest rate", 8.5, 24),
  duration(years, 1, 30),
  percent("emiStepUp", "Annual EMI step-up", 5, 25),
  {
    key: "extraEmis",
    label: "Extra EMIs each year",
    min: 0,
    max: 6,
    step: 1,
    defaultValue: 1,
    suffix: "EMIs",
  },
  money("annualPrepayment", "Annual lump-sum prepayment", 0, 5000000),
  {
    key: "prepaymentStart",
    label: "Prepayment starts in year",
    min: 1,
    max: 20,
    step: 1,
    defaultValue: 2,
    suffix: "year",
  },
];

const primarySources = {
  tax: {
    label: "Income Tax Department - AY 2026-27",
    url: "https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1",
  },
  epf: {
    label: "EPFO contribution rates",
    url: "https://www.epfindia.gov.in/site_docs/PDFs/MiscPDFs/ContributionRate.pdf",
  },
  nps: {
    label: "PFRDA regulatory framework",
    url: "https://pfrda.org.in/en/regulatory-framework/guidelines",
  },
  savings: { label: "National Savings Institute", url: "https://www.nsiindia.gov.in/" },
  gst: {
    label: "Central Board of Indirect Taxes and Customs",
    url: "https://cbic-gst.gov.in/",
  },
};
const policy = (
  ...sources: Array<keyof typeof primarySources>
): CalculatorPolicyVersion => ({
  financialYear: "2026-27",
  effectiveFrom: "2026-04-01",
  reviewedAt: "2026-08-02",
  sources: sources.map((key) => primarySources[key]),
});

const commonFaqs = (name: string, noun: string) => [
  {
    question: `What is a ${name}?`,
    answer: `It is an educational tool that applies the disclosed ${noun} method to the assumptions you enter.`,
  },
  {
    question: "Are the results guaranteed?",
    answer:
      "No. Results are estimates, not forecasts, approvals, quotations or guarantees.",
  },
  {
    question: "Why should I change the assumptions?",
    answer:
      "Testing conservative and optimistic inputs exposes uncertainty instead of hiding it behind one number.",
  },
  {
    question: "Does it include tax and fees?",
    answer:
      "Only when a tax or fee is shown as an explicit input or result. Otherwise it is excluded.",
  },
  {
    question: "How accurate is the calculator?",
    answer:
      "The mathematics follows the stated methodology, while real outcomes depend on rates, timing, rules, fees and circumstances.",
  },
  {
    question: "Can I use this result as financial advice?",
    answer:
      "No. Use it for education and scenario comparison, then verify decisions with official documents or a qualified professional.",
  },
  {
    question: "Why is inflation shown?",
    answer:
      "Inflation translates a future amount into approximate present-day purchasing power. The default 6% is editable and is not a forecast.",
  },
  {
    question: "How often should I recalculate?",
    answer:
      "Recalculate when rates, income, contributions, rules, goals or repayment terms change.",
  },
  {
    question: "Can the result differ from a bank or platform?",
    answer:
      "Yes. Institutions may use different compounding dates, rounding, charges and eligibility rules.",
  },
  {
    question: "Is my data uploaded?",
    answer:
      "No. Calculations run locally in your browser and the input values are not sent to a calculation server.",
  },
];

type Spec = Omit<
  CalculatorDefinition,
  "seoTitle" | "seoDescription" | "keywords" | "guidance" | "faqs" | "published"
> & { noun: string; extraFaqs?: CalculatorDefinition["faqs"] };

const seoTitleOverrides: Record<string, string> = {
  "recurring-deposit-calculator": "Recurring Deposit Calculator 2026 - Free Tool",
  "atal-pension-yojana-calculator": "Atal Pension Yojana Calculator 2026 - Free Tool",
  "personal-loan-emi-calculator": "Personal Loan EMI Calculator 2026 - Free Tool",
  "emergency-fund-calculator": "Emergency Fund Calculator 2026 - Free India Tool",
  "compound-interest-calculator": "Compound Interest Calculator 2026 - Free Tool",
  "salary-calculator": "Take-Home Salary Calculator 2026 - Free India Tool",
  "sukanya-samriddhi-calculator": "Sukanya Samriddhi Calculator 2026 - Free Tool",
  "simple-interest-calculator": "Simple Interest Calculator 2026 - Free Tool",
  "flat-vs-reducing-rate-calculator": "Flat vs Reducing Rate Calculator 2026 - Free Tool",
};

const seoDescriptionOverrides: Record<string, string> = {
  "income-tax-calculator":
    "Income Tax Calculator: Estimate FY 2026-27 new-regime tax and cess with visible simplification warnings. See the formula and assumptions on AiRedHQ.",
  "car-loan-emi-calculator":
    "Car Loan EMI Calculator: Estimate standard repayment and compare it with step-up EMI, extra EMI and annual prepayment strategies. Formula and assumptions shown.",
  "gratuity-calculator":
    "Gratuity Calculator: Estimate gratuity using last drawn eligible salary and completed service. See the formula, assumptions and limitations on AiRedHQ.",
  "epf-calculator":
    "EPF Calculator: Estimate employee and employer provident-fund contributions and illustrative growth. See the formula, assumptions and limitations on AiRedHQ.",
  "xirr-calculator":
    "XIRR Calculator: Estimate an annualised return for an initial outflow and later value. See the formula, assumptions and limitations on AiRedHQ.",
  "stock-average-calculator":
    "Stock Average Calculator: Calculate the weighted average price after buying a stock at two prices. See the formula, assumptions and limitations on AiRedHQ.",
  "brokerage-calculator":
    "Brokerage Calculator: Estimate trading turnover, brokerage, statutory charges and net profit or loss. See the formula, assumptions and limitations on AiRedHQ.",
  "recurring-deposit-calculator":
    "Recurring Deposit Calculator: Estimate recurring-deposit contributions, interest and maturity. See the formula, assumptions and limitations on AiRedHQ.",
  "retirement-calculator":
    "Retirement Calculator: Estimate future monthly expenses and a conservative retirement corpus. See the formula, assumptions and limitations on AiRedHQ.",
  "atal-pension-yojana-calculator":
    "Atal Pension Yojana Calculator: Illustrate contributions and selected guaranteed-pension tier without implying eligibility. Formula and assumptions shown.",
  "personal-loan-emi-calculator":
    "Personal Loan EMI Calculator: Estimate standard repayment and compare it with step-up EMI, extra EMI and annual prepayment strategies. Free on AiRedHQ.",
  "roi-calculator":
    "ROI Calculator: Measure absolute gain and annualised compound growth on an investment. See the formula, assumptions and limitations on AiRedHQ.",
  "scss-calculator":
    "SCSS Calculator: Estimate Senior Citizens’ Savings Scheme interest and maturity under current assumptions. See the formula and assumptions on AiRedHQ.",
  "emergency-fund-calculator":
    "Emergency Fund Calculator: Calculate a liquid savings target and remaining funding gap. See the formula, assumptions and limitations on AiRedHQ.",
  "nsc-calculator":
    "NSC Calculator: Estimate National Savings Certificate maturity under an editable notified-rate assumption. See the formula and assumptions on AiRedHQ.",
  "compound-interest-calculator":
    "Compound Interest Calculator: See how interest-on-interest changes future value and real purchasing power. See the formula and assumptions on AiRedHQ.",
  "lumpsum-calculator":
    "Lump Sum Calculator: Project a one-time investment with nominal and inflation-adjusted outcomes. See the formula, assumptions and limitations on AiRedHQ.",
  "nps-calculator":
    "NPS Calculator: Project retirement contributions and an illustrative NPS corpus in nominal and real terms. See the formula and assumptions on AiRedHQ.",
  "salary-calculator":
    "Take-Home Salary Calculator: Estimate annual and monthly take-home after entered payroll deductions. See the formula, assumptions and limitations on AiRedHQ.",
  "inflation-calculator":
    "Inflation Calculator: Estimate future cost and the erosion of purchasing power. See the formula, assumptions and limitations on AiRedHQ.",
  "gst-calculator":
    "GST Calculator: Calculate GST-exclusive and GST-inclusive invoice values. See the formula, assumptions and limitations on AiRedHQ.",
  "sukanya-samriddhi-calculator":
    "Sukanya Samriddhi Calculator: Illustrate eligible annual contributions and maturity under editable scheme assumptions. Formula and assumptions shown.",
  "fixed-deposit-calculator":
    "Fixed Deposit Calculator: Estimate quarterly compounded fixed-deposit maturity, gain and real value. See the formula, assumptions and limitations on AiRedHQ.",
  "sip-calculator":
    "SIP Calculator: Estimate regular and annual step-up SIP contributions, nominal growth and today’s purchasing power. See the formula and assumptions on AiRedHQ.",
  "tds-calculator":
    "TDS Calculator: Estimate tax deducted at source using an editable section rate. See the formula, assumptions and limitations on AiRedHQ.",
  "swp-calculator":
    "SWP Calculator: Model systematic withdrawals, annual withdrawal increases and estimated corpus sustainability. See the formula and assumptions on AiRedHQ.",
  "home-loan-emi-calculator":
    "Home Loan EMI Calculator: Estimate standard repayment and compare it with step-up EMI, extra EMI and annual prepayment strategies. Free on AiRedHQ.",
  "simple-interest-calculator":
    "Simple Interest Calculator: Calculate interest that accrues only on the original principal. See the formula, assumptions and limitations on AiRedHQ.",
  "flat-vs-reducing-rate-calculator":
    "Flat vs Reducing Rate Calculator: Compare a quoted flat-rate loan with a reducing-balance loan on total cost. See the formula and assumptions on AiRedHQ.",
  "ppf-calculator":
    "PPF Calculator: Illustrate annual PPF contributions, notified-rate assumptions and real maturity value. See the formula, assumptions and limitations on AiRedHQ.",
  "emi-calculator":
    "EMI Calculator: Estimate standard repayment and compare it with step-up EMI, extra EMI and annual prepayment strategies. Formula and assumptions shown.",
};

const define = (s: Spec): CalculatorDefinition => ({
  ...s,
  seoTitle: seoTitleOverrides[s.slug] ?? `${s.name} 2026 - Free Online India Calculator`,
  seoDescription:
    seoDescriptionOverrides[s.slug] ??
    `${s.name}: ${s.description} See the formula and assumptions on AiRedHQ.`,
  keywords: [
    s.name.toLowerCase(),
    `${s.shortName.toLowerCase()} calculator India`,
    `free ${s.shortName.toLowerCase()} calculator 2026`,
  ],
  guidance: [
    {
      title: "Transparent assumptions",
      body: `Every input used in this ${s.noun} estimate is visible and editable.`,
    },
    {
      title: "Interpret the result",
      body: "Compare scenarios and read the limitations before using the estimate in a decision.",
    },
  ],
  faqs: [...(s.extraFaqs ?? []), ...commonFaqs(s.name, s.noun)].slice(0, 15),
  published: true,
});

export const calculators: CalculatorDefinition[] = [
  define({
    slug: "sip-calculator",
    engine: "sip",
    category: "investing",
    name: "SIP Calculator",
    shortName: "SIP",
    description:
      "Estimate regular and annual step-up SIP contributions, nominal growth and today’s purchasing power.",
    icon: "chart",
    noun: "monthly compounding",
    fields: [
      money("monthly", "Monthly investment", 10000, 1000000),
      percent("stepUp", "Annual SIP step-up", 10, 30),
      percent("rate", "Expected annual return", 12),
      duration(),
      inflation,
    ],
    extraFaqs: [
      {
        question: "Are SIPs and mutual funds the same?",
        answer:
          "No. A mutual fund is an investment vehicle; SIP is a periodic contribution method.",
      },
    ],
  }),
  define({
    slug: "lumpsum-calculator",
    engine: "lumpsum",
    category: "investing",
    name: "Lump Sum Calculator",
    shortName: "Lump sum",
    description:
      "Project a one-time investment with nominal and inflation-adjusted outcomes.",
    icon: "wallet",
    noun: "compound growth",
    fields: [
      money("principal", "Investment amount", 500000),
      percent("rate", "Expected annual return", 12),
      duration(),
      inflation,
    ],
  }),
  define({
    slug: "swp-calculator",
    engine: "swp",
    category: "investing",
    name: "SWP Calculator",
    shortName: "SWP",
    description:
      "Model systematic withdrawals, annual withdrawal increases and estimated corpus sustainability.",
    icon: "calendar",
    noun: "systematic withdrawal",
    fields: [
      money("principal", "Starting corpus", 5000000),
      money("monthly", "Monthly withdrawal", 20000, 500000),
      percent("stepUp", "Annual withdrawal increase", 5, 20),
      percent("rate", "Expected annual return", 9),
      duration(20, 1, 40),
      inflation,
    ],
  }),
  define({
    slug: "roi-calculator",
    engine: "roi",
    category: "investing",
    name: "ROI Calculator",
    shortName: "ROI",
    description: "Measure absolute gain and annualised compound growth on an investment.",
    icon: "trend",
    noun: "return on investment",
    fields: [
      money("principal", "Initial investment", 500000),
      percent("rate", "Annual return assumption", 12),
      duration(5),
      inflation,
    ],
  }),
  define({
    slug: "simple-interest-calculator",
    engine: "simple-interest",
    category: "investing",
    name: "Simple Interest Calculator",
    shortName: "Simple interest",
    description: "Calculate interest that accrues only on the original principal.",
    icon: "chart",
    noun: "simple interest",
    fields: [
      money("principal", "Principal", 100000),
      percent("rate", "Annual interest rate", 8),
      duration(5),
      inflation,
    ],
  }),
  define({
    slug: "compound-interest-calculator",
    engine: "compound-interest",
    category: "investing",
    name: "Compound Interest Calculator",
    shortName: "Compound interest",
    description:
      "See how interest-on-interest changes future value and real purchasing power.",
    icon: "trend",
    noun: "compound interest",
    fields: [
      money("principal", "Principal", 100000),
      percent("rate", "Annual interest rate", 10),
      duration(),
      inflation,
    ],
  }),
  define({
    slug: "fixed-deposit-calculator",
    engine: "fd",
    category: "investing",
    name: "Fixed Deposit Calculator",
    shortName: "FD",
    description:
      "Estimate quarterly compounded fixed-deposit maturity, gain and real value.",
    icon: "landmark",
    noun: "fixed deposit",
    fields: [
      money("principal", "Deposit amount", 500000),
      percent("rate", "Annual interest rate", 7, 12),
      duration(5),
      inflation,
    ],
  }),
  define({
    slug: "recurring-deposit-calculator",
    engine: "rd",
    category: "investing",
    name: "Recurring Deposit Calculator",
    shortName: "RD",
    description: "Estimate recurring-deposit contributions, interest and maturity.",
    icon: "calendar",
    noun: "recurring deposit",
    fields: [
      money("monthly", "Monthly deposit", 10000, 1000000),
      percent("rate", "Annual interest rate", 7, 12),
      duration(5),
      inflation,
    ],
  }),
  define({
    slug: "stock-average-calculator",
    engine: "stock-average",
    category: "markets",
    name: "Stock Average Calculator",
    shortName: "Stock average",
    description:
      "Calculate the weighted average price after buying a stock at two prices.",
    icon: "chart",
    noun: "weighted average",
    fields: [
      money("price1", "First purchase price", 500, 100000),
      {
        key: "qty1",
        label: "First quantity",
        min: 1,
        max: 100000,
        step: 1,
        defaultValue: 100,
      },
      money("price2", "Second purchase price", 400, 100000),
      {
        key: "qty2",
        label: "Second quantity",
        min: 1,
        max: 100000,
        step: 1,
        defaultValue: 50,
      },
    ],
  }),
  define({
    slug: "xirr-calculator",
    engine: "xirr",
    category: "markets",
    name: "XIRR Calculator",
    shortName: "XIRR",
    description: "Estimate an annualised return for an initial outflow and later value.",
    icon: "trend",
    noun: "annualised cash-flow return",
    fields: [
      money("principal", "Initial cash outflow", 500000),
      money("futureValue", "Final cash value", 850000),
      duration(5),
    ],
  }),
  define({
    slug: "inflation-calculator",
    engine: "inflation",
    category: "planning",
    name: "Inflation Calculator",
    shortName: "Inflation",
    description: "Estimate future cost and the erosion of purchasing power.",
    icon: "trend",
    noun: "inflation compounding",
    fields: [
      money("principal", "Current cost", 1000000),
      percent("rate", "Inflation assumption", 6, 15),
      duration(),
    ],
  }),
  ...[
    ["emi-calculator", "EMI Calculator", "Generic EMI", "wallet", 1000000],
    [
      "home-loan-emi-calculator",
      "Home Loan EMI Calculator",
      "Home loan EMI",
      "home",
      5000000,
    ],
    [
      "car-loan-emi-calculator",
      "Car Loan EMI Calculator",
      "Car loan EMI",
      "car",
      1000000,
    ],
    [
      "personal-loan-emi-calculator",
      "Personal Loan EMI Calculator",
      "Personal loan EMI",
      "wallet",
      500000,
    ],
  ].map(([slug, name, shortName, icon, amount]) =>
    define({
      slug: slug as string,
      engine: "emi",
      category: "loans",
      name: name as string,
      shortName: shortName as string,
      description: `Estimate standard repayment and compare it with step-up EMI, extra EMI and annual prepayment strategies.`,
      icon: icon as CalculatorIconName,
      noun: "reducing-balance loan",
      fields: loan(amount as number, slug === "home-loan-emi-calculator" ? 20 : 5),
    }),
  ),
  define({
    slug: "flat-vs-reducing-rate-calculator",
    engine: "flat-rate",
    category: "loans",
    name: "Flat vs Reducing Rate Calculator",
    shortName: "Flat vs reducing",
    description:
      "Compare a quoted flat-rate loan with a reducing-balance loan on total cost.",
    icon: "chart",
    noun: "loan-rate comparison",
    fields: loan(500000, 5).slice(0, 3),
  }),
  define({
    slug: "retirement-calculator",
    engine: "retirement",
    category: "planning",
    name: "Retirement Calculator",
    shortName: "Retirement",
    description: "Estimate future monthly expenses and a conservative retirement corpus.",
    icon: "shield",
    noun: "retirement planning",
    fields: [
      money("monthly", "Current monthly expenses", 60000, 2000000),
      duration(25, 1, 45),
      inflation,
      {
        key: "retirementYears",
        label: "Years in retirement",
        min: 5,
        max: 45,
        step: 1,
        defaultValue: 25,
        suffix: "years",
      },
    ],
  }),
  define({
    slug: "emergency-fund-calculator",
    engine: "emergency",
    category: "planning",
    name: "Emergency Fund Calculator",
    shortName: "Emergency fund",
    description: "Calculate a liquid savings target and remaining funding gap.",
    icon: "shield",
    noun: "emergency planning",
    fields: [
      money("monthly", "Essential monthly expenses", 50000, 2000000),
      {
        key: "months",
        label: "Months of cover",
        min: 1,
        max: 24,
        step: 1,
        defaultValue: 6,
        suffix: "months",
      },
      money("current", "Current reserve", 100000, 10000000),
    ],
  }),
  define({
    slug: "sukanya-samriddhi-calculator",
    engine: "ssy",
    category: "government",
    name: "Sukanya Samriddhi Calculator",
    shortName: "SSY",
    description:
      "Illustrate eligible annual contributions and maturity under editable scheme assumptions.",
    icon: "shield",
    noun: "SSY projection",
    fields: [
      money("annual", "Annual contribution", 150000, 150000),
      percent("rate", "Current rate assumption", 8.2, 12),
      duration(21, 21, 21),
      inflation,
    ],
    policy: policy("savings"),
  }),
  define({
    slug: "ppf-calculator",
    engine: "ppf",
    category: "government",
    name: "PPF Calculator",
    shortName: "PPF",
    description:
      "Illustrate annual PPF contributions, notified-rate assumptions and real maturity value.",
    icon: "shield",
    noun: "PPF projection",
    fields: [
      money("annual", "Annual contribution", 150000, 150000),
      percent("rate", "Current rate assumption", 7.1, 12),
      duration(15, 15, 40),
      inflation,
    ],
    policy: policy("savings"),
  }),
  define({
    slug: "epf-calculator",
    engine: "epf",
    category: "government",
    name: "EPF Calculator",
    shortName: "EPF",
    description:
      "Estimate employee and employer provident-fund contributions and illustrative growth.",
    icon: "landmark",
    noun: "EPF contribution",
    fields: [
      money("monthly", "Monthly EPF contribution wage", 40000, 500000),
      percent("employeeRate", "Employee contribution", 12, 20),
      percent("employerRate", "Employer contribution", 12, 20),
      percent("rate", "Interest assumption", 8.25, 12),
      duration(20),
      inflation,
    ],
    policy: policy("epf"),
  }),
  define({
    slug: "nps-calculator",
    engine: "nps",
    category: "government",
    name: "NPS Calculator",
    shortName: "NPS",
    description:
      "Project retirement contributions and an illustrative NPS corpus in nominal and real terms.",
    icon: "shield",
    noun: "NPS projection",
    fields: [
      money("monthly", "Monthly contribution", 10000, 1000000),
      percent("rate", "Expected annual return", 10, 20),
      duration(25),
      inflation,
    ],
    policy: policy("nps"),
  }),
  define({
    slug: "nsc-calculator",
    engine: "nsc",
    category: "government",
    name: "NSC Calculator",
    shortName: "NSC",
    description:
      "Estimate National Savings Certificate maturity under an editable notified-rate assumption.",
    icon: "landmark",
    noun: "NSC compounding",
    fields: [
      money("principal", "Investment amount", 500000),
      percent("rate", "Current rate assumption", 7.7, 12),
      duration(5, 5, 5),
      inflation,
    ],
    policy: policy("savings"),
  }),
  define({
    slug: "atal-pension-yojana-calculator",
    engine: "apy",
    category: "government",
    name: "Atal Pension Yojana Calculator",
    shortName: "APY",
    description:
      "Illustrate contributions and selected guaranteed-pension tier without implying eligibility.",
    icon: "shield",
    noun: "APY illustration",
    fields: [
      money("monthly", "Illustrative monthly contribution", 500, 20000),
      money("pension", "Selected monthly pension", 5000, 5000),
      duration(25, 1, 42),
    ],
    policy: policy("nps"),
  }),
  define({
    slug: "scss-calculator",
    engine: "scss",
    category: "government",
    name: "SCSS Calculator",
    shortName: "SCSS",
    description:
      "Estimate Senior Citizens’ Savings Scheme interest and maturity under current assumptions.",
    icon: "landmark",
    noun: "SCSS projection",
    fields: [
      money("annual", "Annualised deposit allocation", 500000, 3000000),
      percent("rate", "Current rate assumption", 8.2, 12),
      duration(5, 5, 8),
      inflation,
    ],
    policy: policy("savings"),
  }),
  define({
    slug: "gratuity-calculator",
    engine: "gratuity",
    category: "government",
    name: "Gratuity Calculator",
    shortName: "Gratuity",
    description:
      "Estimate gratuity using last drawn eligible salary and completed service.",
    icon: "wallet",
    noun: "gratuity formula",
    fields: [
      money("monthly", "Eligible monthly salary", 50000, 2000000),
      duration(10, 5, 40),
    ],
    policy: policy("tax"),
  }),
  define({
    slug: "income-tax-calculator",
    engine: "income-tax",
    category: "tax",
    name: "Income Tax Calculator",
    shortName: "Income tax",
    description:
      "Estimate FY 2026-27 new-regime tax and cess with visible simplification warnings.",
    icon: "landmark",
    noun: "income-tax slabs",
    fields: [
      money("principal", "Annual gross income", 1500000, 100000000),
      money("deductions", "Eligible deductions used here", 75000, 5000000),
    ],
    policy: policy("tax"),
  }),
  define({
    slug: "gst-calculator",
    engine: "gst",
    category: "tax",
    name: "GST Calculator",
    shortName: "GST",
    description: "Calculate GST-exclusive and GST-inclusive invoice values.",
    icon: "chart",
    noun: "GST arithmetic",
    fields: [
      money("principal", "Amount", 100000),
      percent("rate", "GST rate", 18, 28),
      {
        key: "inclusive",
        label: "Amount includes GST (1 = yes)",
        min: 0,
        max: 1,
        step: 1,
        defaultValue: 0,
      },
    ],
    policy: policy("gst"),
  }),
  define({
    slug: "tds-calculator",
    engine: "tds",
    category: "tax",
    name: "TDS Calculator",
    shortName: "TDS",
    description: "Estimate tax deducted at source using an editable section rate.",
    icon: "landmark",
    noun: "TDS estimate",
    fields: [
      money("principal", "Payment amount", 500000),
      percent("rate", "Applicable TDS rate", 10, 30),
    ],
    policy: policy("tax"),
  }),
  define({
    slug: "salary-calculator",
    engine: "salary",
    category: "tax",
    name: "Take-Home Salary Calculator",
    shortName: "Salary",
    description:
      "Estimate annual and monthly take-home after entered payroll deductions.",
    icon: "wallet",
    noun: "salary breakdown",
    fields: [
      money("principal", "Annual gross salary", 1500000, 100000000),
      money("deductions", "Annual tax and other deductions", 200000, 20000000),
      money("monthly", "Monthly employee deductions", 5000, 200000),
    ],
    policy: policy("tax", "epf"),
  }),
  define({
    slug: "brokerage-calculator",
    engine: "brokerage",
    category: "markets",
    name: "Brokerage Calculator",
    shortName: "Brokerage",
    description:
      "Estimate trading turnover, brokerage, statutory charges and net profit or loss.",
    icon: "chart",
    noun: "trading-cost estimate",
    fields: [
      money("buyPrice", "Buy price", 1000, 1000000),
      money("sellPrice", "Sell price", 1100, 1000000),
      {
        key: "quantity",
        label: "Quantity",
        min: 1,
        max: 1000000,
        step: 1,
        defaultValue: 100,
      },
      percent("brokerageRate", "Brokerage on turnover", 0.03, 1),
      percent("chargesRate", "Combined statutory-charge assumption", 0.12, 2),
    ],
  }),
];

export const getCalculator = (slug: string) =>
  calculators.find((calculator) => calculator.slug === slug && calculator.published);
