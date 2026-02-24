// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full backdrop-blur-2xl z-50 transition-all duration-300 border-b"
      style={{
        background:
          "linear-gradient(to right, rgba(15,23,42,0.85), rgba(26,38,55,0.78), rgba(15,23,42,0.85))",
        borderColor: "rgba(99,102,241,0.15)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#home"
              className="text-2xl font-black text-white tracking-wider hover:text-indigo-400 transition-colors"
            >
              Ram
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-2 py-2 text-base font-semibold text-slate-300/90 hover:text-indigo-400 transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-8 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-indigo-400 hover:bg-slate-700/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden backdrop-blur-2xl border-t border-slate-700/40`}
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0.96), rgba(26,38,55,0.96))",
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-700/40 hover:text-indigo-400 transition-colors"
            >
              {item.name}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={handleNavLinkClick}
            className="block w-full text-center mt-2 px-3 py-2 border border-indigo-500 text-base font-medium rounded-md text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;