import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { ArrowRight, Zap, Bone, Brain, Activity, Heart, Dumbbell, Clock, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive range of pain management, spine care, neurology, and rehabilitation services.",
};

const services = [
  { Icon: Zap, title: "Pain Management", href: "/conditions#pain-management", desc: "Advanced interventional techniques for chronic and acute pain — from nerve blocks to spinal cord stimulation.", tags: ["Nerve Blocks", "Epidurals", "Spinal Stimulation"] },
  { Icon: Bone, title: "Spine Care", href: "/conditions#spine-care", desc: "Non-surgical diagnosis and treatment of herniated discs, spinal stenosis, and degenerative disc disease.", tags: ["Herniated Disc", "Stenosis", "Degeneration"] },
  { Icon: Brain, title: "Neurology", href: "/conditions#neurology", desc: "Expert neurological care for headaches, neuropathy, movement disorders, and nerve pain conditions.", tags: ["Neuropathy", "Migraines", "Movement Disorders"] },
  { Icon: Activity, title: "Rehabilitation", href: "/conditions#rehabilitation", desc: "Personalized rehabilitation programs restoring function, strength, and independence after injury or surgery.", tags: ["Post-Surgical", "Injury Recovery", "Functional Restoration"] },
  { Icon: Heart, title: "Wellness Therapy", href: "/conditions#wellness", desc: "Holistic wellness programs combining medical expertise with lifestyle coaching for total mind-body wellbeing.", tags: ["Lifestyle Coaching", "Stress Management", "Preventive Care"] },
  { Icon: Dumbbell, title: "Physical Therapy", href: "/conditions#physical-therapy", desc: "Evidence-based physical therapy reducing pain, improving movement, and preventing future injury recurrence.", tags: ["Manual Therapy", "Exercise Therapy", "Injury Prevention"] },
  { Icon: Clock, title: "Chronic Pain", href: "/conditions#chronic-pain", desc: "Specialized management of fibromyalgia, CRPS, and persistent pain using proven multimodal protocols.", tags: ["Fibromyalgia", "CRPS", "Persistent Pain"] },
  { Icon: Trophy, title: "Sports Recovery", href: "/conditions#sports-recovery", desc: "Performance-focused treatment for athletes at every level — rapid recovery without compromising safety.", tags: ["Sports Injuries", "Performance", "Rapid Recovery"] },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Services"
          title="Comprehensive Care"
          titleHighlight="For Every Patient"
          subtitle="From acute injuries to complex chronic conditions — we have the expertise to help you recover and thrive."
        />

        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map(({ Icon, title, href, desc, tags }) => (
                <Link
                  key={title}
                  href={href}
                  className="card-premium p-7 group flex flex-col"
                >
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-5 group-hover:bg-brand-teal group-hover:shadow-teal-glow-sm transition-all duration-300">
                    <Icon size={22} className="text-brand-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-brand-navy text-xl mb-3 group-hover:text-brand-teal transition-colors">{title}</h3>
                  <p className="text-brand-gray-500 text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-brand-gray-100 text-brand-gray-500 text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-brand-teal text-sm font-semibold mt-auto">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-brand-navy rounded-4xl p-10 md:p-14 text-center">
              <h2 className="font-serif text-3xl font-bold text-white mb-4">Not sure which service is right for you?</h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">Schedule a consultation and Dr. Tankeu will personally evaluate your condition and recommend the most effective treatment path.</p>
              <Link href="/book-appointment" className="btn-primary text-base py-4 px-10 shadow-teal-glow">
                Book a Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
