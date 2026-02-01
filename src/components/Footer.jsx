"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rumon-Ghosh", label: "GitHub", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rumonghosh", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "https://x.com/RumonGhosh", label: "Twitter", color: "hover:text-sky-400" },
    { icon: FaFacebook, href: "https://web.facebook.com/rumon13664", label: "Facebook", color: "hover:text-blue-600" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">
              <span className="text-gradient">Rumon Ghosh</span>
            </h2>
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <Icon className="text-xl" />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            Designed & Developed with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-accent inline-block"
            >❤</motion.span> by Rumon
          </p>
        </div>
      </div>
    </footer>
  );
}