import { motion } from "framer-motion";
import { Heart, Share2, Zap } from "lucide-react";

const Philosophy = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-zinc-950 overflow-hidden">
      {/* Background Ambience - Monochrome/Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="text-xs font-medium text-zinc-300 tracking-wider uppercase">
              Our Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 tracking-tight">
            Restoring the heartbeat of <br className="hidden md:block" />
            <span className="text-zinc-400">local commerce.</span>
          </h2>

          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            In a world of instant delivery and faceless transactions, we believe
            in the power of connection. Utopia is a movement to bring people
            back to their neighborhoods.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: "Community First",
              description: "We prioritize local connections over global algorithms.",
            },
            {
              icon: Zap,
              title: "Instant & Real",
              description: "Real-time offers from the stores right around the corner.",
            },
            {
              icon: Share2,
              title: "Shared Growth",
              description: "When local businesses thrive, the whole community wins.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-zinc-200 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-medium text-zinc-200 mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-400 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;