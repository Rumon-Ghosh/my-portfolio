"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col rounded-[32px] overflow-hidden group border border-white/5 h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className="w-full py-4 text-center rounded-2xl bg-white text-background font-bold hover:bg-primary hover:text-white hover:bg-black transition-all transform active:scale-95 flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <FaArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}