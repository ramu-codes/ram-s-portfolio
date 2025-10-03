 import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

        {/* Branding & Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold tracking-wide text-white">RAM</h2>
          <p className="text-sm font-medium text-white">
            Building bold, responsive web experiences.
          </p>
          <p className="text-xs text-white mt-1">
            Ghaziabad, India &bull; &copy; {currentYear}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full text-white hover:text-white hover:bg-indigo-600 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramu-chaurasiya-8b9933295/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full text-white hover:text-white hover:bg-indigo-600 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ramucodes@gmail.com"
            className="p-2 bg-gray-800 rounded-full text-white hover:text-white hover:bg-indigo-600 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;