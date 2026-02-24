// src/components/ProjectCard.jsx
import React from 'react';
import { Github, Link, TerminalSquare } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/40 rounded-xl shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 transform hover:scale-[1.03] overflow-hidden group">

      {/* Soft Glow Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
           style={{
             background:
               "radial-gradient(circle at top left, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at bottom right, rgba(45,212,191,0.12), transparent 40%)",
           }}
      />

      {/* Icon Header */}
      <div className="p-6 bg-slate-900/40 border-b border-slate-700/40 flex items-center">
        <TerminalSquare className="w-8 h-8 text-indigo-400" />
      </div>

      <div className="p-6 relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-5 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold text-slate-200 bg-slate-700/60 rounded-full border border-slate-600/40"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-6 pt-4 border-t border-slate-700/40">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-bold text-slate-300 hover:text-white transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            <Link className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;