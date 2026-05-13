"use client";

import { motion } from "framer-motion";
import { Cpu, Microscope, Scan, Zap } from "lucide-react";

const technologies = [
  {
    Icon: Scan,
    title: "Advanced Imaging",
    description:
      "High-resolution MRI, CT, and fluoroscopic imaging enable pinpoint diagnostic accuracy — identifying conditions that other clinics miss.",
    features: ["Real-time fluoroscopy", "3D MRI reconstruction", "Digital X-ray"],
    gradient: "from-brand-teal/20 to-brand-teal/5",
    iconBg: "bg-brand-teal",
  },
  {
    Icon: Cpu,
    title: "AI-Assisted Diagnostics",
    description:
      "Machine learning tools cross-reference your imaging data with thousands of clinical cases to support Dr. Tankeu's diagnostic precision.",
    features: ["Pattern recognition", "Outcome prediction", "Risk stratification"],
    gradient: "from-indigo-500/20 to-indigo-500/5",
    iconBg: "bg-indigo-600",
  },
  {
    Icon: Zap,
    title: "Interventional Procedures",
    description:
      "Minimally invasive, image-guided interventions deliver targeted therapy directly to the source of pain with maximum precision.",
    features: ["Spinal cord stimulation", "Nerve block therapy", "Regenerative PRP"],
    gradient: "from-brand-gold/20 to-brand-gold/5",
    iconBg: "bg-brand-gold",
  },
  {
    Icon: Microscope,
    title: "Regenerative Medicine",
    description:
      "Cutting-edge biologics and regenerative therapies harness your body's own healing potential for long-lasting pain relief.",
    features: ["Platelet-rich plasma", "Stem cell therapy", "Prolotherapy"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconBg: "bg-emerald-600",
  },
];

export default function TechnologySection() {
  return (
    <section className="section-padding bg-brand-navy overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-tealLight text-xs font-semibold tracking-widest uppercase mb-4">
            Innovation
          </div>
          <h2 className="font-serif text-display-md font-bold text-white mb-4 leading-tight">
            Technology That
            <span className="block text-gradient-teal">Drives Results</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We invest in the most advanced medical technologies to ensure every patient receives the most accurate diagnosis and most effective treatment available.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-3xl p-8 border border-white/10 bg-gradient-to-br ${tech.gradient} backdrop-blur-sm group hover:border-white/20 transition-all duration-500`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.02]" />

              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${tech.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <tech.Icon size={26} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-serif font-bold text-xl mb-2">{tech.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/10"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-3 divide-x divide-white/10 rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
        >
          {[
            { value: "15+", label: "Technologies & Procedures" },
            { value: "98%", label: "Diagnostic Accuracy" },
            { value: "2024", label: "Latest Equipment Updates" },
          ].map((item) => (
            <div key={item.label} className="p-6 text-center">
              <p className="font-serif font-bold text-3xl text-brand-tealLight mb-1">{item.value}</p>
              <p className="text-white/50 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
