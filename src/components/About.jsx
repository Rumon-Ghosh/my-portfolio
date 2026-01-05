"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          </div>

          {/* Single Article Card (one column, full story) */}
          <article
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 transition-all duration-1000 delay-200 hover:shadow-2xl transform hover:scale-[1.01] border border-gray-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6 font-medium">
              I&apos;m <span className="font-semibold text-gray-900">Rumon Ghosh</span>, a web
              developer who loves building modern, scalable web applications
              with a strong focus on clean code, performance, and user experience.
              I enjoy solving complex problems and turning ideas into real-world
              solutions while always trying to keep things simple and user-friendly.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              My programming journey started by myself, exploring the basics of
              HTML, CSS and JavaScript out of curiosity. After that, I decided
              to join{" "}
              <span className="font-semibold text-gray-900">Programming Hero</span>,
              where I got real experience through structured learning, assignments,
              and full projects. That experience helped me understand how to build
              complete applications from scratch and think like a real-world developer.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              On the frontend, I work with{" "}
              <span className="font-semibold text-gray-900">
                HTML, CSS, JavaScript, and React JS and Firebase
              </span>{" "}
              to create responsive, user-friendly interfaces. On the backend, I use{" "}
              <span className="font-semibold text-gray-900">Node.js and REST APIs, MongoDB</span>{" "}
              to build efficient and reliable application logic. I regularly use{" "}
              <span className="font-semibold text-gray-900">Git and GitHub</span> for
              version control and collaboration, and I always try to write reusable,
              maintainable code that is easy to grow and improve.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Outside of programming, I enjoy{" "}
              <span className="font-semibold text-gray-900">watching live football matches</span>{" "}
              and <span className="font-semibold text-gray-900">travelling</span>.
              These interests help me relax, get new perspectives, and come back
              to my work with fresh ideas and more creativity.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              My goals are to grow as a{" "}
              <span className="font-semibold text-gray-900">full-stack developer</span>,
              build <span className="font-semibold text-gray-900">production-ready applications</span>,
              and actively{" "}
              <span className="font-semibold text-gray-900">contribute to open-source projects</span>.
              I&apos;m always exploring new tools and best practices to become a better
              developer and deliver more value through my work.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}