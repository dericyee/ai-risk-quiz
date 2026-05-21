"use client";

import { useState, useMemo } from "react";
import {
  ArrowRight,
  RefreshCw,
  Lock,
  Wrench,
  Calendar,
  Share2,
  Sparkles,
  Target,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";
import {
  type RiskLevel,
  type RiskResult,
  type FieldInfo,
  THIRTY_DAY_PLAN,
  getTopDrivers,
} from "@/lib/quiz-data";
import { determineArchetype, calculateHalfLife } from "@/lib/archetypes";
import { getComparisonForField, TIME_SAVED_TASKS } from "@/lib/insights";
import { BarChart } from "./Chart";
import type { LeadData } from "./QuizApp";
import Logo from "./Logo";
import ShareModal from "./ShareModal";

interface Props {
  score: number;
  level: RiskLevel;
  result: RiskResult;
  field: FieldInfo;
  answers: Record<string, number>;
  leadData: LeadData | null;
  resultUnlocked: boolean;
  onRestart: () => void;
}

const TRAJECTORY_LABEL: Record<string, string> = {
  shrinking: "Shrinking",
  changing: "Changing",
  growing: "Growing",
  safe: "Safe",
};

const LEVEL_LABEL: Record<RiskLevel, string> = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
  "Very High": "Very High",
};

