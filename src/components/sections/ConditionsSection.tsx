"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Bone, Brain, Activity, Heart, Dumbbell, Clock, Trophy } from "lucide-react";

const conditions = [
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Advanced interventional techniques to identify and treat the source of chronic and acute pain.",
    Icon: Zap,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    gradient: "from-brand-teal/80 to-brand-navy/90",
  },
  {
    id: "spine-care",
    title: "Spine Care",
    description: "Comprehensive diagnosis and non-surgical treatment of herniated discs, stenosis, and back pain.",
    Icon: Bone,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    gradient: "from-blue-900/80 to-brand-navy/90",
  },
  {
    id: "neurology",
    title: "Neurology",
    description: "Expert neurological evaluation and management of headaches, neuropathy, and movement disorders.",
    Icon: Brain,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    gradient: "from-purple-900/80 to-brand-navy/90",
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation",
    description: "Personalized rehabilitation programs to restore function, strength, and independence after injury.",
    Icon: Activity,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    gradient: "from-emerald-900/80 to-brand-navy/90",
  },
  {
    id: "wellness",
    title: "Wellness Therapy",
    description: "Holistic wellness programs combining medical expertise with lifestyle coaching for total wellbeing.",
    Icon: Heart,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    gradient: "from-rose-900/80 to-brand-navy/90",
  },
  {
    id: "physical-therapy",
    title: "Physical Therapy",
    description: "Evidence-based physical therapy to reduce pain, improve movement, and prevent future injury.",
    Icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    gradient: "from-orange-900/80 to-brand-navy/90",
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain",
    description: "Specialized management of fibromyalgia, CRPS, and long-standing pain conditions with proven protocols.",
    Icon: Clock,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    gradient: "from-indigo-900/80 to-brand-navy/90",
  },
  {
    id: "sports-recovery",
    title: "Sports Recovery",
    description: "Performance-focused treatment for athletes — from weekend warriors to professional competitors.",
    Icon: Trophy,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    gradient: "from-yellow-900/80 to-brand-navy/90",
  },
];

export default function ConditionsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="section-label">Specialties</div>
            <h2 className="section-title">Conditions We Treat</h2>
          </div>
          <Link href="/conditions" className="btn-secondary self-start md:self-auto">
            View All Conditions
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {conditions.map((cond, i) => (
            <motion.div
              key={cond.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/conditions#${cond.id}`}
                className="group relative block overflow-hidden rounded-3xl aspect-[4/5] shadow-premium-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <Image
                  src={cond.image}
                  alt={cond.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cond.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_60px_rgba(13,115,119,0.3)]" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-brand-teal/40 transition-colors duration-300">
                    <cond.Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-white font-serif font-bold text-lg mb-2 leading-tight">
                    {cond.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors">
                    {cond.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-brand-tealLight text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
