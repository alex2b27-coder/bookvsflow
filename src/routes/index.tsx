import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Industries } from "@/components/landing/industries";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BookVSFlow — Smart Booking System for Service Professionals" },
      {
        name: "description",
        content:
          "All-in-one booking solution for any type of service business. More bookings. Fewer no-shows. Smarter business.",
      },
      { property: "og:title", content: "BookVSFlow — Smart Booking System for Service Professionals" },
      {
        property: "og:description",
        content:
          "All-in-one booking solution for any type of service business. More bookings. Fewer no-shows. Smarter business.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Industries />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
