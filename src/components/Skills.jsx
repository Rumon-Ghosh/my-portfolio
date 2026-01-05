"use client";

import { skillsData } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const skillCategories = [
    { title: "Frontend", skills: skillsData.frontend, color: "bg-blue-500", gradient: "from-blue-500 to-cyan-500" },
    { title: "Backend", skills: skillsData.backend, color: "bg-green-500", gradient: "from-green-500 to-emerald-500" },
    { title: "Tools", skills: skillsData.tools, color: "bg-purple-500", gradient: "from-purple-500 to-pink-500" },
  ];

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
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
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
                  <span className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}></span>
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm font-medium bg-gray-100 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-700 ease-out shadow-md`}
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}