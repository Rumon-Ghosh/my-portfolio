import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaRocket, FaTools, FaLightbulb } from "react-icons/fa";
import AnimationWrapper from "./AnimationWrapper";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Go back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium group"
          >
            <FaArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        <AnimationWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side: Images & Quick Links */}
              <div>
                <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/5 shadow-2xl glass-card mb-8">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-white text-background px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-lg active:scale-95"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/5 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all active:scale-95"
                  >
                    <FaGithub className="text-xl" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="space-y-10">
                <div>
                  <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
                    {project.name}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-8 rounded-[32px] border border-white/5">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <FaRocket className="text-primary" /> Overview
                  </h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card p-8 rounded-[32px] border border-white/5">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <FaTools className="text-secondary" /> Challenges
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="glass-card p-8 rounded-[32px] border border-white/5">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <FaLightbulb className="text-accent" /> Improvements
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {project.improvements}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
