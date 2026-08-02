"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BadgeIndianRupee,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleAlert,
  Clock3,
  FileCheck2,
  FileSearch,
  Landmark,
  MessageSquareQuote,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const views = [
  { id: "opportunity", label: "Opportunity", Icon: BriefcaseBusiness },
  { id: "company", label: "Company", Icon: Building2 },
  { id: "candidate", label: "Candidate fit", Icon: ScanSearch },
  { id: "resume", label: "Resume", Icon: FileSearch },
  { id: "insights", label: "Hiring health", Icon: BarChart3 },
] as const;

type ViewId = (typeof views)[number]["id"];

const panelCopy: Record<ViewId, { eyebrow: string; title: string; description: string }> = {
  opportunity: {
    eyebrow: "Transparent opportunity",
    title: "Know the job before giving it your time.",
    description: "The role, compensation, selection process and employer credibility are evaluated together before an application begins.",
  },
  company: {
    eyebrow: "Company intelligence",
    title: "Understand who you may be joining.",
    description: "Leadership, verified reviews, benefits and public financial context turn a company profile into a decision tool.",
  },
  candidate: {
    eyebrow: "Explainable fit",
    title: "A score that shows its working.",
    description: "Recruiters see the evidence behind a match, the gaps that need discussion and the human decision still required.",
  },
  resume: {
    eyebrow: "Resume intelligence",
    title: "Improve the evidence, not the embellishment.",
    description: "hiARed separates ATS readability, role relevance and evidence quality so candidates know exactly what to strengthen.",
  },
  insights: {
    eyebrow: "Hiring health",
    title: "Measure the process candidates experience.",
    description: "Pipeline movement, response time and transparency signals expose where hiring quality improves or breaks down.",
  },
};

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="min-w-0 border-l border-white/10 pl-4 first:border-l-0 first:pl-0">
      <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/42">{note}</p>
    </div>
  );
}

