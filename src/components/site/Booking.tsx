import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  date: z.string().trim().min(1, "Choose a preferred date"),
  reason: z.string().trim().min(5, "Tell us briefly what you need").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Booking() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    form.reset();
    toast.success("Request received — we'll confirm your slot within one business hour.");
  };

  const field = (key: keyof Errors) =>
    errors[key] ? (
      <p className="mt-1.5 text-xs text-destructive">{errors[key]}</p>
    ) : null;

  return (
    <section id="contact" className="scroll-mt-24 bg-sage-soft py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-lift sm:p-10">
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Book a visit
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
                Request your appointment
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Send a request and our front desk will confirm by phone — usually within the hour.
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" name="name" placeholder="Alex Rivera" className="mt-2 h-11 rounded-xl" />
                    {field("name")}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" className="mt-2 h-11 rounded-xl" />
                    {field("phone")}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@email.com" className="mt-2 h-11 rounded-xl" />
                    {field("email")}
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred date</Label>
                    <Input id="date" name="date" type="date" className="mt-2 h-11 rounded-xl" />
                    {field("date")}
                  </div>
                </div>

                <div>
                  <Label htmlFor="reason">Reason for visit</Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    placeholder="Check-up and cleaning, whitening consult, tooth pain…"
                    className="mt-2 rounded-xl"
                  />
                  {field("reason")}
                </div>

                <Button type="submit" variant="cta" size="xl" className="w-full">
                  Request Appointment
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Demo form — no data is stored or sent.
                </p>
              </form>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-[2rem] border border-border bg-card p-7 shadow-soft">
                <h3 className="text-lg font-bold text-foreground">Studio details</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      214 Ashford Park Lane, Suite 3<br />Northfield, CA 94582
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary">
                      (555) 123-4567
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <a
                      href="mailto:hello@brightsmilestudio.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      hello@brightsmilestudio.com
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Mon–Thu 7:30–18:00 · Fri 8:00–16:00
                      <br />
                      Sat 9:00–14:00 · Sun emergency line
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-[image:var(--gradient-hero)] p-6 text-center shadow-soft">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:38px_38px]" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-primary shadow-soft mx-auto">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-base font-bold text-foreground">
                    Free parking on Ashford Lane
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Interactive map placeholder · 4 min from Northfield Station
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}