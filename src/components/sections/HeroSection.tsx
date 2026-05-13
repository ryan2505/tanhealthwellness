"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Calendar, ShieldCheck, Award, Users, Star } from "lucide-react";

const stats = [
  { value: "400+", label: "Patients Treated" },
  { value: "3+", label: "Years of Excellence" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "Estero", label: "FL 33928" },
];

const badges = [
  { Icon: ShieldCheck, label: "Board Certified" },
  { Icon: Award, label: "Top Rated Physician" },
  { Icon: Star, label: "5-Star Care" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nums = document.querySelectorAll("[data-counter]");
      nums.forEach((el) => {
        const target = parseInt(el.getAttribute("data-counter") || "0", 10);
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.5,
            delay: 1.2,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function () {
              (el as HTMLElement).innerText = Math.round(
                parseFloat((el as HTMLElement).innerText)
              ).toLocaleString();
            },
          }
        );
      });
    }, counterRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={counterRef}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=85"
          alt="Modern medical facility"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl animate-pulse animation-delay-400" />

      {/* Content */}
      <div className="relative z-10 container-premium w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium">
                <Icon size={13} className="text-brand-tealLight" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="font-serif text-display-xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            World-Class{" "}
            <span className="relative inline-block">
              <span className="text-gradient-teal">Medical Expertise</span>
            </span>
            <br />
            <span className="text-white/90">Delivered With Compassion</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl"
          >
            Led by Dr. Jovanie Serge Keusseu Tankeu, MD, our team combines advanced diagnostics with personalized care to restore your mobility, relieve pain, and transform your quality of life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/book-appointment" className="btn-primary text-base py-4 px-8 shadow-teal-glow">
              <Calendar size={18} />
              Book Your Appointment
            </Link>
            <Link href="/patient-resources#insurance" className="btn-ghost-white text-base py-4 px-8 group">
              <ShieldCheck size={18} className="group-hover:scale-110 transition-transform" />
              Check Insurance
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold font-serif text-white mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating card — right side, desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 xl:right-16 bottom-1/4 hidden xl:block z-10"
      >
        <div className="glass-card p-5 w-64 animate-float">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center">
              <Users size={18} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">New Patients</p>
              <p className="text-white/60 text-xs">Welcome Walk-Ins</p>
            </div>
          </div>
          <p className="text-white/70 text-xs leading-relaxed">
            We accept most major insurance plans. Same-week appointments available.
          </p>
          <div className="mt-3 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-brand-gold fill-brand-gold" />
            ))}
            <span className="text-white/60 text-xs ml-1">5.0 (500+ reviews)</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
