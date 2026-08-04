"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

type Option = {
  label: string;
  score: number;
};

type Question = {
  id: number;
  step: number;
  title: string;
  question: string;
  helper?: string;
  options: Option[];
};

type RiskProfile = {
  name: "Conservative" | "Moderate" | "Aggressive";
  description: string;
  allocation: {
    equity: number;
    debt: number;
    gold: number;
  };
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    step: 1,
    title: "Financial Readiness",
    question: "What is your age?",
    options: [
      { label: "Below 30 years", score: 4 },
      { label: "30–40 years", score: 3 },
      { label: "41–50 years", score: 2 },
      { label: "51–60 years", score: 1 },
      { label: "Above 60 years", score: 0 },
    ],
  },
  {
    id: 2,
    step: 1,
    title: "Financial Readiness",
    question: "What is your monthly income?",
    options: [
      { label: "Below ₹25,000", score: 1 },
      { label: "₹25,000–₹50,000", score: 2 },
      { label: "₹50,000–₹1,00,000", score: 3 },
      { label: "Above ₹1,00,000", score: 4 },
    ],
  },
  {
    id: 3,
    step: 1,
    title: "Financial Readiness",
    question: "How many months of emergency fund do you currently have?",
    helper: "A common planning benchmark is at least six months of essential expenses.",
    options: [
      { label: "No emergency fund", score: 0 },
      { label: "Less than 3 months", score: 1 },
      { label: "3–6 months", score: 2 },
      { label: "More than 6 months", score: 3 },
    ],
  },
  {
    id: 4,
    step: 1,
    title: "Financial Readiness",
    question: "Do you currently have health insurance?",
    options: [
      { label: "Yes", score: 2 },
      { label: "No", score: 0 },
    ],
  },
  {
    id: 5,
    step: 1,
    title: "Financial Readiness",
    question: "Do you currently have adequate term insurance?",
    helper: "Choose “Not applicable” if nobody is financially dependent on your income.",
    options: [
      { label: "Yes", score: 2 },
      { label: "No", score: 0 },
      { label: "Not applicable", score: 2 },
    ],
  },
  {
    id: 6,
    step: 2,
    title: "Investment Experience",
    question: "How long do you plan to stay invested?",
    options: [
      { label: "Less than 3 years", score: 1 },
      { label: "3–5 years", score: 2 },
      { label: "5–10 years", score: 3 },
      { label: "More than 10 years", score: 4 },
    ],
  },
  {
    id: 7,
    step: 2,
    title: "Investment Experience",
    question: "How much investing experience do you have?",
    options: [
      { label: "Never invested", score: 1 },
      { label: "Less than 2 years", score: 2 },
      { label: "2–5 years", score: 3 },
      { label: "More than 5 years", score: 4 },
    ],
  },
  {
    id: 8,
    step: 2,
    title: "Investment Experience",
    question: "Which investments have you used before?",
    options: [
      { label: "Only savings accounts or fixed deposits", score: 1 },
      { label: "Debt funds, bonds, or gold", score: 2 },
      { label: "Diversified equity mutual funds", score: 3 },
      { label: "Stocks, equity funds, and market-linked products", score: 4 },
    ],
  },
  {
    id: 9,
    step: 2,
    title: "Investment Experience",
    question: "How confident are you in understanding market risk?",
    options: [
      { label: "Not confident", score: 1 },
      { label: "Slightly confident", score: 2 },
      { label: "Confident", score: 3 },
      { label: "Very confident", score: 4 },
    ],
  },
  {
    id: 10,
    step: 3,
    title: "Risk Behaviour",
    question: "How would you react if your portfolio fell by 10% in one month?",
    options: [
      { label: "Sell everything immediately", score: 0 },
      { label: "Sell part of the investment", score: 1 },
      { label: "Hold and wait", score: 3 },
      { label: "Invest more at lower prices", score: 4 },
    ],
  },
  {
    id: 11,
    step: 3,
    title: "Risk Behaviour",
    question: "Which outcome would make you most comfortable?",
    options: [
      { label: "Low return with very little fluctuation", score: 1 },
      { label: "Moderate return with limited fluctuation", score: 2 },
      { label: "Higher return with meaningful fluctuation", score: 3 },
      { label: "Maximum long-term growth despite large fluctuations", score: 4 },
    ],
  },
  {
    id: 12,
    step: 3,
    title: "Risk Behaviour",
    question: "What temporary loss could you tolerate without changing your plan?",
    options: [
      { label: "Less than 5%", score: 1 },
      { label: "5–10%", score: 2 },
      { label: "10–20%", score: 3 },
      { label: "More than 20%", score: 4 },
    ],
  },
  {
    id: 13,
    step: 3,
    title: "Risk Behaviour",
    question: "How do you usually make investment decisions?",
    options: [
      { label: "I avoid decisions involving uncertainty", score: 1 },
      { label: "I prefer stability over growth", score: 2 },
      { label: "I balance risk and long-term growth", score: 3 },
      { label: "I accept high risk for higher growth potential", score: 4 },
    ],
  },
  {
    id: 14,
    step: 4,
    title: "Goals & Liquidity",
    question: "How likely are you to need this invested money unexpectedly?",
    options: [
      { label: "Very likely", score: 1 },
      { label: "Somewhat likely", score: 2 },
      { label: "Unlikely", score: 3 },
      { label: "Very unlikely", score: 4 },
    ],
  },
  {
    id: 15,
    step: 4,
    title: "Goals & Liquidity",
    question: "What is your primary investment objective?",
    options: [
      { label: "Protect my capital", score: 1 },
      { label: "Generate stable income", score: 2 },
      { label: "Balance growth and stability", score: 3 },
      { label: "Maximise long-term wealth creation", score: 4 },
    ],
  },
];

