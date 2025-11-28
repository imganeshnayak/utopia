import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 py-12 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center text-white">
            <Zap className="w-2.5 h-2.5 fill-current" />
          </div>
          <span className="text-sm font-semibold text-white uppercase">
            Utopia
          </span>
        </div>
        <p className="text-xs text-zinc-500">© 2024 Utopia Labs Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
