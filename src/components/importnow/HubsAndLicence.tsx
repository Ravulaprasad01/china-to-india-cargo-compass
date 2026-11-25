import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { INDUSTRY_HUBS } from "@/data/importnow";
import { Reveal } from "./MotionPrimitives";

const LICENCE_POINTS = [
  {
    bold: "Registered business licence",
    rest: " issued in Shanghai, China",
  },
  {
    bold: "Chinese company bank account",
    rest: ", so payments to factories are safe and traceable",
  },
  {
    bold: "Team on the ground",
    rest: " for factory visits, quality checks and market trips",
  },
  {
    bold: "Indian founder on both sides",
    rest: ": talk to us in Telugu, Hindi or English",
  },
] as const;

const LICENCE_META = [
  { label: "Company", value: "Shanghai Shengqiao Chain Trading Co., Ltd." },
  { label: "Location", value: "Shanghai, People's Republic of China" },
  { label: "Scope", value: "Supply chain, sourcing & international trade" },
  { label: "Serving", value: "Importers across India" },
] as const;

export function HubsAndLicence() {
  return (
    <>
      <section id="products" className="bg-surface-warm py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="section-eyebrow">What we import</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                China has a market for every industry. We know each one.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5">
              Each industry has its own manufacturing hub. We take you straight to the source.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_HUBS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.06}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-xs transition-shadow hover:border-primary/40 hover:shadow-lg"
                >
                  <div>
                    <span className="inline-block rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                      {item.hub}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 border-t border-border pt-4 font-mono text-xs font-medium text-foreground">
                    {item.highlight}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="licence" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="section-eyebrow">Officially in China</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Many claim an office in China. We have the licence.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                ImportNow operates through its own registered company in Shanghai,{" "}
                <strong className="font-semibold text-foreground">
                  Shanghai Shengqiao Chain Trading Co., Ltd.
                </strong>{" "}
                That means we can sign contracts with factories, pay suppliers locally and stand
                behind every order.
              </p>

              <ul className="mt-8 space-y-4">
                {LICENCE_POINTS.map((item) => (
                  <li key={item.bold} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <strong className="font-semibold text-foreground">{item.bold}</strong>
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-6">
              <motion.div
                whileHover={{ y: -4, rotate: -0.4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl border border-maritime-border bg-maritime p-8 text-maritime-foreground shadow-2xl sm:p-10"
              >
                <div className="flex items-start justify-between border-b border-maritime-border pb-6">
                  <div>
                    <p className="font-display text-2xl font-bold tracking-wider text-seal-gold">
                      营业执照
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-maritime-muted">
                      BUSINESS LICENCE
                    </p>
                  </div>
                  <ShieldCheck className="h-8 w-8 text-seal-gold" />
                </div>

                <dl className="mt-6 space-y-4">
                  {LICENCE_META.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 border-b border-maritime-border/60 pb-3 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <dt className="font-mono text-xs uppercase tracking-wider text-maritime-muted">
                        {row.label}
                      </dt>
                      <dd className="text-sm font-semibold text-maritime-foreground sm:text-right">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 flex items-center justify-between">
                  <span className="font-mono text-xs text-maritime-muted">
                    VERIFIED ENTITY · PRC
                  </span>
                  <div className="flex h-20 w-20 -rotate-6 flex-col items-center justify-center rounded-full border-2 border-primary/80 text-center font-mono text-[9px] font-bold leading-tight tracking-wider text-primary">
                    <span>SHANGHAI</span>
                    <span>SHENGQIAO</span>
                    <span>TRADING</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}