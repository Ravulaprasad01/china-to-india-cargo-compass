import { motion } from "framer-motion";
import { ArrowRight, Calendar, Check, MapPin } from "lucide-react";
import cantonFairImg from "@/assets/canton-fair.jpg";
import foshanFurnitureImg from "@/assets/foshan-furniture.jpg";
import { DELIVERIES, TRIP_CITIES, TRIP_INCLUSIONS } from "@/data/importnow";
import { Reveal, useSmoothScroll } from "./MotionPrimitives";

export function TripsAndDeliveries() {
  const { scrollTo } = useSmoothScroll();
  const [featuredDelivery, ...otherDeliveries] = DELIVERIES;

  return (
    <>
      <section id="trips" className="bg-surface-warm py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="section-eyebrow">Business trips to China</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Your business trip doesn't have to feel like work.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground lg:col-span-5">
              Guided trips to the Canton Fair, wholesale markets and factories you choose. Our
              clients often tell us it felt like a personal trip, not a business tour.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="group relative h-full min-h-[380px] overflow-hidden rounded-3xl bg-maritime">
                <img
                  src={cantonFairImg}
                  alt="Canton Fair trade exhibition pavilion in Guangzhou"
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="hero-scrim absolute inset-0" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-maritime-foreground sm:p-10">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-maritime-border bg-maritime/70 px-3.5 py-1 font-mono text-xs backdrop-blur-md">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    Canton Fair · Guangzhou
                  </span>
                  <h3 className="mt-4 max-w-lg font-display text-2xl font-bold sm:text-3xl">
                    Meet factories face to face. We handle everything else.
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-maritime-muted sm:text-base">
                    Walk the world's biggest trade fair with a guide who speaks the language, then
                    visit the factories you shortlist.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {TRIP_CITIES.map((city) => (
                      <span
                        key={city}
                        className="rounded-full border border-maritime-border bg-maritime/65 px-3 py-1 font-mono text-xs text-maritime-foreground/90 backdrop-blur-sm"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col justify-between gap-6 lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-7">
                <h3 className="font-display text-xl font-bold text-foreground">What's included</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {TRIP_INCLUSIONS.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-7">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Calendar className="h-4 w-4" />
                  Next departures
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-surface-warm p-4">
                    <p className="font-display text-lg font-bold text-foreground">Spring</p>
                    <p className="mt-1 text-xs text-muted-foreground">Canton Fair · April–May</p>
                  </div>
                  <div className="rounded-2xl bg-surface-warm p-4">
                    <p className="font-display text-lg font-bold text-foreground">Autumn</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Canton Fair · October–November
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join the next trip
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="deliveries" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="section-eyebrow">Recently delivered</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Another container unloaded, another happy client.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            {featuredDelivery && (
              <Reveal className="lg:col-span-6">
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={foshanFurnitureImg}
                      alt="Luxury Indian villa furnished directly from Foshan, China"
                      loading="lazy"
                      width={1536}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                        {featuredDelivery.route}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                        {featuredDelivery.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {featuredDelivery.description}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featuredDelivery.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-surface-warm px-3 py-1 font-mono text-xs text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            )}

            <div className="grid gap-5 lg:col-span-6">
              {otherDeliveries.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.08}>
                  <motion.article
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                        {item.route}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-4 flex shrink-0 flex-wrap gap-2 sm:mt-0 sm:flex-col sm:items-end">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-surface-warm px-3 py-1 font-mono text-xs text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}