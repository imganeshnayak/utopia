import { useState, useEffect } from "react";
import { Zap } from "lucide-react";

const Navbar = ({ onOpenWaitlist }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`main-nav fixed z-50 bg-zinc-950/80 backdrop-blur-md ${
        isScrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-zinc-950">
            <Zap className="w-3 h-3 fill-current" />
          </div>
          <span className="text-sm font-medium tracking-tighter uppercase group-hover:opacity-80 transition-opacity">
            Utopia
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
    </nav>
  );
};

export default Navbar;
