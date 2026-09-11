import type { Plan as PlanData } from "@/data/projects";

/* Tier B hand-built SVG: a schematic plan drawn from each project's room data. */
export default function Plan({ plan, title, className }: { plan: PlanData; title: string; className?: string }) {
  const pad = 6;
  const foot = 10;
  const vw = plan.w + pad * 2;
  const vh = plan.h + pad * 2 + foot;
  const line = { stroke: "var(--color-plan-line)" };

  return (
    <svg
      viewBox={`0 0 ${vw} ${vh}`}
      role="img"
      aria-label={`Schematic plan of ${title}`}
      className={className}
      style={{ background: "var(--color-paper)" }}
    >
      <g transform={`translate(${pad} ${pad})`}>
        {plan.rooms.map((r, i) => (
          <g key={i}>
            <rect
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              vectorEffect="non-scaling-stroke"
              style={{ ...line, strokeWidth: 1, fill: r.open ? "var(--color-plan-open)" : "var(--color-plan-fill)" }}
            />
            {r.label && (
              <text
                x={r.x + 1.8}
                y={r.y + 4.2}
                style={{ fill: "var(--color-ink-2)", fontFamily: "var(--font-mono)", fontSize: 2.4 }}
              >
                {r.label}
              </text>
            )}
          </g>
        ))}
        <rect
          x={0}
          y={0}
          width={plan.w}
          height={plan.h}
          vectorEffect="non-scaling-stroke"
          style={{ ...line, strokeWidth: 2.5, fill: "none" }}
        />
        {/* north point */}
        <g transform={`translate(${plan.w - 3} ${plan.h + 3})`}>
          <path d="M0 7 L0 1" vectorEffect="non-scaling-stroke" style={{ ...line, strokeWidth: 1 }} />
          <path d="M-1.4 2.6 L0 0 L1.4 2.6 Z" style={{ fill: "var(--color-plan-line)" }} />
          <text x={-6} y={6.6} style={{ fill: "var(--color-ink-2)", fontFamily: "var(--font-mono)", fontSize: 2.4 }}>
            N
          </text>
        </g>
      </g>
    </svg>
  );
}
