import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";

const team = [
  {
    img: d1,
    name: "Dr. Elena Marsh",
    role: "Founder & Cosmetic Dentist",
    creds: "DDS, University of Michigan · AACD Accredited",
    bio: "Elena founded Bright Smile in 2008 with one rule: nobody leaves without understanding their own mouth. She leads our veneer and smile-design cases.",
  },
  {
    img: d2,
    name: "Dr. Julian Reyes",
    role: "Restorative & Implant Dentist",
    creds: "DMD, Tufts · Fellow, ICOI",
    bio: "Julian handles crowns, bridges and implants with a famously light touch, and mills same-day restorations in our on-site lab.",
  },
  {
    img: d3,
    name: "Dr. Mei Tanaka",
    role: "Pediatric Dentist & Orthodontics",
    creds: "DDS, UCLA · Invisalign Diamond Provider",
    bio: "Mei turns first visits into a good memory. She also guides most of our teen and adult clear-aligner treatment plans.",
  },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Meet the team
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            The dentists you'll actually see
          </h2>
          <p className="mt-4 text-muted-foreground">
            No rotating locums. You'll be matched with one dentist who follows your care from first
            visit onward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 110} className="h-full">
              <article className="group h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="overflow-hidden bg-sage-soft">
                  <img
                    src={m.img}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
                  <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" />
                    {m.creds}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}