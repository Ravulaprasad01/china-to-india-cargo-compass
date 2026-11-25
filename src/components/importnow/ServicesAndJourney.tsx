import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Anchor, CheckCircle2, Pause, Play, Ship } from "lucide-react";
import { JOURNEY_STAGES, SERVICES } from "@/data/importnow";
import { Reveal } from "./MotionPrimitives";

const MAP_NODES = [
  { x: 406, y: 74, label: "Yiwu / Foshan", dy: -12 },
  { x: 368, y: 112, label: "Factory Floor", dy: 16 },
  { x: 444, y: 132, label: "Shanghai Port", dy: 18 },
  { x: 300, y: 238, label: "Malacca Strait", dy: 20 },
  { x: 152, y: 194, label: "Chennai Port", dy: 18 },
  { x: 102, y: 148, label: "Hyderabad", dy: -12 },
] as const;

export function ServicesAndJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % JOURNEY_STAGES.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [autoPlay]);

  const activeStage = JOURNEY_STAGES[activeIndex] ?? JOURNEY_STAGES[0];
  const activeNode = MAP_NODES[activeIndex] ?? MAP_NODES[0];

  return (
    <>
      <section id="services" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="section-eyebrow">End-to-end imports</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                One team from the factory floor to your front door.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5">
              Anyone can say they import from China. What you actually need is a smooth process,
              clear communication and a shipment that arrives safely.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Reveal key={service.num} delay={index * 0.06}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:border-primary/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-primary">
                        {service.num}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-primary" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 h-[2px] w-10 bg-border transition-all duration-300 group-hover:w-full group-hover:bg-primary/60" />
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="relative overflow-hidden bg-maritime py-24 text-maritime-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-eyebrow">How it works</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Watch your order travel from China to India.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setAutoPlay((prev) => !prev)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-maritime-border bg-maritime/70 px-4 py-2 font-mono text-xs text-maritime-foreground transition-colors hover:border-primary"
            >
              {autoPlay ? <Pause className="h-3.5 w-3.5 text-primary" /> : <Play className="h-3.5 w-3.5 text-primary" />}
              {autoPlay ? "Live route playing" : "Resume route"}
            </button>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="space-y-2.5 lg:col-span-5">
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => {
                      setAutoPlay(false);
                      setActiveIndex(idx);
                    }}
                    className={`group flex w-full cursor-pointer items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary/70 bg-maritime-foreground/8"
                        : "border-maritime-border/60 bg-transparent hover:border-maritime-border hover:bg-maritime-foreground/4"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "border border-maritime-border text-maritime-muted"
                      }`}
                    >
                      {stage.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-base font-bold text-maritime-foreground">
                          {stage.title}
                        </h3>
                        <span className="font-mono text-[11px] text-maritime-muted">
                          {stage.dayLabel}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-maritime-muted">
                        {stage.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:sticky lg:top-28 lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-maritime-border bg-maritime-foreground/[0.04] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-maritime-border pb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                    <span className="font-mono text-xs uppercase tracking-widest text-maritime-muted">
                      Live shipment view
                    </span>
                  </div>
                  <div className="flex items-center gap-4 font-mono text-xs">
                    <span className="text-maritime-muted">
                      Origin: <strong className="text-maritime-foreground">Shanghai</strong>
                    </span>
                    <span className="text-maritime-muted">
                      Destination: <strong className="text-maritime-foreground">Chennai / India</strong>
                    </span>
                  </div>
                </div>

                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-maritime-border/70 bg-maritime">
                  <svg
                    viewBox="0 0 540 310"
                    className="h-full w-full"
                    role="img"
                    aria-label="Animated maritime shipping route from Shanghai, China to India"
                  >
                    <defs>
                      <pattern id="sea-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                        <path
                          d="M 36 0 L 0 0 0 36"
                          fill="none"
                          stroke="currentColor"
                          strokeOpacity="0.07"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="540" height="310" fill="url(#sea-grid)" />

                    {/* Stylized Asia-India-China coastal silhouette bands */}
                    <path
                      d="M 35 60 Q 120 40 190 95 L 155 215 Q 115 205 90 150 L 35 125 Z"
                      fill="currentColor"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M 325 32 Q 435 28 490 92 L 455 170 Q 385 162 340 115 Z"
                      fill="currentColor"
                      fillOpacity="0.08"
                    />
                    <text x="64" y="92" fill="currentColor" fillOpacity="0.35" fontSize="10" fontFamily="monospace">
                      INDIA
                    </text>
                    <text x="454" y="54" fill="currentColor" fillOpacity="0.35" fontSize="10" fontFamily="monospace">
                      CHINA
                    </text>

                    {/* Base sea lane */}
                    <path
                      d="M 438 126 C 425 210, 358 258, 300 238 C 242 218, 200 232, 152 194 C 132 178, 118 162, 102 148"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="2"
                      strokeDasharray="5 6"
                    />

                    {/* Animated active route progress */}
                    <motion.path
                      d="M 438 126 C 425 210, 358 258, 300 238 C 242 218, 200 232, 152 194 C 132 178, 118 162, 102 148"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0.08 }}
                      animate={{ pathLength: activeStage?.progress ?? 0.1 }}
                      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Port waypoints */}
                    {MAP_NODES.map((node, i) => (
                      <g key={node.label}>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={i === activeIndex ? 6 : 3.5}
                          fill={i <= activeIndex ? "var(--primary)" : "currentColor"}
                          fillOpacity={i <= activeIndex ? 1 : 0.35}
                        />
                        <text
                          x={node.x}
                          y={node.y + node.dy}
                          textAnchor="middle"
                          fill="currentColor"
                          fillOpacity={i === activeIndex ? 0.95 : 0.45}
                          fontSize="10"
                          fontFamily="monospace"
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}

                    {/* Pulsing active vessel beacon */}
                    <motion.circle
                      animate={{ cx: activeNode.x, cy: activeNode.y, r: [10, 20, 10], opacity: [0.55, 0.1, 0.55] }}
                      transition={{
                        cx: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                        cy: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                        r: { duration: 2.2, repeat: Infinity },
                        opacity: { duration: 2.2, repeat: Infinity },
                      }}
                      fill="var(--primary)"
                    />
                  </svg>
                </div>

                <AnimatePresence mode="wait">
                  {activeStage && (
                    <motion.div
                      key={activeStage.step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 grid gap-4 rounded-2xl border border-maritime-border bg-maritime/80 p-5 sm:grid-cols-3"
                    >
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-maritime-muted">
                          Current milestone
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 font-display text-sm font-bold text-maritime-foreground">
                          <Ship className="h-4 w-4 text-primary" />
                          {activeStage.status}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-maritime-muted">
                          Location
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-maritime-foreground">
                          <Anchor className="h-3.5 w-3.5 text-maritime-muted" />
                          {activeStage.location}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-maritime-muted">
                          Timeline
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 font-mono text-sm font-bold text-primary">
                          <CheckCircle2 className="h-4 w-4" />
                          {activeStage.dayLabel}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}