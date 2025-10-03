 // src/pages/Hero.jsx
import React from 'react';
import avatarPlaceholder from '../assets/profile-pic.jpg'; 
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-tr from-gray-900 via-black to-gray-100 py-32 sm:py-24 overflow-hidden"
    >
      {/* 🔹 Background White Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/20"></div>
        <div className="absolute top-2/3 left-0 w-full h-[2px] bg-white/40"></div>
        {/* Vertical line */}
        <div className="absolute left-1/4 top-0 h-full w-[2px] bg-white/30"></div>
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Side Text */}
          <div className="md:w-3/5 text-center md:text-left">
            <p className="text-sm font-normal text-gray-200 mb-4">
              <strong>B.Tech 3rd Year</strong> / MERN Stack / DSA Enthusiast
            </p>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-500">
                BUILDING
              </span>
              <br />
              <span className="inline-block text-indigo-500 hover:scale-110 transition-transform duration-500">
                WEB
              </span>
              &nbsp;&amp;&nbsp;
              <span className="inline-block text-indigo-500 hover:scale-110 transition-transform duration-500">
                AI
              </span>.
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-white max-w-xl mx-auto md:mx-0 mb-8 leading-normal">
              Hi, I’m <strong>RAM</strong> — A problem-solver focused on <strong>clean code</strong> and <strong>high impact</strong> projects.
            </p>

            <div className="mt-10 flex justify-center md:justify-start space-x-5">
              <a
                href="#projects"
                className="flex items-center space-x-2 px-8 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:bg-white hover:text-indigo-600 hover:scale-105 hover:shadow-indigo-500/50"
              >
                <strong>Explore My Work</strong>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/your-resume.pdf"
                download
                className="flex items-center space-x-2 px-8 py-3 bg-white text-black text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-indigo-500/50"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Side Photo */}
          <div className="md:w-2/5 flex justify-center mt-12 md:mt-0">
            <div className="max-w-xs sm:max-w-sm group">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-gray-900 overflow-hidden shadow-xl rounded-xl transition-all duration-700">
                <img
                  src={avatarPlaceholder}
                  alt="Your Professional Photo"
                  className="w-full h-full object-cover brightness-125 group-hover:brightness-110 transition-all duration-500 rounded-xl"
                />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
              <div className="pt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="#projects"
                  className="px-6 py-2 bg-indigo-600 text-white text-base font-semibold rounded-lg shadow-xl hover:bg-indigo-700 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
