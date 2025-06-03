import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a192f] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-2xl text-[#29b4ff]">
            <a href="#hero" className="flex items-center">
              
              <span className="ml-2">Mohan Reddy Padala</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#64ffda] transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <span className="text-[#29b4ff] font-mono mr-1">{`0${index + 1}.`}</span> {link.name}
                </a>
              ))}
              <a
                href="#resume"
                className="ml-4 px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#112240] p-4 absolute right-0 top-16 w-64 rounded-bl-lg shadow-xl border-l border-t border-[#233554]">
          <div className="space-y-2 py-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#64ffda] hover:bg-[#0a192f] rounded-md transition-colors duration-300"
              >
                <span className="text-[#64ffda] font-mono mr-2">{`0${index + 1}.`}</span>
                {link.name}
              </a>
            ))}
            <a
              href="#resume"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-3 py-2 text-center border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;