import type { ArticleAdSlot, ArticleCta, BlogCategory } from "@/src/types/blog";

type BlogCategoryConfig = {
  label: string;
  accent: string;
  description: string;
  cta: ArticleCta;
};

export const blogCategories: Record<BlogCategory, BlogCategoryConfig> = {
  careers: {
    label: "Careers & Hiring",
    accent: "#7422ff",
    description: "Clear guidance for candidates, recruiters and teams building more transparent hiring systems.",
    cta: {
      label: "Explore hiARed",
      href: "/products/hiared",
      description: "See how AiRedHQ is building transparent, explainable recruitment workflows.",
    },
  },
  "local-discovery": {
    label: "Local Discovery",
    accent: "#3596ff",
    description: "Research and practical guidance for finding trustworthy businesses, markets and local experiences.",
    cta: {
      label: "Explore GoBazaar",
      href: "/products/gobazaar",
      description: "See the product AiRedHQ is building for useful, trustworthy local discovery.",
    },
  },
  "financial-planning": {
    label: "Financial Planning",
    accent: "#a8ea52",
    description: "Educational planning frameworks for budgets, resilience, long-term goals and informed decisions.",
    cta: {
      label: "Explore YojIQ",
      href: "/products/yojiq",
      description: "Discover AiRedHQ's privacy-first approach to practical personal financial planning.",
    },
  },
  "immersive-learning": {
    label: "Immersive Learning",
    accent: "#ec3f96",
    description: "Evidence-led guidance for designing, operating and evaluating purposeful AR and VR learning.",
    cta: {
      label: "Explore AR/VR solutions",
      href: "/solutions/ar-vr",
      description: "Learn how AiRedHQ approaches immersive learning and simulation with practical purpose.",
    },
  },
};

export const defaultArticleAds: ArticleAdSlot[] = [
  {
    id: "article-ad-1",
    placement: "after-introduction",
    provider: "adsense",
    providerSlotId: "6093986231",
    enabled: true,
  },
  {
    id: "article-ad-2",
    placement: "mid-article",
    provider: "adsense",
    providerSlotId: "6093986231",
    enabled: true,
  },
];

export const blogArticleVisualTopics: Record<string, readonly [string, string, string]> = {
  "ai-jobs-india-2026": ["AI role families and career pathways", "A practical AI skills portfolio", "Interview preparation for AI roles"],
  "ats-friendly-resume": ["ATS-safe resume hierarchy", "Matching evidence to a job description", "A final resume quality review"],
  "job-search-strategies": ["A focused employer research shortlist", "Professional networking and follow-up", "Interview preparation and application tracking"],
  "ai-in-recruitment": ["Explainable candidate screening", "Human review of hiring evidence", "Responsible recruitment governance"],
  "find-the-best-local-markets": ["Comparing markets by purpose and location", "Verifying opening hours and travel details", "Planning an efficient local market visit"],
  "find-trusted-local-businesses": ["Identity and reputation trust signals", "Comparing reviews with written terms", "A safer local purchase decision"],
  "best-markets-near-me": ["Choosing markets by product speciality", "Comparing distance, timing and price", "A practical multi-stop shopping plan"],
  "ai-powered-local-discovery": ["Local intent interpreted by an AI system", "Explainable ranking of nearby places", "Merchant information and user feedback loops"],
  "create-a-personal-financial-plan": ["Mapping income, expenses and obligations", "Prioritising protection and financial goals", "Reviewing a household financial plan"],
  "sip-calculator-guide": ["SIP inputs and goal assumptions", "Comparing contribution scenarios", "Reviewing progress toward a long-term goal"],
  "retirement-planning-india": ["Estimating retirement living expenses", "Balancing income sources and reserves", "Reviewing retirement assumptions over time"],
  "emergency-fund-calculator": ["Identifying essential monthly expenses", "Setting a risk-based emergency target", "Building the fund with monthly contributions"],
  "ar-vr-labs-in-schools": ["Planning a safe immersive learning space", "Teacher-led VR classroom facilitation", "Maintaining devices and learning content"],
  "ar-vr-lab-cost-india": ["Comparing immersive learning equipment", "Budgeting software, training and support", "Evaluating the lab over its useful life"],
  "ar-vr-learning-outcomes": ["Preparing students for an immersive lesson", "Guided learning inside a VR experience", "Reflection and assessment after immersion"],
};

