"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Education() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  
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
    <section
      id="education"
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 w-106 h-106 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.length > 0 ? (
            education.map((edu, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border-l-4 border-gradient-to-b from-blue-500 to-purple-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  borderLeftColor: "#3b82f6",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-5 py-2 rounded-full shadow-md mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{edu.description}</p>
              </div>
            ))
          ) : (
            <div
              className={`text-center text-gray-500 py-12 transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p>Education details will be added here.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}