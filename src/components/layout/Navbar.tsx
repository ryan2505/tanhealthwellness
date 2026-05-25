"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Pain Management", href: "/conditions#pain-management" },
      { label: "Spine Care", href: "/conditions#spine-care" },
      { label: "Neurology", href: "/conditions#neurology" },
      { label: "Rehabilitation", href: "/conditions#rehabilitation" },
      { label: "Wellness Therapy", href: "/conditions#wellness" },
      { label: "Physical Therapy", href: "/conditions#physical-therapy" },
    ],
  },
  { label: "Treatments", href: "/treatments" },
  { label: "Conditions", href: "/conditions" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-premium-sm border-b border-brand-gray-100"
            : "bg-transparent"
        )}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo.png"
                alt="TaN Health Wellness — Pain & Spine Center"
                width={180}
                height={72}
                className={cn(
                  "h-14 w-auto object-contain transition-all duration-300",
                  scrolled || !isHome ? "brightness-100" : "brightness-0 invert"
                )}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      scrolled || !isHome
                        ? "text-brand-gray-700 hover:text-brand-teal hover:bg-brand-teal/5"
                        : "text-white/90 hover:text-white hover:bg-white/10",
                      pathname === item.href && (scrolled || !isHome)
                        ? "text-brand-teal bg-brand-teal/10"
                        : ""
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-premium border border-brand-gray-100 p-2 z-50"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 rounded-xl text-sm text-brand-gray-700 hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200 font-medium"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+17572920515"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                  scrolled || !isHome ? "text-brand-gray-600 hover:text-brand-teal" : "text-white/80 hover:text-white"
                )}
              >
                <Phone size={15} />
                <span className="hidden xl:block">(757) 292-0515</span>
              </a>
              <Link href="/book-appointment" className="btn-primary text-sm py-3 px-6">
                <Calendar size={15} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors duration-300",
                scrolled || !isHome
                  ? "text-brand-navy hover:bg-brand-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3.5 px-4 rounded-2xl text-lg font-semibold text-brand-navy hover:text-brand-teal hover:bg-brand-teal/5 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 px-4 rounded-xl text-sm text-brand-gray-600 hover:text-brand-teal transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-8 flex flex-col gap-3">
                <a
                  href="tel:+17572920515"
                  className="flex items-center gap-3 py-3.5 px-6 rounded-2xl border border-brand-gray-200 text-brand-navy font-semibold"
                >
                  <Phone size={18} className="text-brand-teal" />
                  (757) 292-0515
                </a>
                <Link href="/book-appointment" className="btn-primary justify-center py-4 text-base">
                  <Calendar size={18} />
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
