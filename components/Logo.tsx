export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { text: "text-sm", symbol: "w-5 h-5 text-xs" },
    md: { text: "text-base", symbol: "w-6 h-6 text-sm" },
    lg: { text: "text-lg", symbol: "w-7 h-7 text-base" },
  };
  const s = sizes[size];

  return (
    <div className="inline-flex items-center gap-2">
      <span
        className={`${s.symbol} inline-flex items-center justify-center rounded-md bg-slate-900 text-white font-extrabold leading-none`}
        aria-hidden
      >
        Σ
      </span>
      <span className={`${s.text} font-extrabold tracking-tight text-slate-900`}>
        Sigma School
      </span>
    </div>
  );
}
