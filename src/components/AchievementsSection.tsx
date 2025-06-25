
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Ideathon 2025 - Second Runner-Up",
      event: "Monsoon Safety System",
      description: "Developed an AI-powered early warning system for monsoon-related disasters, helping communities prepare and respond to extreme weather events.",
      tech: ["Python", "Machine Learning", "IoT", "React", "Firebase"],
      date: "2025",
      award: "🥉 Second Runner-Up",
      gradient: "from-neon-yellow to-neon-green",
      icon: "🌧️"
    },
    {
      id: 2,
      title: "Hackverse 2025",
      event: "AI-Powered Currency Detector",
      description: "Built an intelligent currency detection and authentication system using computer vision and machine learning to prevent counterfeit currency circulation.",
      tech: ["TensorFlow", "OpenCV", "Python", "Flutter", "Firebase"],
      date: "2025",
      award: "🏆 Participant",
      gradient: "from-neon-blue to-neon-purple",
      icon: "💰"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Hackathons & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation and technical excellence in competitive environments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="group bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 transform hover:scale-105 hover:neon-glow-blue">
                <div className={`h-2 bg-gradient-to-r ${achievement.gradient} rounded-t-lg`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{achievement.icon}</span>
                        <Badge className={`bg-gradient-to-r ${achievement.gradient} text-black font-semibold`}>
                          {achievement.award}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl neon-text-blue mb-2">
                        {achievement.title}
                      </CardTitle>
                      <p className="text-neon-purple font-semibold mb-2">
                        {achievement.event}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-neon-blue mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Impact:</span>
                        <span className="text-neon-green font-semibold">
                          {achievement.id === 1 ? "Community Safety" : "Financial Security"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Hackathons", value: "5+", color: "neon-blue" },
            { label: "Awards", value: "2", color: "neon-purple" },
            { label: "Projects", value: "10+", color: "neon-green" },
            { label: "Technologies", value: "15+", color: "neon-pink" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:border-neon-blue/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`text-3xl font-bold neon-text-${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
