"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, Clock, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const trustPoints = [
  "Same-week appointments available",
  "Most major insurance accepted",
  "Telehealth options available",
  "No referral required",
];

export default function AppointmentCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", condition: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">Get Started Today</div>
            <h2 className="section-title mb-5">
              Your Recovery<br />
              <span className="text-gradient-teal">Starts With One Call</span>
            </h2>
            <p className="text-brand-gray-500 text-lg leading-relaxed mb-8">
              Don&apos;t let pain define your life. Dr. Tankeu and our team are ready to create a personalized treatment plan that gets you back to doing what you love.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-3 mb-10">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-brand-teal flex-shrink-0" />
                  <span className="text-brand-gray-600 text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+12395618880"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-brand-gray-200 hover:border-brand-teal hover:text-brand-teal text-brand-navy font-semibold transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <Phone size={18} className="text-brand-teal" />
                </div>
                <div>
                  <p className="text-xs text-brand-gray-400">Call us directly</p>
                  <p className="font-bold">(239) 561-8880</p>
                </div>
              </a>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border-2 border-brand-gray-100 bg-brand-gray-50 text-brand-gray-600">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                  <Clock size={18} className="text-brand-teal" />
                </div>
                <div>
                  <p className="text-xs text-brand-gray-400">Office hours</p>
                  <p className="font-semibold text-sm">Mon & Thu 2–5PM · Sat 1–4PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-brand-cream rounded-4xl p-8 md:p-10 shadow-premium-sm">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-teal flex items-center justify-center">
                      <Calendar size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-brand-navy text-xl">Request Appointment</h3>
                      <p className="text-brand-gray-400 text-sm">We&apos;ll respond within 2 business hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full bg-white border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder:text-brand-gray-300 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(000) 000-0000"
                          className="w-full bg-white border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder:text-brand-gray-300 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@email.com"
                        className="w-full bg-white border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder:text-brand-gray-300 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Primary Concern</label>
                      <select
                        value={form.condition}
                        onChange={(e) => setForm({ ...form, condition: e.target.value })}
                        className="w-full bg-white border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all appearance-none"
                      >
                        <option value="">Select a condition...</option>
                        <option>Pain Management</option>
                        <option>Spine Care</option>
                        <option>Neurology</option>
                        <option>Rehabilitation</option>
                        <option>Physical Therapy</option>
                        <option>Wellness Therapy</option>
                        <option>Chronic Pain</option>
                        <option>Sports Recovery</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Brief Description (optional)</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Briefly describe your symptoms or concerns..."
                        rows={3}
                        className="w-full bg-white border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder:text-brand-gray-300 focus:outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10 transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center py-4 text-sm mt-2 shadow-teal-glow">
                      <Calendar size={18} />
                      Request My Appointment
                      <ArrowRight size={16} />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-brand-gray-400 text-xs">
                      <ShieldCheck size={13} />
                      Your information is 100% private and HIPAA compliant
                    </div>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-brand-teal" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">Request Received!</h3>
                  <p className="text-brand-gray-500 leading-relaxed mb-6">
                    Thank you, {form.name}. Our team will contact you within 2 business hours to confirm your appointment.
                  </p>
                  <Link href="/" className="btn-primary justify-center">
                    Back to Home
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
