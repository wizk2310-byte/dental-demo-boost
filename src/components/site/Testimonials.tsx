import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Priya N.",
    detail: "Invisalign patient",
    stars: 5,
    text: "I avoided dentists for nine years out of pure anxiety. Dr. Marsh talked me through every single step. Eleven months later my aligners are done and I can't stop smiling.",
  },
  {
    name: "Marcus T.",
    detail: "Same-day crown",
    stars: 5,
    text: "Cracked a molar on a Tuesday morning, was seen by lunchtime and walked out with a permanent crown the same afternoon. Genuinely astonishing.",
  },
  {
    name: "The Okafor family",
    detail: "Pediatric care",
    stars: 5,
    text: "Our six-year-old asks when she can go back to the dentist. That sentence tells you everything about how Dr. Tanaka handles kids.",
  },
  {
    name: "Hannah L.",
    detail: "Veneers",
    stars: 5,
    text: "They previewed the result digitally before touching a tooth. The final smile looks like mine, just the best version — nothing fake about it.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Patient stories
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            Loved by 12,000 local smiles
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Quote className="h-7 w-7 text-secondary" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85 sm:text-base">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-foreground">{r.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{r.detail}</p>
                  </div>
                  <div className="flex shrink-0">
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}