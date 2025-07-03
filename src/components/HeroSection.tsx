import React, { useEffect, useState } from 'react';
import { ChevronRight, Code } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={`min-h-screen flex items-center ${isDarkMode ? 'bg-black' : 'bg-slate-50'} ${isDarkMode ? 'text-gray-300' : 'text-slate-700'} relative overflow-hidden transition-colors duration-500`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className={`absolute top-20 left-10 w-20 h-20 ${isDarkMode ? 'bg-indigo-500/5' : 'bg-slate-400/10'} rounded-full opacity-60 animate-gentle-float blur-xl`}></div>
      <div className={`absolute bottom-32 right-20 w-16 h-16 ${isDarkMode ? 'bg-purple-500/5' : 'bg-slate-500/10'} rounded-full opacity-60 animate-gentle-float blur-xl`} style={{ animationDelay: '2s' }}></div>
      <div className={`absolute top-1/2 right-10 w-12 h-12 ${isDarkMode ? 'bg-violet-500/5' : 'bg-slate-600/10'} rounded-full opacity-60 animate-gentle-float blur-xl`} style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <p className={`font-mono ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} mb-5 flex items-center text-lg`}>
              <Code className="mr-2 h-5 w-5" />
              Hi, my name is
            </p>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-slate-900'} leading-tight mb-4`}>
              <span className="gradient-text">Mohan Reddy Padala</span>.
            </h1>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'} leading-tight mb-6`}>
              I build things for the 
              <span className="relative inline-block ml-3">
                <span className="gradient-text">web & mobile</span>
              </span>.
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-slate-600'} mb-8 max-w-xl leading-relaxed`}>
              I'm a passionate full-stack developer specializing in building exceptional digital experiences.
              Currently focused on creating accessible, human-centered products as a B.Tech student with 
              expertise in modern web technologies.
            </p>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className={`group px-6 py-3 border ${isDarkMode ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-black' : 'border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white'} rounded-lg transition-all duration-300 flex items-center hover-lift`}
              >
                View My Work
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#contact" 
                className={`px-6 py-3 ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700' : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover-lift`}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="hidden lg:block absolute right-10 bottom-10">
        <div className={`w-32 h-32 border-r-2 border-b-2 ${isDarkMode ? 'border-indigo-500/20' : 'border-slate-400/30'} opacity-40 animate-gentle-pulse`}></div>
      </div>
      
      <div className="hidden lg:block absolute left-10 top-1/3">
        <div className={`w-24 h-24 border-l-2 border-t-2 ${isDarkMode ? 'border-purple-500/20' : 'border-slate-500/30'} opacity-30 animate-gentle-pulse`} style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;