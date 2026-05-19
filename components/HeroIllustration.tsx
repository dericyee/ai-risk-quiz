export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto my-8">
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl shadow-indigo-100/50 p-6 animate-float">
        {/* Faux task list with risk indicators */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Your Tasks
          </div>
          <div className="flex items-center gap-1">
            <span className="relative flex w-2 h-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-amber-500" />
            </span>
            <span className="text-[10px] font-semibold text-slate-500">AI Scanning</span>
          </div>
        </div>

        {[
          { task: "Draft client email", risk: "high", color: "bg-red-100 text-red-700 border-red-200" },
          { task: "Update spreadsheet", risk: "high", color: "bg-red-100 text-red-700 border-red-200" },
          { task: "Strategic planning", risk: "low", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
          { task: "Status report", risk: "high", color: "bg-red-100 text-red-700 border-red-200" },
          { task: "1:1 with team", risk: "low", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
            style={{ animation: `slideUp 0.4s ease-out ${i * 0.08}s backwards` }}
          >
            <span className="text-sm text-slate-700">{item.task}</span>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.color}`}
            >
              {item.risk}
            </span>
          </div>
        ))}

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">Exposure</span>
          <span className="text-lg font-extrabold text-red-600">High</span>
        </div>
      </div>

      {/* Floating sparkle decorations */}
      <div
        className="absolute -top-4 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-lg shadow-amber-200 flex items-center justify-center font-extrabold text-white text-lg rotate-12 animate-float"
        style={{ animationDelay: "-2s" }}
      >
        AI
      </div>
      <div
        className="absolute -bottom-3 -left-2 w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg shadow-indigo-200 flex items-center justify-center text-white -rotate-12 animate-float"
        style={{ animationDelay: "-1s" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z" />
        </svg>
      </div>
    </div>
  );
}
