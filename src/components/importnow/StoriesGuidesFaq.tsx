import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { FAQS, GUIDES, TESTIMONIALS, type GuideArticle } from "@/data/importnow";
import { Reveal, useSmoothScroll } from "./MotionPrimitives";

export function StoriesGuidesFaq() {
  const { scrollTo } = useSmoothScroll();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeGuide, setActiveGuide] = useState<GuideArticle | null>(null);

  return (
    <>
      <section id="testimonials" className="bg-surface-warm py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="section-eyebrow">Client stories</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Heard from the people who made the trip.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, idx) => (
              <Reveal key={item.name} delay={idx * 0.08}>
                <motion.figure
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-xs"
                >
                  <blockquote className="text-base leading-relaxed text-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3.5 border-t border-border pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maritime font-display text-sm font-bold text-maritime-foreground">
                      {item.initials}
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="section-eyebrow">Import guides</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Learn before you import.
              </h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                Practical guides on sourcing, shipping, customs and business ideas from China.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GUIDES.map((guide, idx) => (
              <Reveal key={guide.id} delay={idx * 0.08}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveGuide(guide)}
                  className="group flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-shadow hover:border-primary/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-foreground">
                        {guide.category}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {guide.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-xs text-muted-foreground">{guide.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-surface-warm py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="section-eyebrow">Questions</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Before you import
            </h2>
          </Reveal>

          <div className="mt-12 space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <Reveal key={faq.question} delay={idx * 0.04}>
                  <div className="overflow-hidden rounded-2xl border border-border bg-card">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-bold text-foreground sm:text-lg">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0 text-muted-foreground"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="border-t border-border/70 px-6 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGuide(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-maritime/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-7 shadow-2xl sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {activeGuide.category} · {activeGuide.readTime}
                </span>
                <button
                  type="button"
                  aria-label="Close guide"
                  onClick={() => setActiveGuide(null)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                {activeGuide.title}
              </h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{activeGuide.date}</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {activeGuide.excerpt}
              </p>
              <div className="mt-6 rounded-2xl bg-surface-warm p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                  Key takeaways
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeGuide.takeaways.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveGuide(null);
                    scrollTo("#contact");
                  }}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Get a free sourcing quote
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}