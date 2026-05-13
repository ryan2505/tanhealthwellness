import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BookingForm from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Schedule your appointment at Tan Health & Wellness. Same-week availability. Most insurance accepted.",
};

export default function BookAppointmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Book Appointment"
          title="Start Your"
          titleHighlight="Recovery Today"
          subtitle="Complete the form below and our team will contact you within 2 business hours to confirm your appointment."
        />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
