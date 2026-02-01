"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "HSC In Business Studies",
      institution: "Copanigonj B. A. University College",
      year: "2012 - 2014",
      description:
        "Completed higher secondary education in Business Studies with a focus on accounting, management, finance, economics, and business fundamentals.",
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Education <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-10 rounded-[40px] border border-white/5 relative group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-8xl font-black">{edu.year.split(' - ')[1]}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-xl text-primary font-semibold">{edu.institution}</p>
                </div>
                <div className="px-6 py-2 rounded-2xl bg-white/5 border border-white/10 text-white font-bold whitespace-nowrap">
                  {edu.year}
                </div>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl relative z-10">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}