"use client";

import { skillsData } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
  FaCode,
  FaTools,
  FaFire,
  FaNpm,
  FaNode, 
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";


export default function Skills() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      skills: skillsData.frontend,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: skillsData.backend,
      color: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools",
      skills: skillsData.tools,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  // Hardcoded list of icons to display
  const iconList = [
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaReact,
    FaFire,
    FaDatabase,
    FaNode,
    SiExpress,
    FaGitAlt,
    FaGithub,
    FaNpm,
    FaCode,
    FaTools,
  ];

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2, // Icons appear one after another
  //     },
  //   },
  // };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 150}ms`,
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 relative">
                  {category.title}
                  <span
                    className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
                  ></span>
                </h3>
              </div>
              <motion.div
                className="space-y-6"
                // variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm font-medium bg-gray-100 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full shadow-md`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Separate Icons Section */}
        <div className="mt-16">
          <motion.div
            className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            // variants={containerVariants}
          >
            {iconList.map((IconComponent, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                animate={{
                  y: [0, -15, 0], // Floating up and down
                  rotate: [0, 10, -10, 0], // Rotation
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1, // Stagger start
                }}
                className="flex justify-center items-center p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <IconComponent className="text-6xl text-blue-600" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
