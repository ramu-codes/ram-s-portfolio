 // src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react'; // Added icons for Menu, Close, and Logo

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
 
];

const Navbar = () => {
  // State to manage the mobile menu's open/close status
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    // Close the menu when a link is clicked (especially on mobile)
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-xl z-50 transition-all duration-300 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name (Modernized Font and Icon) */}
          <div className="flex-shrink-0 flex items-center">
            
            <a href="#home" className="text-2xl font-black text-gray-900 tracking-wider hover:text-indigo-600 transition-colors">
              Ram
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-2 py-2 text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                >
                  {item.name}
                  {/* Underline effect */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
            
            {/* Contact CTA */}
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
            >
                {/* Toggle between Menu and Close icons */}
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Hidden/Shown based on state) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-inner pb-2`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          {/* Mobile Contact CTA */}
          <a 
            href="#contact" 
            onClick={handleNavLinkClick}
            className="block w-full text-center mt-2 px-3 py-2 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;