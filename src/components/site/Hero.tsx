import { CalendarCheck, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import heroClinic from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-sage/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Now welcoming new patients
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold text-foreground sm:text-5xl lg:text-6xl">
            Comfortable, modern dental care for the whole family
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Bright Smile Dental Studio, gentle expertise meets calm, spa-inspired surroundings.
            Same-week appointments, transparent pricing, and dentists who genuinely listen.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="cta" size="xl" asChild>
              <a href="#contact">
                <CalendarCheck /> Book an Appointment
              </a>
            </Button>
            <Button variant="quiet" size="xl" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9 from 680+ reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> Most insurance accepted
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-lift">
              <img
                src={heroClinic}
                alt="The bright, plant-filled reception area at Bright Smile Dental Studio"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-3xl border border-border bg-card/95 px-5 py-4 shadow-soft backdrop-blur sm:left-8">
              <p className="font-display text-2xl font-extrabold text-primary">18+ yrs</p>
              <p className="text-xs text-muted-foreground">caring for our neighbourhood</p>
            </div>
            <div className="absolute -top-6 right-4 hidden rounded-3xl border border-border bg-card/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <p className="font-display text-2xl font-extrabold text-primary">Same week</p>
              <p className="text-xs text-muted-foreground">appointments available</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}