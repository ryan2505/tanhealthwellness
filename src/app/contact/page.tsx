import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import AppointmentCTASection from "@/components/sections/AppointmentCTASection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Tan Health & Wellness. Call, email, or visit us at one of our convenient locations.",
};

const locations = [
  { name: "Tan Health & Wellness", address: "22904 Lyden Drive, Suite 102", city: "Estero, FL 33928", phone: "(757) 292-0515", hours: "Mon & Thu 2–5PM · Sat 1–4PM" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Contact"
          title="We're Here"
          titleHighlight="To Help You"
          subtitle="Reach out by phone, email, or visit us at any of our convenient clinic locations."
        />

        {/* Locations */}
        <section className="section-padding bg-brand-cream">
          <div className="container-premium">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {locations.map((loc) => (
                <div key={loc.name} className="card-premium p-7">
                  <h3 className="font-serif font-bold text-brand-navy text-xl mb-4">{loc.name}</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-brand-gray-500">
                        <p>{loc.address}</p>
                        <p>{loc.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-brand-teal flex-shrink-0" />
                      <a href={`tel:${loc.phone}`} className="text-sm text-brand-gray-500 hover:text-brand-teal transition-colors">{loc.phone}</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-brand-gray-500">{loc.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick contact */}
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { Icon: Phone, label: "Call Us", value: "(757) 292-0515", href: "tel:+17572920515", cta: "Call Now" },
                { Icon: Mail, label: "Email Us", value: "tanhealthmed@gmail.com", href: "mailto:tanhealthmed@gmail.com", cta: "Send Email" },
                { Icon: Clock, label: "Office Hours", value: "Mon & Thu 2–5PM · Sat 1–4PM", href: "/book-appointment", cta: "Book Online" },
              ].map(({ Icon, label, value, href, cta }) => (
                <a
                  key={label}
                  href={href}
                  className="card-premium p-7 text-center group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-teal group-hover:shadow-teal-glow-sm transition-all duration-300">
                    <Icon size={24} className="text-brand-teal group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-brand-gray-400 text-xs font-semibold tracking-widest uppercase mb-1">{label}</p>
                  <p className="text-brand-navy font-semibold text-sm mb-3">{value}</p>
                  <span className="text-brand-teal text-xs font-semibold">{cta} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <AppointmentCTASection />
      </main>
      <Footer />
    </>
  );
}
