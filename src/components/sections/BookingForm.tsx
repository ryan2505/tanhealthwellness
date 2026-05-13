"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Calendar, CheckCircle, ShieldCheck, User, Phone, Mail, FileText } from "lucide-react";

const conditions = [
  "Pain Management", "Spine Care", "Neurology", "Rehabilitation",
  "Physical Therapy", "Wellness Therapy", "Chronic Pain", "Sports Recovery", "Other",
];

const timeSlots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

type Step = 1 | 2 | 3 | 4;

export default function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    condition: "",
    firstName: "", lastName: "", email: "", phone: "", dob: "",
    insurance: "", date: "", time: "", notes: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const steps = [
    { n: 1, label: "Condition" },
    { n: 2, label: "Personal Info" },
    { n: 3, label: "Date & Time" },
    { n: 4, label: "Confirm" },
  ];

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-premium max-w-3xl">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-12">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  step > s.n ? "bg-brand-teal text-white" :
                  step === s.n ? "bg-brand-navy text-white ring-4 ring-brand-navy/20" :
                  "bg-brand-gray-200 text-brand-gray-400"
                }`}>
                  {step > s.n ? <CheckCircle size={18} /> : s.n}
                </div>
                <span className="text-xs font-medium mt-1 text-brand-gray-500 hidden sm:block">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`w-16 sm:w-24 h-0.5 transition-all duration-300 ${step > s.n ? "bg-brand-teal" : "bg-brand-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-4xl shadow-premium p-8 md:p-12">
          <AnimatePresence mode="wait">
            {/* Step 1: Condition */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center">
                    <FileText size={22} className="text-brand-teal" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-brand-navy text-2xl">What brings you in?</h2>
                    <p className="text-brand-gray-400 text-sm">Select your primary concern</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {conditions.map((c) => (
                    <button
                      key={c}
                      onClick={() => update("condition", c)}
                      className={`p-4 rounded-2xl border-2 text-sm font-medium transition-all duration-200 text-left ${
                        form.condition === c
                          ? "border-brand-teal bg-brand-teal/5 text-brand-teal"
                          : "border-brand-gray-200 text-brand-gray-600 hover:border-brand-teal/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.condition}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Personal info */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center">
                    <User size={22} className="text-brand-teal" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-brand-navy text-2xl">Your Information</h2>
                    <p className="text-brand-gray-400 text-sm">All fields required</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { field: "firstName", label: "First Name", placeholder: "John", Icon: User },
                      { field: "lastName", label: "Last Name", placeholder: "Smith", Icon: User },
                    ].map(({ field, label, placeholder, Icon }) => (
                      <div key={field}>
                        <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">{label}</label>
                        <div className="relative">
                          <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-300" />
                          <input
                            type="text"
                            value={(form as Record<string, string>)[field]}
                            onChange={(e) => update(field, e.target.value)}
                            placeholder={placeholder}
                            className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-300" />
                      <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@email.com"
                        className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Phone Number</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray-300" />
                        <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(000) 000-0000"
                          className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Date of Birth</label>
                      <input type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)}
                        className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Insurance Provider (optional)</label>
                    <input type="text" value={form.insurance} onChange={(e) => update("insurance", e.target.value)} placeholder="e.g. BlueCross BlueShield"
                      className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all" />
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button onClick={() => setStep(1)} className="flex items-center gap-2 text-brand-gray-500 hover:text-brand-navy font-semibold text-sm transition-colors">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button onClick={() => setStep(3)} disabled={!form.firstName || !form.email || !form.phone}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center">
                    <Calendar size={22} className="text-brand-teal" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-brand-navy text-2xl">Choose Date & Time</h2>
                    <p className="text-brand-gray-400 text-sm">Select your preferred appointment slot</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Preferred Date</label>
                    <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)}
                      className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-gray-600 mb-3 tracking-wide">Preferred Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => update("time", t)}
                          className={`py-2.5 rounded-xl text-xs font-semibold border-2 transition-all duration-200 ${
                            form.time === t ? "border-brand-teal bg-brand-teal text-white" : "border-brand-gray-200 text-brand-gray-600 hover:border-brand-teal/40"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-gray-600 mb-2 tracking-wide">Additional Notes (optional)</label>
                    <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Any additional information..."
                      rows={3} className="w-full bg-brand-gray-50 border border-brand-gray-200 rounded-xl px-4 py-3 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all resize-none" />
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <button onClick={() => setStep(2)} className="flex items-center gap-2 text-brand-gray-500 hover:text-brand-navy font-semibold text-sm transition-colors">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button onClick={() => setStep(4)} disabled={!form.date || !form.time}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed">
                    Review Booking <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center">
                    <CheckCircle size={22} className="text-brand-teal" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-brand-navy text-2xl">Review & Confirm</h2>
                    <p className="text-brand-gray-400 text-sm">Please verify your appointment details</p>
                  </div>
                </div>
                <div className="bg-brand-gray-50 rounded-3xl p-6 mb-6 flex flex-col gap-4">
                  {[
                    { label: "Condition", value: form.condition },
                    { label: "Name", value: `${form.firstName} ${form.lastName}` },
                    { label: "Email", value: form.email },
                    { label: "Phone", value: form.phone },
                    { label: "Date", value: form.date },
                    { label: "Time", value: form.time },
                    form.insurance ? { label: "Insurance", value: form.insurance } : null,
                  ].filter(Boolean).map((item) => (
                    <div key={item!.label} className="flex justify-between items-center py-2 border-b border-brand-gray-200 last:border-0">
                      <span className="text-brand-gray-400 text-sm font-medium">{item!.label}</span>
                      <span className="text-brand-navy text-sm font-semibold">{item!.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 mb-6 text-brand-gray-400 text-xs">
                  <ShieldCheck size={14} className="flex-shrink-0 mt-0.5 text-brand-teal" />
                  Your information is protected under HIPAA and will never be shared without your consent.
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setStep(3)} className="flex items-center gap-2 text-brand-gray-500 hover:text-brand-navy font-semibold text-sm transition-colors">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button onClick={() => setStep(1)} className="btn-primary shadow-teal-glow">
                    Confirm Appointment <CheckCircle size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-brand-gray-400 text-xs">
          {["HIPAA Compliant", "Same-Week Availability", "Most Insurance Accepted", "No Referral Required"].map((t) => (
            <div key={t} className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-brand-teal" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
