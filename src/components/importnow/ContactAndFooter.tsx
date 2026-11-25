import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { NAV_LINKS, QUOTE_BUDGETS, QUOTE_CATEGORIES } from "@/data/importnow";
import { Reveal, useSmoothScroll } from "./MotionPrimitives";

export function ContactAndFooter() {
  const { scrollTo } = useSmoothScroll();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState<string>(QUOTE_CATEGORIES[0]);
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState<string>(QUOTE_BUDGETS[1]);
  const [details, setDetails] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanCity = city.trim();
    const cleanQty = quantity.trim();
    const cleanDetails = details.trim();

    if (!cleanName) {
      setError("Please enter your name.");
      return;
    }
    if (!cleanCity) {
      setError("Please enter your city.");
      return;
    }
    if (cleanQty && Number.isFinite(Number(cleanQty)) && Number(cleanQty) <= 0) {
      setError("Quantity must be greater than zero.");
      return;
    }

    setError(null);
    const lines = [
      "Hi ImportNow, I'd like a free sourcing quote:",
      `Name: ${cleanName}`,
      `City: ${cleanCity}`,
      `Category: ${category}`,
      cleanQty ? `Approx. quantity: ${cleanQty}` : null,
      `Budget: ${budget}`,
      cleanDetails ? `Details: ${cleanDetails}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/919989724320?text=${encodeURIComponent(lines.join("\n"))}`;
    setSubmittedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="contact" className="bg-maritime py-24 text-maritime-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <p className="section-eyebrow">Start importing</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Tell us what you want to import. We'll take it from there.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-maritime-muted">
                Share the product and quantity. You'll get supplier options, landed cost and
                timelines, free of charge.
              </p>

              <div className="mt-9 space-y-4">
                <a
                  href="tel:+919989724320"
                  className="flex items-center gap-4 rounded-2xl border border-maritime-border bg-maritime-foreground/[0.04] p-4 transition-colors hover:border-primary/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-maritime-muted">Call or WhatsApp</p>
                    <p className="font-display text-base font-bold text-maritime-foreground">
                      +91 99897 24320
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/importnow.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-maritime-border bg-maritime-foreground/[0.04] p-4 transition-colors hover:border-primary/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-maritime-muted">Instagram</p>
                    <p className="font-display text-base font-bold text-maritime-foreground">
                      @importnow.in
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-maritime-border bg-maritime-foreground/[0.04] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-maritime-muted">Offices</p>
                    <p className="font-display text-base font-bold text-maritime-foreground">
                      Hyderabad, India · Shanghai, China
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-border bg-card p-7 text-foreground shadow-2xl sm:p-9"
              >
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Get a free sourcing quote
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-name" className="text-xs font-semibold text-foreground">
                      Your name
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ravi Kumar"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-city" className="text-xs font-semibold text-foreground">
                      City
                    </label>
                    <input
                      id="quote-city"
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Hyderabad"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="quote-category" className="text-xs font-semibold text-foreground">
                    What do you want to import?
                  </label>
                  <select
                    id="quote-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    {QUOTE_CATEGORIES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-qty" className="text-xs font-semibold text-foreground">
                      Approx. quantity
                    </label>
                    <input
                      id="quote-qty"
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 1 container or 50 units"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-budget" className="text-xs font-semibold text-foreground">
                      Budget
                    </label>
                    <select
                      id="quote-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    >
                      {QUOTE_BUDGETS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="quote-details" className="text-xs font-semibold text-foreground">
                    Details
                  </label>
                  <textarea
                    id="quote-details"
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Share product specs, photos reference, or target delivery date..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>

                {error && (
                  <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                    {error}
                  </p>
                )}

                {submittedUrl && (
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-surface-warm px-4 py-3 text-xs text-foreground">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-whatsapp" />
                      WhatsApp quote prepared.
                    </span>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary underline"
                    >
                      Open again
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Send on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Opens WhatsApp with your details filled in. We usually reply within a few hours.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-maritime-border bg-maritime py-10 text-maritime-muted">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-display text-base font-extrabold tracking-tight text-maritime-foreground">
              IMPORTNOW
            </p>
            <p className="mt-1 text-xs">
              Operated by Shanghai Shengqiao Chain Trading Co., Ltd. · Hyderabad & Shanghai
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="transition-colors hover:text-maritime-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/919989724320"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground shadow-xl"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </motion.a>
    </>
  );
}