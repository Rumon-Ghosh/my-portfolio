import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link
            href="/#projects"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Go back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Project Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {project.name}
            </h1>

            {/* Tech Stack */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Project
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                GitHub Repository
              </a>
            </div>

            {/* Challenges */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Challenges Faced
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.challenges}
              </p>
            </div>

            {/* Improvements */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Future Improvements & Plans
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.improvements}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
