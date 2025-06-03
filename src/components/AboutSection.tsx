import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className="text-[#0066cc] font-mono mr-2">01.</span>
            About Me
            <div className="ml-4 h-px bg-gray-700 flex-grow"></div>
          </h2>
          
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-400 mb-4">
                Hello! I'm a B.Tech student passionate about creating things that live on the internet. 
                My interest in web development started when I decided to explore how websites work — 
                turns out hacking together custom website layouts taught me a lot about HTML & CSS!
              </p>
              
              <p className="text-gray-400 mb-4">
                Currently, I serve as the Lead of Social Media, Design and Marketing at Blackbox Student Community (BBSC), 
                where I manage our online presence and create engaging design content. I've also had the privilege 
                of publishing a magazine for my college, showcasing my creative and editorial skills.
              </p>
              
              <p className="text-gray-400 mb-4">
                As a full-stack developer, I enjoy bridging the gap between engineering and design — 
                combining my technical knowledge with a keen eye for design to create beautiful products. 
                I'm passionate about creating intuitive, dynamic user experiences that solve real problems.
              </p>
              
              <p className="text-gray-400">
                I've been serving as the Class Representative for 4 years, demonstrating my leadership abilities.
                Beyond technical skills, I excel in event management and have successfully organized 
                numerous technical and non-technical college events. This experience has honed my leadership, coordination, and 
                problem-solving abilities, complementing my technical expertise perfectly.
              </p>
            </div>
            
            <div className="md:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-2 bg-[#0066cc] rounded-md opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="https://avatars.githubusercontent.com/u/150770502?s=400&u=42e82e3dcb2940aaf61f1bb942e8e3d1cee36772&v=4" 
                    alt="Profile" 
                    className="w-full aspect-square object-cover rounded-md"
                  />
                  <div className="absolute inset-0 border-2 border-[#0066cc] rounded-md -translate-x-3 -translate-y-3 transition group-hover:translate-x-1 group-hover:translate-y-1 duration-300"></div>
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