// Emergency-fund and insurance answers are assessed separately in the
// Financial Foundation Check. They must not directly change risk tolerance.
const PROFILE_QUESTION_INDEXES = QUESTIONS.map((_, index) => index).filter(
  (index) => ![2, 3, 4].includes(index)
);

function getProfile(score: number): RiskProfile {
  if (score < 40) {
    return {
      name: "Conservative",
      description:
        "You appear to prioritise capital stability and lower volatility over maximum long-term growth.",
      allocation: {
        equity: 25,
        debt: 65,
        gold: 10,
      },
    };
  }

  if (score < 70) {
    return {
      name: "Moderate",
      description:
        "You appear comfortable balancing long-term growth with a meaningful allocation to more stable assets.",
      allocation: {
        equity: 55,
        debt: 35,
        gold: 10,
      },
    };
  }

  return {
    name: "Aggressive",
    description:
      "You appear willing and able to accept higher short-term volatility in pursuit of long-term capital growth.",
    allocation: {
      equity: 75,
      debt: 15,
      gold: 10,
    },
  };
}


type AssetKey = "equity" | "debt" | "gold";

type AssetProjection = {
  key: AssetKey;
  label: string;
  allocation: number;
  monthlyAmount: number;
  annualReturn: number;
  years: number;
  investedAmount: number;
  estimatedValue: number;
  estimatedGrowth: number;
  color: string;
  textClass: string;
  barClass: string;
};

type FoundationItem = {
  label: string;
  value: string;
  status: "ready" | "attention" | "critical" | "neutral";
  message: string;
};

type PriorityAction = {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Complete";
};

const RETURN_ASSUMPTIONS: Record<AssetKey, number> = {
  equity: 10,
  debt: 6.5,
  gold: 6,
};

const DEFAULT_DURATIONS: Record<AssetKey, number> = {
  equity: 15,
  debt: 10,
  gold: 10,
};

const ASSET_META: Array<{
  key: AssetKey;
  label: string;
  color: string;
  textClass: string;
  barClass: string;
}> = [
  {
    key: "equity",
    label: "Equity",
    color: "#a3e635",
    textClass: "text-lime-400",
    barClass: "bg-lime-400",
  },
  {
    key: "debt",
    label: "Debt",
    color: "#38bdf8",
    textClass: "text-sky-400",
    barClass: "bg-sky-400",
  },
  {
    key: "gold",
    label: "Gold",
    color: "#facc15",
    textClass: "text-yellow-400",
    barClass: "bg-yellow-400",
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatPdfCurrency(value: number) {
  return `INR ${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value))}`;
}

function formatCompactCurrency(value: number) {
  const absoluteValue = Math.abs(value);

  if (absoluteValue >= 10_000_000) {
    return `₹${(value / 10_000_000).toFixed(1)} Cr`;
  }

  if (absoluteValue >= 100_000) {
    return `₹${(value / 100_000).toFixed(1)} L`;
  }

  if (absoluteValue >= 1_000) {
    return `₹${(value / 1_000).toFixed(0)}K`;
  }

  return `₹${Math.round(value)}`;
}

function calculateSipFutureValue(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
) {
  const months = Math.max(0, Math.round(years * 12));
  const monthlyRate = annualReturn / 12 / 100;

  if (months === 0 || monthlyInvestment <= 0) return 0;
  if (monthlyRate === 0) return monthlyInvestment * months;

  // Annuity-due assumption: contribution is made at the beginning of each month.
  return (
    monthlyInvestment *
    (((1 + monthlyRate) ** months - 1) / monthlyRate) *
    (1 + monthlyRate)
  );
}

function buildYearlySeries(
  monthlyInvestment: number,
  annualReturn: number,
  years: number
) {
  return Array.from({ length: years + 1 }, (_, year) => ({
    year,
    value:
      year === 0
        ? 0
        : calculateSipFutureValue(monthlyInvestment, annualReturn, year),
  }));
}

function AllocationDonut({
  equity,
  debt,
  gold,
}: {
  equity: number;
  debt: number;
  gold: number;
}) {
  const debtEnd = equity + debt;

  return (
    <div
      className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#a3e635 0 ${equity}%, #38bdf8 ${equity}% ${debtEnd}%, #facc15 ${debtEnd}% 100%)`,
      }}
      aria-label={`Asset allocation: ${equity}% equity, ${debt}% debt and ${gold}% gold`}
    >
      <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] shadow-2xl">
        <span className="text-sm uppercase tracking-[0.18em] text-white/45">
          Allocation
        </span>
        <span className="mt-2 text-3xl font-bold">100%</span>
        <span className="mt-1 text-xs text-white/45">Profile mix</span>
      </div>
    </div>
  );
}

