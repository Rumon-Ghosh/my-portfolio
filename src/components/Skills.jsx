"use client";

import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJs,
  FaFire,
  FaNpm,
} from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiPostman, SiFigma, SiVite } from "react-icons/si";

export default function Skills() {
  const iconMap = {
    "React": FaReact,
    "JavaScript": FaJs,
    "HTML/CSS": FaHtml5,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    "Next.js": SiNextdotjs,
    "MongoDB": FaDatabase,
    "RESTful API": FaFire,
    "Git": FaGitAlt,
    "GitHub": FaGithub,
    "Postman": SiPostman,
    "Figma": SiFigma,
    "VS Code": SiVite, // Fallback icon
  };

  const categories = [
    { title: "Frontend", skills: skillsData.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", skills: skillsData.backend, color: "from-purple-500 to-pink-500" },
    { title: "Tools", skills: skillsData.tools, color: "from-orange-500 to-amber-500" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            My <span className="text-gradient">Abilities</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-[32px] border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill) => {
                  const Icon = iconMap[skill.name] || FaJs;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center gap-3 transition-colors"
                    >
                      <Icon className="text-3xl text-gray-400 group-hover:text-white" />
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full bg-gradient-to-r ${cat.color}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
