# Investment Risk Profiler -- Codex Implementation Specification

> Goal: Build a new flagship calculator called **Investment Risk
> Profiler** that integrates into the existing Next.js calculator
> architecture without modifying the behaviour of existing calculators.

## Existing Architecture (Do Not Break)

Preserve: - Hero, breadcrumbs, SEO metadata, FAQ, education section -
Theme, typography, spacing, responsive layout - Existing calculators and
engines

Current routing: - `/calculators/[slug]` - Existing `FinanceCalculator`
continues to work unchanged.

## New Route

Slug: `investment-risk-profiler`

Category: `planning`

Display Name: `Investment Risk Profiler`

Icon: `Radar` (Lucide)

------------------------------------------------------------------------

# High-Level UX

Left panel: 1. About You 2. Investment Behaviour 3. Goals 4. Review

Right panel (live updating): - Risk score - Risk profile - Asset
allocation - SIP allocation - Wealth projection - Recommendations

Never change the surrounding page layout.

------------------------------------------------------------------------

# Wizard Steps

## Step 1 -- About You

Fields: - Age - Occupation - Monthly Income - Monthly Expenses -
Emergency Fund (months) - Existing Monthly SIP - Existing Investments

Validation: - Age 18--75 - Income \> Expenses - No negative values

## Step 2 -- Behaviour (15 Questions)

Use single-choice cards.

Topics: 1. Market crash response 2. 20% portfolio loss 3. Investment
experience 4. Time horizon 5. Return expectation 6. Volatility comfort
7. Goal priority 8. Savings discipline 9. Existing equity exposure 10.
Debt attitude 11. Long-term patience 12. Liquidity needs 13. News
reaction 14. Diversification preference 15. Risk vs reward

Each answer: - score - weight - explanation

------------------------------------------------------------------------

## Step 3 -- Goal

Goal: - Retirement - Wealth Creation - Child Education - House
Purchase - Financial Freedom - Other

Monthly SIP amount.

Automatically recommend horizon by goal: Retirement 20--30y Wealth
10--20y Education based on child age (default 10y) House 5--10y Freedom
15--25y

Allow override.

------------------------------------------------------------------------

# Scoring Engine

Final Score = 40% Behaviour + 20% Financial Capacity + 20% Investment
Horizon + 10% Emergency Fund + 10% Age

Bands: 0--34 Conservative 35--69 Moderate 70--100 Aggressive

------------------------------------------------------------------------

# Allocation Engine

Inputs: - Risk profile - Age - Goal - Horizon

Output: Equity / Debt / Gold

Rules: - Younger + longer horizon =\> higher equity - Short horizon =\>
higher debt - Gold 5--10% as hedge

Example: Aggressive + 25y retirement: 90/5/5

Aggressive + 8y education: 75/15/10

Moderate + 10y house: 60/30/10

Conservative + 5y: 25/65/10

------------------------------------------------------------------------

# Wealth Projection

Assumptions: - Equity 12% - Debt 7% - Gold 8%

Display: - Monthly allocation - Future value by asset - Total future
corpus

Mention assumptions clearly.

------------------------------------------------------------------------

# Dashboard

Components: - Risk Meter - Donut Allocation Chart - Line Chart (wealth
growth) - Metric Cards - Recommendations

------------------------------------------------------------------------

# Recommendations

Generate deterministic rule-based advice.

Examples: - Increase emergency fund to 6 months. - Increase equity due
to long horizon. - Reduce equity due to short goal horizon.

------------------------------------------------------------------------

# PDF

Branding: AiRedHQ + YOJIQ

Sections: 1. Cover 2. Executive Summary 3. Risk Score 4. Allocation 5.
SIP Split 6. Wealth Projection 7. Recommendations 8. Assumptions 9.
Disclaimer

------------------------------------------------------------------------

# Files to Create

    app/
    └── calculators/
        └── investment-risk-profiler/

    components/
    └── calculators/
        └── investment-risk-profiler/
            InvestmentRiskProfiler.tsx
            Wizard.tsx
            StepAbout.tsx
            StepBehaviour.tsx
            StepGoals.tsx
            StepResults.tsx
            ProgressBar.tsx
            RiskMeter.tsx
            AllocationDonut.tsx
            WealthProjection.tsx
            RecommendationCards.tsx
            PdfReport.tsx

    constants/
        investment-risk-questions.ts
        investment-risk-rules.ts
        investment-risk-allocation.ts

    lib/
    └── calculators/
        engines/
            investment-risk.ts
        pdf/
            investment-risk-report.ts

    types/
        investment-risk.ts

------------------------------------------------------------------------

# Existing Files to Update

-   `constants/calculators.ts`
    -   Register new calculator.
-   Calculator renderer
    -   Add support for calculator type `wizard`.
    -   Existing calculators remain untouched.

------------------------------------------------------------------------

# Acceptance Criteria

-   Existing calculators continue to work.
-   Responsive on desktop/mobile.
-   Live result updates.
-   Accessible keyboard navigation.
-   PDF export.
-   No regression in current calculator pages.