function ProjectionChart({ projections }: { projections: AssetProjection[] }) {
  const width = 760;
  const height = 300;
  const padding = { top: 22, right: 24, bottom: 42, left: 76 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxYears = Math.max(...projections.map((item) => item.years), 1);

  const series = projections.map((item) => ({
    ...item,
    points: buildYearlySeries(
      item.monthlyAmount,
      item.annualReturn,
      item.years
    ),
  }));

  const maxValue = Math.max(
    ...series.flatMap((item) => item.points.map((point) => point.value)),
    1
  );

  function x(year: number) {
    return padding.left + (year / maxYears) * chartWidth;
  }

  function y(value: number) {
    return padding.top + chartHeight - (value / maxValue) * chartHeight;
  }

  const yTicks = [0, 0.25, 0.5, 0.75, 1];
  const xTicks = Array.from(
    new Set([0, Math.round(maxYears / 2), maxYears])
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="font-semibold">Projected growth by category</h4>
          <p className="mt-1 text-sm text-white/45">
            Each line ends at that category&apos;s selected duration.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-white/60">
          {series.map((item) => (
            <span key={item.key} className="inline-flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-auto min-w-[620px] w-full"
          role="img"
          aria-label="Projected investment growth line chart"
        >
          {yTicks.map((tick) => {
            const tickValue = maxValue * tick;
            const tickY = y(tickValue);

            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={tickY}
                  y2={tickY}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 12}
                  y={tickY + 4}
                  textAnchor="end"
                  fill="rgba(255,255,255,0.45)"
                  fontSize="12"
                >
                  {formatCompactCurrency(tickValue)}
                </text>
              </g>
            );
          })}

          {xTicks.map((tick) => (
            <text
              key={tick}
              x={x(tick)}
              y={height - 12}
              textAnchor="middle"
              fill="rgba(255,255,255,0.45)"
              fontSize="12"
            >
              {tick} yr
            </text>
          ))}

          {series.map((item) => {
            const points = item.points
              .map((point) => `${x(point.year)},${y(point.value)}`)
              .join(" ");
            const lastPoint = item.points[item.points.length - 1];

            return (
              <g key={item.key}>
                <polyline
                  points={points}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx={x(lastPoint.year)}
                  cy={y(lastPoint.value)}
                  r="5"
                  fill={item.color}
                  stroke="#080808"
                  strokeWidth="3"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function FoundationRing({ score }: { score: number }) {
  return (
    <div
      className="relative flex h-40 w-40 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#a3e635 0 ${score}%, rgba(255,255,255,0.08) ${score}% 100%)`,
      }}
    >
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#0a0a0a]">
        <span className="text-4xl font-bold text-lime-400">{score}</span>
        <span className="text-xs uppercase tracking-[0.16em] text-white/45">
          out of 100
        </span>
      </div>
    </div>
  );
}

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(QUESTIONS.length).fill(-1)
  );
  const [showResult, setShowResult] = useState(false);
  const [monthlyInvestment, setMonthlyInvestment] = useState(20_000);
  const [durations, setDurations] =
    useState<Record<AssetKey, number>>(DEFAULT_DURATIONS);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [pdfError, setPdfError] = useState("");
  const answersRef = useRef<number[]>(answers);
  const autoAdvanceTimer = useRef<number | null>(null);
  const questionCardRef = useRef<HTMLDivElement | null>(null);
  const resultSectionRef = useRef<HTMLElement | null>(null);
  const scrollToken = useRef(0);
  const [scrollRequest, setScrollRequest] = useState<{
    target: "question" | "result";
    token: number;
  } | null>(null);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    return () => {
      if (autoAdvanceTimer.current !== null) {
        window.clearTimeout(autoAdvanceTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!scrollRequest) return;

    let firstFrame = 0;
    let secondFrame = 0;

    // Wait for React to commit and for the browser to calculate the new layout.
    // Using an explicit top offset is more reliable than scrollIntoView when a
    // sticky site header is present.
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        const element =
          scrollRequest.target === "question"
            ? questionCardRef.current
            : resultSectionRef.current;

        if (!element) return;

        const headerOffset = 96;
        const top =
          element.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: Math.max(0, top),
          behavior: "smooth",
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [scrollRequest]);

  const question = QUESTIONS[currentQuestion];

  const answeredCount = useMemo(
    () => answers.filter((answer) => answer !== -1).length,
    [answers]
  );

  const completion = useMemo(
    () => Math.round((answeredCount / QUESTIONS.length) * 100),
    [answeredCount]
  );

  const profileScoreRange = useMemo(() => {
    return PROFILE_QUESTION_INDEXES.reduce(
      (range, questionIndex) => {
        const scores = QUESTIONS[questionIndex].options.map(
          (option) => option.score
        );

        return {
          minimum: range.minimum + Math.min(...scores),
          maximum: range.maximum + Math.max(...scores),
        };
      },
      { minimum: 0, maximum: 0 }
    );
  }, []);

  const totalScore = useMemo(
    () =>
      PROFILE_QUESTION_INDEXES.reduce((total, questionIndex) => {
        const selectedOption = answers[questionIndex];
        if (selectedOption === -1) return total;

        return total + QUESTIONS[questionIndex].options[selectedOption].score;
      }, 0),
    [answers]
  );

  const normalizedScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        ((totalScore - profileScoreRange.minimum) /
          (profileScoreRange.maximum - profileScoreRange.minimum)) *
          100
      )
    )
  );
  const profile = getProfile(normalizedScore);
  const allAnswered = answeredCount === QUESTIONS.length;

  const projections = useMemo<AssetProjection[]>(
    () => {
      const safeMonthlyInvestment = Math.round(
        Math.max(0, monthlyInvestment)
      );
      let allocatedAmount = 0;

      return ASSET_META.map((asset, index) => {
        const allocation = profile.allocation[asset.key];
        const isLastAsset = index === ASSET_META.length - 1;
        const monthlyAmount = isLastAsset
          ? Math.max(0, safeMonthlyInvestment - allocatedAmount)
          : Math.round((safeMonthlyInvestment * allocation) / 100);
        allocatedAmount += monthlyAmount;

        const annualReturn = RETURN_ASSUMPTIONS[asset.key];
        const years = durations[asset.key];
        const investedAmount = monthlyAmount * years * 12;
        const estimatedValue = calculateSipFutureValue(
          monthlyAmount,
          annualReturn,
          years
        );

        return {
          ...asset,
          allocation,
          monthlyAmount,
          annualReturn,
          years,
          investedAmount,
          estimatedValue,
          estimatedGrowth: Math.max(0, estimatedValue - investedAmount),
        };
      });
    },
    [
      durations,
      monthlyInvestment,
      profile.allocation.debt,
      profile.allocation.equity,
      profile.allocation.gold,
    ]
  );

  const totalInvested = projections.reduce(
    (total, item) => total + item.investedAmount,
    0
  );
  const totalEstimatedValue = projections.reduce(
    (total, item) => total + item.estimatedValue,
    0
  );
  const totalEstimatedGrowth = Math.max(
    0,
    totalEstimatedValue - totalInvested
  );

  const emergencyOptionIndex = answers[2];
  const healthOptionIndex = answers[3];
  const termOptionIndex = answers[4];

  const emergencyScore = [0, 35, 75, 100][emergencyOptionIndex] ?? 0;
  const healthScore = healthOptionIndex === 0 ? 100 : 0;
  const termScore =
    termOptionIndex === 0 || termOptionIndex === 2 ? 100 : 0;
  const foundationScore = Math.round(
    emergencyScore * 0.45 + healthScore * 0.35 + termScore * 0.2
  );

  const foundationStatus =
    healthOptionIndex === 1 || emergencyOptionIndex <= 1
      ? "Foundation Required"
      : foundationScore < 90
        ? "Needs Attention"
        : "Investment Ready";

  const foundationItems: FoundationItem[] = [
    {
      label: "Emergency fund",
      value:
        emergencyOptionIndex >= 0
          ? QUESTIONS[2].options[emergencyOptionIndex].label
          : "Not answered",
      status:
        emergencyOptionIndex === 3
          ? "ready"
          : emergencyOptionIndex === 2
            ? "attention"
            : "critical",
      message:
        emergencyOptionIndex === 3
          ? "Your response indicates more than six months of reserves."
          : emergencyOptionIndex === 2
            ? "You have a partial reserve. Continue building toward your target."
            : "Prioritise liquid emergency savings before committing the full surplus.",
    },
    {
      label: "Health insurance",
      value:
        healthOptionIndex >= 0
          ? QUESTIONS[3].options[healthOptionIndex].label
          : "Not answered",
      status: healthOptionIndex === 0 ? "ready" : "critical",
      message:
        healthOptionIndex === 0
          ? "Health cover is available based on your response."
          : "Review suitable health protection before increasing long-term investing.",
    },
    {
      label: "Term insurance",
      value:
        termOptionIndex >= 0
          ? QUESTIONS[4].options[termOptionIndex].label
          : "Not answered",
      status:
        termOptionIndex === 0
          ? "ready"
          : termOptionIndex === 2
            ? "neutral"
            : "attention",
      message:
        termOptionIndex === 0
          ? "Term cover is available based on your response."
          : termOptionIndex === 2
            ? "You marked term insurance as not applicable."
            : "Review term cover when somebody depends on your income.",
    },
  ];

  const priorityActions: PriorityAction[] = [];

  if (healthOptionIndex === 1) {
    priorityActions.push({
      title: "Review health insurance",
      description:
        "Protect against large medical expenses before committing your full monthly surplus to long-term assets.",
      priority: "High",
    });
  }

  if (emergencyOptionIndex <= 1) {
    priorityActions.push({
      title: "Build emergency reserves",
      description:
        "Direct part of your surplus toward accessible savings until you reach a suitable emergency-fund target.",
      priority: "High",
    });
  } else if (emergencyOptionIndex === 2) {
    priorityActions.push({
      title: "Strengthen emergency reserves",
      description:
        "Continue building the reserve while keeping long-term investment commitments affordable.",
      priority: "Medium",
    });
  }

  if (termOptionIndex === 1) {
    priorityActions.push({
      title: "Review term protection",
      description:
        "Consider term cover when family members or other dependants rely on your income.",
      priority: "Medium",
    });
  }

  if (priorityActions.length === 0) {
    priorityActions.push({
      title: "Maintain your financial foundation",
      description:
        "Review emergency reserves, insurance coverage, nominees and affordability periodically.",
      priority: "Complete",
    });
  }

  function clearAutoAdvanceTimer() {
    if (autoAdvanceTimer.current !== null) {
      window.clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
  }

  function requestScroll(target: "question" | "result") {
    scrollToken.current += 1;
    setScrollRequest({ target, token: scrollToken.current });
  }

  function selectAnswer(optionIndex: number) {
    const answeredQuestion = currentQuestion;
    const isLastQuestion = answeredQuestion === QUESTIONS.length - 1;
    const updatedAnswers = [...answersRef.current];
    updatedAnswers[answeredQuestion] = optionIndex;

    clearAutoAdvanceTimer();
    answersRef.current = updatedAnswers;
    setAnswers(updatedAnswers);

    // Keep the selected state visible briefly, then advance automatically.
    autoAdvanceTimer.current = window.setTimeout(() => {
      autoAdvanceTimer.current = null;
      const latestAnswers = answersRef.current;
      const allQuestionsAnswered = latestAnswers.every(
        (answer) => answer !== -1
      );

      if (isLastQuestion && allQuestionsAnswered) {
        setShowResult(true);
        requestScroll("result");
        return;
      }

      if (isLastQuestion) {
        const firstUnansweredQuestion = latestAnswers.findIndex(
          (answer) => answer === -1
        );
        setCurrentQuestion(Math.max(0, firstUnansweredQuestion));
        requestScroll("question");
        return;
      }

      setCurrentQuestion(answeredQuestion + 1);
      requestScroll("question");
    }, 350);
  }

  function nextQuestion() {
    if (answers[currentQuestion] === -1) return;

    clearAutoAdvanceTimer();

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      requestScroll("question");
    }
  }

  function previousQuestion() {
    clearAutoAdvanceTimer();

    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
      requestScroll("question");
    }
  }

  function goToQuestion(questionIndex: number) {
    clearAutoAdvanceTimer();
    setCurrentQuestion(questionIndex);
    requestScroll("question");
  }

  function generateProfile() {
    if (!allAnswered) return;

    clearAutoAdvanceTimer();
    setShowResult(true);
    requestScroll("result");
  }

  function reviewAnswers() {
    clearAutoAdvanceTimer();
    setCurrentQuestion(0);
    setShowResult(false);
    requestScroll("question");
  }

  function restartAssessment() {
    clearAutoAdvanceTimer();
    const emptyAnswers = Array(QUESTIONS.length).fill(-1);
    answersRef.current = emptyAnswers;
    setAnswers(emptyAnswers);
    setCurrentQuestion(0);
    setShowResult(false);
    setMonthlyInvestment(20_000);
    setDurations({ ...DEFAULT_DURATIONS });
    requestScroll("question");
  }

  function updateDuration(asset: AssetKey, value: number) {
    const safeValue = Math.min(40, Math.max(1, Math.round(value || 1)));
    setDurations((current) => ({ ...current, [asset]: safeValue }));
  }

  async function downloadPdf() {
    if (isDownloadingPdf) return;

    setPdfError("");
    setIsDownloadingPdf(true);

    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF();

    const leftMargin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - leftMargin * 2;
    let y = 22;

    function addPageWhenNeeded(requiredHeight = 12) {
      if (y + requiredHeight > pageHeight - 20) {
        doc.addPage();
        y = 22;
      }
    }

    function addSectionHeading(title: string) {
      addPageWhenNeeded(16);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(title, leftMargin, y);
      y += 10;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Investment Profile & SIP Illustration", leftMargin, y);

    y += 12;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(
      `Generated on ${new Date().toLocaleDateString("en-IN")}`,
      leftMargin,
      y
    );

    y += 16;
    addSectionHeading("Risk profile");
    doc.setFontSize(22);
    doc.text(`${profile.name} (${normalizedScore}/100)`, leftMargin, y);

    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const descriptionLines = doc.splitTextToSize(
      profile.description,
      contentWidth
    );
    doc.text(descriptionLines, leftMargin, y);
    y += descriptionLines.length * 5 + 8;

    doc.setFont("helvetica", "bold");
    doc.text(
      `Allocation: Equity ${profile.allocation.equity}% | Debt ${profile.allocation.debt}% | Gold ${profile.allocation.gold}%`,
      leftMargin,
      y
    );
    y += 14;

    addSectionHeading("Monthly investment simulator");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(
      `Monthly investment entered: ${formatPdfCurrency(monthlyInvestment)}`,
      leftMargin,
      y
    );
    y += 8;

    projections.forEach((item) => {
      addPageWhenNeeded(28);
      doc.setFont("helvetica", "bold");
      doc.text(`${item.label} (${item.allocation}%)`, leftMargin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      const detail = `${formatPdfCurrency(item.monthlyAmount)}/month | ${item.years} years | ${item.annualReturn}% p.a. illustrative | Invested ${formatPdfCurrency(item.investedAmount)} | Estimated value ${formatPdfCurrency(item.estimatedValue)}`;
      const detailLines = doc.splitTextToSize(detail, contentWidth);
      doc.text(detailLines, leftMargin, y);
      y += detailLines.length * 5 + 7;
    });

    doc.setFont("helvetica", "bold");
    doc.text(
      `Combined invested amount: ${formatPdfCurrency(totalInvested)}`,
      leftMargin,
      y
    );
    y += 7;
    doc.text(
      `Combined projected values: ${formatPdfCurrency(totalEstimatedValue)}`,
      leftMargin,
      y
    );
    y += 14;

    addSectionHeading("Financial foundation");
    doc.setFont("helvetica", "bold");
    doc.text(
      `${foundationStatus} (${foundationScore}/100)`,
      leftMargin,
      y
    );
    y += 8;

    foundationItems.forEach((item) => {
      addPageWhenNeeded(20);
      doc.setFont("helvetica", "bold");
      doc.text(`${item.label}: ${item.value}`, leftMargin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(item.message, contentWidth);
      doc.text(lines, leftMargin, y);
      y += lines.length * 5 + 6;
    });

    addSectionHeading("Priority actions");
    priorityActions.forEach((action, index) => {
      addPageWhenNeeded(20);
      doc.setFont("helvetica", "bold");
      doc.text(`${index + 1}. ${action.title} (${action.priority})`, leftMargin, y);
      y += 6;
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(action.description, contentWidth);
      doc.text(lines, leftMargin, y);
      y += lines.length * 5 + 6;
    });

    addSectionHeading("Important assumptions");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const disclaimer = doc.splitTextToSize(
      "The return rates are fixed illustrative assumptions used only to demonstrate compounding. They are not forecasts or guaranteed returns. The combined total adds category values at their separately selected end dates. This report is educational and is not personalised investment advice.",
      contentWidth
    );
    doc.text(disclaimer, leftMargin, y);

      doc.save("investment-profile-and-sip-illustration.pdf");
    } catch (error) {
      console.error("Unable to generate the PDF report", error);
      setPdfError(
        "The PDF could not be generated. Confirm that jsPDF is installed, then try again."
      );
    } finally {
      setIsDownloadingPdf(false);
    }
  }

  if (showResult) {
    const investedShare =
      totalEstimatedValue > 0
        ? Math.min(100, (totalInvested / totalEstimatedValue) * 100)
        : 0;

    return (
      <section
        ref={resultSectionRef}
        id="assessment"
        data-view="assessment-result"
        className="scroll-mt-24 border-t border-white/10 bg-[#080808] py-16 md:py-20"
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          {/* Profile summary */}
          <div className="rounded-3xl border border-lime-400/20 bg-white/[0.03] p-6 md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime-400">
                  Your Investment Profile
                </p>

                <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                      {profile.name}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
                      {profile.description}
                    </p>
                  </div>

                  <div className="w-fit shrink-0 rounded-2xl border border-lime-400/20 bg-lime-400/10 px-6 py-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-white/50">
                      Risk score
                    </div>
                    <div className="mt-1 text-4xl font-bold text-lime-400">
                      {normalizedScore}
                      <span className="text-lg text-white/45">/100</span>
                    </div>
                  </div>
                </div>
              </div>

              <AllocationDonut
                equity={profile.allocation.equity}
                debt={profile.allocation.debt}
                gold={profile.allocation.gold}
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {projections.map((asset) => (
                <div
                  key={asset.key}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: asset.color }}
                      />
                      <span className="font-medium">{asset.label}</span>
                    </div>
                    <span className={`text-2xl font-bold ${asset.textClass}`}>
                      {asset.allocation}%
                    </span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${asset.barClass}`}
                      style={{ width: `${asset.allocation}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulator + foundation. Keep both columns aligned to their own content. */}
          <div className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
                    Monthly Investment Simulator
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    See how your allocation could grow
                  </h3>
                </div>

                <div className="w-full lg:w-[280px] lg:shrink-0">
                  <label
                    htmlFor="monthly-investment"
                    className="text-sm text-white/55"
                  >
                    Monthly investment
                  </label>
                  <div className="mt-2 flex items-center rounded-xl border border-white/15 bg-black/30 px-4 focus-within:border-lime-400">
                    <span className="text-xl text-white/50">₹</span>
                    <input
                      id="monthly-investment"
                      type="number"
                      min={0}
                      step={500}
                      value={monthlyInvestment}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Number(event.target.value);
                        setMonthlyInvestment(
                          Number.isFinite(value)
                            ? Math.max(0, Math.round(value))
                            : 0
                        );
                      }}
                      className="min-w-0 w-full bg-transparent px-3 py-4 text-xl font-bold outline-none sm:text-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <div className="flex h-4 w-full">
                  {projections.map((asset) => (
                    <div
                      key={asset.key}
                      className={asset.barClass}
                      style={{ width: `${asset.allocation}%` }}
                      title={`${asset.label}: ${asset.allocation}%`}
                    />
                  ))}
                </div>
                <div className="grid gap-4 p-5 sm:grid-cols-3">
                  {projections.map((asset) => (
                    <div key={asset.key}>
                      <div className="text-sm text-white/45">
                        {asset.label} · {asset.allocation}%
                      </div>
                      <div className={`mt-1 whitespace-nowrap text-xl font-bold ${asset.textClass}`}>
                        {formatCurrency(asset.monthlyAmount)}
                      </div>
                      <div className="mt-1 text-xs text-white/40">per month</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5">
                <h4 className="font-semibold text-blue-200">
                  Fixed illustrative assumptions
                </h4>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Equity 10%, Debt 6.5% and Gold 6% per year. These values are
                  non-editable and are used only to illustrate compounding—not
                  to predict or guarantee returns.
                </p>
              </div>

              {/* 1 column on mobile, 2 on normal desktop, 3 only on very wide screens. */}
              <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {projections.map((asset) => {
                  const growthShare =
                    asset.estimatedValue > 0
                      ? Math.max(
                          0,
                          (asset.estimatedGrowth / asset.estimatedValue) * 100
                        )
                      : 0;

                  return (
                    <div
                      key={asset.key}
                      className="min-w-0 rounded-2xl border border-white/10 bg-black/20 p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className={`text-xl font-bold ${asset.textClass}`}>
                            {asset.label}
                          </div>
                          <div className="mt-1 text-sm text-white/45">
                            {asset.allocation}% of monthly SIP
                          </div>
                        </div>
                        <span
                          className="h-10 w-10 shrink-0 rounded-xl"
                          style={{ backgroundColor: `${asset.color}22` }}
                        />
                      </div>

                      {/* Stack the fields in narrow cards so the values never clip. */}
                      <div className="mt-5 grid grid-cols-1 gap-4">
                        <div className="min-w-0">
                          <label
                            htmlFor={`${asset.key}-duration`}
                            className="text-xs uppercase tracking-[0.12em] text-white/40"
                          >
                            Duration
                          </label>
                          <div className="relative mt-2">
                            <input
                              id={`${asset.key}-duration`}
                              type="number"
                              min={1}
                              max={40}
                              inputMode="numeric"
                              value={asset.years}
                              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                updateDuration(
                                  asset.key,
                                  Number(event.target.value)
                                )
                              }
                              className="h-14 w-full min-w-0 appearance-none rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-4 pr-24 text-lg font-semibold tabular-nums outline-none transition focus:border-lime-400 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            />
                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm text-white/45">
                              years
                            </span>
                          </div>
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs uppercase tracking-[0.12em] text-white/40">
                            Assumed return
                          </div>
                          <div className="mt-2 flex h-14 items-center rounded-xl border border-white/10 bg-white/[0.03] px-4 text-lg font-semibold tabular-nums">
                            {asset.annualReturn}%
                            <span className="ml-1 whitespace-nowrap text-xs font-normal text-white/40">
                              p.a.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3 text-sm">
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-white/45">Monthly amount</span>
                          <span className="whitespace-nowrap text-right font-semibold tabular-nums">
                            {formatCurrency(asset.monthlyAmount)}
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-white/45">Total invested</span>
                          <span className="whitespace-nowrap text-right tabular-nums">
                            {formatCurrency(asset.investedAmount)}
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <span className="text-white/45">Estimated growth</span>
                          <span className={`whitespace-nowrap text-right tabular-nums ${asset.textClass}`}>
                            {formatCurrency(asset.estimatedGrowth)}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 overflow-hidden rounded-full bg-white/10">
                        <div className="flex h-2">
                          <div
                            className="bg-white/35"
                            style={{ width: `${100 - growthShare}%` }}
                          />
                          <div
                            className={asset.barClass}
                            style={{ width: `${growthShare}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between text-[11px] text-white/35">
                        <span>Invested</span>
                        <span>Growth</span>
                      </div>

                      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="text-xs uppercase tracking-[0.12em] text-white/40">
                          Estimated final value
                        </div>
                        <div className={`mt-2 whitespace-nowrap text-2xl font-bold tabular-nums ${asset.textClass}`}>
                          {formatCurrency(asset.estimatedValue)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
                Financial Foundation Check
              </p>

              <div className="mt-6 flex flex-col items-center text-center">
                <FoundationRing score={foundationScore} />
                <h3 className="mt-5 text-2xl font-bold">{foundationStatus}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Your risk profile explains how you may invest. This check shows
                  what may need attention before committing your full monthly
                  surplus.
                </p>
              </div>

              <div className="mt-7 space-y-4">
                {foundationItems.map((item) => {
                  const statusClasses = {
                    ready: "border-lime-400/20 bg-lime-400/5 text-lime-300",
                    attention:
                      "border-yellow-400/20 bg-yellow-400/5 text-yellow-300",
                    critical: "border-red-400/20 bg-red-400/5 text-red-300",
                    neutral: "border-white/10 bg-white/[0.03] text-white/60",
                  }[item.status];

                  const icon =
                    item.status === "ready"
                      ? "✓"
                      : item.status === "neutral"
                        ? "—"
                        : "!";

                  return (
                    <div
                      key={item.label}
                      className={`rounded-2xl border p-4 ${statusClasses}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current/30 font-bold">
                          {icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold">{item.label}</div>
                          <div className="mt-1 text-sm text-white/75">
                            {item.value}
                          </div>
                          <p className="mt-2 text-xs leading-5 text-white/45">
                            {item.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5">
                <h4 className="font-semibold">Your priority plan</h4>
                <div className="mt-5 space-y-5">
                  {priorityActions.map((action, index) => (
                    <div key={action.title} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                        {index + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold">{action.title}</span>
                          <span
                            className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] ${
                              action.priority === "High"
                                ? "bg-red-400/10 text-red-300"
                                : action.priority === "Medium"
                                  ? "bg-yellow-400/10 text-yellow-300"
                                  : "bg-lime-400/10 text-lime-300"
                            }`}
                          >
                            {action.priority}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-5 text-white/45">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {foundationStatus !== "Investment Ready" && (
                <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                  <div className="font-semibold text-yellow-200">
                    Treat this as a future SIP illustration
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Consider addressing the highlighted foundation priorities
                    before committing the full monthly amount to market-linked
                    investments.
                  </p>
                </div>
              )}
            </aside>
          </div>

          {/* Put the graph and total below both columns so neither becomes cramped. */}
          <div className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
            <ProjectionChart projections={projections} />

            <div className="rounded-3xl border border-lime-400/20 bg-lime-400/5 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-lime-400">
                Combined projection
              </p>
              <h4 className="mt-3 whitespace-nowrap text-3xl font-bold sm:text-4xl">
                {formatCurrency(totalEstimatedValue)}
              </h4>
              <p className="mt-3 text-sm leading-6 text-white/45">
                Sum of category values at their individually selected end dates.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-white/40">Total invested</span>
                  <span className="whitespace-nowrap font-semibold">
                    {formatCurrency(totalInvested)}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-white/40">Estimated growth</span>
                  <span className="whitespace-nowrap font-semibold text-lime-400">
                    {formatCurrency(totalEstimatedGrowth)}
                  </span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-white/40">Monthly total</span>
                  <span className="whitespace-nowrap font-semibold">
                    {formatCurrency(monthlyInvestment)}
                  </span>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-full bg-white/10">
                <div className="flex h-4">
                  <div
                    className="bg-white/35"
                    style={{ width: `${investedShare}%` }}
                  />
                  <div
                    className="bg-lime-400"
                    style={{ width: `${100 - investedShare}%` }}
                  />
                </div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/40">
                <span>Contributions</span>
                <span>Illustrative growth</span>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="font-semibold">Important projection notes</h3>
            <p className="mt-3 text-sm leading-7 text-white/50">
              Calculations assume monthly contributions at the beginning of each
              month and fixed annual return assumptions. Actual returns can be
              higher, lower or negative. Taxes, inflation, fees, product costs,
              market volatility and changes in allocation are not included. The
              combined total adds values from different category end dates and
              should be read as an illustration rather than a single maturity
              value.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={downloadPdf}
              disabled={isDownloadingPdf}
              className="rounded-xl bg-lime-400 px-8 py-4 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-wait disabled:opacity-60"
            >
              {isDownloadingPdf ? "Preparing PDF…" : "Download PDF"}
            </button>
            <button
              type="button"
              onClick={reviewAnswers}
              className="rounded-xl border border-white/15 px-8 py-4 font-semibold transition hover:border-lime-400"
            >
              Review Answers
            </button>
            <button
              type="button"
              onClick={restartAssessment}
              className="rounded-xl border border-white/15 px-8 py-4 font-semibold transition hover:border-lime-400"
            >
              Retake Assessment
            </button>
          </div>

          {pdfError && (
            <p
              className="mt-4 text-sm text-red-300"
              role="alert"
              aria-live="polite"
            >
              {pdfError}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section
      id="assessment"
      className="scroll-mt-6 border-t border-white/10 bg-[#050505] py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-lime-400">
                Step {question.step} of 4
              </p>

              <h2 className="mt-3 text-4xl font-bold">{question.title}</h2>
            </div>

            <div className="w-fit rounded-full bg-lime-400/10 px-5 py-2 font-semibold text-lime-400">
              {completion}% complete
            </div>
          </div>

          <div
            className="mt-8 h-2 overflow-hidden rounded-full bg-white/10"
            role="progressbar"
            aria-label="Assessment completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={completion}
          >
            <div
              className="h-full rounded-full bg-lime-400 transition-all duration-500"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        <div
          ref={questionCardRef}
          id="assessment-question-card"
          className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10"
        >
          <div className="text-sm uppercase tracking-[0.2em] text-white/50">
            Question {currentQuestion + 1} of {QUESTIONS.length}
          </div>

          <h3 className="mt-5 text-2xl font-semibold leading-snug md:text-3xl">
            {question.question}
          </h3>

          {question.helper && (
            <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5 leading-7 text-yellow-200">
              {question.helper}
            </div>
          )}

          <div className="mt-10 space-y-4">
            {question.options.map((option, optionIndex) => {
              const selected = answers[currentQuestion] === optionIndex;

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => selectAnswer(optionIndex)}
                  aria-pressed={selected}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400/70 ${
                    selected
                      ? "border-lime-400 bg-lime-400/10"
                      : "border-white/10 bg-white/[0.02] hover:border-lime-400/40 hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-base md:text-lg">{option.label}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold ${
                        selected
                          ? "border-lime-400 bg-lime-400 text-black"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="rounded-xl border border-white/10 px-5 py-3 font-medium transition hover:border-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-8 md:py-4"
            >
              ← Previous
            </button>

            {currentQuestion < QUESTIONS.length - 1 ? (
              <button
                type="button"
                onClick={nextQuestion}
                disabled={answers[currentQuestion] === -1}
                className="rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 md:px-8 md:py-4"
              >
                Next →
              </button>
            ) : (
              <button
                type="button"
                onClick={generateProfile}
                disabled={!allAnswered}
                className="rounded-xl bg-lime-400 px-5 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 md:px-8 md:py-4"
              >
                Generate My Profile
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h4 className="font-semibold">Assessment progress</h4>
            <span className="text-sm text-white/60">
              {answeredCount} of {QUESTIONS.length} answered
            </span>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-3 sm:grid-cols-8 lg:grid-cols-[repeat(15,minmax(0,1fr))]">
            {QUESTIONS.map((item, questionIndex) => {
              const isCurrent = currentQuestion === questionIndex;
              const isAnswered = answers[questionIndex] !== -1;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToQuestion(questionIndex)}
                  aria-label={`Go to question ${questionIndex + 1}`}
                  className={`h-11 rounded-xl border text-sm font-semibold transition ${
                    isCurrent
                      ? "border-lime-400 bg-lime-400 text-black"
                      : isAnswered
                        ? "border-lime-400/30 bg-lime-400/10 text-lime-400"
                        : "border-white/10 text-white/70 hover:border-white/30"
                  }`}
                >
                  {questionIndex + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h4 className="text-xl font-semibold">Before you invest</h4>
          <p className="mt-4 leading-7 text-white/65">
            A risk score should not be used in isolation. Financial readiness,
            insurance, emergency reserves, investment horizon, and liquidity
            needs can all affect whether an investment strategy is suitable.
          </p>
        </div>
      </div>
    </section>
  );
}