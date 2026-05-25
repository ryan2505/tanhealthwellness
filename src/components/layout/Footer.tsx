import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, AlertCircle, ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Dr. Tankeu", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Pain Management", href: "/conditions#pain-management" },
    { label: "Spine Care", href: "/conditions#spine-care" },
    { label: "Neurology", href: "/conditions#neurology" },
    { label: "Rehabilitation", href: "/conditions#rehabilitation" },
    { label: "Physical Therapy", href: "/conditions#physical-therapy" },
    { label: "Wellness Therapy", href: "/conditions#wellness" },
  ],
  resources: [
    { label: "Patient Resources", href: "/patient-resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Book Appointment", href: "/book-appointment" },
    { label: "Insurance Info", href: "/patient-resources#insurance" },
    { label: "New Patients", href: "/patient-resources#new-patients" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Emergency Banner */}
      <div className="bg-red-600/90 py-3">
        <div className="container-premium flex items-center justify-center gap-3">
          <AlertCircle size={18} className="text-white flex-shrink-0" />
          <p className="text-sm font-medium">
            Medical Emergency? Call{" "}
            <a href="tel:911" className="font-bold underline underline-offset-2 hover:no-underline">
              911
            </a>{" "}
            immediately. For urgent care:{" "}
            <a href="tel:+12395618880" className="font-bold underline underline-offset-2 hover:no-underline">
              (239) 561-8880
            </a>
          </p>
        </div>
      </div>

      <div className="container-premium pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <Image
                src="/images/logo-white.png"
                alt="TaN Health Wellness — Pain & Spine Center"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              World-class pain management, spine care, and rehabilitation services — delivered with compassion, precision, and innovation.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a href="tel:+12395618880" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <Phone size={14} className="text-brand-tealLight" />
                </div>
                (239) 561-8880
              </a>
              <a href="mailto:tanhealthmed@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <Mail size={14} className="text-brand-tealLight" />
                </div>
                tanhealthmed@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-brand-tealLight" />
                </div>
                <span>22904 Lyden Drive, Suite 102,<br />Estero, FL 33928</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-brand-tealLight" />
                </div>
                <div>
                  <p>Monday: 2:00 PM – 5:00 PM</p>
                  <p>Thursday: 2:00 PM – 5:00 PM</p>
                  <p>Saturday: 1:00 PM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200 link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200 link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-5">Resources</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200 link-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-3">Newsletter</h4>
              <p className="text-xs text-white/50 mb-3">Health tips & updates delivered monthly.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                />
                <button className="w-10 h-10 rounded-xl bg-brand-teal hover:bg-brand-tealLight flex items-center justify-center flex-shrink-0 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Tan Health & Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="text-xs text-white/40 hover:text-white/70 transition-colors">Accessibility</Link>
          </div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Youtube, href: "#", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-teal/20 flex items-center justify-center text-white/50 hover:text-brand-tealLight transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
