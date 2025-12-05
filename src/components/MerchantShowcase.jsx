import { motion } from "framer-motion";
import {
  Store,
  TrendingUp,
  Users,
  Megaphone,
  Zap,
  Shield,
  BarChart3,
  Sparkles,
} from "lucide-react";

const MerchantShowcase = () => {
  const merchantScreens = [
    { img: "/app-screenshots/merchant-profile.png", alt: "Merchant Profile" },
    { img: "/app-screenshots/merchant-customers.png", alt: "Customer Management" },
    { img: "/app-screenshots/merchant-promotions.png", alt: "Promotions" },
    { img: "/app-screenshots/merchant-analytics.png", alt: "Analytics Dashboard" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-zinc-900 via-zinc-950 to-black py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Store className="w-4 h-4" />
            For Merchants
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Grow your business
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              with powerful tools
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage customers, run promotions, and boost sales—all in one intuitive merchant dashboard.
          </p>
        </motion.div>

        {/* Main Content Grid - 2 Phones + Features */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Phone - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[4rem] blur-2xl" />
              <div className="relative w-[260px] sm:w-[300px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[10px] border-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img
                    src={merchantScreens[0].img}
                    alt={merchantScreens[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Features Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8 lg:py-12"
          >
            {/* Feature 1 */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Customer Insights</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Track customer behavior, segment audiences, and build lasting relationships with detailed analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Megaphone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Promotions</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Create targeted campaigns that drive foot traffic and boost revenue with AI-powered recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Monitor sales, track performance, and make data-driven decisions with comprehensive dashboards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Phone - Customers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[4rem] blur-2xl" />
              <div className="relative w-[260px] sm:w-[300px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[10px] border-zinc-800 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img
                    src={merchantScreens[1].img}
                    alt={merchantScreens[1].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom 2 Phones - Promotions & Analytics */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          
          {/* Promotions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-[4rem] blur-2xl" />
                <div className="relative w-[260px] sm:w-[300px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[10px] border-zinc-800 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-3xl z-10" />
                  <div className="relative w-full h-full bg-zinc-900">
                    <img
                      src={merchantScreens[2].img}
                      alt={merchantScreens[2].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                Launch Campaigns
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Promotions that convert
              </h3>
              <p className="text-zinc-400 max-w-sm mx-auto">
                Design eye-catching offers and track their performance in real-time. See what works and optimize on the fly.
              </p>
            </div>
          </motion.div>

          {/* Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[4rem] blur-2xl" />
                <div className="relative w-[260px] sm:w-[300px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[10px] border-zinc-800 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-950 rounded-b-3xl z-10" />
                  <div className="relative w-full h-full bg-zinc-900">
                    <img
                      src={merchantScreens[3].img}
                      alt={merchantScreens[3].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Growth Metrics
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Data-driven decisions
              </h3>
              <p className="text-zinc-400 max-w-sm mx-auto">
                Get actionable insights into your business performance. Track sales trends, customer lifetime value, and more.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
            <Shield className="w-5 h-5 text-emerald-400" />
            <p className="text-zinc-300">
              <span className="font-semibold text-white">Zero commission.</span> Only pay for premium features you use.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MerchantShowcase;
