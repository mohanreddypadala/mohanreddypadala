import React from 'react';
import { Award, Users, Github, Star, Calendar } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
}

interface AchievementsSectionProps {
  isDarkMode: boolean;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ isDarkMode }) => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Lead at Blackbox Student Community",
      description: "Serving as the Lead of Design and Marketing at BBSC, managing social media presence and creating engaging design content for the community.",
      icon: <Star className={`h-8 w-8 ${isDarkMode ? 'text-cyan-400' : 'text-gray-600'}`} />,
      date: "2024"
    },
    {
      id: 2,
      title: "Class Representative",
      description: "Serving as Class Representative for 4 consecutive years, demonstrating strong leadership and organizational skills in managing class affairs and coordinating with faculty.",
      icon: <Users className={`h-8 w-8 ${isDarkMode ? 'text-cyan-400' : 'text-gray-600'}`} />,
      date: "2020-2024"
    },
    {
      id: 3,
      title: "Event Management Excellence",
      description: "Successfully organized and managed numerous technical and non-technical events in college, showcasing strong organizational and leadership abilities.",
      icon: <Calendar className={`h-8 w-8 ${isDarkMode ? 'text-cyan-400' : 'text-gray-600'}`} />,
      date: "2020-2024"
    },
    {
      id: 4,
      title: "First Prize in AWS Hackathon",
      description: "Won first prize in a hackathon focused on AWS, conducted by Braino Vision, demonstrating advanced cloud architecture and implementation skills.",
      icon: <Award className={`h-8 w-8 ${isDarkMode ? 'text-cyan-400' : 'text-gray-600'}`} />,
      date: "2024"
    },
    {
      id: 5,
      title: "GitHub Workshop Conductor",
      description: "Successfully conducted a comprehensive GitHub workshop for students, teaching version control, collaboration, and Git workflows.",
      icon: <Github className={`h-8 w-8 ${isDarkMode ? 'text-cyan-400' : 'text-gray-600'}`} />,
      date: "2023"
    }
  ];

  return (
    <section id="achievements" className={`py-20 ${isDarkMode ? 'bg-[#1a1a1a] text-gray-300' : 'bg-gray-50 text-gray-700'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className={`${isDarkMode ? 'text-cyan-400' : 'text-gray-600'} font-mono mr-2`}>04.</span>
            Achievements
            <div className={`ml-4 h-px ${isDarkMode ? 'bg-gray-700' : 'bg-gray-400'} flex-grow`}></div>
          </h2>
          
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-4 mb-12`}>
            Some of my notable accomplishments and recognition in the tech community.
          </p>
          
          <div className="space-y-12">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`relative ${isDarkMode ? 'bg-[#0a0a0a] border-cyan-400' : 'bg-white border-gray-400'} rounded-lg p-6 shadow-lg border-l-4`}
              >
                <div className={`absolute -left-4 -top-4 ${isDarkMode ? 'bg-[#1a1a1a] border-[#0a0a0a]' : 'bg-gray-50 border-white'} p-3 rounded-full border-4`}>
                  {achievement.icon}
                </div>
                
                <div className="ml-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{achievement.title}</h3>
                    <span className={`text-sm font-mono ${isDarkMode ? 'text-cyan-400' : 'text-gray-600'}`}>{achievement.date}</span>
                  </div>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;