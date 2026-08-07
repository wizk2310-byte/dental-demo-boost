import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#team", label: "Our Dentists" },
  { href: "#gallery", label: "Smile Gallery" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 3c-1.4 0-2.1.6-3.4.6C6.6 3.6 5 5 5 7.7c0 3.7 1.4 6.4 2.2 9 .5 1.7.8 4.3 2.2 4.3 1.3 0 1.2-2.6 2.6-2.6s1.3 2.6 2.6 2.6c1.4 0 1.7-2.6 2.2-4.3.8-2.6 2.2-5.3 2.2-9C19 5 17.4 3.6 15.4 3.6 14.1 3.6 13.4 3 12 3Z" />
            </svg>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-extrabold text-foreground">
              Bright Smile
            </span>
            <span className="block text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
              Dental Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="hidden items-center gap-2 text-sm font-medium text-primary md:inline-flex"
          >
            <Phone className="h-4 w-4" /> (555) 123-4567
          </a>
          <Button variant="cta" size="lg" className="hidden sm:inline-flex" asChild>
            <a href="#contact">Book an Appointment</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-primary xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur xl:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-sage-soft"
              >
                {l.label}
              </a>
            ))}
            <Button variant="cta" size="lg" className="mt-3" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Book an Appointment
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}