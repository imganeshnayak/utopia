import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Target,
  Gift,
  Trophy,
} from "lucide-react";

const MobileShowcase = () => {
  const darkScreens = [
    { img: "/app-screenshots/home.png", alt: "Home" },
    { img: "/app-screenshots/categories.png", alt: "Categories" },
    { img: "/app-screenshots/qrcode.png", alt: "QR Code" },
    { img: "/app-screenshots/journey.png", alt: "Journey" },
    { img: "/app-screenshots/missions.png", alt: "Missions" },
  ];

  const lightScreens = [
    { img: "/app-screenshots/coupons.png", alt: "Coupon Discovery" },
    { img: "/app-screenshots/loyalty.png", alt: "Loyalty Cards" },
    { img: "/app-screenshots/savings.png", alt: "Savings Dashboard" },
  ];

  return (
    <section className="bg-zinc-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-emerald-950/5 to-zinc-900/0 pointer-events-none" />

      {/* DARK MODE SECTION */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-32">
          
          {/* Section 1 - Home */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-900 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img 
                    src={darkScreens[0].img}
                    alt={darkScreens[0].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-medium tracking-wide uppercase">
                <MapPin className="w-4 h-4" /> Discover
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Find deals around you
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                Browse featured deals and discover local businesses offering exclusive discounts in your area. Real-time updates ensure you never miss out.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Location-based deal discovery</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-3 h-3 text-emerald-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Personalized recommendations</p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Section 2 - Categories */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-medium tracking-wide uppercase">
                <Target className="w-4 h-4" /> Categories
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Browse by category
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                Explore deals organized by category—food, shopping, services, entertainment, and more. Find exactly what you're looking for.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">8+ categories to explore</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-3 h-3 text-blue-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Curated local businesses</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-900 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img 
                    src={darkScreens[1].img}
                    alt={darkScreens[1].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 3 - QR Code */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-900 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img 
                    src={darkScreens[2].img}
                    alt={darkScreens[2].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-medium tracking-wide uppercase">
                <Gift className="w-4 h-4" /> Redeem
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Instant QR redemption
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                Show your unique QR code at partner stores to claim your rewards instantly. No coupons, no hassle—just scan and save.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Contactless redemption</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-3 h-3 text-purple-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Secure & verified</p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Section 4 - Journey */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-medium tracking-wide uppercase">
                <Trophy className="w-4 h-4" /> Progress
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Level up your journey
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                Earn XP, unlock achievements, and climb the ranks. The more you explore and visit local businesses, the better your rewards get.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Trophy className="w-3 h-3 text-orange-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Gamified experience</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Gift className="w-3 h-3 text-orange-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Exclusive tier rewards</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-900 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img 
                    src={darkScreens[3].img}
                    alt={darkScreens[3].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Section 5 - Missions */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-zinc-950 rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-900 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-950 rounded-b-3xl z-10" />
                <div className="relative w-full h-full bg-zinc-900">
                  <img 
                    src={darkScreens[4].img}
                    alt={darkScreens[4].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 text-pink-400 text-xs font-medium tracking-wide uppercase">
                <Target className="w-4 h-4" /> Missions
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Complete & earn rewards
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                Take on fun missions to earn points, cashback, and exclusive perks. New challenges unlock based on your preferences and activity.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-3 h-3 text-pink-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Daily & weekly missions</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 mt-1">
                    <Gift className="w-3 h-3 text-pink-400" />
                  </div>
                  <p className="text-zinc-300 text-sm">Earn points & cashback</p>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>

      {/* TRANSITION SECTION - Dark to Light */}
      <div className="relative py-32 overflow-hidden">
        {/* Animated gradient transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-800 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_100%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 mb-8 shadow-2xl"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            But wait, there's more
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light">
            Unlock even smarter ways to save with intelligent features
          </p>
        </motion.div>
      </div>

      {/* LIGHT MODE SECTION */}
      <div className="relative bg-white">
        <div className="w-full max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-32">
            
            {/* Section 6 - Coupon Discovery */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-medium tracking-wide uppercase">
                  <Gift className="w-4 h-4" /> Smart Savings
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
                  Discover exclusive coupons
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed max-w-lg">
                  Get personalized coupon recommendations based on your shopping habits. Stack deals, unlock hidden offers, and maximize savings on every purchase.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">AI-powered coupon matching</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <Target className="w-3 h-3 text-emerald-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Expiry alerts & reminders</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <Gift className="w-3 h-3 text-emerald-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">One-tap coupon redemption</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-200 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-900 rounded-b-3xl z-10" />
                  <div className="relative w-full h-full bg-white">
                    <img 
                      src={lightScreens[0].img}
                      alt={lightScreens[0].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Section 7 - Loyalty Cards */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center order-2 lg:order-1"
              >
                <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-200 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-900 rounded-b-3xl z-10" />
                  <div className="relative w-full h-full bg-white">
                    <img 
                      src={lightScreens[1].img}
                      alt={lightScreens[1].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-6 order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 text-purple-600 text-xs font-medium tracking-wide uppercase">
                  <Trophy className="w-4 h-4" /> Loyalty
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
                  Digital loyalty cards
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed max-w-lg">
                  Collect stamps with every visit and unlock free rewards. Track your progress across all your favorite merchants in one place—no physical cards needed.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                      <Trophy className="w-3 h-3 text-purple-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Automatic stamp collection</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                      <Gift className="w-3 h-3 text-purple-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Unlock exclusive freebies</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Progress tracking across merchants</p>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Section 8 - Savings Dashboard */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-medium tracking-wide uppercase">
                  <Trophy className="w-4 h-4" /> Analytics
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
                  Track your total savings
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed max-w-lg">
                  Visualize every rupee saved with detailed insights. See monthly trends, projected savings, and compare yourself with top savers in your community.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <Target className="w-3 h-3 text-blue-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Real-time savings tracker</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <Trophy className="w-3 h-3 text-blue-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Forecasted savings projections</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                    </div>
                    <p className="text-zinc-700 text-sm">Personalized savings tips</p>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <div className="relative w-[240px] sm:w-[280px] xl:w-[320px] aspect-[9/19.5] bg-white rounded-[3rem] shadow-2xl border-[8px] lg:border-[10px] border-zinc-200 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 lg:w-36 h-6 lg:h-7 bg-zinc-900 rounded-b-3xl z-10" />
                  <div className="relative w-full h-full bg-white">
                    <img 
                      src={lightScreens[2].img}
                      alt={lightScreens[2].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


export default MobileShowcase;