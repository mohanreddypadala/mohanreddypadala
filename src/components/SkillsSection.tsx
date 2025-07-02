import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
  isDarkMode: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, color, isDarkMode }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
        <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{level}%</span>
      </div>
      <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2`}>
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const frontendSkills = [
    { name: 'HTML', level: 95, color: isDarkMode ? 'bg-cyan-400' : 'bg-gray-600' },
    { name: 'CSS', level: 90, color: isDarkMode ? 'bg-purple-500' : 'bg-gray-700' },
    { name: 'React', level: 85, color: isDarkMode ? 'bg-pink-500' : 'bg-gray-800' },
    { name: 'React Native', level: 80, color: isDarkMode ? 'bg-blue-500' : 'bg-gray-500' },
  ];

  const backendSkills = [
    { name: 'Java', level: 90, color: isDarkMode ? 'bg-cyan-400' : 'bg-gray-600' },
    { name: 'Python', level: 85, color: isDarkMode ? 'bg-purple-500' : 'bg-gray-700' },
    { name: 'Django', level: 80, color: isDarkMode ? 'bg-pink-500' : 'bg-gray-800' },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 85, color: isDarkMode ? 'bg-cyan-400' : 'bg-gray-600' },
    { name: 'AWS', level: 75, color: isDarkMode ? 'bg-purple-500' : 'bg-gray-700' },
    { name: 'Database Design', level: 80, color: isDarkMode ? 'bg-pink-500' : 'bg-gray-800' },
  ];

  return (
    <section id="skills" className={`py-20 ${isDarkMode ? 'bg-[#1a1a1a] text-gray-300' : 'bg-gray-50 text-gray-700'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className={`${isDarkMode ? 'text-cyan-400' : 'text-gray-600'} font-mono mr-2`}>02.</span>
            My Skills
            <div className={`ml-4 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-400'} flex-grow`}></div>
          </h2>
          
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-4 mb-10`}>
            Here are the technologies I've been working with recently. I'm always eager to learn new ones!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-cyan-400' : 'text-gray-800'}`}>Frontend</h3>
              {frontendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-cyan-400' : 'text-gray-800'}`}>Backend</h3>
              {backendSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-cyan-400' : 'text-gray-800'}`}>Other</h3>
              {otherSkills.map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
          
          <div className={`mt-12 ${isDarkMode ? 'bg-[#0a0a0a] border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-lg border`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-cyan-400' : 'text-gray-800'}`}>Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React', 
                'React Native', 'Django', 'Git', 'AWS', 'Salesforce',
                'Oracle', 'Microsoft Azure'
              ].map((tech, index) => (
                <span key={index} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} rounded-full text-sm`}>
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