"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, MessageSquare, ClipboardList, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    Icon: Search,
    title: "Comprehensive Diagnosis",
    description:
      "We begin with a thorough evaluation — advanced imaging, neurological testing, and a complete medical history review to precisely identify the root cause of your pain.",
    color: "bg-brand-teal",
    lightColor: "bg-brand-teal/10",
    textColor: "text-brand-teal",
  },
  {
    step: "02",
    Icon: MessageSquare,
    title: "Expert Consultation",
    description:
      "Dr. Tankeu personally reviews your case, explains findings in clear terms, and discusses all treatment options — ensuring you are a partner in every decision.",
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    step: "03",
    Icon: ClipboardList,
    title: "Personalized Treatment Plan",
    description:
      "We design a custom treatment protocol combining interventional procedures, therapy, and lifestyle guidance — targeting your unique condition for the best outcomes.",
    color: "bg-brand-gold",
    lightColor: "bg-brand-gold/10",
    textColor: "text-brand-gold",
  },
  {
    step: "04",
    Icon: TrendingUp,
    title: "Recovery & Long-Term Wellness",
    description:
      "Ongoing monitoring, follow-up care, and preventive strategies keep you on track — our commitment extends well beyond your first appointment.",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

export default function TreatmentJourneySection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="section-label mx-auto w-fit">Your Journey</div>
          <h2 className="section-title mb-4">The Tan Health Experience</h2>
          <p className="section-subtitle mx-auto text-center">
            From first contact to full recovery — a seamless, patient-first experience at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated connector line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-brand-gray-100 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-teal via-indigo-500 via-brand-gold to-emerald-500 origin-left"
              style={{ scaleX: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className={`relative w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg mb-6`}>
                  <step.Icon size={26} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-brand-gray-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-brand-gray-400">{step.step}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-brand-gray-50 rounded-3xl p-6 h-full hover:shadow-premium-sm transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-serif font-bold text-brand-navy text-lg mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link href="/treatments" className="btn-primary">
            Explore All Treatments
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
