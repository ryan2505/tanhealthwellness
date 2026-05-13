import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ label, title, titleHighlight, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn("pt-36 pb-20 bg-brand-navy relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="container-premium relative z-10 text-center">
        {label && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-tealLight text-xs font-semibold tracking-widest uppercase mb-5">
            {label}
          </div>
        )}
        <h1 className="font-serif text-display-lg font-bold text-white mb-4 leading-tight">
          {title}
          {titleHighlight && (
            <>
              <br />
              <span className="text-gradient-teal">{titleHighlight}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