function OpportunityView() {
  return (
    <div className="grid h-full gap-5 p-5 sm:p-7 lg:grid-cols-[1.35fr_.65fr]">
      <div className="flex min-h-[30rem] flex-col rounded-md bg-[#f4f3f7] p-5 text-[#15131a] sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold text-[#6102f5]">Verified employer</p>
            <h4 className="mt-2 text-2xl font-semibold sm:text-3xl">Senior Product Engineer</h4>
            <p className="mt-2 text-sm text-black/55">Bengaluru · Hybrid · Product engineering</p>
          </div>
          <span className="rounded-full bg-[#dff5dc] px-3 py-1 text-xs font-semibold text-[#23611d]">Open</span>
        </div>
        <div className="mt-7 grid gap-4 border-y border-black/10 py-5 sm:grid-cols-3">
          <div><BadgeIndianRupee className="size-5 text-[#6102f5]" /><p className="mt-3 text-xs text-black/45">Disclosed salary</p><p className="mt-1 font-semibold">INR 34L–46L</p></div>
          <div><ShieldCheck className="size-5 text-[#087f6b]" /><p className="mt-3 text-xs text-black/45">Transparency</p><p className="mt-1 font-semibold">93 / 100</p></div>
          <div><FileCheck2 className="size-5 text-[#087f6b]" /><p className="mt-3 text-xs text-black/45">Post quality</p><p className="mt-1 font-semibold">96 / 100</p></div>
        </div>
        <h5 className="mt-7 font-semibold">What the role makes clear</h5>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Ownership and outcomes", "Required versus preferred skills", "Benefits and work mode", "Interview stages and owners"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-black/62"><Check className="size-4 text-[#087f6b]" />{item}</div>
          ))}
        </div>
        <div className="mt-auto rounded-md bg-white p-4 text-sm text-black/60 shadow-sm">
          <span className="font-semibold text-black">Quality flag:</span> clear responsibilities, measurable outcomes and a named selection process.
        </div>
      </div>
      <aside className="flex flex-col rounded-md bg-white/[0.045] p-5 sm:p-6">
        <p className="text-xs font-semibold text-white">Selection journey</p>
        <div className="mt-6 space-y-5">
          {["Application review", "Technical conversation", "Working session", "Leadership conversation"].map((stage, index) => (
            <div key={stage} className="flex gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#6102f5]/18 text-xs text-[#a46cff]">{index + 1}</span>
              <div><p className="text-sm text-white/78">{stage}</p><p className="mt-1 text-xs text-white/35">Owner and purpose disclosed</p></div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/55"><Clock3 className="size-4 text-[#8a4cff]" />Expected decision: 13 days</div>
      </aside>
    </div>
  );
}

function CompanyView() {
  return (
    <div className="p-5 sm:p-7">
      <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
        <div><p className="text-xs text-[#a46cff]">Verified company profile</p><h4 className="mt-2 text-3xl font-semibold">Asteria Digital</h4><p className="mt-2 text-sm text-white/45">Enterprise software · Bengaluru</p></div>
        <div className="flex items-center gap-3"><span className="text-5xl font-semibold text-[#8a4cff]">92</span><span className="max-w-24 text-xs leading-5 text-white/42">company transparency score</span></div>
      </div>
      <div className="mt-7 grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-5">
          {[
            [UsersRound, "Leadership", "Named leaders with role context and public sources"],
            [MessageSquareQuote, "Employee voice", "Verified themes separated from anonymous claims"],
            [Landmark, "Financial context", "Publicly available funding and operating context"],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof UsersRound;
            return <div key={String(title)} className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-md bg-[#6102f5]/12"><ItemIcon className="size-5 text-[#8a4cff]" /></span><div><p className="font-semibold">{String(title)}</p><p className="mt-1 text-sm leading-6 text-white/42">{String(text)}</p></div></div>;
          })}
        </div>
        <div className="rounded-md bg-white/[0.045] p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">What people consistently mention</p>
          <div className="mt-6 space-y-5">
            {[['Role clarity', 88], ['Manager communication', 81], ['Learning environment', 76], ['Work-life predictability', 69]].map(([label, value]) => (
              <div key={String(label)}><div className="flex justify-between text-sm"><span>{label}</span><span className="text-white/45">{value}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-[#6102f5]" style={{ width: `${value}%` }} /></div></div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-white/30">Themes appear only after sufficient verified feedback. Individual comments remain attributable to their review type.</p>
        </div>
      </div>
    </div>
  );
}

function CandidateView() {
  return (
    <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[.72fr_1.28fr]">
      <div className="rounded-md bg-white/[0.045] p-6">
        <p className="text-xs text-white/35">Candidate fit</p><p className="mt-3 text-7xl font-semibold text-[#8a4cff]">84</p>
        <p className="mt-3 text-sm text-white/52">Strong evidence for product delivery and system design. Two areas need conversation.</p>
        <div className="mt-8 space-y-4">{[['Role evidence', 91], ['Core skills', 86], ['Domain context', 78], ['Work preferences', 74]].map(([label,value])=><div key={String(label)}><div className="flex justify-between text-xs"><span>{label}</span><span>{value}%</span></div><div className="mt-2 h-1.5 bg-white/8"><div className="h-full bg-[#6102f5]" style={{width:`${value}%`}} /></div></div>)}</div>
      </div>
      <div className="space-y-3">
        <h4 className="text-xl font-semibold">Why this score?</h4>
        {[
          [Check, "Evidence found", "Led two product releases and documented measurable adoption outcomes.", "text-emerald-400"],
          [Check, "Transferable strength", "System design experience maps directly to the role's platform ownership.", "text-emerald-400"],
          [CircleAlert, "Needs discussion", "No direct evidence of managing a multi-region rollout.", "text-amber-300"],
          [CircleAlert, "Preference mismatch", "Candidate prefers remote-first; role requires two office days.", "text-amber-300"],
        ].map(([Icon,title,text,color])=>{const ItemIcon=Icon as typeof Check;return <div key={String(title)} className="flex gap-4 border-b border-white/8 py-4"><ItemIcon className={`mt-0.5 size-5 shrink-0 ${color}`} /><div><p className="font-semibold">{String(title)}</p><p className="mt-1 text-sm leading-6 text-white/42">{String(text)}</p></div></div>})}
        <div className="flex items-center gap-3 pt-3 text-sm text-white/55"><UsersRound className="size-5 text-[#8a4cff]" />Human review required before any status change</div>
      </div>
    </div>
  );
}

function ResumeView() {
  return (
    <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.15fr_.85fr]">
      <div className="rounded-md bg-[#f4f3f7] p-5 text-[#15131a] sm:p-7">
        <div className="flex items-center justify-between border-b border-black/10 pb-5"><div><p className="font-semibold">Aarav Sharma</p><p className="mt-1 text-xs text-black/45">Product engineer · 6 years</p></div><span className="rounded-full bg-[#e8ddff] px-3 py-1 text-xs font-semibold text-[#6102f5]">ATS ready</span></div>
        <h4 className="mt-6 text-xl font-semibold">Evidence detected</h4>
        <div className="mt-4 space-y-3">{[
          ["Outcome", "Reduced release lead time by 31% across two product teams."],
          ["Ownership", "Led discovery, architecture and delivery for a workflow platform."],
          ["Collaboration", "Partnered with design, support and enterprise customers."],
        ].map(([label,text])=><div key={label} className="rounded-md bg-white p-4 shadow-sm"><p className="text-[10px] font-semibold uppercase tracking-wider text-[#6102f5]">{label}</p><p className="mt-2 text-sm leading-6 text-black/65">{text}</p></div>)}</div>
      </div>
      <aside className="rounded-md bg-white/[0.045] p-5 sm:p-6">
        <div className="flex items-end justify-between"><div><p className="text-xs text-white/35">Resume health</p><p className="mt-2 text-5xl font-semibold">82</p></div><Sparkles className="size-6 text-[#8a4cff]" /></div>
        <div className="mt-7 space-y-5">{[['Parseability', 96], ['Evidence quality', 84], ['Role relevance', 78], ['Readability', 88]].map(([label,value])=><div key={String(label)}><div className="flex justify-between text-sm"><span>{label}</span><span className="text-white/40">{value}%</span></div><div className="mt-2 h-1.5 bg-white/8"><div className="h-full bg-[#6102f5]" style={{width:`${value}%`}} /></div></div>)}</div>
        <div className="mt-7 rounded-md border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-white/52"><span className="font-semibold text-amber-200">Improve:</span> add scope and outcome evidence to two recent responsibilities.</div>
      </aside>
    </div>
  );
}

function InsightsView() {
  const points = "0,128 55,111 110,118 165,79 220,88 275,53 330,66 385,31 440,42 500,13";
  return (
    <div className="p-5 sm:p-7">
      <div className="grid grid-cols-2 gap-5 border-b border-white/10 pb-6 sm:grid-cols-4"><Metric label="Applicants" value="312" note="This role" /><Metric label="Screened" value="128" note="41% progressed" /><Metric label="Interviews" value="45" note="14% progressed" /><Metric label="Offers" value="12" note="3.8% offered" /></div>
      <div className="mt-7 grid gap-7 lg:grid-cols-[1.35fr_.65fr]">
        <div><div className="flex items-center justify-between"><div><p className="font-semibold">Candidate response health</p><p className="mt-1 text-xs text-white/35">Median update time across active roles</p></div><span className="text-sm text-emerald-300">Improving</span></div><svg viewBox="0 0 500 145" className="mt-7 w-full" role="img" aria-label="Candidate response health trend improving over ten periods"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#6102f5" stopOpacity=".45"/><stop offset="1" stopColor="#6102f5" stopOpacity="0"/></linearGradient></defs><path d={`M ${points} L 500 145 L 0 145 Z`} fill="url(#area)"/><polyline points={points} fill="none" stroke="#8a4cff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <div className="space-y-3">{[
          ["Response within SLA", "88%", "text-emerald-300"],
          ["Salary disclosed", "74%", "text-[#a46cff]"],
          ["Stages on schedule", "81%", "text-sky-300"],
          ["Candidates awaiting update", "7", "text-amber-300"],
        ].map(([label,value,color])=><div key={label} className="flex items-center justify-between rounded-md bg-white/[0.045] px-4 py-3"><span className="text-sm text-white/52">{label}</span><span className={`font-semibold ${color}`}>{value}</span></div>)}</div>
      </div>
    </div>
  );
}

const viewComponents: Record<ViewId, () => React.JSX.Element> = {
  opportunity: OpportunityView,
  company: CompanyView,
  candidate: CandidateView,
  resume: ResumeView,
  insights: InsightsView,
};

export function HiARedProductEvidence() {
  const [activeId, setActiveId] = useState<ViewId>("opportunity");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const copy = panelCopy[activeId];
  const ActiveView = viewComponents[activeId];

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? views.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + views.length) % views.length;
    setActiveId(views[next].id);
    tabsRef.current[next]?.focus();
  }

  return (
    <div className="mt-14">
      <div role="tablist" aria-label="Explore the hiARed product" className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {views.map(({ id, label, Icon }, index) => {
          const active = id === activeId;
          return <button key={id} ref={(node) => { tabsRef.current[index] = node; }} id={`hiared-tab-${id}`} type="button" role="tab" tabIndex={active ? 0 : -1} aria-selected={active} aria-controls="hiared-product-panel" onClick={() => setActiveId(id)} onKeyDown={(event) => handleKeys(event, index)} className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a4cff] ${active ? "bg-[#6102f5] text-white" : "bg-white/[0.055] text-white/55 hover:bg-white/10 hover:text-white"}`}><Icon className="size-4" aria-hidden="true" />{label}</button>;
        })}
      </div>

      <div id="hiared-product-panel" role="tabpanel" aria-labelledby={`hiared-tab-${activeId}`} className="mt-4 overflow-hidden rounded-lg bg-[#0b0b0f]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={activeId} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -6 }} transition={{ duration: reduceMotion ? 0 : 0.28 }}>
            <div className="grid border-b border-white/10 lg:grid-cols-[.72fr_1.28fr]">
              <div className="p-6 sm:p-8"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a4cff]">{copy.eyebrow}</p><h3 className="mt-4 max-w-[17ch] text-3xl font-semibold leading-tight sm:text-4xl">{copy.title}</h3></div>
              <p className="self-end p-6 text-sm leading-7 text-white/48 sm:p-8">{copy.description}</p>
            </div>
            <ActiveView />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-3 text-[10px] leading-5 text-white/28">Interactive product demonstration using representative sample data. No hiring decision is made without human review.</p>
    </div>
  );
}
