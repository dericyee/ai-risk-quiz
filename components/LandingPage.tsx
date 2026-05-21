"use client";

import { ChevronRight, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Subtle grid background — Linear-style */}
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
        {/* Tiny indicator */}
        <div className="flex items-center gap-2 mb-6">
          <span className="relative flex w-2 h-2">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
            Live · 2025
          </p>
        </div>

        {/* Hero */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.95] text-slate-900 mb-5">
          Is your job
          <br />
          safe from AI?
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-2 max-w-xl">
          Answer 12 questions. Get your AI Archetype. Find out exactly which parts of your work
          AI is about to eat — and what to build instead.
        </p>
        <p className="text-sm text-slate-400 mb-8">
          Free. Two minutes. No corporate hedging.
        </p>

        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold text-[15px] px-6 py-3.5 rounded-full transition-all active:scale-[0.98]"
        >
          Find my archetype
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>

        {/* Archetype teaser strip — the Purple Cow tease */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
              One of these is you
            </p>
          </div>

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
        </div>

        {/* Three things — terse */}
        <div className="mt-16 space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-4">
            What you get
          </p>
          {[
            {
              k: "01",
              h: "Your archetype",
              d: "One of eight. Named, not numbered. Designed to share.",
            },
            {
              k: "02",
              h: "Your half-life",
              d: "How many months until AI can do 60% of your role's tasks.",
            },
            {
              k: "03",
              h: "Your 30-day plan",
              d: "Four moves to make. Concrete. Starts Monday.",
            },
          ].map((row) => (
            <div
              key={row.k}
              className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 py-4 border-b border-slate-100 last:border-0"
            >
              <span className="font-mono text-xs text-slate-400 pt-0.5">{row.k}</span>
              <div>
                <p className="text-[15px] font-bold text-slate-900 leading-tight">{row.h}</p>
                <p className="text-sm text-slate-500 mt-0.5">{row.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence statement — replaces the "real talk" callout */}
        <div className="mt-14 bg-slate-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <p className="relative text-base sm:text-lg text-white leading-relaxed font-medium">
            AI isn&apos;t going to replace your job overnight.
            <br />
            <span className="text-slate-400">
              It&apos;s already replacing your{" "}
              <span className="italic text-white">tasks</span>. The basic version of almost
              every role just got cheaper. This quiz shows you which parts.
            </span>
          </p>
        </div>

        {/* Stats — tight, designed */}
        <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-slate-200">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">12</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1">
              Questions
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">2:00</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1">
              Minutes
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">8</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1">
              Archetypes
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-lg font-bold text-slate-900">Ready?</p>
            <p className="text-sm text-slate-500">
              Two minutes. One archetype. Real answers.
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

        {/* Disclaimer — quieter */}
        <p className="text-[11px] text-slate-400 leading-relaxed mt-12">
          This is a self-assessment, not a prediction. AI exposure ≠ job loss. We help you see
          which parts of your work are most exposed so you can act early instead of late.
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
