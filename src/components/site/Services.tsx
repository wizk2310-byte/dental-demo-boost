import { Baby, HeartPulse, Siren, Smile, Stethoscope, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    copy: "Cleanings, exams, fillings and gum care that keep small issues from becoming big ones.",
    points: ["Digital X-rays", "Preventive cleanings", "Tooth-coloured fillings"],
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    copy: "Porcelain veneers, professional whitening and bonding designed around your face.",
    points: ["Veneers", "In-office whitening", "Smile design preview"],
  },
  {
    icon: HeartPulse,
    title: "Invisalign & Orthodontics",
    copy: "Discreet clear aligners with 3D scanning — no goopy impressions, no metal brackets.",
    points: ["Free alignment scan", "Average 6–12 months", "Monthly payment plans"],
  },
  {
    icon: Siren,
    title: "Emergency Care",
    copy: "Chipped tooth or sudden pain? We hold same-day slots open every single weekday.",
    points: ["Same-day relief", "Evening triage line", "Walk-ins welcome"],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    copy: "Playful, patient visits that teach little ones to actually look forward to the dentist.",
    points: ["Kid-friendly rooms", "Sealants & fluoride", "Parent stays alongside"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            What we do
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            Complete care under one calm roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine check-ups to full smile makeovers, every treatment is explained in plain
            language before anything begins.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group h-full rounded-[1.75rem] border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Book this treatment
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}

          <Reveal delay={450}>
            <article className="flex h-full flex-col justify-between rounded-[1.75rem] bg-primary p-7 text-primary-foreground shadow-lift">
              <div>
                <h3 className="text-xl font-bold">Not sure what you need?</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                  Book a free 20-minute consultation. We'll examine, photograph and talk you through
                  the options — with no pressure to commit.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request a consult <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}