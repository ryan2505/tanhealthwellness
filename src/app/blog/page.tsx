import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Blog",
  description: "Expert insights on pain management, spine health, neurology, and wellness from the medical team at Tan Health & Wellness.",
};

const categories = ["All", "Pain Management", "Spine Health", "Neurology", "Rehabilitation", "Wellness", "Patient Stories"];

const posts = [
  { slug: "understanding-chronic-pain", title: "Understanding Chronic Pain: Beyond the Surface", excerpt: "Chronic pain is far more complex than most people realize. Here's what the latest neuroscience tells us — and what it means for treatment.", category: "Pain Management", readingTime: 6, date: "May 2, 2026", featured: true },
  { slug: "non-surgical-spine-treatment", title: "5 Non-Surgical Treatments That Actually Work for Spine Pain", excerpt: "Many patients assume surgery is inevitable for serious spine conditions. In most cases, it isn't — here's what works instead.", category: "Spine Health", readingTime: 5, date: "April 28, 2026", featured: false },
  { slug: "pRP-for-injury-recovery", title: "PRP Therapy: What the Research Really Says", excerpt: "Platelet-rich plasma has been both overhyped and unfairly dismissed. We break down the actual evidence.", category: "Pain Management", readingTime: 7, date: "April 20, 2026", featured: false },
  { slug: "migraine-prevention-strategies", title: "Migraine Prevention: A Neurologist's Practical Guide", excerpt: "Beyond medication — the lifestyle strategies and clinical interventions that genuinely reduce migraine frequency.", category: "Neurology", readingTime: 8, date: "April 15, 2026", featured: false },
  { slug: "patient-story-back-pain-recovery", title: "From Barely Walking to Running a 5K: Michael's Recovery Story", excerpt: "After 8 years of debilitating back pain, Michael found a treatment approach that actually worked. Here's his story.", category: "Patient Stories", readingTime: 4, date: "April 8, 2026", featured: false },
  { slug: "anti-inflammatory-diet-pain", title: "The Anti-Inflammatory Diet for Pain Relief: What to Eat and Avoid", excerpt: "Diet plays a real role in chronic pain management. A functional medicine approach to eating for pain relief.", category: "Wellness", readingTime: 6, date: "March 30, 2026", featured: false },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Health Blog"
          title="Expert Insights"
          titleHighlight="For Better Health"
          subtitle="Evidence-based articles on pain management, rehabilitation, and wellness — written by our clinical team."
        />

        <section className="section-padding bg-white">
          <div className="container-premium">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    cat === "All" ? "bg-brand-navy text-white" : "bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-teal/10 hover:text-brand-teal"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Featured post */}
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="group block mb-12">
                <div className="card-premium overflow-hidden grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-brand-teal/20 to-brand-navy/30 min-h-64" />
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="badge-premium bg-brand-teal/10 text-brand-teal">Featured</span>
                      <span className="badge-premium bg-brand-gray-100 text-brand-gray-500">
                        <Tag size={10} />
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-serif font-bold text-brand-navy text-2xl md:text-3xl mb-3 group-hover:text-brand-teal transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-brand-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-brand-gray-400 text-xs">
                        <Clock size={13} />
                        {featured.readingTime} min read
                        <span>·</span>
                        {featured.date}
                      </div>
                      <span className="flex items-center gap-1 text-brand-teal text-sm font-semibold">
                        Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Article grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card-premium overflow-hidden group flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-brand-teal/15 to-brand-navy/20" />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="badge-premium bg-brand-gray-100 text-brand-gray-500 text-[10px]">
                        <Tag size={9} />
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-teal transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-brand-gray-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto text-xs text-brand-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readingTime} min read
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 bg-brand-cream rounded-4xl p-10 md:p-14 text-center">
              <div className="section-label mx-auto w-fit mb-3">Stay Informed</div>
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-3">Subscribe to Our Health Newsletter</h2>
              <p className="text-brand-gray-500 mb-7 max-w-md mx-auto text-sm">Monthly health insights, treatment news, and wellness tips — delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white border border-brand-gray-200 rounded-2xl px-5 py-3.5 text-sm text-brand-navy focus:outline-none focus:border-brand-teal transition-all"
                />
                <button className="btn-primary flex-shrink-0">
                  Subscribe <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