export default function ResultPage({
  score,
  level,
  result,
  field,
  answers,
  leadData,
  resultUnlocked,
  onRestart,
}: Props) {
  const drivers = getTopDrivers(answers, 3);
  const plan = THIRTY_DAY_PLAN[level];
  const [shareOpen, setShareOpen] = useState(false);

  const archetype = useMemo(
    () => determineArchetype(field.id, answers, level),
    [field.id, answers, level]
  );
  const halfLife = useMemo(() => calculateHalfLife(score), [score]);
  const comparison = useMemo(
    () => getComparisonForField(field.id),
    [field.id]
  );
  const userPctInField = comparison[0]?.value ?? 50;

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Top nav */}
      <nav className="bg-white border-b border-slate-100 px-4 py-3 sticky top-0 z-20">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Logo size="md" />
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors"
          >
            <Share2 size={12} /> Share
          </button>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-6 animate-slide-up">
        {/* ── Archetype hero ── */}
        <ArchetypeCard
          archetype={archetype}
          score={score}
          level={level}
          halfLife={halfLife}
        />

        {/* What it means */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-3">
            What this means
          </p>
          <p className="text-[15px] text-slate-800 leading-[1.65]">
            {archetype.verdict}
          </p>
        </div>

        {/* Strengths vs threats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                Your strengths
              </p>
            </div>
            <ul className="space-y-2">
              {archetype.strengths.map((s) => (
                <li key={s} className="text-sm text-slate-800 leading-snug">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500">
                What&apos;s coming
              </p>
            </div>
            <ul className="space-y-2">
              {archetype.threats.map((t) => (
                <li key={t} className="text-sm text-slate-800 leading-snug">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison chart — value add #1 */}
        <Section
          label="How you compare"
          sublabel={`AI doing parts of your job (vs other jobs, 2026)`}
          icon={<BarChart3 size={14} />}
        >
          <BarChart data={comparison} accent={archetype.accent} />
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            About <span className="font-bold text-slate-900 font-mono">{userPctInField}%</span> of
            tasks in jobs like yours can already be helped or done by AI in 2026.
            Bars to compare are common jobs in the same range.
          </p>
        </Section>

        {/* Gated sections */}
        {resultUnlocked ? (
          <>
            {/* Top drivers */}
            <Section
              label="Why you got this type"
              sublabel="The three things that made the biggest difference"
              icon={<Target size={14} />}
            >
              {drivers.length === 0 ? (
                <p className="text-sm text-slate-500 italic">
                  No big stand-outs — your work is well-balanced.
                </p>
              ) : (
                <div className="divide-y divide-slate-100">
                  {drivers.map((d, i) => (
                    <div key={d.questionId} className="py-3 first:pt-0 last:pb-0">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-mono text-xs text-slate-400">
                          0{i + 1}
                        </span>
                        <p className="text-sm font-semibold text-slate-900">
                          {d.question}
                        </p>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed ml-7">
                        {d.whyItMatters}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Section>

            {/* Time saved — value add #2 */}
            <Section
              label="Hours AI can save you"
              sublabel="Common tasks people in your field do, and how much faster AI makes them"
              icon={<Clock size={14} />}
            >
              <BarChart data={TIME_SAVED_TASKS} accent="#0ea5e9" />
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                These are average time savings reported by people using AI tools
                at work. Even using one of these well can buy you back 3-5 hours a week.
              </p>
            </Section>

            {/* AI tools */}
            <Section
              label="Tools to try this week"
              sublabel={`Picked for ${field.label}`}
              icon={<Wrench size={14} />}
            >
              <div className="grid gap-2">
                {field.aiTools.map((tool, i) => (
                  <div
                    key={tool.name}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-md bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900">{tool.name}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                        {tool.useFor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 30-day plan */}
            <Section
              label="Your 30-day plan"
              sublabel="Four small steps you can start this month"
              icon={<Calendar size={14} />}
            >
              <div className="space-y-4">
                {plan.map((step, i) => (
                  <div key={step.week} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-9 h-9 rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center font-mono text-[10px] font-bold text-slate-700">
                        W{i + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {step.title}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Skills card */}
            <Section
              label="Where to focus"
              sublabel="Skills that grow your value over time"
              icon={<Sparkles size={14} />}
            >
              <ul className="space-y-2">
                {field.saferSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-sm text-slate-800"
                  >
                    <span className="text-emerald-500 mt-1 shrink-0">→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Section>

            {leadData && (
              <div className="bg-slate-900 text-white rounded-2xl p-4 mt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Zap size={14} className="text-amber-300" />
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  <span className="font-semibold text-white">{leadData.name}</span> — we&apos;ll
                  send your full result and 30-day plan to{" "}
                  <span className="font-semibold text-white">{leadData.email}</span>.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-6 mt-3 text-center">
            <Lock size={18} className="text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">
              Tools, hours saved, and your 30-day plan are locked
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Add your email above to unlock the rest.
            </p>
          </div>
        )}

        {/* CTAs */}
        <div className="mt-6 space-y-2">
          <a
            href={result.primaryCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-2 bg-[#1a1f5e] hover:bg-[#04121f] text-white font-bold text-[15px] px-6 py-4 rounded-2xl transition-all active:scale-[0.99]"
          >
            <span>{result.primaryCTA.label}</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          {result.secondaryCTA && (
            <a
              href={result.secondaryCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 bg-white text-slate-900 font-semibold text-sm px-6 py-3.5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all"
            >
              <span>{result.secondaryCTA.label}</span>
              <ArrowRight size={16} className="text-slate-400" />
            </a>
          )}
        </div>

        {/* Note */}
        <p className="text-[11px] text-slate-400 leading-relaxed mt-6 px-1">
          This is a self-check, not a prediction. AI doing parts of your job
          doesn&apos;t mean you&apos;ll lose it. It means some parts get faster
          and cheaper — and the people who learn AI get the next raise.
        </p>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-sm">
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors py-1.5 text-xs font-medium"
          >
            <RefreshCw size={12} /> Retake
          </button>
          <button
            onClick={() => setShareOpen(true)}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors py-1.5 text-xs font-medium"
          >
            <Share2 size={12} /> Share your type
          </button>
        </div>
      </div>

      <ShareModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        score={score}
        level={level}
        archetypeName={archetype.shortName}
      />
    </div>
  );
}

// ── Archetype reveal card — Linear-inspired dark hero ──
function ArchetypeCard({
  archetype,
  score,
  level,
  halfLife,
}: {
  archetype: ReturnType<typeof determineArchetype>;
  score: number;
  level: RiskLevel;
  halfLife: number;
}) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-8 sm:p-10"
      style={{
        backgroundImage: `
          radial-gradient(circle at 100% 0%, ${archetype.accent}25 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, ${archetype.accent}15 0%, transparent 60%),
          linear-gradient(to bottom right, #020617, #0f172a)
        `,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />

      <div className="relative flex items-center gap-2 mb-8">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: archetype.accent }}
        />
        <p
          className="text-[10px] font-mono uppercase tracking-[0.25em]"
          style={{ color: archetype.accent }}
        >
          You are
        </p>
      </div>

      <div className="relative">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[0.95] mb-3">
          {archetype.name}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-snug mb-8 max-w-xl">
          {archetype.tagline}
        </p>
      </div>

      <div
        className="absolute right-6 top-6 sm:right-8 sm:top-8 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-extrabold text-xl sm:text-2xl tracking-tight"
        style={{
          backgroundColor: `${archetype.accent}20`,
          color: archetype.accent,
          border: `1px solid ${archetype.accent}40`,
        }}
      >
        {archetype.monogram}
      </div>

      {/* Stats grid */}
      <div className="relative grid grid-cols-3 gap-3 mt-6">
        <Stat
          label="Score"
          value={
            <span className="font-mono">
              {score}
              <span className="text-slate-500">/36</span>
            </span>
          }
        />
        <Stat
          label="AI Effect"
          value={LEVEL_LABEL[level]}
          valueClassName={
            level === "Very High" || level === "High"
              ? "text-red-400"
              : level === "Medium"
              ? "text-amber-300"
              : "text-emerald-400"
          }
        />
        <Stat
          label="Direction"
          value={TRAJECTORY_LABEL[archetype.trajectory]}
          valueClassName={
            archetype.trajectory === "shrinking"
              ? "text-red-400"
              : archetype.trajectory === "changing"
              ? "text-amber-300"
              : archetype.trajectory === "growing"
              ? "text-violet-300"
              : "text-emerald-400"
          }
        />
      </div>

      {/* Countdown — signature stat */}
      <div className="relative mt-6 pt-6 border-t border-white/10">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 mb-2">
              AI countdown
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold">
              <span className="font-mono">{halfLife}</span>{" "}
              <span className="text-slate-400 text-lg font-semibold">months</span>
            </p>
            <p className="text-xs text-slate-500 mt-1.5 max-w-sm">
              Roughly how long until AI can do most of a job like yours, based on
              today&apos;s trends.
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 mb-1">
              How rare
            </p>
            <p className="text-xs text-slate-300">
              <span className="font-mono text-base font-bold text-white">
                {archetype.rarity}%
              </span>{" "}
              of people get this
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  valueClassName = "text-white",
}: {
  label: string;
  value: React.ReactNode;
  valueClassName?: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mb-1.5">
        {label}
      </p>
      <p className={`text-base font-bold ${valueClassName}`}>{value}</p>
    </div>
  );
}

function Section({
  label,
  sublabel,
  icon,
  children,
}: {
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 mt-3">
      <div className="flex items-center gap-2 mb-1 text-slate-400">
        {icon}
        <p className="text-[10px] font-mono uppercase tracking-[0.25em]">{label}</p>
      </div>
      {sublabel && (
        <p className="text-[15px] font-bold text-slate-900 mb-4">{sublabel}</p>
      )}
      <div>{children}</div>
    </div>
  );
}
