"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rumon-Ghosh", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/rumonghosh", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/RumonGhosh", label: "Twitter" },
    { icon: FaFacebook, href: "https://web.facebook.com/rumon13664", label: "Facebook" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Rumon Ghosh
              </span>
              . All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            Built with <span className="text-red-500">❤</span> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}