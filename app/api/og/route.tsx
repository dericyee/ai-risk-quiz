import { ImageResponse } from "next/og";
import { ARCHETYPES, calculateHalfLife } from "@/lib/archetypes";

export const runtime = "edge";

const LEVEL_COLORS: Record<string, string> = {
  Low: "#34d399",
  Medium: "#fbbf24",
  High: "#fb923c",
  "Very High": "#f87171",
};

const TRAJECTORY_LABEL: Record<string, string> = {
  shrinking: "Shrinking",
  changing: "Changing",
  growing: "Growing",
  safe: "Safe",
};

const TRAJECTORY_COLORS: Record<string, string> = {
  shrinking: "#f87171",
  changing: "#fbbf24",
  growing: "#c4b5fd",
  safe: "#34d399",
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const archetypeId = searchParams.get("a") ?? "builder";
  const scoreParam = Number(searchParams.get("s") ?? 18);
  const score = Number.isFinite(scoreParam)
    ? Math.max(0, Math.min(36, scoreParam))
    : 18;
  const level = searchParams.get("l") ?? "Medium";
  const archetype = ARCHETYPES[archetypeId] ?? ARCHETYPES.generalist;
  const halfLife = calculateHalfLife(score);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, #020617 0%, #0f172a 100%)`,
          color: "white",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background: `radial-gradient(circle, ${archetype.accent}40 0%, transparent 70%)`,
            display: "flex",
          }}
        />
        {/* Accent radial glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "500px",
            height: "500px",
            background: `radial-gradient(circle, ${archetype.accent}25 0%, transparent 70%)`,
            display: "flex",
          }}
        />

        {/* Top row: "You are" tag + monogram badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor: archetype.accent,
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 16,
                letterSpacing: "0.25em",
                color: archetype.accent,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              You are
            </span>
          </div>

          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "20px",
              backgroundColor: `${archetype.accent}25`,
              border: `2px solid ${archetype.accent}60`,
              color: archetype.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {archetype.monogram}
          </div>
        </div>

        {/* Archetype name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "60px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "white",
            }}
          >
            {archetype.name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#cbd5e1",
              marginTop: "20px",
              maxWidth: "950px",
              lineHeight: 1.35,
            }}
          >
            {archetype.tagline}
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            zIndex: 1,
          }}
        >
          {/* Stats group */}
          <div style={{ display: "flex", gap: "60px" }}>
            <StatBlock
              label="Score"
              value={`${score}/36`}
              color="white"
            />
            <StatBlock
              label="AI Effect"
              value={level}
              color={LEVEL_COLORS[level] ?? "white"}
            />
            <StatBlock
              label="Countdown"
              value={`${halfLife} mo`}
              color={
                TRAJECTORY_COLORS[archetype.trajectory] ?? "white"
              }
            />
            <StatBlock
              label="Direction"
              value={
                TRAJECTORY_LABEL[archetype.trajectory] ?? "—"
              }
              color={
                TRAJECTORY_COLORS[archetype.trajectory] ?? "white"
              }
            />
          </div>

          {/* Brand mark */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: "#64748b",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Take it free
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "white",
                marginTop: "4px",
                letterSpacing: "-0.01em",
              }}
            >
              sigmaschool.co
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

function StatBlock({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontSize: 14,
          color: "#94a3b8",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 32,
          fontWeight: 800,
          color,
          marginTop: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </span>
    </div>
  );
}
