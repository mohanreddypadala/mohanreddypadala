import React from 'react';
import { User, Award, Code2 } from 'lucide-react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode }) => {
  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-950 text-gray-300' : 'bg-white text-slate-700'} relative overflow-hidden transition-colors duration-500`}>
      {/* Background Elements */}
      <div className={`absolute top-10 right-10 w-32 h-32 ${isDarkMode ? 'bg-indigo-500/3' : 'bg-slate-400/5'} rounded-full opacity-60 animate-gentle-float blur-xl`}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center animate-slide-in-left">
            <span className={`${isDarkMode ? 'text-indigo-400' : 'text-slate-600'} font-mono mr-2`}>01.</span>
            <User className={`mr-3 h-6 w-6 ${isDarkMode ? 'text-indigo-400' : 'text-slate-600'}`} />
            About Me
            <div className={`ml-4 h-px ${isDarkMode ? 'bg-gray-800' : 'bg-slate-400'} flex-grow`}></div>
          </h2>
          
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 animate-fade-in-up">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                Hello! I'm a passionate B.Tech student who loves creating digital solutions that make a difference. 
                My journey into web development began with curiosity about how websites work, and that curiosity 
                has evolved into a deep passion for building exceptional user experiences.
              </p>
              
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                Currently, I serve as the <span className={`${isDarkMode ? 'text-indigo-400' : 'text-slate-800'} font-semibold`}>Lead of Social Media, Design and Marketing</span> at 
                Blackbox Student Community (BBSC), where I manage our digital presence and create engaging content 
                for our growing community. I've also had the privilege of publishing a magazine for my college, 
                showcasing my creative and editorial skills.
              </p>
              
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'} leading-relaxed`}>
                As a full-stack developer, I enjoy bridging the gap between engineering and design — 
                combining technical expertise with creative vision to build products that are not only 
                functional but also beautiful and intuitive. My focus is on creating accessible, 
                human-centered solutions that solve real-world problems.
              </p>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className={`flex items-center ${isDarkMode ? 'text-indigo-400' : 'text-slate-700'}`}>
                  <Award className="h-5 w-5 mr-2" />
                  <span className="text-sm">4 Years Leadership</span>
                </div>
                <div className={`flex items-center ${isDarkMode ? 'text-indigo-400' : 'text-slate-700'}`}>
                  <Code2 className="h-5 w-5 mr-2" />
                  <span className="text-sm">Full Stack Developer</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1 animate-slide-in-right">
              <div className="relative group">
                <div className={`absolute -inset-2 ${isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-slate-400 to-slate-600'} rounded-lg opacity-10 group-hover:opacity-20 blur transition duration-500 animate-subtle-glow`}></div>
                <div className="relative">
                  <img 
                    src="https://avatars.githubusercontent.com/u/150770502?s=400&u=42e82e3dcb2940aaf61f1bb942e8e3d1cee36772&v=4" 
                    alt="Mohan Reddy Padala" 
                    className="w-full aspect-square object-cover rounded-lg hover-lift"
                  />
                  <div className={`absolute inset-0 border-2 ${isDarkMode ? 'border-indigo-500/30' : 'border-slate-600/30'} rounded-lg -translate-x-3 -translate-y-3 transition group-hover:translate-x-1 group-hover:translate-y-1 duration-300`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;