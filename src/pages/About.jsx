 // src/pages/About.jsx
import React from 'react';
import { Briefcase, Code, Zap } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 sm:py-24 bg-gradient-to-tr from-gray-900 via-black to-gray-100 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-200/40 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-200/40 rounded-full filter blur-3xl opacity-30 animate-float-delayed"></div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gray-200/60"></div>
        <div className="absolute top-2/3 left-0 w-full h-[2px] bg-gray-300/70"></div>
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-gray-200/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            <span className="inline-block transition-transform duration-500 hover:scale-105">
              ABOUT
            </span>
            &nbsp;
            <span className="inline-block bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent transition-transform duration-500 hover:scale-110">
              ME
            </span>
          </h2>
          <p className="mt-4 text-xl text-white font-medium">
            A passionate learner, builder, and problem solver.
          </p>
        </div>

        {/* Core Narrative */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-up animation-delay-200">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-500 hover:scale-[1.02]">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a <span className="font-bold text-indigo-600">3rd-year B.Tech student</span> with a deep interest in technology and <span className="font-bold text-indigo-600">personal development</span>. My journey has been focused on transforming ideas into robust applications, primarily using the <span className="font-bold text-indigo-600">MERN stack</span>. I consider myself a good listener, observer, and problem solver, always eager to grow both professionally and personally.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              I am actively sharpening my <span className="font-bold text-violet-600">Data Structures and Algorithms (DSA)</span> skills to enhance my problem-solving ability, and I am highly dedicated to improving my <span className="font-bold text-violet-600">English communication skills</span> for better fluency and public confidence.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-indigo-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-500 hover:-translate-y-3 animate-fade-in-up animation-delay-400">
            <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Briefcase className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Proficient in the <span className="font-semibold text-gray-900">MERN Stack</span>. Built projects like an <span className="font-semibold text-gray-900">e-commerce site</span> and an <span className="font-semibold text-gray-900">agri-platform</span>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all duration-500 hover:-translate-y-3 animate-fade-in-up animation-delay-600">
            <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Code className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Problem Solving & DSA</h3>
            <p className="text-gray-600 leading-relaxed">
              Dedicated to mastering <span className="font-semibold text-gray-900">Data Structures and Algorithms</span> to translate complex problems into efficient code.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-500 hover:-translate-y-3 animate-fade-in-up animation-delay-800">
            <div className="w-16 h-16 bg-violet-50 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <Zap className="w-8 h-8 text-violet-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Aspiring AI Explorer</h3>
            <p className="text-gray-600 leading-relaxed">
              Aspiring to learn <span className="font-semibold text-gray-900">Artificial Intelligence</span> and explore its meaningful applications, bridging web and machine learning.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float 20s ease-in-out infinite; animation-delay: -10s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default About;
