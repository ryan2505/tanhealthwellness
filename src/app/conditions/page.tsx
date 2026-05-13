import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { ArrowRight, Zap, Bone, Brain, Activity, Heart, Dumbbell, Clock, Trophy, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions We Treat",
  description: "Explore the full range of conditions treated at Tan Health & Wellness — from chronic pain to sports injuries.",
};

const conditions = [
  {
    id: "pain-management",
    Icon: Zap,
    title: "Pain Management",
    overview: "We specialize in identifying the root cause of your pain and delivering targeted, minimally invasive treatments that provide lasting relief — not just temporary masking of symptoms.",
    treatments: ["Epidural steroid injections", "Nerve block therapy", "Spinal cord stimulation", "Radiofrequency ablation", "Joint injections", "Trigger point injections"],
    color: "bg-brand-teal",
  },
  {
    id: "spine-care",
    Icon: Bone,
    title: "Spine Care",
    overview: "Our spine specialists combine advanced imaging with non-surgical interventions to treat herniated discs, spinal stenosis, scoliosis, and chronic back pain with proven outcomes.",
    treatments: ["Disc herniation treatment", "Spinal stenosis management", "Degenerative disc care", "Facet joint therapy", "Vertebral compression fractures", "Kyphoplasty"],
    color: "bg-blue-600",
  },
  {
    id: "neurology",
    Icon: Brain,
    title: "Neurology",
    overview: "Expert evaluation and ongoing management of neurological conditions — from complex headache disorders to peripheral neuropathy and movement conditions.",
    treatments: ["Chronic migraine management", "Neuropathy treatment", "Botox for headaches", "EMG/nerve conduction studies", "Tremor management", "Multiple sclerosis care"],
    color: "bg-purple-600",
  },
  {
    id: "rehabilitation",
    Icon: Activity,
    title: "Rehabilitation",
    overview: "Comprehensive rehabilitation programs designed to restore function after injury, surgery, or neurological events — with measurable goals and expert oversight.",
    treatments: ["Post-surgical rehab", "Stroke rehabilitation", "Functional restoration", "Occupational therapy", "Balance & gait training", "Work hardening programs"],
    color: "bg-emerald-600",
  },
  {
    id: "wellness",
    Icon: Heart,
    title: "Wellness Therapy",
    overview: "A whole-person approach to wellbeing — combining medical expertise with evidence-based wellness strategies for preventive care and lifestyle optimization.",
    treatments: ["Integrative wellness programs", "Stress management", "Anti-inflammatory nutrition", "Sleep optimization", "Weight management", "Mind-body therapy"],
    color: "bg-rose-500",
  },
  {
    id: "physical-therapy",
    Icon: Dumbbell,
    title: "Physical Therapy",
    overview: "Our licensed physical therapists use manual techniques, targeted exercises, and modalities to reduce pain, restore mobility, and prevent injury recurrence.",
    treatments: ["Manual therapy", "Therapeutic exercise", "Dry needling", "Ultrasound therapy", "Electrical stimulation", "Posture correction"],
    color: "bg-orange-500",
  },
  {
    id: "chronic-pain",
    Icon: Clock,
    title: "Chronic Pain",
    overview: "Managing chronic pain requires a sophisticated, multi-dimensional approach. We combine interventional procedures, behavioral strategies, and medication management for long-term relief.",
    treatments: ["Fibromyalgia management", "CRPS treatment", "Central sensitization care", "Medication management", "Pain psychology", "Ketamine infusion therapy"],
    color: "bg-indigo-600",
  },
  {
    id: "sports-recovery",
    Icon: Trophy,
    title: "Sports Recovery",
    overview: "Designed for athletes of every level — our sports recovery programs prioritize rapid, safe return to play with performance optimization built into every treatment plan.",
    treatments: ["Sports injury diagnosis", "PRP injections", "Muscle strain treatment", "Tendon repair protocols", "Concussion management", "Performance optimization"],
    color: "bg-yellow-600",
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Conditions"
          title="Expert Care For"
          titleHighlight="Every Condition"
          subtitle="Whether your pain started yesterday or has persisted for years — we have the tools and expertise to help."
        />

        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="flex flex-col gap-10">
              {conditions.map(({ id, Icon, title, overview, treatments, color }) => (
                <div key={id} id={id} className="card-premium p-8 md:p-10 scroll-mt-28">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center shadow-lg`}>
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif font-bold text-brand-navy text-2xl mb-3">{title}</h2>
                      <p className="text-brand-gray-500 leading-relaxed mb-6">{overview}</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
                        {treatments.map((t) => (
                          <div key={t} className="flex items-center gap-2 text-sm text-brand-gray-600">
                            <CheckCircle size={14} className="text-brand-teal flex-shrink-0" />
                            {t}
                          </div>
                        ))}
                      </div>
                      <Link href="/book-appointment" className="btn-primary inline-flex text-sm py-3 px-6">
                        Book for {title}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
