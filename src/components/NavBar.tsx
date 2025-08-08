// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isBookingWidgetOpen, setIsBookingWidgetOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo or Site Title */}
            <div className="flex-shrink-0">
              <a href="#hero" className="text-2xl font-bold text-amber-500">
                Your Brand
              </a>
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#experience" className="text-amber-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Experiences</a>
              <a href="#location" className="text-amber-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Locations</a>
              <a href="#testimonials" className="text-amber-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-amber-300 hover:text-amber-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</a>
              <button
                onClick={() => setIsBookingWidgetOpen(!isBookingWidgetOpen)}
                className="bg-amber-500 text-black hover:bg-amber-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-amber-300 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-amber-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Menu className="block h-6 w-6" />
              ) : (
                <X className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#experience" className="text-amber-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium">Experiences</a>
            <a href="#location" className="text-amber-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium">Locations</a>
            <a href="#testimonials" className="text-amber-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#contact" className="text-amber-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button
              onClick={() => setIsBookingWidgetOpen(!isBookingWidgetOpen)}
              className="bg-amber-500 text-black hover:bg-amber-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;