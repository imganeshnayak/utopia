import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = ({ onOpenWaitlist }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-zinc-400 mb-8 reveal-up">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          v2.0 Now Available
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.9] reveal-up reveal-delay-100">
          Local commerce,
          <br />
          <span className="text-zinc-500">reimagined.</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light reveal-up reveal-delay-200">
          Utopia bridges the gap between hyper-local merchants and savvy
          shoppers. Discover exclusive offers or scale your business with
          real-time analytics.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up reveal-delay-300">
          <button
            onClick={() => onOpenWaitlist("customer")}
            className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" /> Join as Shopper
          </button>
          <button
            onClick={() => onOpenWaitlist("merchant")}
            className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium text-zinc-300 border border-zinc-800 hover:border-zinc-600 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Join as Merchant <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