export const blogArticleRegistry = [
  ["01-ai-jobs-india-2026.md", "careers", "ai-jobs-india-2026"],
  ["02-ats-friendly-resume.md", "careers", "ats-friendly-resume"],
  ["03-job-search-strategies-freshers-experienced.md", "careers", "job-search-strategies"],
  ["04-ai-in-recruitment-screening-hiring.md", "careers", "ai-in-recruitment"],
  ["05-best-local-markets-city-template.md", "local-discovery", "find-the-best-local-markets"],
  ["06-find-trusted-local-businesses-near-you.md", "local-discovery", "find-trusted-local-businesses"],
  ["07-best-markets-near-me-clothes-electronics-food-home.md", "local-discovery", "best-markets-near-me"],
  ["08-ai-powered-local-discovery-nearby-businesses.md", "local-discovery", "ai-powered-local-discovery"],
  ["09-create-personal-financial-plan-step-by-step.md", "financial-planning", "create-a-personal-financial-plan"],
  ["10-sip-calculator-financial-goals.md", "financial-planning", "sip-calculator-guide"],
  ["11-retirement-planning-india-corpus.md", "financial-planning", "retirement-planning-india"],
  ["12-emergency-fund-calculator-monthly-savings.md", "financial-planning", "emergency-fund-calculator"],
  ["13-ar-vr-labs-schools-setup-implementation.md", "immersive-learning", "ar-vr-labs-in-schools"],
  ["14-ar-vr-lab-setup-cost-schools-india.md", "immersive-learning", "ar-vr-lab-cost-india"],
  ["15-ar-vr-labs-student-learning-engagement-skills.md", "immersive-learning", "ar-vr-learning-outcomes"],
] as const satisfies ReadonlyArray<readonly [string, BlogCategory, string]>;

