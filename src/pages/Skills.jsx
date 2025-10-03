 import React from 'react';
import { Database, Code, Zap, Cpu } from 'lucide-react';

const skillData = [
  {
    category: "Frontend",
    icon: Code,
    skills: ["React (Vite)", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose"],
  },
  {
    category: "Core & Programming",
    icon: Cpu,
    skills: ["Data Structures & Algorithms (DSA)", "Java", "Problem Solving", "OOP"],
  },
  {
    category: "Tools & Others",
    icon: Zap,
    skills: ["Git/GitHub", "VS Code", "Netlify/Vercel", "Postman", "Web Hosting"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-32 bg-gradient-to-tr from-gray-900 via-black to-gray-100 overflow-hidden"
    >
      {/* 🔹 Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/20"></div>
        <div className="absolute top-2/3 left-0 w-full h-[2px] bg-white/40"></div>
        {/* Vertical line */}
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-white/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔹 Section Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl sm:text-7xl font-black text-white tracking-tight leading-tight mb-6">
            SKILLS <span className="text-indigo-400">& TECH</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
            My essential tools for building <strong className="text-white">full-stack applications</strong>
          </p>
        </div>

        {/* 🔹 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillData.map((group, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-500 shadow-lg hover:shadow-2xl hover:border-indigo-200 hover:scale-[1.02]"
            >
              <div className="relative z-10 p-8">
                {/* Icon + Title */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-100 rounded-xl mr-4 transition duration-500 group-hover:bg-indigo-50 group-hover:shadow-md">
                    <group.icon className="w-8 h-8 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 tracking-wide">
                    {group.category}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-full border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Focus Note */}
        <div className="mt-24 text-center">
          <div className="inline-block px-10 py-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-500 hover:border-indigo-300/40">
            <p className="text-lg font-medium text-gray-200 leading-relaxed">
              <strong className="text-white">Current Focus:</strong> Deepening expertise in{" "}
              <strong className="text-indigo-300">DSA</strong> (using{" "}
              <strong className="text-indigo-300">Java</strong>) and exploring{" "}
              <strong className="text-indigo-300">Artificial Intelligence (AI)</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
