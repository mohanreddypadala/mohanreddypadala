import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDarkMode }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Learning Management System (LMS)",
      description: "A modern Learning Management System built for Sri Vasavi Engineering College using Python and Django with PostgreSQL database. The platform allows faculty to upload educational content and students to learn subjects by watching videos.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
      technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
      link: "http://117.213.202.158:5000/"
    },
    {
      id: 2,
      title: "FindMyPro",
      description: "A Java full-stack application that connects users with service providers like electricians, plumbers, and mechanics. Users can easily search and find professional service providers in their area.",
      image: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS"]
    },
    {
      id: 3,
      title: "Alarmify",
      description: "A mobile personal assistant app built with React Native that allows users to schedule tasks with an intuitive calendar interface and receive automated alarms one hour before each task. The app uses local notifications and persistent storage to keep users organized and on track.",
      image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg",
      technologies: ["React Native", "JavaScript", "Local Storage", "Push Notifications"]
    },
    {
      id: 4,
      title: "Micro Reminiscence",
      description: "An AI-powered system that detects persons or objects based on video clips. The application uses computer vision algorithms to identify and track objects or individuals in video footage, providing timestamps and recognition data.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"]
    },
    {
      id: 5,
      title: "WhatsApp Chat Analyzer",
      description: "A web application that analyzes WhatsApp chat exports and provides insightful visualizations and statistics. Users can upload their chat history to gain insights about conversation patterns, active hours, and message frequency.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"]
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-950 to-slate-900' : 'bg-gradient-to-br from-white via-slate-50 to-gray-100'} ${isDarkMode ? 'text-slate-300' : 'text-slate-700'} transition-all duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className={`${isDarkMode ? 'text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text' : 'text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text'} font-mono mr-2`}>03.</span>
            Some Things I've Built
            <div className={`ml-4 h-px ${isDarkMode ? 'bg-gradient-to-r from-indigo-500/50 to-transparent' : 'bg-gradient-to-r from-slate-400/50 to-transparent'} flex-grow`}></div>
          </h2>
          
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-4 mb-12`}>
            Here are a few projects I've worked on recently. Want to see more? 
            <a href="#contact" className={`${isDarkMode ? 'text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text' : 'text-transparent bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text'} hover:underline ml-1 font-medium`}>Contact me</a>.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`relative ${index % 2 === 0 ? '' : 'md:text-right'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative md:grid md:grid-cols-12 md:gap-4 items-center">
                <div 
                  className={`md:col-span-7 ${
                    index % 2 === 0 ? 'md:col-start-6' : 'md:col-start-1'
                  } relative`}
                >
                  <div className="relative rounded-lg overflow-hidden aspect-video shadow-2xl">
                    {/* Enhanced overlay with gradient */}
                    <div 
                      className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-pink-500/5' : 'bg-gradient-to-br from-slate-600/15 via-slate-700/10 to-slate-800/5'} z-10 transition-opacity duration-300 ${
                        hoveredProject === project.id ? 'opacity-0' : 'opacity-100'
                      }`}
                    ></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter brightness-110 contrast-110 saturate-110"
                      loading="lazy"
                    />
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 rounded-lg ${isDarkMode ? 'ring-1 ring-gradient-to-br from-indigo-500/20 to-purple-500/20' : 'ring-1 ring-gradient-to-br from-slate-400/20 to-slate-600/20'}`}></div>
                  </div>
                </div>
                
                <div 
                  className={`md:col-span-6 ${
                    index % 2 === 0 ? 'md:col-start-1 md:text-left' : 'md:col-start-7 md:text-right'
                  } md:absolute md:top-0 md:bottom-0 flex flex-col justify-center mt-6 md:mt-0`}
                >
                  <p className={`font-mono ${isDarkMode ? 'text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text' : 'text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text'} text-sm mb-1`}>Featured Project</p>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} mb-4`}>{project.title}</h3>
                  
                  <div className={`${isDarkMode ? 'bg-gradient-to-br from-slate-900/90 to-gray-900/90 border border-slate-800/50' : 'bg-gradient-to-br from-white/90 to-slate-50/90 border border-slate-200/50'} p-6 rounded-lg shadow-xl mb-4 backdrop-blur-sm`}>
                    <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed`}>{project.description}</p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 mb-4 text-xs ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`${isDarkMode ? 'text-slate-300 bg-slate-800/50' : 'text-slate-700 bg-slate-200/50'} font-mono px-2 py-1 rounded backdrop-blur-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex gap-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-900'} transition-all duration-300 hover:scale-110`}
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className={`${isDarkMode ? 'text-slate-300 hover:text-indigo-400' : 'text-slate-600 hover:text-slate-900'} transition-all duration-300 hover:scale-110`}
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;