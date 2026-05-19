"use client";

import { Shield, Clock, CheckCircle, ChevronRight, Sparkles } from "lucide-react";
import Logo from "./Logo";

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-slate-100 px-4 py-3">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Logo size="md" />
          <a
            href="https://sigmaschool.co"
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
          >
            sigmaschool.co
          </a>
        </div>
      </nav>

      <div className="max-w-lg mx-auto px-4 py-10 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <Sparkles size={12} />
          Free · 2 minutes · No fluff
        </div>

        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-4">
          Is Your Job
          <br />
          Safe From AI?
        </h1>
        <p className="text-lg text-slate-600 mb-3 leading-relaxed">
          12 honest questions. A real score. And — most importantly — a clear answer to{" "}
          <span className="font-semibold text-slate-900">what to actually do about it.</span>
        </p>
        <p className="text-sm text-slate-500 mb-8">
          No doom. No hype. Built for real working people in every field.
        </p>

        <button
          onClick={onStart}
          className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-6 py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-slate-200"
        >
          Start the Checklist <ChevronRight size={18} />
        </button>

        <p className="text-center text-xs text-slate-400 mt-3">No sign-up needed to start</p>

        {/* Honest framing */}
        <div className="mt-10 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-5">
          <p className="text-sm font-bold text-slate-900 mb-2">
            Real talk before you start:
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            AI isn&apos;t going to replace your job overnight. But it&apos;s already replacing{" "}
            <span className="font-semibold">tasks</span> — and the basic version of almost every
            role just got cheaper. This checklist helps you see exactly which parts of{" "}
            <span className="italic">your</span> work are exposed, so you know what to build next.
          </p>
        </div>

        {/* Who it's for */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
            Built for every kind of worker
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Admin",
              "Customer Service",
              "Marketing",
              "Sales",
              "HR",
              "Accounting",
              "Engineers",
              "Designers",
              "Managers",
              "Founders",
              "Consultants",
              "Lawyers",
              "Healthcare",
              "Teachers",
              "Writers",
              "Students",
            ].map((role) => (
              <span
                key={role}
                className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* What you'll get */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            What you&apos;ll get
          </p>
          <div className="flex flex-col gap-3">
            {[
              {
                title: "Your honest AI exposure score",
                detail: "Low → Very High, with a breakdown of why",
              },
              {
                title: "The 3 answers driving your score",
                detail: "See exactly which parts of your work are most exposed",
              },
              {
                title: "3 AI tools to try this week",
                detail: "Specific tools picked for your field — not generic advice",
              },
              {
                title: "A 30-day micro-plan",
                detail: "Four small weekly actions to actually move forward",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-10 border-l-4 border-amber-400 pl-4 py-1">
          <p className="text-sm text-slate-700 leading-relaxed">
            Most career advice is still pretending it&apos;s 2019. The job market changed. Salaries are
            getting compressed. Entry-level work is shrinking. And &quot;just get a degree&quot; isn&apos;t the
            answer it used to be.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            The people who&apos;ll do well in the next five years aren&apos;t the ones avoiding AI — they&apos;re
            the ones using it as leverage.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-2">
          <Shield size={14} className="text-slate-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed">
            This is a self-assessment, not a prediction. We don&apos;t claim to know whether your
            specific job will disappear — no one does. We help you see which parts of your work are
            most exposed, so you can act early instead of late.
          </p>
        </div>

        {/* Footer mark */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Made by</span>
          <Logo size="sm" />
        </div>
      </div>
    </div>
  );
}
