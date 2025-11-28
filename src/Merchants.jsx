import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Zap,
  BarChart3,
  Users,
  Rocket,
  Coffee,
  Cookie,
} from "lucide-react";

// Animated counter component
const AnimatedNumber = ({ value, prefix = "", suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value (remove commas)
    const numericValue = parseInt(value.toString().replace(/,/g, ""), 10);
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));

      if (now < endTime) {
        requestAnimationFrame(tick);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  // Format number with commas for Indian numbering
  const formatNumber = (num) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <span ref={ref}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

const Merchants = ({ onOpenWaitlist }) => {
  return (
    <section className="py-24 px-6 relative" id="merchants">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-medium tracking-wide uppercase">
              <TrendingUp className="w-3 h-3" /> For Merchants
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
              Growth that you can track.
            </h2>
            <p className="text-zinc-400 text-base font-light leading-relaxed max-w-md">
              Turn foot traffic into loyal customers. Create flash sales in
              seconds, analyze peak hours, and watch your revenue grow.
            </p>
            <ul className="space-y-4 pt-4">
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Flash Sales in Seconds
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1">
                    Create time-limited offers that reach nearby shoppers
                    instantly.
                  </p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart3 className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Real-time Analytics
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1">
                    Track redemptions, foot traffic, and revenue in real-time.
                  </p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-3 h-3 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    Customer Insights
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1">
                    Understand peak hours and customer preferences.
                  </p>
                </div>
              </motion.li>
            </ul>
            <div className="flex gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenWaitlist("merchant")}
                className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" /> Join Merchant Waitlist
              </motion.button>
            </div>
          </motion.div>

          {/* Merchant Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white font-medium">
                    Third Wave Coffee
                  </h3>
                  <p className="text-zinc-500 text-xs">Dashboard Overview</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-xs text-emerald-400">Live</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <motion.div whileHover={{ y: -2 }} className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
                    Today's Revenue
                  </p>
                  <p className="text-white text-xl font-semibold mt-1">
                    <AnimatedNumber value={245847} prefix="₹" duration={2} />
                  </p>
                  <p className="text-emerald-400 text-[10px] flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +23%
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
                    Redemptions
                  </p>
                  <p className="text-white text-xl font-semibold mt-1">
                    <AnimatedNumber value={142} duration={1.5} />
                  </p>
                  <p className="text-emerald-400 text-[10px] flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +18%
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} className="bg-zinc-800/50 rounded-xl p-3 border border-zinc-700/50">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
                    New Customers
                  </p>
                  <p className="text-white text-xl font-semibold mt-1">
                    <AnimatedNumber value={38} duration={1.5} />
                  </p>
                  <p className="text-emerald-400 text-[10px] flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +12%
                  </p>
                </motion.div>
              </div>

              {/* Chart */}
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/50 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-zinc-400 text-xs font-medium">
                    Weekly Performance
                  </p>
                  <div className="flex gap-3 text-[10px]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>{" "}
                      Revenue
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>{" "}
                      Visits
                    </span>
                  </div>
                </div>
                <svg
                  className="w-full h-32"
                  viewBox="0 0 300 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="blueGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgba(59, 130, 246, 0.3)"
                      />
                      <stop
                        offset="100%"
                        stopColor="rgba(59, 130, 246, 0)"
                      />
                    </linearGradient>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M0,80 Q50,60 100,50 T200,30 T300,20 L300,100 L0,100 Z"
                    fill="url(#blueGradient)"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="chart-line"
                    d="M0,80 Q50,60 100,50 T200,30 T300,20"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="chart-line"
                    d="M0,90 Q50,75 100,65 T200,55 T300,45"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                </svg>
                <div className="flex justify-between text-[10px] text-zinc-600 mt-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Active Offers */}
              <div>
                <p className="text-zinc-400 text-xs font-medium mb-3">
                  Active Offers
                </p>
                <div className="space-y-2">
                  <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <Coffee className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-medium">
                          40% Off Latte
                        </p>
                        <p className="text-zinc-500 text-[10px]">
                          Ends in 2h 34m
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xs font-medium">87</p>
                      <p className="text-zinc-500 text-[10px]">redeemed</p>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <Cookie className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-white text-xs font-medium">
                          Free Pastry with Order
                        </p>
                        <p className="text-zinc-500 text-[10px]">
                          Ends in 5h 12m
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xs font-medium">55</p>
                      <p className="text-zinc-500 text-[10px]">redeemed</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Merchants;
