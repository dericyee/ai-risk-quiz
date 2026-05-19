"use client";

import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  RefreshCw,
  Lock,
  AlertTriangle,
  Wrench,
  Calendar,
  Users,
  Share2,
} from "lucide-react";
import {
  type RiskLevel,
  type RiskResult,
  type FieldInfo,
  THIRTY_DAY_PLAN,
  getTopDrivers,
} from "@/lib/quiz-data";
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

const GAUGE_LEVELS: { level: RiskLevel; color: string }[] = [
  { level: "Low", color: "#10b981" },
  { level: "Medium", color: "#f59e0b" },
  { level: "High", color: "#ea580c" },
  { level: "Very High", color: "#dc2626" },
];

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

  const handleShare = () => setShareOpen(true);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Top nav */}
      <nav className="bg-white border-b border-slate-100 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Logo size="md" />
          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors"
          >
            <Share2 size={14} /> Share
          </button>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-4 py-6 animate-slide-up">
        {/* Header / score card */}
        <div className={`rounded-2xl border-2 ${result.borderColor} ${result.bgColor} p-6 mb-4 text-center`}>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
            Your AI Exposure Result
          </p>
          <h1 className={`text-3xl font-extrabold ${result.color} mb-4`}>{result.title}</h1>

          {/* Gauge */}
          <div className="mb-4">
            <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-1.5">
              {GAUGE_LEVELS.map((g) => (
                <div
                  key={g.level}
                  className="flex-1 rounded-sm"
                  style={{
                    backgroundColor: g.level === level ? g.color : "#e2e8f0",
                    opacity: g.level === level ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 px-0.5">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
              <span>Very High</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-slate-200">
            <span className="text-sm text-slate-500">Score</span>
            <span className="text-lg font-extrabold text-slate-900">{score}</span>
            <span className="text-sm text-slate-400">/ 36</span>
          </div>

          <p className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Users size={12} /> {result.percentileCopy}
          </p>
        </div>

        {/* Short summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-4">
          <p className="text-sm text-slate-700 leading-relaxed">{result.shortSummary}</p>
        </div>

        {/* Real talk */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-2">
            Real talk
          </p>
          {result.realTalk.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0 text-slate-100">
              {para}
            </p>
          ))}
        </div>

        {/* What's driving your score */}
        {resultUnlocked ? (
          <Section
            icon={<AlertTriangle size={16} className="text-orange-500" />}
            title="What's driving your score"
            subtitle="Your 3 highest-scoring answers — and what they mean"
          >
            <div className="flex flex-col gap-3">
              {drivers.length === 0 ? (
                <p className="text-sm text-slate-500 italic">
                  No specific drivers — your work appears well-balanced against AI exposure.
                </p>
              ) : (
                drivers.map((d, i) => (
                  <div key={d.questionId} className="border-l-2 border-orange-300 pl-3">
                    <p className="text-xs font-semibold text-orange-600 mb-0.5">
                      Driver #{i + 1}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      {d.question}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">{d.whyItMatters}</p>
                  </div>
                ))
              )}
            </div>
          </Section>
        ) : (
          <LockedSection title="What's driving your score" />
        )}

        {/* Exposed tasks */}
        {resultUnlocked ? (
          <Section
            icon={
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: result.gaugeColor }}
              />
            }
            title="Tasks AI is already getting good at"
            subtitle={`Specific to ${field.label}`}
          >
            <div className="flex flex-col gap-2">
              {field.exposedTasks.map((task) => (
                <div key={task} className="flex items-start gap-2.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: result.gaugeColor }}
                  />
                  <p className="text-sm text-slate-700">{task}</p>
                </div>
              ))}
            </div>
          </Section>
        ) : (
          <LockedSection title="Tasks AI is getting good at (for your field)" />
        )}

        {/* AI tools to try this week */}
        {resultUnlocked ? (
          <Section
            icon={<Wrench size={16} className="text-indigo-500" />}
            title="AI tools to try this week"
            subtitle={`Picked for ${field.label} — start with one`}
          >
            <div className="flex flex-col gap-3">
              {field.aiTools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="flex gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-100"
                >
                  <div className="w-7 h-7 rounded-lg bg-white border border-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-700 shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">{tool.name}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      {tool.useFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        ) : (
          <LockedSection title="3 AI tools to try this week" />
        )}

        {/* Skills to build */}
        {resultUnlocked && (
          <Section
            icon={<CheckCircle size={16} className="text-emerald-500" />}
            title="Skills that compound — and don't commoditise"
            subtitle="These are where you want to invest your time"
          >
            <div className="flex flex-col gap-2">
              {field.saferSkills.map((skill) => (
                <div key={skill} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-700">{skill}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* 30-day plan */}
        {resultUnlocked ? (
          <Section
            icon={<Calendar size={16} className="text-violet-500" />}
            title="Your 30-day micro-plan"
            subtitle="Small concrete actions. No bootcamp required to start."
          >
            <div className="flex flex-col gap-3">
              {plan.map((step) => (
                <div key={step.week} className="flex gap-3">
                  <div className="w-14 shrink-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-violet-500">
                      {step.week}
                    </p>
                  </div>
                  <div className="flex-1 border-l border-slate-200 pl-3 pb-1">
                    <p className="text-sm font-semibold text-slate-900 leading-snug">
                      {step.title}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        ) : (
          <LockedSection title="Your 30-day micro-plan (4 weekly actions)" />
        )}

        {/* Personalized confirmation */}
        {leadData && resultUnlocked && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 mb-4">
            <p className="text-sm text-indigo-700">
              <span className="font-semibold">{leadData.name}</span>, your full plan and follow-up
              resources will be sent to{" "}
              <span className="font-semibold">{leadData.email}</span>.
            </p>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3 mb-6">
          <a
            href={result.primaryCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-6 py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-slate-200"
          >
            {result.primaryCTA.label} <ArrowRight size={18} />
          </a>
          {result.secondaryCTA && (
            <a
              href={result.secondaryCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base px-6 py-4 rounded-xl border-2 border-slate-200 transition-all active:scale-[0.98]"
            >
              {result.secondaryCTA.label}
            </a>
          )}
        </div>

        {/* Caveat */}
        <div className="bg-slate-100 rounded-xl p-4 mb-6">
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-700">One more thing.</span> AI exposure does
            not equal job loss. It means your boss can do more with less, the basic version of your
            role just got cheaper, and the person who builds AI into their workflow gets the next
            promotion. The goal isn&apos;t to panic — it&apos;s to move first.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between text-sm">
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors py-2"
          >
            <RefreshCw size={14} /> Retake
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors py-2"
          >
            <Share2 size={14} /> Share result
          </button>
        </div>
      </div>

      <ShareModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        score={score}
        level={level}
      />
    </div>
  );
}

function Section({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-4">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h2 className="text-base font-bold text-slate-900">{title}</h2>
      </div>
      {subtitle && <p className="text-xs text-slate-400 mb-3 ml-6">{subtitle}</p>}
      <div className={subtitle ? "" : "mt-2"}>{children}</div>
    </div>
  );
}

function LockedSection({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-5 mb-4">
      <div className="flex items-center gap-2 text-slate-400">
        <Lock size={14} />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <p className="text-xs text-slate-400 mt-1.5 ml-6">
        Scroll up and enter your email to unlock.
      </p>
    </div>
  );
}
