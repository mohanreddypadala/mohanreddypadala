import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? `${isDarkMode ? 'bg-[#0a0a0a]/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg ${isDarkMode ? 'shadow-cyan-400/10' : 'shadow-gray-400/10'}` : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-2xl">
            <Link to="/" className="flex items-center group">
              <span className={`${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-gray-600 to-gray-800'} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                Mohan Reddy Padala
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {isHomePage && navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium group relative`}
                >
                  <span className={`${isDarkMode ? 'text-cyan-400 group-hover:text-purple-500' : 'text-gray-500 group-hover:text-gray-700'} font-mono mr-1 transition-colors duration-300`}>
                    {`0${index + 1}.`}
                  </span> 
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-gray-600 to-gray-800'} group-hover:w-full transition-all duration-300`}></span>
                </a>
              ))}
              <div className="flex items-center space-x-2 ml-4">
                <Link
                  to="/resume"
                  className={`px-4 py-2 border ${isDarkMode ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' : 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'} rounded transition-all duration-300 flex items-center group`}
                >
                  <FileText className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                  View Resume
                </Link>
                <a
                  href="/resume"
                  target="_blank"
                  className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:shadow-cyan-400/25' : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:shadow-gray-600/25'} rounded hover:shadow-lg transition-all duration-300 flex items-center font-medium group`}
                >
                  <Download className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} focus:outline-none transition-colors duration-300`}
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
        <div className={`md:hidden ${isDarkMode ? 'bg-[#1a1a1a]/95' : 'bg-white/95'} backdrop-blur-sm p-4 absolute right-0 top-16 w-64 rounded-bl-lg shadow-xl border-l border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className="space-y-2 py-2">
            {isHomePage && navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-cyan-400 hover:bg-[#0a0a0a]/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} rounded-md transition-all duration-300`}
              >
                <span className={`${isDarkMode ? 'text-cyan-400' : 'text-gray-500'} font-mono mr-2`}>{`0${index + 1}.`}</span>
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/resume"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-center px-3 py-2 border ${isDarkMode ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' : 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'} rounded transition-all duration-300`}
              >
                <FileText className="w-4 h-4 mr-1 inline" />
                View Resume
              </Link>
              <a
                href="/resume"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full px-3 py-2 text-center ${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black' : 'bg-gradient-to-r from-gray-600 to-gray-800 text-white'} rounded hover:shadow-lg transition-all duration-300 flex items-center justify-center font-medium`}
              >
                <Download className="w-4 h-4 mr-1" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;