export const blogArticleSeo: Record<string, { keywords: string[]; description: string; heroAlt: string; inlineAlt: string }> = {
  "ai-jobs-india-2026": {
    keywords: ["AI jobs in India", "AI careers 2026", "machine learning jobs", "AI skills", "AI salary India"],
    description: "Explore AI jobs in India for 2026, including growing roles, practical skills, salary context and a focused roadmap for building an AI career.",
    heroAlt: "An AI professional reviewing model workflows and career opportunities in India",
    inlineAlt: "A practical learning path connecting AI skills, projects and job roles",
  },
  "ats-friendly-resume": {
    keywords: ["ATS friendly resume", "resume format for ATS", "resume keywords", "ATS resume India", "resume screening"],
    description: "Build an ATS-friendly resume with clear formatting, relevant keywords and evidence recruiters can understand without sacrificing readability.",
    heroAlt: "A recruiter reviewing a clearly structured resume beside an applicant tracking interface",
    inlineAlt: "A visual comparison of readable resume structure and job-description keywords",
  },
  "job-search-strategies": {
    keywords: ["job search strategies", "jobs for freshers", "career search India", "job application plan", "professional networking"],
    description: "Use a practical job-search strategy for fresher and experienced roles, from employer research and networking to applications and interviews.",
    heroAlt: "A focused candidate organising applications, networking and interview preparation",
    inlineAlt: "A job-search workflow moving from target role to application and follow-up",
  },
  "ai-in-recruitment": {
    keywords: ["AI in recruitment", "AI candidate screening", "responsible hiring AI", "recruitment automation", "explainable hiring"],
    description: "Understand how AI supports recruitment screening, where human review matters and how teams can build transparent, responsible hiring workflows.",
    heroAlt: "A hiring team using an explainable AI recruitment workflow with human review",
    inlineAlt: "A responsible recruitment process balancing automation, evidence and human decisions",
  },
  "find-the-best-local-markets": {
    keywords: ["find local markets", "best markets near me", "market timings", "local shopping guide", "nearby bazaars"],
    description: "Learn how to find, compare and verify useful local markets using location, speciality, opening hours, transport and trustworthy local information.",
    heroAlt: "A lively Indian market street with food, clothing and craft stalls",
    inlineAlt: "A city map linking market categories, transit access and verified opening information",
  },
  "find-trusted-local-businesses": {
    keywords: ["trusted local businesses", "shops near me", "verify local business", "local services", "business reviews"],
    description: "Find trusted local businesses by checking identity, reviews, written terms and practical trust signals before visiting or making a payment.",
    heroAlt: "A customer checking a neighbourhood business profile before visiting",
    inlineAlt: "Trust signals for evaluating a local business, including identity, reviews and written terms",
  },
  "best-markets-near-me": {
    keywords: ["best markets near me", "clothes market near me", "electronics market", "street food market", "home products market"],
    description: "Compare nearby markets for clothes, electronics, food and home products using speciality, travel time, opening status and shopping priorities.",
    heroAlt: "A diverse local bazaar showing clothing, electronics, food and homeware sections",
    inlineAlt: "A map-led comparison of nearby markets by speciality, travel time and opening status",
  },
  "ai-powered-local-discovery": {
    keywords: ["AI local discovery", "nearby businesses", "local search AI", "hyperlocal discovery", "business recommendations"],
    description: "See how explainable AI can improve local discovery by interpreting intent, ranking nearby businesses and keeping recommendations useful and current.",
    heroAlt: "A map-based local discovery interface surfacing useful nearby places with clear reasons",
    inlineAlt: "An explainable local-search flow from user intent to ranked nearby businesses",
  },
  "create-a-personal-financial-plan": {
    keywords: ["personal financial plan", "financial planning India", "budget and goals", "money management", "financial planning steps"],
    description: "Create a personal financial plan covering cash flow, emergency savings, insurance and goals with a practical step-by-step framework for India.",
    heroAlt: "A household building a practical financial plan from expenses, goals and protection needs",
    inlineAlt: "A financial planning framework connecting cash flow, emergency savings, insurance and goals",
  },
  "sip-calculator-guide": {
    keywords: ["SIP calculator", "monthly SIP amount", "financial goals", "mutual fund SIP", "goal based investing"],
    description: "Learn how SIP calculators estimate monthly contributions, test return assumptions and connect disciplined investing with long-term financial goals.",
    heroAlt: "An investor planning monthly SIP contributions against a long-term financial goal",
    inlineAlt: "A scenario chart showing how time, contribution and assumed return affect a SIP goal",
  },
  "retirement-planning-india": {
    keywords: ["retirement planning India", "retirement corpus", "retirement calculator", "post retirement expenses", "inflation planning"],
    description: "Plan retirement in India by estimating expenses, inflation, income sources, healthcare needs and a resilient long-term retirement corpus.",
    heroAlt: "An Indian couple reviewing retirement expenses, income sources and long-term reserves",
    inlineAlt: "A retirement planning timeline covering accumulation, retirement income and contingency reserves",
  },
  "emergency-fund-calculator": {
    keywords: ["emergency fund calculator", "how much emergency fund", "monthly emergency savings", "financial safety net", "essential expenses"],
    description: "Estimate an emergency fund from essential expenses, income risk and dependants, then create a realistic monthly savings plan to build it.",
    heroAlt: "A household setting aside a financial safety reserve for essential expenses",
    inlineAlt: "An emergency-fund plan based on essential costs, income risk and a monthly saving target",
  },
  "ar-vr-labs-in-schools": {
    keywords: ["AR VR labs in schools", "VR lab setup", "immersive learning lab", "school VR implementation", "AR education"],
    description: "Plan an AR/VR lab for schools with practical guidance on space, devices, safety, teacher training, content and sustainable implementation.",
    heroAlt: "Students and a teacher using supervised VR equipment in a well-organised school lab",
    inlineAlt: "A school immersive-learning lab layout showing safe zones, devices and teacher supervision",
  },
  "ar-vr-lab-cost-india": {
    keywords: ["AR VR lab cost India", "VR lab budget school", "school VR equipment cost", "immersive lab procurement", "AR VR classroom"],
    description: "Understand AR/VR lab costs for Indian schools across hardware, software, training, support and maintenance before comparing proposals.",
    heroAlt: "A school team comparing equipment, software, support and room costs for a VR lab",
    inlineAlt: "A five-year immersive-lab budget split across hardware, software, training and maintenance",
  },
  "ar-vr-learning-outcomes": {
    keywords: ["VR learning outcomes", "AR student engagement", "immersive learning research", "VR skills education", "AR VR classroom benefits"],
    description: "Explore how well-designed AR/VR lessons can support student engagement, spatial understanding, practice and measurable learning outcomes.",
    heroAlt: "Students actively learning a complex concept through a guided immersive experience",
    inlineAlt: "An immersive learning cycle linking preparation, experience, reflection and assessment",
  },
};

export const blogDisclaimers: Partial<Record<BlogCategory, string>> = {
  careers:
    "Career and hiring information is educational and cannot guarantee a job, interview, shortlist or hiring outcome. Employers, tools and legal requirements vary.",
  "local-discovery":
    "Local information, opening hours, prices and business details can change. Verify important information directly before travelling, purchasing or sharing payment details.",
  "financial-planning":
    "Educational information only, not personalised investment, banking, insurance, tax or legal advice. Verify current terms and consider qualified professional guidance for consequential decisions.",
  "immersive-learning":
    "Educational implementation guidance, not medical or legal advice. Device requirements, learner needs and applicable school rules vary; follow current manufacturer and institutional guidance.",
};
