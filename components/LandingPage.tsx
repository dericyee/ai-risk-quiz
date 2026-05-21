"use client";

import { ChevronRight, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import Logo from "./Logo";
import { AreaChart, BarChart } from "./Chart";
import {
  AI_ADOPTION_TREND,
  KEY_STATS,
  RISING_SKILLS,
  FALLING_SKILLS,
} from "@/lib/insights";

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Soft grid background */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15, 23, 42, 0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Nav */}
      <nav className="border-b border-slate-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Logo size="md" />
          <a
            href="https://sigmaschool.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium font-mono"
          >
            sigmaschool.co ↗
          </a>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
        {/* Live tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex w-2 h-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
            Live · 2026
          </p>
        </div>

        {/* Hero */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.95] text-slate-900 mb-5">
          How will AI
          <br />
          change your work?
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-2 max-w-xl">
          Take this 2-minute quiz. Find out which parts of your work AI is doing now —
          and what you can do about it.
        </p>
        <p className="text-sm text-slate-400 mb-8">
          For anyone with a job. Free. No sign-up to start.
        </p>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-3.5 rounded-full transition-all active:scale-[0.98]"
        >
          Start the quiz
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>

        {/* Key stats strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {KEY_STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-slate-200 rounded-2xl p-4"
            >
              <p className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                {s.value}
              </p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                {s.label}
              </p>
              <p className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-2">
                {s.source}
              </p>
            </div>
          ))}
        </div>

        {/* Adoption chart */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
              What just happened
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-1">
            AI use at work, year by year
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            % of workers using AI tools at their job (weekly or more often).
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
            <AreaChart data={AI_ADOPTION_TREND} accent="#1a1f5e" height={200} />
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              In just six years, AI went from a side tool to part of how most people
              work. The line is still going up. The question isn&apos;t{" "}
              <span className="italic">if</span> it touches your job. It&apos;s how.
            </p>
          </div>
        </section>

        {/* Skills up / Skills down */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
              The job market right now
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-6">
            What&apos;s growing. What&apos;s shrinking.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-emerald-600" />
                <p className="text-xs font-semibold text-emerald-700">
                  Skills going UP
                </p>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-4">
                % more job listings, year over year
              </p>
              <BarChart data={RISING_SKILLS} accent="#059669" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown size={14} className="text-red-600" />
                <p className="text-xs font-semibold text-red-700">
                  Skills going DOWN
                </p>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-4">
                % fewer job listings, year over year
              </p>
              <BarChart data={FALLING_SKILLS} accent="#dc2626" />
            </div>
          </div>
        </section>

        {/* Archetype teaser */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
              Find yours
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            There are 8 types. Which one are you?
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            Everyone falls into one. It&apos;s easier to remember than a number.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { mono: "SS", name: "Spreadsheet Sherpa", color: "#f97316" },
              { mono: "ID", name: "Inbox Diplomat", color: "#ec4899" },
              { mono: "TW", name: "Template Wizard", color: "#a855f7" },
              { mono: "PW", name: "Process Whisperer", color: "#f59e0b" },
              { mono: "PS", name: "PowerPoint Surgeon", color: "#0ea5e9" },
              { mono: "TB", name: "Trust Broker", color: "#10b981" },
              { mono: "FC", name: "Field Captain", color: "#14b8a6" },
              { mono: "BU", name: "The Builder", color: "#6366f1" },
            ].map((a) => (
              <div
                key={a.mono}
                className="group bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-3 transition-all cursor-default"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-extrabold text-sm mb-2 transition-transform group-hover:scale-105"
                  style={{
                    backgroundColor: `${a.color}15`,
                    color: a.color,
                    border: `1px solid ${a.color}30`,
                  }}
                >
                  {a.mono}
                </div>
                <p className="text-[11px] font-semibold text-slate-700 leading-tight">
                  {a.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What you get */}
        <section className="mt-14">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
              What you get
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-6">
            Real answers. Not scary headlines.
          </h2>

          <div className="space-y-1">
            {[
              {
                k: "01",
                h: "Your worker type",
                d: "One of eight. Friendly name. Easy to share with a friend.",
              },
              {
                k: "02",
                h: "Your AI countdown",
                d: "Roughly how long until AI can do most of a job like yours.",
              },
              {
                k: "03",
                h: "How you compare",
                d: "See how your work stacks up against other jobs in 2026.",
              },
              {
                k: "04",
                h: "A 30-day plan",
                d: "Four small steps you can start this month.",
              },
            ].map((row) => (
              <div
                key={row.k}
                className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 py-4 border-b border-slate-100 last:border-0"
              >
                <span className="font-mono text-xs text-slate-400 pt-0.5">{row.k}</span>
                <div>
                  <p className="text-[15px] font-bold text-slate-900 leading-tight">
                    {row.h}
                  </p>
                  <p className="text-sm text-slate-500 mt-0.5">{row.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honest framing */}
        <section className="mt-14 bg-slate-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <p className="relative text-base sm:text-lg text-white leading-relaxed font-medium">
            AI is not going to take your whole job tomorrow.
            <br />
            <span className="text-slate-400">
              But it is doing parts of it right now — the simple parts, the boring
              parts. This quiz shows you which ones, and what to do about it.
            </span>
          </p>
        </section>

        {/* Final CTA */}
        <div className="mt-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-lg font-bold text-slate-900">Ready?</p>
            <p className="text-sm text-slate-500">
              Two minutes. One worker type. Real answers.
            </p>
          </div>
          <button
            onClick={onStart}
            className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold text-sm px-5 py-3 rounded-full transition-all active:scale-[0.98]"
          >
            Start
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-slate-400 leading-relaxed mt-12">
          This is a self-check, not a prediction. AI affecting your job doesn&apos;t
          mean you&apos;ll lose it. Use this to see which parts of your work might
          change — so you can plan ahead instead of getting surprised.
        </p>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">By</span>
          <Logo size="sm" />
        </div>
      </div>
    </div>
  );
}
