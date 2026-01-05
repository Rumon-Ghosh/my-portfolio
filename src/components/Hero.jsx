"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profile from "@/assets/my_profile.png"
import Image from "next/image";

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rumon-Ghosh", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rumonghosh", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/RumonGhosh", label: "Twitter" },
    { icon: FaFacebook, href: "https://web.facebook.com/rumon13664", label: "Facebook" },
  ];

  const handleResumeDownload = () => {
    alert("Resume will done soon.")
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 md:pt-24 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div
              className={`transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Rumon
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  MERN Stack Developer
                </span>
              </h2>
              <p
                className={`text-lg md:text-xl text-gray-600 mb-8 max-w-2xl transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Passionate developer crafting beautiful and functional web
                applications. I love turning complex problems into simple,
                elegant solutions.
              </p>
            </div>

            {/* Resume Download Button */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <button
                onClick={handleResumeDownload}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 mb-8 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex flex-wrap justify-center md:justify-start gap-4 transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-gray-700 hover:text-white transform hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                    style={{
                      animationDelay: `${800 + index * 100}ms`,
                    }}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Professional Photo */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 rotate-12"
              }`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(0deg)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-300 hover:scale-105">
                <Image 
                  src={profile} 
                  alt="Rumon Ghosh Profile" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}