 // src/components/ProjectCard.jsx (UPDATED for Aesthetics and Smoothness)
import React from 'react';
import { Github, Link, TerminalSquare } from 'lucide-react'; // Using TerminalSquare as a clean project icon

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  return (
    // Aesthetics: Black/White card, shadow transition, smoother scale effect
    <div className="bg-white border border-gray-100 rounded-xl shadow-2xl hover:shadow-gray-400/50 transition-all duration-500 transform hover:scale-[1.03] overflow-hidden">
      
      {/* Icon/Placeholder Area (Clean & Subtle) */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
          <TerminalSquare className="w-8 h-8 text-indigo-600" />
      </div>

      <div className="p-6">
        {/* Font Aesthetics: Larger, bold title */}
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">{title}</h3>
        
        {/* Font Aesthetics: Smaller, clean description text */}
        <p className="text-sm text-gray-600 mb-5 leading-relaxed">{description}</p>
        
        {/* Technologies Used (Subtle background, sharp text) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-full transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons (Links) - Added hover effect and boldness */}
        <div className="flex space-x-6 pt-2 border-t border-gray-100">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
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