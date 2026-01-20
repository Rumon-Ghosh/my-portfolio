"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [copiedField, setCopiedField] = useState(null);

  const contactInfo = {
    email: "rumon698@gmail.com",
    phone: "+8801683185104",
    whatsapp: "+8801683185104",
  };

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      field: "email",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      field: "phone",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: contactInfo.whatsapp,
      href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
      field: "whatsapp",
      gradient: "from-green-400 to-green-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels.
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copiedField === item.field;

            return (
              <div
                key={item.field}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <a
                    href={item.href}
                    target={item.field === "email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 break-all transition-colors duration-300 font-medium"
                  >
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-300 hover:rotate-6 hover:scale-110`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </a>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.label}
                  </h3>
                  <a
                    href={item.href}
                    target={item.field === "email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 mb-4 break-all transition-colors duration-300 font-medium"
                  >
                    {item.value}
                  </a>
                  <button
                    onClick={() => handleCopy(item.value, item.field)}
                    className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                      isCopied
                        ? "bg-green-100 text-green-700"
                        : `bg-gradient-to-r ${item.gradient} text-white hover:shadow-lg transform hover:scale-105`
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <FaCheck className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
