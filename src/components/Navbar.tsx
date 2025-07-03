import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? `${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md shadow-lg ${isDarkMode ? 'shadow-indigo-500/5' : 'shadow-slate-400/10'}` : 'bg-transparent'}`}>
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with Profile Picture */}
          <div className="flex-shrink-0 font-bold text-lg sm:text-xl">
            <Link to="/" className="flex items-center group">
              <img 
                src="https://avatars.githubusercontent.com/u/150770502?s=400&u=42e82e3dcb2940aaf61f1bb942e8e3d1cee36772&v=4" 
                alt="Mohan Reddy Padala" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3 border-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-all duration-300 flex-shrink-0"
              />
              <span className={`${isDarkMode ? 'text-gray-100' : 'text-slate-900'} group-hover:scale-105 transition-transform duration-300 truncate`}>
                <span className="hidden sm:inline">Mohan Reddy Padala</span>
                <span className="sm:hidden">Mohan Reddy</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-900 hover:bg-gray-800 text-indigo-400 border border-gray-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'} transition-all duration-300 hover:scale-105 flex-shrink-0`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Navigation Links */}
            {isHomePage && navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-900'} transition-all duration-300 px-2 py-2 rounded-md text-sm font-medium group relative whitespace-nowrap`}
              >
                <span className={`${isDarkMode ? 'text-indigo-400 group-hover:text-purple-400' : 'text-slate-500 group-hover:text-slate-700'} font-mono mr-1 transition-colors duration-300 text-xs`}>
                  {`0${index + 1}.`}
                </span> 
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-indigo-500' : 'bg-slate-600'} group-hover:w-full transition-all duration-300`}></span>
              </a>
            ))}

            {/* Resume Buttons */}
            <div className="flex items-center space-x-2 ml-2">
              <Link
                to="/resume"
                className={`px-3 py-2 border ${isDarkMode ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-black' : 'border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white'} rounded-lg transition-all duration-300 flex items-center group text-sm whitespace-nowrap`}
              >
                <FileText className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="hidden xl:inline">View Resume</span>
                <span className="xl:hidden">Resume</span>
              </Link>
              <a
                href="/resume"
                target="_blank"
                className={`px-3 py-2 ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center font-medium group text-sm whitespace-nowrap`}
              >
                <Download className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <span className="hidden xl:inline">Download</span>
                <span className="xl:hidden">PDF</span>
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Navigation Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-900 hover:bg-gray-800 text-indigo-400 border border-gray-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'} transition-all duration-300 flex-shrink-0`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} focus:outline-none transition-colors duration-300 flex-shrink-0`}
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
        <div className={`lg:hidden ${isDarkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-slate-300'} backdrop-blur-md p-4 absolute right-0 top-16 w-72 max-w-[90vw] rounded-bl-lg shadow-xl border-l border-t`}>
          <div className="space-y-2 py-2">
            {isHomePage && navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:text-indigo-400 hover:bg-gray-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'} rounded-md transition-all duration-300`}
              >
                <span className={`${isDarkMode ? 'text-indigo-400' : 'text-slate-500'} font-mono mr-2`}>{`0${index + 1}.`}</span>
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/resume"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-center px-3 py-2 border ${isDarkMode ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-black' : 'border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white'} rounded-lg transition-all duration-300`}
              >
                <FileText className="w-4 h-4 mr-1 inline" />
                View Resume
              </Link>
              <a
                href="/resume"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full px-3 py-2 text-center ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-slate-600 to-slate-700'} text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center font-medium`}
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