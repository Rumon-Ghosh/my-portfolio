"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "@/assets/my_profile.png"
import Image from "next/image";

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rumon-Ghosh", label: "GitHub", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rumonghosh", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: FaTwitter, href: "https://x.com/RumonGhosh", label: "Twitter", color: "hover:text-sky-400" },
    { icon: FaFacebook, href: "https://web.facebook.com/rumon13664", label: "Facebook", color: "hover:text-blue-600" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-mesh pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-mono tracking-widest mb-4">MERN STACK DEVELOPER</h2>
              <h1 className="text-6xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
                I'm <span className="text-gradient">Rumon</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                Turning ideas into <span className="text-white font-medium">high-performance web realities</span>.
                I specialize in building scalable, user-centric applications with the modern web stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a href="/Rumon-Resume.pdf" download={true}
                className="group relative flex items-center gap-3 bg-white text-background px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95"
              >
                <FaDownload className="text-sm transition-transform group-hover:translate-y-0.5" />
                Get Resume
              </a>
              <div className="flex items-center gap-2 glass p-2 rounded-2xl border border-white/5">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 transition-colors ${social.color} hover:bg-white/5`}
                      aria-label={social.label}
                    >
                      <Icon className="text-xl" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">1+</span>
                <span className="text-xs uppercase tracking-tighter">Year Coding Experience</span>
              </div>
              <div className="w-[1px] h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-xs uppercase tracking-tighter">Projects Completed</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1 relative"
          >
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] mx-auto">
              {/* Decorative shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 inset-y-0 border-2 border-dashed border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-8 inset-y-8 border border-primary/20 rounded-full"
              />

              <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/5 shadow-2xl glass-card">
                <Image
                  src={profile}
                  alt="Rumon Ghosh"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass px-6 py-4 rounded-3xl border border-white/10 shadow-2xl"
              >
                <div className="flex flex-col">
                  <span className="text-sm text-white font-medium">Available for</span>
                  <span className="text-white font-bold">Freelance Work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
