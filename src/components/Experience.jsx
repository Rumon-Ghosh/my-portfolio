"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Company Name",
      duration: "2023 - Present",
      description:
        "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Built responsive user interfaces using React",
        "Developed RESTful APIs using Node.js and Express",
        "Worked with MongoDB for database management",
        "Collaborated with team members using Git",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[40px] border border-white/5 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-secondary font-medium">{exp.company}</p>
                </div>
                <div className="px-6 py-2 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-bold whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>

              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {exp.description}
              </p>

              {exp.responsibilities && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-gray-300 font-medium">{resp}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}