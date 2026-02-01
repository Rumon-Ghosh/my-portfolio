"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
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
      color: "text-blue-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      field: "phone",
      color: "text-purple-500",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: contactInfo.whatsapp,
      href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
      field: "whatsapp",
      color: "text-green-500",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const isCopied = copiedField === item.field;

              return (
                <motion.div
                  key={item.field}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 md:p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center group"
                >
                  <a
                    href={item.href}
                    target={item.field === "email" ? "_self" : "_blank"}
                    className="text-gray-400 hover:text-white mb-8 transition-colors break-all px-2 font-medium"
                  >
                    <div className={`w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                      <Icon className="text-3xl" />
                    </div>
                  </a>

                  <h3 className="text-xl font-bold mb-2 text-white">{item.label}</h3>
                  <a
                    href={item.href}
                    target={item.field === "email" ? "_self" : "_blank"}
                    className="text-gray-400 hover:text-white mb-8 transition-colors break-all px-2 font-medium"
                  >
                    {item.value}
                  </a>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCopy(item.value, item.field)}
                    className={`mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all cursor-pointer ${isCopied
                      ? "bg-green-500 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                  >
                    {isCopied ? (
                      <>
                        <FaCheck className="text-sm" />
                        Copied
                      </>
                    ) : (
                      <>
                        <FaCopy className="text-sm" />
                        Copy
                      </>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 glass-card rounded-[40px] border border-white/5 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Let's build something amazing together</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I'm currently available for freelance work and full-time opportunities.
              If you have a project that needs some love, feel free to reach out.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-lg shadow-primary/20"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
