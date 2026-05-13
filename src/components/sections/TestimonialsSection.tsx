"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Play } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael R.",
    condition: "Chronic Back Pain",
    quote:
      "After years of suffering, Dr. Tankeu finally found the root cause of my back pain. Three months into treatment, I'm back to hiking — something I thought I'd never do again. The entire team is exceptional.",
    rating: 5,
    initials: "MR",
    color: "bg-brand-teal",
  },
  {
    id: 2,
    name: "Sarah L.",
    condition: "Spinal Stenosis",
    quote:
      "The level of expertise and personal attention at Tan Health is unlike anything I've experienced. Dr. Tankeu took the time to explain everything and created a plan that actually worked for my lifestyle.",
    rating: 5,
    initials: "SL",
    color: "bg-indigo-500",
  },
  {
    id: 3,
    name: "David K.",
    condition: "Sports Injury Recovery",
    quote:
      "As a competitive athlete, I needed to get back fast without risking re-injury. The sports recovery program was perfectly designed for my needs. I'm now performing better than before the injury.",
    rating: 5,
    initials: "DK",
    color: "bg-brand-gold",
  },
  {
    id: 4,
    name: "Patricia M.",
    condition: "Fibromyalgia",
    quote:
      "I had nearly given up hope with fibromyalgia. Dr. Tankeu's comprehensive approach — combining interventional procedures with lifestyle guidance — has given me my life back. Truly transformative care.",
    rating: 5,
    initials: "PM",
    color: "bg-rose-500",
  },
  {
    id: 5,
    name: "James T.",
    condition: "Nerve Pain (Neuropathy)",
    quote:
      "The diagnostic process was incredibly thorough. For the first time, I had a clear picture of what was causing my nerve pain. The treatment plan was precise and the results have been remarkable.",
    rating: 5,
    initials: "JT",
    color: "bg-emerald-600",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isAutoPlaying]);

  const goTo = (i: number) => {
    setActive(i);
    setIsAutoPlaying(false);
  };
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section className="section-padding bg-brand-cream overflow-hidden">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto w-fit">Patient Stories</div>
          <h2 className="section-title mb-4">What Our Patients Say</h2>
          <p className="section-subtitle mx-auto text-center">
            Real outcomes. Real lives transformed. Hear directly from the patients whose care has changed everything.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-4xl p-10 md:p-14 shadow-premium relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-10 opacity-10">
                <Quote size={80} className="text-brand-teal" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>

              <p className="text-brand-navy text-xl md:text-2xl font-serif leading-relaxed mb-8 relative z-10">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${current.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{current.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-brand-navy">{current.name}</p>
                  <p className="text-brand-gray-400 text-sm">{current.condition}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-xl bg-brand-gray-100 hover:bg-brand-teal hover:text-white text-brand-gray-500 flex items-center justify-center transition-all duration-200"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-xl bg-brand-gray-100 hover:bg-brand-teal hover:text-white text-brand-gray-500 flex items-center justify-center transition-all duration-200"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2.5 bg-brand-teal"
                    : "w-2.5 h-2.5 bg-brand-gray-300 hover:bg-brand-teal/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side cards — mini testimonials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {testimonials.filter((_, i) => i !== active).slice(0, 4).map((t) => (
            <motion.button
              key={t.id}
              onClick={() => goTo(testimonials.findIndex((x) => x.id === t.id))}
              className="bg-white rounded-2xl p-4 text-left shadow-premium-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-0.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-xl ${t.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-xs">{t.name}</p>
                  <p className="text-brand-gray-400 text-[10px]">{t.condition}</p>
                </div>
              </div>
              <p className="text-brand-gray-500 text-xs line-clamp-2 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.button>
          ))}
        </div>

        {/* Video testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-brand-navy rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="relative w-full md:w-64 aspect-video rounded-2xl overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-brand-teal/30 to-brand-navy flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors group">
                <Play size={24} className="text-white ml-1" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-brand-tealLight text-xs font-semibold tracking-widest uppercase mb-3">Video Testimonial</p>
            <h3 className="text-white font-serif text-2xl font-bold mb-3 leading-tight">
              &ldquo;Dr. Tankeu Changed My Life&rdquo;
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Watch how Jennifer went from barely able to walk to training for her first 5K — after 10 years of chronic pain management with Dr. Tankeu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
