import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { FileText, Video, Download, ArrowRight, ShieldCheck, CreditCard, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Resources",
  description: "Access forms, educational materials, insurance information, and new patient resources at Tan Health & Wellness.",
};

const resources = [
  { Icon: FileText, title: "New Patient Forms", desc: "Download and complete intake forms before your first visit to save time.", items: ["Patient Registration Form", "Medical History Form", "HIPAA Consent Form", "Insurance Authorization"], color: "bg-brand-teal" },
  { Icon: ShieldCheck, title: "Insurance Information", desc: "Everything you need to know about coverage, prior authorizations, and billing.", items: ["Insurance plans accepted", "Prior authorization guide", "Billing FAQ", "Financial assistance options"], color: "bg-indigo-500", id: "insurance" },
  { Icon: UserCheck, title: "New Patient Guide", desc: "What to expect at your first appointment and how to prepare.", items: ["What to bring", "What to expect", "Preparing for procedures", "Post-procedure care"], color: "bg-brand-gold", id: "new-patients" },
  { Icon: CreditCard, title: "Billing & Payments", desc: "Understand your billing, make payments, and explore payment plan options.", items: ["Pay your bill online", "Payment plan options", "Explanation of benefits", "Contact billing team"], color: "bg-emerald-600" },
];

const videos = [
  { title: "Understanding Pain Management", duration: "8 min", category: "Education" },
  { title: "What to Expect: Your First Visit", duration: "5 min", category: "New Patients" },
  { title: "Epidural Injections Explained", duration: "12 min", category: "Procedures" },
  { title: "Living With Chronic Pain", duration: "15 min", category: "Wellness" },
  { title: "Spinal Cord Stimulation Overview", duration: "10 min", category: "Procedures" },
  { title: "Physical Therapy for Back Pain", duration: "7 min", category: "Rehabilitation" },
];

export default function PatientResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Patient Resources"
          title="Everything You Need"
          titleHighlight="In One Place"
          subtitle="Forms, educational materials, insurance guides, and more — designed to make your care experience as smooth as possible."
        />

        {/* Resource cards */}
        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {resources.map(({ Icon, title, desc, items, color, id }) => (
                <div key={title} id={id} className="card-premium p-7 flex flex-col scroll-mt-28">
                  <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-5`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-brand-navy text-lg mb-2">{title}</h3>
                  <p className="text-brand-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-col gap-2 flex-1">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-brand-gray-600 hover:text-brand-teal transition-colors cursor-pointer group">
                        <Download size={13} className="text-brand-gray-300 group-hover:text-brand-teal flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Video library */}
            <div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <div className="section-label">Video Library</div>
                  <h2 className="section-title">Educational Videos</h2>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {videos.map(({ title, duration, category }) => (
                  <div key={title} className="card-premium overflow-hidden group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-brand-teal/20 to-brand-navy/30 flex items-center justify-center relative">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Video size={22} className="text-white ml-1" />
                      </div>
                      <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">{duration}</span>
                      <span className="absolute top-3 left-3 bg-brand-teal/90 text-white text-xs px-2.5 py-1 rounded-full font-medium">{category}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-brand-navy group-hover:text-brand-teal transition-colors leading-tight">{title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help CTA */}
            <div className="mt-14 bg-brand-navy rounded-4xl p-10 text-center">
              <h2 className="font-serif text-2xl font-bold text-white mb-3">Can&apos;t find what you need?</h2>
              <p className="text-white/60 mb-7">Our patient care team is happy to assist with any questions about your resources, forms, or insurance.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+17572920515" className="btn-primary shadow-teal-glow">Call Us Now</a>
                <Link href="/contact" className="btn-ghost-white">
                  Send a Message <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
