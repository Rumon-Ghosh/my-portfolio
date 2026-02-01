"use client";

import { motion } from "framer-motion";
import { FaUser, FaCode, FaRocket, FaFutbol, FaBullseye } from "react-icons/fa";

export default function About() {
  const points = [
    {
      icon: FaUser,
      color: "text-blue-500",
      content: (
        <>
          I'm <span className="text-white font-semibold">Rumon Ghosh</span>, a web developer passionate about building modern, scalable web applications with a strong focus on clean code, performance, and user experience.
        </>
      ),
    },
    {
      icon: FaRocket,
      color: "text-purple-500",
      content: (
        <>
          My journey began with self-exploration of HTML, CSS, and JavaScript. Later, I joined <span className="text-white font-semibold">Programming Hero</span>, which provided the structured learning and project experience needed to build professional applications.
        </>
      ),
    },
    {
      icon: FaCode,
      color: "text-green-500",
      content: (
        <>
          I specialize in the <span className="text-white font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js). I focus on creating responsive interfaces and efficient backend logic using tools like Firebase, Git, and REST APIs.
        </>
      ),
    },
    {
      icon: FaFutbol,
      color: "text-orange-500",
      content: (
        <>
          Beyond coding, I'm a <span className="text-white font-semibold">football enthusiast</span> and an avid traveler. These passions help me stay balanced and bring fresh perspectives to my creative process.
        </>
      ),
    },
    {
      icon: FaBullseye,
      color: "text-red-500",
      content: (
        <>
          My goal is to evolve into a <span className="text-white font-semibold">world-class full-stack developer</span>, contributing to impactful open-source projects and delivering production-ready solutions that solve real-world problems.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-4 md:gap-8"
          >
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 rounded-3xl flex items-start gap-6 group hover:border-primary/20"
                >
                  <div className={`p-4 rounded-2xl bg-white/5 ${point.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="text-2xl" />
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed pt-1">
                    {point.content}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
