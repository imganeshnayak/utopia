import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-zinc-900 py-12 px-6 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white/40" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            UTOPIA
          </span>
        </div>
        <p className="text-xs text-zinc-500">© 2025 Utopia</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
