import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { ArrowRight, Award, GraduationCap, Heart, Users, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Tankeu",
  description: "Learn about Dr. Tankeu's expertise, training, and mission to deliver world-class pain management and rehabilitation care.",
};

const values = [
  { Icon: Heart, title: "Patient-First Care", desc: "Every decision we make begins and ends with your wellbeing, comfort, and long-term outcomes." },
  { Icon: Award, title: "Clinical Excellence", desc: "Board-certified and fellowship-trained — we hold ourselves to the highest standards in medicine." },
  { Icon: GraduationCap, title: "Continuous Learning", desc: "We stay at the forefront of medical innovation, constantly adopting the most effective new treatments." },
  { Icon: Users, title: "Collaborative Approach", desc: "We partner with you in your care, ensuring you understand every step of your treatment journey." },
];

const team = [
  { name: "Dr. Jovanie Serge Keusseu Tankeu, MD", title: "Medical Director & Pain Management Specialist", initials: "DT", color: "bg-brand-teal" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About Us"
          title="Expertise Built On"
          titleHighlight="Compassion & Science"
          subtitle="Meet the physician and team dedicated to transforming lives through precision medicine and genuine care."
        />

        {/* Dr. Tankeu bio */}
        <section className="section-padding bg-white">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <div className="rounded-4xl overflow-hidden aspect-[3/4] shadow-premium">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85"
                    alt="Dr. Jovanie Serge Keusseu Tankeu — Medical Director, Tan Health & Wellness"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-brand-navy rounded-3xl p-5 w-48 shadow-premium">
                  <Quote size={18} className="text-brand-teal mb-2" />
                  <p className="text-white text-xs leading-relaxed italic">
                    &ldquo;Healing begins with truly listening to the patient.&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:pt-4">
                <div className="section-label">Medical Director</div>
                <h2 className="section-title mb-6">Dr. Jovanie Serge Keusseu Tankeu, MD</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Medical Doctorate", "Pain Management Fellowship", "Family Medicine Residency", "Estero, FL"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <div className="space-y-4 text-brand-gray-500 leading-relaxed">
                  <p>Dr. Jovanie Serge Keusseu Tankeu holds a Medical Doctorate and a Fellowship in Pain Management. He completed 3 years of family medicine residency followed by 1 year of specialized fellowship training in pain medicine — building a rigorous foundation for comprehensive patient care.</p>
                  <p>After his fellowship, Dr. Tankeu founded Tan Health & Wellness in Estero, Florida, with one clear mission: to pursue his passion to serve and to heal — assisting patients in living lives where their pain is managed and their overall health continuously improves.</p>
                  <p>In just over 3 years, he has treated more than 400 patients dealing with chronic and acute pain, including Worker&apos;s Compensation, slip and fall, and car accident cases. He approaches every case with the same commitment: management of pain, medication therapy assistance, and whole-body wellness.</p>
                </div>
                <Link href="/book-appointment" className="btn-primary mt-8 inline-flex">
                  Schedule a Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-brand-cream" id="mission">
          <div className="container-premium">
            <div className="text-center mb-14">
              <div className="section-label mx-auto w-fit">Our Mission</div>
              <h2 className="section-title mb-4">What Drives Us Every Day</h2>
              <p className="section-subtitle mx-auto text-center">Our values are not wall decorations — they shape every clinical decision we make.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ Icon, title, desc }) => (
                <div key={title} className="card-premium p-7">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-brand-teal" />
                  </div>
                  <h3 className="font-serif font-bold text-brand-navy text-lg mb-3">{title}</h3>
                  <p className="text-brand-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-white" id="team">
          <div className="container-premium">
            <div className="text-center mb-14">
              <div className="section-label mx-auto w-fit">Our Team</div>
              <h2 className="section-title mb-4">The Experts Behind Your Care</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center card-premium p-8">
                  <div className={`w-20 h-20 rounded-3xl ${member.color} flex items-center justify-center mx-auto mb-5`}>
                    <span className="text-white font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-serif font-bold text-brand-navy text-lg mb-1">{member.name}</h3>
                  <p className="text-brand-gray-400 text-sm">{member.title}</p>
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
