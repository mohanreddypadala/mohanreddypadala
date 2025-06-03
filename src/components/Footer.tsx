import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-[#0a192f] text-gray-400 border-t border-[#233554]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="font-mono text-[#64ffda]">&lt;/&gt;</span>
                <span className="ml-2 font-medium text-gray-300">Designed & Built by mohan </span>
              </div>
              <p className="text-sm mt-1">© 2025 All rights reserved.</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#64ffda] transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="hover:text-[#64ffda] transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-[#64ffda] transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-[#64ffda] transition-colors duration-300">Projects</a>
            <a href="#achievements" className="hover:text-[#64ffda] transition-colors duration-300">Achievements</a>
            <a href="#certifications" className="hover:text-[#64ffda] transition-colors duration-300">Certifications</a>
            <a href="#contact" className="hover:text-[#64ffda] transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;