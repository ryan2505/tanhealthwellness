import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Article",
  description: "Expert health insights from the clinical team at Tan Health & Wellness.",
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  await params;
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-premium max-w-4xl">
          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-gray-400 hover:text-brand-teal transition-colors text-sm font-medium mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="badge-premium bg-brand-teal/10 text-brand-teal">
                <Tag size={10} />
                Pain Management
              </span>
            </div>
            <h1 className="font-serif text-display-md font-bold text-brand-navy mb-4 leading-tight">
              Understanding Chronic Pain: Beyond the Surface
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-brand-gray-400 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                May 2, 2026
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                6 min read
              </div>
              <span>By Dr. Tankeu, MD</span>
            </div>
          </div>

          {/* Cover image */}
          <div className="aspect-video rounded-4xl bg-gradient-to-br from-brand-teal/20 to-brand-navy/30 mb-10" />

          {/* Reading progress bar (visual placeholder) */}
          <div className="fixed top-20 left-0 right-0 z-40 h-0.5 bg-brand-gray-100">
            <div className="h-full bg-brand-teal w-1/3" />
          </div>

          {/* Article content */}
          <article className="prose prose-lg max-w-none pb-16
            prose-headings:font-serif prose-headings:text-brand-navy
            prose-p:text-brand-gray-600 prose-p:leading-relaxed
            prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline
            prose-strong:text-brand-navy
            prose-ul:text-brand-gray-600
            prose-blockquote:border-brand-teal prose-blockquote:text-brand-gray-600">
            <p>
              Chronic pain is one of the most misunderstood conditions in modern medicine. While acute pain — the kind you feel after an injury — is a straightforward signal from your body that something is wrong, chronic pain operates by entirely different rules. It can persist long after tissues have healed, intensify without clear cause, and profoundly affect every aspect of daily life.
            </p>
            <h2>The Neuroscience of Persistent Pain</h2>
            <p>
              Recent advances in pain neuroscience have revealed that chronic pain is not simply &ldquo;pain that lasts a long time.&rdquo; It involves fundamental changes in how the nervous system processes signals — a phenomenon called central sensitization. When pain persists, the nervous system becomes amplified, like a volume knob that gets stuck at maximum.
            </p>
            <blockquote>
              <p>&ldquo;Chronic pain is a disease of the nervous system, not just a symptom of tissue damage. Treating it requires understanding both the physical and neurological dimensions.&rdquo;</p>
            </blockquote>
            <h2>What This Means for Treatment</h2>
            <p>
              Understanding the neurological basis of chronic pain has revolutionized how we approach treatment. Rather than focusing solely on the site of pain, modern pain management addresses the entire pain pathway — from the peripheral nerves to the brain itself.
            </p>
            <p>
              This is why effective treatment for chronic pain often requires a multimodal approach: combining interventional procedures targeting the pain source with therapies that address central sensitization, psychological factors, and lifestyle elements.
            </p>
            <h2>The Role of Interventional Pain Medicine</h2>
            <p>
              Interventional pain procedures — such as nerve blocks, spinal cord stimulation, and radiofrequency ablation — work by interrupting or modulating pain signals at specific points along the pain pathway. When properly selected and performed with image guidance, these procedures can achieve significant and lasting relief.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-brand-cream rounded-4xl p-8 md:p-10 text-center mb-16">
            <h3 className="font-serif font-bold text-brand-navy text-2xl mb-3">Suffering From Chronic Pain?</h3>
            <p className="text-brand-gray-500 mb-6">Dr. Tankeu specializes in complex pain conditions. Schedule a consultation to discuss your options.</p>
            <Link href="/book-appointment" className="btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
