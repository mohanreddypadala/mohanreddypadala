import React from 'react';
import { Award, Users, Github, Star, Calendar } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
}

const AchievementsSection: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Lead at Blackbox Student Community",
      description: "Serving as the Lead of Design and Marketing at BBSC, managing social media presence and creating engaging design content for the community.",
      icon: <Star className="h-8 w-8 text-[#64ffda]" />,
      date: "2024"
    },
    {
      id: 2,
      title: "Class Representative",
      description: "Serving as Class Representative for 4 consecutive years, demonstrating strong leadership and organizational skills in managing class affairs and coordinating with faculty.",
      icon: <Users className="h-8 w-8 text-[#64ffda]" />,
      date: "2020-2024"
    },
    {
      id: 3,
      title: "Event Management Excellence",
      description: "Successfully organized and managed numerous technical and non-technical events in college, showcasing strong organizational and leadership abilities.",
      icon: <Calendar className="h-8 w-8 text-[#64ffda]" />,
      date: "2020-2024"
    },
    {
      id: 4,
      title: "First Prize in AWS Hackathon",
      description: "Won first prize in a hackathon focused on AWS, conducted by Braino Vision, demonstrating advanced cloud architecture and implementation skills.",
      icon: <Award className="h-8 w-8 text-[#64ffda]" />,
      date: "2024"
    },
    {
      id: 5,
      title: "GitHub Workshop Conductor",
      description: "Successfully conducted a comprehensive GitHub workshop for students, teaching version control, collaboration, and Git workflows.",
      icon: <Github className="h-8 w-8 text-[#64ffda]" />,
      date: "2023"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-[#112240] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className="text-[#64ffda] font-mono mr-2">04.</span>
            Achievements
            <div className="ml-4 h-px bg-gray-700 flex-grow"></div>
          </h2>
          
          <p className="text-gray-400 mt-4 mb-12">
            Some of my notable accomplishments and recognition in the tech community.
          </p>
          
          <div className="space-y-12">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="relative bg-[#0a192f] rounded-lg p-6 shadow-lg border-l-4 border-[#64ffda]"
              >
                <div className="absolute -left-4 -top-4 bg-[#112240] p-3 rounded-full border-4 border-[#0a192f]">
                  {achievement.icon}
                </div>
                
                <div className="ml-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <span className="text-sm font-mono text-[#64ffda]">{achievement.date}</span>
                  </div>
                  <p className="text-gray-400">{achievement.description}</p>
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