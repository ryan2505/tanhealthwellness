import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to the most common questions about our services, appointments, insurance, and what to expect at Tan Health & Wellness.",
};

const faqs = [
  {
    category: "Appointments",
    items: [
      { q: "How do I schedule an appointment?", a: "You can book online through our website, call us directly at (239) 561-8880, or email us. We typically offer same-week appointments for new patients." },
      { q: "Do I need a referral to see Dr. Tankeu?", a: "No referral is required. You can schedule a consultation directly. However, some insurance plans may require a referral for coverage — we recommend checking with your insurer." },
      { q: "What should I bring to my first appointment?", a: "Please bring a valid photo ID, your insurance card, any imaging results (MRI, X-ray, CT), a list of current medications, and any previous medical records relevant to your condition." },
      { q: "How long is the first appointment?", a: "Initial consultations typically last 60–90 minutes. We take the time to thoroughly review your history, perform a physical examination, and discuss your treatment options in detail." },
    ],
  },
  {
    category: "Insurance & Billing",
    items: [
      { q: "Which insurance plans do you accept?", a: "We accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, United Healthcare, Humana, and Medicare. Please call us to verify your specific plan." },
      { q: "Do you offer payment plans?", a: "Yes. We understand that medical costs can be a concern. We offer flexible payment arrangements and can work with you to find a plan that fits your budget." },
      { q: "Will my procedure require prior authorization?", a: "Many procedures require prior authorization from your insurance. Our billing team handles this process on your behalf and will notify you of any requirements before your appointment." },
    ],
  },
  {
    category: "Treatments & Procedures",
    items: [
      { q: "Are the procedures painful?", a: "Most of our interventional procedures are performed under local anesthesia and image guidance, minimizing discomfort. Dr. Tankeu will discuss what to expect for your specific procedure beforehand." },
      { q: "How long does it take to see results?", a: "This varies by treatment. Some patients experience relief within days of an injection; others see gradual improvement over weeks of physical therapy. We set realistic expectations at your consultation." },
      { q: "Is surgery required for my condition?", a: "In most cases, no. We specialize in non-surgical approaches and exhaust all conservative and minimally invasive options before considering surgical referral." },
    ],
  },
  {
    category: "Telehealth",
    items: [
      { q: "Do you offer telehealth appointments?", a: "Yes. Virtual consultations are available for follow-up visits, medication management, and initial consultations for appropriate conditions. Ask our team when booking." },
      { q: "Is telehealth covered by insurance?", a: "Most insurance plans cover telehealth visits. Coverage may vary, so we recommend confirming with your insurer. Our billing team can assist." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know before, during, and after your visit."
        />

        <section className="section-padding bg-white">
          <div className="container-premium max-w-4xl">
            <div className="flex flex-col gap-12">
              {faqs.map(({ category, items }) => (
                <div key={category}>
                  <h2 className="font-serif font-bold text-brand-navy text-2xl mb-6 pb-3 border-b border-brand-gray-100">{category}</h2>
                  <div className="flex flex-col gap-4">
                    {items.map(({ q, a }) => (
                      <details key={q} className="card-premium p-6 group">
                        <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                          <h3 className="font-semibold text-brand-navy leading-relaxed">{q}</h3>
                          <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-open:bg-brand-teal transition-colors">
                            <span className="text-brand-teal group-open:text-white text-lg leading-none transition-colors">+</span>
                          </div>
                        </summary>
                        <p className="mt-4 text-brand-gray-500 leading-relaxed text-sm">{a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-14 bg-brand-cream rounded-4xl p-10 text-center">
              <h3 className="font-serif font-bold text-brand-navy text-2xl mb-3">Still have questions?</h3>
              <p className="text-brand-gray-500 mb-6">Our team is happy to answer any questions you have before your appointment.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+12395618880" className="btn-primary">Call Us Now</a>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                  <ArrowRight size={16} />
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
