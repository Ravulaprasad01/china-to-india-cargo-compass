import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Ship } from "lucide-react";
import heroPortImg from "@/assets/hero-port.jpg";
import { CORRIDOR_ROUTES } from "@/data/importnow";
import { AnimatedCounter, useSmoothScroll } from "./MotionPrimitives";

const HERO_HUBS = [
  { city: "Shanghai", role: "HQ & Container Port", side: "China" },
  { city: "Yiwu · Foshan", role: "Direct Wholesale Hubs", side: "China" },
  { city: "Nhava Sheva · Chennai", role: "Customs Clearance", side: "India" },
  { city: "Hyderabad", role: "India Desk & Delivery", side: "India" },
] as const;

export function HeroSection() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="home" className="relative overflow-hidden bg-maritime text-maritime-foreground">
      <div className="absolute inset-0">
        <motion.img
          src={heroPortImg}
          alt="Shanghai deep-water container port loading cargo ships for India"
          width={1536}
          height={1024}
          initial={{ scale: 1.07, opacity: 0.72 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-center"
        />
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-maritime-border bg-maritime/65 px-4 py-1.5 font-mono text-xs tracking-wider text-maritime-foreground/90 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              CHINA → INDIA · TRUSTED BY 500+ INDIAN BUSINESSES
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.4rem]"
            >
              Import directly from China.{" "}
              <span className="text-primary">Without the guesswork.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-maritime-muted sm:text-lg"
            >
              Sourcing, factory inspection, shipping and customs, handled end to end by a team
              with its own company in Shanghai. You choose the product. We bring it to your door.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Get a free sourcing quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#journey")}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-maritime-border bg-maritime/55 px-6 py-3.5 text-sm font-semibold text-maritime-foreground backdrop-blur-md transition-colors hover:bg-maritime/85"
              >
                See how it works
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-maritime-border bg-maritime/72 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-maritime-border pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-maritime-muted">
                  Active Trade Corridor
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary">
                  <Ship className="h-3.5 w-3.5" />
                  Door-to-door
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {HERO_HUBS.map((hub, idx) => (
                  <motion.div
                    key={hub.city}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + idx * 0.08 }}
                    className="flex items-center justify-between rounded-xl border border-maritime-border/70 bg-maritime/65 px-4 py-3"
                  >
                    <div>
                      <p className="font-display text-sm font-bold text-maritime-foreground">
                        {hub.city}
                      </p>
                      <p className="text-xs text-maritime-muted">{hub.role}</p>
                    </div>
                    <span className="rounded-full border border-maritime-border px-2.5 py-0.5 font-mono text-[11px] text-maritime-muted">
                      {hub.side}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-2 gap-6 border-t border-maritime-border pt-8 sm:grid-cols-4"
        >
          <div>
            <p className="font-display text-3xl font-extrabold text-maritime-foreground sm:text-4xl">
              <AnimatedCounter target={500} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-maritime-muted">Businesses served</p>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold text-maritime-foreground sm:text-4xl">
              <AnimatedCounter target={83} suffix="K+" />
            </p>
            <p className="mt-1 text-sm text-maritime-muted">Community on Instagram</p>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold text-maritime-foreground sm:text-4xl">
              1 pc
            </p>
            <p className="mt-1 text-sm text-maritime-muted">MOQ on many products</p>
          </div>
          <div className="flex items-end justify-between gap-2">
            <div>
              <p className="font-display text-3xl font-extrabold text-maritime-foreground sm:text-4xl">
                Shanghai
              </p>
              <p className="mt-1 text-sm text-maritime-muted">Own registered company</p>
            </div>
            <button
              type="button"
              aria-label="Scroll to services"
              onClick={() => scrollTo("#services")}
              className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-maritime-border text-maritime-muted transition-colors hover:border-primary hover:text-primary sm:inline-flex"
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-maritime-border bg-maritime/90 py-3.5 backdrop-blur-md">
        <div className="animate-corridor-marquee">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex items-center gap-8 pr-8">
              {CORRIDOR_ROUTES.map((route) => (
                <span
                  key={`${loop}-${route.from}-${route.to}`}
                  className="inline-flex items-center gap-2.5 whitespace-nowrap font-mono text-xs tracking-wide text-maritime-muted"
                >
                  <span className="text-maritime-foreground">{route.from}</span>
                  <span className="text-primary">→</span>
                  <span>{route.to}</span>
                  <span className="ml-5 h-1 w-1 rounded-full bg-maritime-border" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}