import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Store,
  Mail,
  Bell,
  ShieldCheck,
  Gift,
  Rocket,
  Lock,
  Check,
} from "lucide-react";

const WaitlistModal = ({ isOpen, onClose, initialTab = "customer" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showSuccess, setShowSuccess] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setShowSuccess(false);
      setActiveTab("customer");
      setEmail("");
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Method: Store in Google Sheets (Online Excel)
    try {
      // 1. Create a Google Sheet
      // 2. Extensions > Apps Script > Deploy as Web App
      // 3. Paste the URL below
      const scriptURL = "https://script.google.com/macros/s/AKfycbwyLSBItbl6AJMmyeWzE_kePWuRQTMwKqmTKMuLGEV-i-ljbEjJa_ZdJmsK373nE0GcMg/exec";
      
      const formData = new FormData();
      formData.append("email", email);
      formData.append("type", activeTab);
      formData.append("date", new Date().toISOString());

      // mode: 'no-cors' is required for Google Apps Script
      await fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        // mode: 'no-cors' // Removed because permissions are fixed
      });
      
      console.log(`Saved to Google Sheet: ${email}`);
      setShowSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setShowSuccess(false);
    setEmail("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={handleClose}
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="pt-8 pb-4 px-6 text-center border-b border-zinc-800">
              <div className="w-20 h-20 rounded-full bg-zinc-950 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white/40" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  U
                </span>
              </div>
              <h2 className="text-xl font-medium text-white mb-1">
                Join the Waitlist
              </h2>
              <p className="text-zinc-500 text-sm">
                Be first to experience Utopia
              </p>

              {/* Tabs */}
              <div className="flex gap-2 mt-6 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
                <button
                  onClick={() => switchTab("customer")}
                  className={`relative flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                    activeTab === "customer" ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {activeTab === "customer" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <User className="w-4 h-4" /> Shopper
                  </span>
                </button>
                <button
                  onClick={() => switchTab("merchant")}
                  className={`relative flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                    activeTab === "merchant" ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {activeTab === "merchant" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Store className="w-4 h-4" /> Merchant
                  </span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 min-h-[300px]">
              <AnimatePresence mode="wait">
                {/* Customer Form */}
                {activeTab === "customer" && !showSuccess && (
                  <motion.div
                    key="customer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[10px] text-white font-bold">
                          RK
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-950 flex items-center justify-center text-[10px] text-white font-bold">
                          AS
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-950 flex items-center justify-center text-[10px] text-white font-bold">
                          VP
                        </div>
                      </div>
                      <span className="text-zinc-500 text-xs">
                        2,847 people joined
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-white hover:bg-zinc-200 text-zinc-950 px-6 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <Bell className="w-4 h-4" /> Join Waitlist
                      </motion.button>
                    </form>
                    <p className="text-zinc-600 text-[10px] text-center mt-4 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> No spam, unsubscribe anytime
                    </p>
                  </motion.div>
                )}

                {/* Merchant Form */}
                {activeTab === "merchant" && !showSuccess && (
                  <motion.div
                    key="merchant"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-6 p-3 bg-zinc-900 border border-zinc-800 rounded-xl">
                      <Gift className="w-5 h-5 text-white" />
                      <div>
                        <p className="text-white text-xs font-medium">
                          Early Access Benefit
                        </p>
                        <p className="text-zinc-500 text-[10px]">
                          lifetime free for early merchants!
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          placeholder="Enter your business email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-white hover:bg-zinc-200 text-zinc-950 px-6 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <Rocket className="w-4 h-4" /> Join Waitlist
                      </motion.button>
                    </form>
                    <p className="text-zinc-600 text-[10px] text-center mt-4 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> Your information is secure and
                      private
                    </p>
                  </motion.div>
                )}

                {/* Success State */}
                {showSuccess && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white text-lg font-medium mb-2">
                        You're on the list! 🎉
                      </h3>
                      <p className="text-zinc-500 text-sm mb-6">
                        We'll notify you as soon as we launch in your area.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleClose}
                        className="bg-white hover:bg-zinc-200 text-zinc-950 px-6 py-3 rounded-xl text-sm font-medium transition-colors"
                      >
                        Got it, thanks!
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
