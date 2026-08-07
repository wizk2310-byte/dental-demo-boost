import { Award, CalendarClock, Cpu, Leaf, Wallet } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const reasons = [
  {
    icon: Award,
    title: "Experienced dentists",
    copy: "A team with 40+ combined years and ongoing training in cosmetic and restorative care.",
  },
  {
    icon: Cpu,
    title: "Modern technology",
    copy: "3D intraoral scanning, low-dose digital X-rays and same-day crowns milled in-house.",
  },
  {
    icon: Leaf,
    title: "Comfortable environment",
    copy: "Noise-cancelling headphones, weighted blankets and sedation options for anxious patients.",
  },
  {
    icon: CalendarClock,
    title: "Flexible scheduling",
    copy: "Early-morning, evening and Saturday appointments so care fits around real life.",
  },
  {
    icon: Wallet,
    title: "Insurance friendly",
    copy: "We bill most major plans directly and offer interest-free membership payment plans.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-sage-soft py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Why patients stay
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
              Dentistry that feels reassuring, start to finish
            </h2>
            <p className="mt-4 text-muted-foreground">
              We built the practice we wished existed: unhurried appointments, honest treatment
              plans, and a team that remembers your name and your coffee order.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["12k+", "Happy patients"],
                ["4.9★", "Average rating"],
                ["98%", "Would refer a friend"],
                ["0%", "Interest payment plans"],
              ].map(([stat, label]) => (
                <div key={label} className="rounded-3xl bg-card/70 p-5 backdrop-blur">
                  <dt className="font-display text-2xl font-extrabold text-primary">{stat}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80} className="h-full">
                <div className="flex h-full gap-4 rounded-[1.75rem] border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary/35 text-blush-foreground">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}