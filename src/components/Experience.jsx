"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Company Name",
      duration: "2023 - Present",
      description:
        "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Built responsive user interfaces using React",
        "Developed RESTful APIs using Node.js and Express",
        "Worked with MongoDB for database management",
        "Collaborated with team members using Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {/* Decorative gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 pt-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-purple-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-5 py-2 rounded-full shadow-md mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  {exp.description}
                </p>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="mt-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <div
              className={`text-center text-gray-500 py-12 bg-white rounded-2xl shadow-lg transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p>Professional experience will be added here when available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}