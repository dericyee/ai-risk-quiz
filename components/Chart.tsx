"use client";

interface DataPoint {
  label: string;
  value: number;
  highlight?: boolean;
}

interface BarChartProps {
  data: DataPoint[];
  max?: number;
  unit?: string;
  accent?: string;
}

export function BarChart({
  data,
  max,
  unit = "%",
  accent = "#1a1f5e",
}: BarChartProps) {
  const ceiling = max ?? Math.max(...data.map((d) => d.value), 100);

  return (
    <div className="space-y-2.5">
      {data.map((d) => {
        const pct = (d.value / ceiling) * 100;
        const isHi = d.highlight ?? false;
        return (
          <div key={d.label} className="grid grid-cols-[1fr_auto] gap-3 items-center">
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className={`text-xs font-medium ${
                    isHi ? "text-slate-900" : "text-slate-600"
                  }`}
                >
                  {d.label}
                </span>
                <span
                  className={`text-xs font-mono font-bold ${
                    isHi ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {d.value}
                  {unit}
                </span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: isHi ? accent : "#cbd5e1",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface AreaChartProps {
  data: { x: string; y: number }[];
  unit?: string;
  accent?: string;
  height?: number;
}

export function AreaChart({
  data,
  unit = "%",
  accent = "#1a1f5e",
  height = 160,
}: AreaChartProps) {
  const width = 600;
  const padding = { top: 20, right: 16, bottom: 32, left: 36 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const max = Math.max(...data.map((d) => d.y));
  const min = Math.min(...data.map((d) => d.y));
  const range = max - min || 1;

  const xStep = innerW / (data.length - 1);

  const points = data.map((d, i) => ({
    x: padding.left + i * xStep,
    y: padding.top + (1 - (d.y - min) / range) * innerH,
    raw: d,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaPath =
    linePath +
    ` L ${points[points.length - 1].x} ${padding.top + innerH}` +
    ` L ${points[0].x} ${padding.top + innerH} Z`;

  // Y axis ticks (0, max/2, max)
  const yTicks = [0, Math.round(max / 2), max];

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        aria-label="Trend chart"
      >
        <defs>
          <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y axis grid lines */}
        {yTicks.map((t) => {
          const y = padding.top + (1 - (t - min) / range) * innerH;
          return (
            <g key={t}>
              <line
                x1={padding.left}
                x2={width - padding.right}
                y1={y}
                y2={y}
                stroke="#e2e8f0"
                strokeDasharray="3 3"
              />
              <text
                x={padding.left - 6}
                y={y + 3}
                textAnchor="end"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
                fill="#94a3b8"
              >
                {t}
                {unit}
              </text>
            </g>
          );
        })}

        {/* Area */}
        <path d={areaPath} fill="url(#area-fill)" />
        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Dots */}
        {points.map((p, i) => {
          const isLast = i === points.length - 1;
          return (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={isLast ? 5 : 3}
                fill={isLast ? accent : "white"}
                stroke={accent}
                strokeWidth="2"
              />
              {isLast && (
                <text
                  x={p.x}
                  y={p.y - 12}
                  textAnchor="end"
                  fontSize="11"
                  fontFamily="ui-monospace, monospace"
                  fontWeight="700"
                  fill={accent}
                >
                  {p.raw.y}
                  {unit}
                </text>
              )}
            </g>
          );
        })}

        {/* X axis labels */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.x}
            y={height - 8}
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            fill="#94a3b8"
          >
            {p.raw.x}
          </text>
        ))}
      </svg>
    </div>
  );
}
