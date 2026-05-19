"use client";

import { Shield, CheckCircle, ChevronRight, Sparkles, Zap, TrendingUp, Star } from "lucide-react";
import Logo from "./Logo";
import DecorativeBg from "./DecorativeBg";
import HeroIllustration from "./HeroIllustration";

export default function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative min-h-screen">
      <DecorativeBg />

      {/* Nav */}
      <nav className="relative border-b border-slate-100/80 backdrop-blur-sm bg-white/70 px-4 py-3 z-10">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Logo size="md" />
          <a
            href="https://sigmaschool.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-[#1a1f5e] transition-colors font-medium"
          >
            sigmaschool.co →
          </a>
        </div>
      </nav>

      <div className="relative max-w-lg mx-auto px-4 py-10 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white border border-indigo-100 text-[#1a1f5e] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm">
          <Sparkles size={12} className="text-amber-500" />
          Free · 2 minutes · No fluff
        </div>

        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight mb-4 text-slate-900">
          Is Your Job
          <br />
          <span className="text-shimmer">Safe From AI?</span>
        </h1>
        <p className="text-lg text-slate-600 mb-3 leading-relaxed">
          12 honest questions. A real score. And — most importantly — a clear answer to{" "}
          <span className="font-semibold text-slate-900">what to actually do about it.</span>
        </p>
        <p className="text-sm text-slate-500 mb-6">
          No doom. No hype. Built for real working people in every field.
        </p>

        {/* Hero illustration */}
        <HeroIllustration />

        <button
          onClick={onStart}
          className="group relative w-full flex items-center justify-center gap-2 bg-[#1a1f5e] hover:bg-[#04121f] text-white font-bold text-base px-6 py-4 rounded-2xl transition-all active:scale-[0.98] shadow-xl shadow-indigo-200/60 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start the Checklist
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-3">
          <div className="flex -space-x-1">
            {["bg-rose-300", "bg-amber-300", "bg-emerald-300", "bg-indigo-300"].map((c, i) => (
              <div key={i} className={`w-5 h-5 rounded-full border-2 border-white ${c}`} />
            ))}
          </div>
          <p className="text-xs text-slate-500 ml-1">No sign-up needed to start</p>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          {[
            { icon: <Zap size={16} className="text-amber-500" />, value: "12", label: "Questions" },
            { icon: <TrendingUp size={16} className="text-emerald-500" />, value: "2 min", label: "To finish" },
            { icon: <Star size={16} className="text-indigo-500" />, value: "Free", label: "Forever" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-3 text-center"
            >
              <div className="flex items-center justify-center mb-1">{s.icon}</div>
              <p className="text-base font-extrabold text-slate-900">{s.value}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Real-talk callout */}
        <div className="mt-10 relative bg-gradient-to-br from-[#04121f] to-[#1a1f5e] text-white rounded-3xl p-6 overflow-hidden shadow-xl shadow-indigo-100">
          <div
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-400/20 blur-2xl"
            aria-hidden
          />
          <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-2 relative">
            Real talk before you start
          </p>
          <p className="text-sm text-slate-100 leading-relaxed relative">
            AI isn&apos;t going to replace your job overnight. But it&apos;s already replacing{" "}
            <span className="font-bold text-white">tasks</span> — and the basic version of almost
            every role just got cheaper. This checklist shows exactly which parts of{" "}
            <span className="italic">your</span> work are exposed.
          </p>
        </div>

        {/* Who it's for */}
        <div className="mt-10">
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
                className="bg-white/80 backdrop-blur border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full hover:border-indigo-300 hover:text-[#1a1f5e] transition-colors"
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
                color: "from-emerald-400 to-emerald-600",
              },
              {
                title: "The 3 answers driving your score",
                detail: "See exactly which parts of your work are most exposed",
                color: "from-amber-400 to-amber-600",
              },
              {
                title: "3 AI tools to try this week",
                detail: "Specific tools picked for your field — not generic advice",
                color: "from-indigo-400 to-indigo-600",
              },
              {
                title: "A 30-day micro-plan",
                detail: "Four small weekly actions to actually move forward",
                color: "from-violet-400 to-violet-600",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/60 hover:backdrop-blur transition-all"
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0 group-hover:scale-110 transition-transform`}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why it matters */}
        <div className="mt-10 relative bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-5">
          <div className="absolute top-0 left-5 w-8 h-1 bg-amber-400 rounded-b-full" aria-hidden />
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
        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
          <span>Made by</span>
          <Logo size="sm" />
        </div>
      </div>
    </div>
  );
}
