import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Explore the full range of advanced treatments and procedures available at Tan Health & Wellness.",
};

const treatments = [
  {
    category: "Interventional Pain Procedures",
    items: [
      { title: "Epidural Steroid Injections", duration: "30–45 min", desc: "Image-guided steroid injections directly into the epidural space to reduce inflammation and relieve spinal pain.", benefits: ["Fast-acting relief", "Minimally invasive", "Fluoroscopy-guided precision"] },
      { title: "Nerve Block Therapy", duration: "20–30 min", desc: "Targeted anesthetic and anti-inflammatory injections to block pain signals from specific nerve pathways.", benefits: ["Immediate pain relief", "Diagnostic value", "Multiple nerve targets"] },
      { title: "Radiofrequency Ablation", duration: "45–60 min", desc: "Heat energy delivered to nerve tissue to interrupt pain signals — providing relief lasting 6–18 months.", benefits: ["Long-lasting results", "Outpatient procedure", "Repeatable"] },
      { title: "Spinal Cord Stimulation", duration: "Trial: 1 week", desc: "An implanted device delivers gentle electrical pulses to the spinal cord, masking pain signals before they reach the brain.", benefits: ["Chronic pain relief", "Adjustable therapy", "FDA-approved"] },
    ],
  },
  {
    category: "Regenerative Medicine",
    items: [
      { title: "Platelet-Rich Plasma (PRP)", duration: "60–90 min", desc: "Your own blood is processed to concentrate platelets and growth factors, then injected to accelerate healing.", benefits: ["Natural healing", "No downtime", "Tissue regeneration"] },
      { title: "Stem Cell Therapy", duration: "2–3 hours", desc: "Advanced regenerative therapy using stem cells to repair damaged tissue and promote long-term recovery.", benefits: ["Advanced regeneration", "Reduces inflammation", "Long-term outcomes"] },
    ],
  },
  {
    category: "Physical & Rehabilitation Therapy",
    items: [
      { title: "Manual Therapy", duration: "45–60 min", desc: "Hands-on techniques including joint mobilization and soft tissue manipulation to restore movement and reduce pain.", benefits: ["Immediate mobility gains", "Drug-free", "Personalized"] },
      { title: "Therapeutic Exercise Programs", duration: "Ongoing", desc: "Structured exercise protocols targeting specific functional deficits — designed and supervised by licensed physical therapists.", benefits: ["Builds strength", "Prevents recurrence", "Progressive program"] },
      { title: "Dry Needling", duration: "30 min", desc: "Fine needles inserted into trigger points to release muscle tension and improve blood flow to affected tissues.", benefits: ["Rapid muscle release", "Complements PT", "Evidence-based"] },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Treatments"
          title="Advanced Procedures"
          titleHighlight="Proven Results"
          subtitle="From minimally invasive injections to cutting-edge regenerative therapies — your treatment is tailored to your specific condition."
        />

        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="flex flex-col gap-16">
              {treatments.map(({ category, items }) => (
                <div key={category}>
                  <h2 className="font-serif font-bold text-brand-navy text-2xl mb-6 pb-3 border-b border-brand-gray-100">{category}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {items.map(({ title, duration, desc, benefits }) => (
                      <div key={title} className="card-premium p-7">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="font-serif font-bold text-brand-navy text-xl leading-tight">{title}</h3>
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gray-100 text-brand-gray-500 text-xs font-medium flex-shrink-0">
                            <Clock size={11} />
                            {duration}
                          </div>
                        </div>
                        <p className="text-brand-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                        <div className="flex flex-col gap-2 mb-5">
                          {benefits.map((b) => (
                            <div key={b} className="flex items-center gap-2 text-sm text-brand-gray-600">
                              <CheckCircle size={14} className="text-brand-teal flex-shrink-0" />
                              {b}
                            </div>
                          ))}
                        </div>
                        <Link href="/book-appointment" className="text-brand-teal text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                          Book This Treatment <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-brand-cream rounded-4xl p-10 md:p-14 text-center">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-3">Which treatment is right for you?</h2>
              <p className="text-brand-gray-500 mb-7 max-w-xl mx-auto">Schedule a consultation and Dr. Tankeu will review your case and recommend the most appropriate treatment protocol.</p>
              <Link href="/book-appointment" className="btn-primary text-base py-4 px-10 shadow-teal-glow">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
