import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Footer } from "@/components/site/Footer";

const title = "Bright Smile Dental Studio | Gentle Modern Dentistry";
const description =
  "Comfortable, modern dental care in Northfield — general, cosmetic, Invisalign, emergency and pediatric dentistry. Same-week appointments, insurance friendly.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Team />
        <Testimonials />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
