"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, Users, Star, Stethoscope, Heart } from "lucide-react";

const credentials = [
  { Icon: Award, label: "Medical Doctorate", sub: "MD, Pain Management", color: "text-brand-gold" },
  { Icon: Shield, label: "Board Certified", sub: "Fellowship in Pain Medicine", color: "text-brand-teal" },
  { Icon: Stethoscope, label: "Fellowship Trained", sub: "1-Year Pain Fellowship", color: "text-brand-teal" },
  { Icon: Heart, label: "Compassionate Care", sub: "Patient-First Approach", color: "text-red-400" },
  { Icon: Star, label: "5-Star Rated", sub: "Estero, FL", color: "text-brand-gold" },
  { Icon: Users, label: "400+ Patients", sub: "Treated Successfully", color: "text-brand-teal" },
];

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (end - start) * eased).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 400, suffix: "+", label: "Patients Treated" },
  { value: 3, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 1, suffix: "", label: "Year Pain Fellowship" },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">Trusted Excellence</div>
          <h2 className="section-title mb-4">Why Patients Choose Us</h2>
          <p className="section-subtitle mx-auto text-center">
            Recognized for clinical excellence and outstanding patient outcomes, we set the standard for premium medical care.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center bg-white rounded-3xl p-8 shadow-premium-sm"
            >
              <p className="font-serif text-5xl font-bold text-brand-teal mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-brand-gray-500 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Credentials grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {credentials.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-5 text-center shadow-premium-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gray-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-teal/5 transition-colors">
                <item.Icon size={22} className={item.color} />
              </div>
              <p className="text-brand-navy font-semibold text-sm leading-tight">{item.label}</p>
              <p className="text-brand-gray-400 text-xs mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Insurance logos bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-10 border-t border-brand-gray-200"
        >
          <p className="text-center text-brand-gray-400 text-sm font-medium mb-6 tracking-widest uppercase">
            We Accept Most Major Insurance Plans
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale hover:opacity-70 transition-opacity">
            {["Medicare", "Medicaid", "Aetna", "BlueCross BlueShield", "Cigna", "United Health", "Humana", "Workers' Comp"].map((ins) => (
              <span key={ins} className="text-brand-gray-500 font-semibold text-sm">
                {ins}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
