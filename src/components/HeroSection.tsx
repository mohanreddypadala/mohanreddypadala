import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center bg-[#1a1a1a] text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <p className="font-mono text-[#0066cc] mb-5">Hi, my name is</p>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 leading-tight mb-4">
              Mohan Reddy Padala.
            </h1>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 leading-tight mb-6">
              I build things for the web & mobile.
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-700 ease-in-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              I'm a full-stack developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products as a B.Tech student.
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
                className="px-6 py-3 border border-[#0066cc] text-[#0066cc] rounded hover:bg-[#0066cc] hover:bg-opacity-10 transition-all duration-300 flex items-center"
              >
                View My Work
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-[#0066cc] text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute right-10 bottom-10">
        <div className="w-32 h-32 border-r-2 border-b-2 border-[#0066cc] opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;