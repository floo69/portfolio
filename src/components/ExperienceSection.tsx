
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Laravel Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "June 2024 - August 2024",
      type: "Internship",
      description: "Focused on backend development and API integration, working with modern web technologies to deliver scalable solutions.",
      responsibilities: [
        "Developed RESTful APIs using Laravel framework with comprehensive documentation",
        "Integrated MySQL database with optimized queries and proper indexing",
        "Implemented MVC architecture patterns for maintainable code structure",
        "Collaborated with frontend team to ensure seamless API integration",
        "Participated in code reviews and followed industry best practices"
      ],
      skills: ["Laravel", "PHP", "MySQL", "RESTful APIs", "MVC Pattern", "Git"],
      achievements: [
        "Reduced API response time by 40% through query optimization",
        "Successfully delivered 3 major API endpoints ahead of schedule",
        "Received positive feedback for clean, well-documented code"
      ],
      gradient: "from-neon-blue to-neon-purple"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and real-world projects
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 hover:neon-glow-blue">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Title & Company */}
                    <div className="lg:col-span-1">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${exp.gradient} text-black rounded-full text-sm font-semibold mb-4`}>
                        {exp.type}
                      </div>
                      <h3 className="text-2xl font-bold neon-text-blue mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-neon-purple font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground mb-6">
                        {exp.duration}
                      </p>
                      
                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-neon-blue mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="px-2 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded text-xs font-mono"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Description & Details */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-neon-blue mb-3">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-neon-blue mr-3 mt-1">▶</span>
                              <span className="text-muted-foreground">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-neon-purple mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-neon-purple mr-3 mt-1">★</span>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full hidden lg:block"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Open to new opportunities and exciting challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
