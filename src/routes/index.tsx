import { createFileRoute } from "@tanstack/react-router";
import {
  ScrollProgressBar,
  SmoothScrollProvider,
} from "@/components/importnow/MotionPrimitives";
import { Navbar } from "@/components/importnow/Navbar";
import { HeroSection } from "@/components/importnow/HeroSection";
import { ServicesAndJourney } from "@/components/importnow/ServicesAndJourney";
import { HubsAndLicence } from "@/components/importnow/HubsAndLicence";
import { TripsAndDeliveries } from "@/components/importnow/TripsAndDeliveries";
import { StoriesGuidesFaq } from "@/components/importnow/StoriesGuidesFaq";
import { ContactAndFooter } from "@/components/importnow/ContactAndFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ImportNow — Import Directly from China to India" },
      {
        name: "description",
        content:
          "Sourcing, factory inspection, shipping and customs handled end to end by a team with its own registered company in Shanghai.",
      },
      { property: "og:title", content: "ImportNow — Import Directly from China to India" },
      {
        property: "og:description",
        content:
          "Sourcing, factory inspection, shipping and customs handled end to end by a team with its own registered company in Shanghai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesAndJourney />
        <HubsAndLicence />
        <TripsAndDeliveries />
        <StoriesGuidesFaq />
        <ContactAndFooter />
      </main>
    </SmoothScrollProvider>
  );
}
