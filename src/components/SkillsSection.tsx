import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-300">{name}</span>
        <span className="text-xs text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML', level: 95, color: 'bg-orange-500' },
    { name: 'CSS', level: 90, color: 'bg-blue-500' },
    { name: 'React', level: 85, color: 'bg-cyan-400' },
    { name: 'React Native', level: 80, color: 'bg-blue-400' },
  ];

  const backendSkills = [
    { name: 'Java', level: 90, color: 'bg-red-500' },
    { name: 'Python', level: 85, color: 'bg-yellow-500' },
    { name: 'Django', level: 80, color: 'bg-green-600' },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 85, color: 'bg-gray-500' },
    { name: 'AWS', level: 75, color: 'bg-yellow-600' },
    { name: 'Database Design', level: 80, color: 'bg-blue-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-[#112240] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className="text-[#64ffda] font-mono mr-2">02.</span>
            My Skills
            <div className="ml-4 h-px bg-gray-700 flex-grow"></div>
          </h2>
          
          <p className="text-gray-400 mt-4 mb-10">
            Here are the technologies I've been working with recently. I'm always eager to learn new ones!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#64ffda]">Frontend</h3>
              {frontendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#64ffda]">Backend</h3>
              {backendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#64ffda]">Other</h3>
              {otherSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-[#0a192f] p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-[#64ffda]">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React', 
                'React Native', 'Django', 'Git', 'AWS', 'Salesforce',
                'Oracle', 'Microsoft Azure'
              ].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-[#233554] rounded-full text-gray-300 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;