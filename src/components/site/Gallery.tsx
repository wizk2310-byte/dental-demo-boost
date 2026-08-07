import { Reveal } from "@/components/Reveal";
import s1 from "@/assets/smile-1.jpg";
import s2 from "@/assets/smile-2.jpg";
import s3 from "@/assets/smile-3.jpg";
import s4 from "@/assets/smile-4.jpg";
import s5 from "@/assets/smile-5.jpg";
import s6 from "@/assets/smile-6.jpg";

const shots = [
  { img: s1, label: "Porcelain veneers", sub: "6 upper units, 3 weeks" },
  { img: s2, label: "Invisalign", sub: "9-month aligner case" },
  { img: s3, label: "Full restoration", sub: "Implants & crowns" },
  { img: s4, label: "Professional whitening", sub: "Single in-office visit" },
  { img: s5, label: "Our treatment suites", sub: "Quiet, light-filled rooms" },
  { img: s6, label: "Reception & lounge", sub: "Where every visit starts" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Smile gallery
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
            Real results, real people
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of recent work from our studio, shared with patient permission.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <figure className="group relative overflow-hidden rounded-[1.75rem] shadow-soft">
                <img
                  src={s.img}
                  alt={s.label}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-linear-to-t from-teal-deep/90 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-primary-foreground">{s.label}</p>
                  <p className="text-xs text-primary-foreground/80">{s.sub}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}