import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-animate bg-black text-gray-400">
      
      {/* Top Section with Newsletter */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-amber-500 mb-4 glow">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Stay updated with our latest offers and exclusive experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-black text-white p-4 pr-12 rounded-lg border border-gray-700 focus:outline-none focus:border-amber-500"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500 pointer-events-none" />
            </div>
            <button className="bg-amber-500 text-black font-bold py-4 px-8 rounded-lg hover:bg-amber-600 transition-colors duration-300 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-500 mb-2">Your Brand</h3>
            <p className="text-sm">
              Discover unparalleled luxury and elegance.
              We are dedicated to providing you with an unforgettable experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-500 mb-3">Discover</h3>
            <a href="#" className="block hover:text-amber-300 transition-colors">Our Story</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Experiences</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Gallery</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Blog</a>
          </div>

          {/* Column 3: About */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-500 mb-3">About</h3>
            <a href="#" className="block hover:text-amber-300 transition-colors">Our Team</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Careers</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Contact</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">FAQ</a>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-amber-500 mb-3">Legal</h3>
            <a href="#" className="block hover:text-amber-300 transition-colors">Terms of Service</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Privacy Policy</a>
            <a href="#" className="block hover:text-amber-300 transition-colors">Cookies</a>
          </div>

        </div>
      </div>
      
      {/* Bottommost Strip */}
      <div className="border-t border-gray-800 mt-8 py-6 text-center text-sm text-gray-500">
        <p>© 2024 Your Brand. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;