// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ramu-codes", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ramu-chaurasiya-8b9933295/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ramucodes@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background: "rgb(26, 38, 55)",
        borderTop: "1px solid rgba(148,163,184,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: copyright */}
        <p className="text-xs flex items-center gap-1.5 order-2 sm:order-1 text-slate-400">
          © {currentYear} RAM · Made with
          <motion.span
            animate={{ scale: [1, 1.35, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart size={12} fill="#818cf8" className="text-indigo-400" />
          </motion.span>
        </p>

        {/* Center: socials */}
        <div className="flex items-center gap-2 order-1 sm:order-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="p-2 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>

        {/* Right: back to top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 text-xs order-3 cursor-pointer text-slate-400 hover:text-indigo-400 transition-colors"
        >
          <ArrowUp size={14} /> Top
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
