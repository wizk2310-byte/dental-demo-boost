import { Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  ["Services", "#services"],
  ["Why Choose Us", "#why-us"],
  ["Our Dentists", "#team"],
  ["Smile Gallery", "#gallery"],
  ["Book Online", "#contact"],
];

const hours = [
  ["Mon – Thu", "7:30am – 6:00pm"],
  ["Friday", "8:00am – 4:00pm"],
  ["Saturday", "9:00am – 2:00pm"],
  ["Sunday", "Emergency line only"],
];

export function Footer() {
  return (
    <footer className="bg-teal-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-extrabold">Bright Smile Dental Studio</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Gentle, modern dentistry in the heart of Ashford Park. Accepting new patients of all
              ages.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/25"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase">Quick links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase">Opening hours</h3>
            <ul className="mt-5 space-y-3">
              {hours.map(([d, t]) => (
                <li key={d} className="flex justify-between gap-4 text-sm">
                  <span className="text-primary-foreground/70">{d}</span>
                  <span className="text-right">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase">Visit us</h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-primary-foreground/70">
              <p>
                214 Ashford Park Lane
                <br />
                Suite 3, Northfield, CA 94582
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-primary-foreground">
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:hello@brightsmilestudio.com" className="hover:text-primary-foreground">
                  hello@brightsmilestudio.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bright Smile Dental Studio. Fictional demo site.</p>
          <p>Privacy Policy · Accessibility · Patient Forms</p>
        </div>
      </div>
    </footer>
  );
}