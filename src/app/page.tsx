import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ConditionsSection from "@/components/sections/ConditionsSection";
import AboutSection from "@/components/sections/AboutSection";
import TreatmentJourneySection from "@/components/sections/TreatmentJourneySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import AppointmentCTASection from "@/components/sections/AppointmentCTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ConditionsSection />
        <AboutSection />
        <TreatmentJourneySection />
        <TestimonialsSection />
        <TechnologySection />
        <AppointmentCTASection />
      </main>
      <Footer />
    </>
  );
}
