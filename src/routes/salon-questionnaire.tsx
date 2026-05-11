import { createFileRoute } from "@tanstack/react-router";
import { SalonQuestionnaireForm } from "@/components/questionnaire/salon-form";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { LogoIcon } from "@/components/brand/logo";

export const Route = createFileRoute("/salon-questionnaire")({
  head: () => ({
    meta: [
      { title: "Salon Onboarding — BookVSFlow" },
      {
        name: "description",
        content:
          "Fill out the questionnaire to get started with BookVSFlow. Activate your free trial and start accepting Telegram bookings today.",
      },
    ],
  }),
  component: SalonQuestionnairePage,
});

function SalonQuestionnairePage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <LogoIcon className="w-16 h-16" />
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
              Get Started with BookVSFlow
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out this form to activate your free trial. We&apos;ll contact you within 24 hours.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              More bookings. Fewer no-shows.{" "}
              <span className="text-accent font-medium">Smarter business.</span>
            </p>
          </div>

          <SalonQuestionnaireForm />

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
