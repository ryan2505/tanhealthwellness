"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap, MapPin, Quote } from "lucide-react";

const milestones = [
  { year: "2016", title: "Medical Doctorate", sub: "MD — School of Medicine" },
  { year: "2016–2019", title: "Family Medicine Residency", sub: "3-year residency program" },
  { year: "2019–2020", title: "Pain Management Fellowship", sub: "1-year specialized fellowship" },
  { year: "2021", title: "Founded Tan Health & Wellness", sub: "Mission: serve, heal, improve lives" },
  { year: "2026", title: "400+ Patients Served", sub: "Estero, FL 33928" },
];

const achievements = [
  { Icon: Award, value: "MD", label: "Medical Doctorate" },
  { Icon: GraduationCap, value: "3+", label: "Years in Practice" },
  { Icon: MapPin, value: "Estero", label: "FL 33928" },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-brand-cream overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative rounded-4xl overflow-hidden aspect-[3/4] shadow-premium">
              <Image
                src="/images/dr-tankeu.jpg"
                alt="Dr. Jovanie Serge Keusseu Tankeu — Medical Director, Tan Health & Wellness"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
            </div>

            {/* Achievement badges */}
            <div className="absolute -right-4 top-12 flex flex-col gap-3">
              {achievements.map(({ Icon, value, label }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl p-3 shadow-premium flex items-center gap-2.5 w-40"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-brand-navy text-sm">{value}</p>
                    <p className="text-brand-gray-400 text-xs">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 left-6 right-16 bg-brand-navy rounded-3xl p-5 shadow-premium"
            >
              <Quote size={20} className="text-brand-teal mb-2" />
              <p className="text-white/90 text-sm leading-relaxed italic">
                &ldquo;My mission is to pursue my passion to serve and to heal — helping every patient live a healthier, pain-free life.&rdquo;
              </p>
              <p className="text-brand-tealLight text-xs font-semibold mt-2">— Dr. Jovanie Serge Keusseu Tankeu, MD</p>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:pt-6"
          >
            <div className="section-label">Meet the Expert</div>
            <h2 className="section-title mb-4">
              Dr. Jovanie Serge Keusseu Tankeu, MD —<br />
              <span className="text-gradient-teal">Pain Management</span>
              <br />& Wellness Expert
            </h2>
            <p className="text-brand-gray-500 text-lg leading-relaxed mb-8">
              Holding a Medical Doctorate and a Fellowship in Pain Management, Dr. Tankeu completed 3 years of family medicine residency followed by a 1-year fellowship dedicated to pain care. Based in Estero, Florida (near Fort Myers), he has treated over 400 patients with compassion and precision.
            </p>
            <p className="text-brand-gray-500 leading-relaxed mb-10">
              His mission is simple: to pursue his passion to serve and to heal — helping every patient live a life where their pain is managed and their overall health is continuously improved.
            </p>

            {/* Timeline */}
            <div className="relative mb-10">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-brand-teal/20" />
              <div className="flex flex-col gap-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-6 pl-10 relative"
                  >
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-brand-teal flex items-center justify-center shadow-teal-glow-sm">
                      <div className="w-2 h-2 rounded-full bg-brand-teal" />
                    </div>
                    <div>
                      <span className="text-brand-teal text-xs font-bold tracking-widest uppercase">{m.year}</span>
                      <p className="text-brand-navy font-semibold text-sm">{m.title}</p>
                      <p className="text-brand-gray-400 text-xs">{m.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Full Biography
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
