export default function DecorativeBg({ variant = "default" }: { variant?: "default" | "soft" }) {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft gradient wash */}
      <div
        className={`absolute inset-0 ${
          variant === "soft"
            ? "bg-gradient-to-b from-white via-indigo-50/30 to-white"
            : "bg-gradient-to-br from-indigo-50/40 via-white to-amber-50/30"
        }`}
      />

      {/* Indigo blob top-left */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />

      {/* Navy blob bottom-right */}
      <div
        className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, #1a1f5e 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      {/* Amber accent blob */}
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-50" />
    </div>
  );
}
