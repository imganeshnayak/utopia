import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{
        width: "100%",
        top: 0,
        borderRadius: 0,
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(9, 9, 11, 0.8)",
      }}
      animate={
        isScrolled
          ? {
              width: "90%",
              maxWidth: "1200px",
              top: 20,
              left: "50%",
              x: "-50%",
              borderRadius: 9999,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(9, 9, 11, 0.85)",
              boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
            }
          : {
              width: "100%",
              maxWidth: "100%",
              top: 0,
              left: "50%",
              x: "-50%",
              borderRadius: 0,
              border: "1px solid rgba(255, 255, 255, 0.05)",
              background: "rgba(9, 9, 11, 0.8)",
              boxShadow: "none",
            }
      }
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed z-50 backdrop-blur-md"
    >
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-bold tracking-tight text-white/40" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            UTOPIA
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
          <a href="#shoppers" className="hover:text-white transition-colors">
            Shoppers
          </a>
          <a href="#merchants" className="hover:text-white transition-colors">
            Merchants
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            Philosophy
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onOpenWaitlist("customer")}
            className="bg-white text-zinc-950 text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
