import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Read real stories from patients whose lives have been transformed by the care team at Tan Health & Wellness.",
};

const allTestimonials = [
  { name: "Michael R.", condition: "Chronic Back Pain", rating: 5, initials: "MR", color: "bg-brand-teal", quote: "After years of suffering, Dr. Tankeu finally found the root cause of my back pain. Three months into treatment, I'm back to hiking — something I thought I'd never do again. The entire team is exceptional." },
  { name: "Sarah L.", condition: "Spinal Stenosis", rating: 5, initials: "SL", color: "bg-indigo-500", quote: "The level of expertise and personal attention at Tan Health is unlike anything I've experienced. Dr. Tankeu took the time to explain everything and created a plan that actually worked for my lifestyle." },
  { name: "David K.", condition: "Sports Injury Recovery", rating: 5, initials: "DK", color: "bg-brand-gold", quote: "As a competitive athlete, I needed to get back fast without risking re-injury. The sports recovery program was perfectly designed for my needs. I'm now performing better than before the injury." },
  { name: "Patricia M.", condition: "Fibromyalgia", rating: 5, initials: "PM", color: "bg-rose-500", quote: "I had nearly given up hope with fibromyalgia. Dr. Tankeu's comprehensive approach — combining interventional procedures with lifestyle guidance — has given me my life back. Truly transformative care." },
  { name: "James T.", condition: "Nerve Pain (Neuropathy)", rating: 5, initials: "JT", color: "bg-emerald-600", quote: "The diagnostic process was incredibly thorough. For the first time, I had a clear picture of what was causing my nerve pain. The treatment plan was precise and the results have been remarkable." },
  { name: "Linda H.", condition: "Migraine Management", rating: 5, initials: "LH", color: "bg-purple-500", quote: "I've suffered from chronic migraines for 20 years. After trying countless treatments elsewhere, Dr. Tankeu's targeted approach reduced my migraines by over 80%. Life-changing." },
  { name: "Robert C.", condition: "Post-Surgical Rehab", rating: 5, initials: "RC", color: "bg-orange-500", quote: "The rehab team at Tan Health is simply outstanding. After my spinal surgery, they guided my recovery every step of the way. I'm now stronger than I was before the surgery." },
  { name: "Amanda F.", condition: "Sports Recovery", rating: 5, initials: "AF", color: "bg-cyan-600", quote: "Dr. Tankeu and the physical therapy team got me back on the field in record time after my ACL injury. Their sports-specific approach is truly a cut above the rest." },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Patient Stories"
          title="Lives Transformed"
          titleHighlight="By Expert Care"
          subtitle="These are real patients — real outcomes. Their stories are why we do what we do."
        />

        <TestimonialsSection />

        {/* Full wall */}
        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="text-center mb-12">
              <div className="section-label mx-auto w-fit">All Reviews</div>
              <h2 className="section-title mb-3">500+ Five-Star Reviews</h2>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={22} className="text-brand-gold fill-brand-gold" />)}
                <span className="text-brand-gray-500 text-sm ml-2">5.0 average across all platforms</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {allTestimonials.map((t) => (
                <div key={t.name} className="card-premium p-7">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />)}
                  </div>
                  <p className="text-brand-gray-600 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-xs">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm">{t.name}</p>
                      <p className="text-brand-gray-400 text-xs">{t.condition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-brand-gray-500 mb-6">Ready to write your own success story?</p>
              <Link href="/book-appointment" className="btn-primary text-base py-4 px-10">
                Book Your Appointment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
