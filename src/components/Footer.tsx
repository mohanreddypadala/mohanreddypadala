import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`py-6 ${isDarkMode ? 'bg-black text-slate-400 border-slate-700' : 'bg-white text-slate-600 border-slate-300'} border-t transition-colors duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <span className={`font-mono ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`}></span>
                <span className={`ml-2 font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Designed & Built by Mohan Reddy Padala</span>
              </div>
              <p className="text-sm mt-1">© 2025 All rights reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://github.com/mohanreddypadala" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-500 hover:text-slate-700'} transition-colors duration-300`}>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/mohan-reddy-padala-526716294" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-500 hover:text-slate-700'} transition-colors duration-300`}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:mohanreddy.padala12@gmail.com" className={`${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-500 hover:text-slate-700'} transition-colors duration-300`}>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#about" className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-slate-800'} transition-colors duration-300`}>About</a>
            <a href="#skills" className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-slate-800'} transition-colors duration-300`}>Skills</a>
            <a href="#projects" className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-slate-800'} transition-colors duration-300`}>Projects</a>
            <a href="#achievements" className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-slate-800'} transition-colors duration-300`}>Achievements</a>
            <a href="#certifications" className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-slate-800'} transition-colors duration-300`}>Certifications</a>
            <a href="#contact" className={`${isDarkMode ? 'hover:text-indigo-400' : 'hover:text-slate-800'} transition-colors duration-300`}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;