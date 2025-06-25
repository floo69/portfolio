
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "neon-blue" },
        { name: "JavaScript", level: 85, color: "neon-yellow" },
        { name: "HTML/CSS", level: 90, color: "neon-green" },
        { name: "TypeScript", level: 80, color: "neon-blue" },
        { name: "Tailwind CSS", level: 85, color: "neon-purple" }
      ],
      icon: "🎨",
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Go", level: 85, color: "neon-green" },
        { name: "Python", level: 80, color: "neon-yellow" },
        { name: "Laravel/PHP", level: 75, color: "neon-purple" },
        { name: "Flask", level: 70, color: "neon-blue" },
        { name: "Express.js", level: 75, color: "neon-green" }
      ],
      icon: "⚙️",
      gradient: "from-neon-green to-neon-yellow"
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "MySQL", level: 80, color: "neon-blue" },
        { name: "PostgreSQL", level: 75, color: "neon-purple" },
        { name: "AWS", level: 70, color: "neon-yellow" },
        { name: "Docker", level: 75, color: "neon-blue" },
        { name: "Redis", level: 70, color: "neon-green" }
      ],
      icon: "☁️",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85, color: "neon-green" },
        { name: "Jenkins", level: 70, color: "neon-blue" },
        { name: "Machine Learning", level: 75, color: "neon-purple" },
        { name: "REST APIs", level: 85, color: "neon-yellow" },
        { name: "Linux", level: 75, color: "neon-green" }
      ],
      icon: "🛠️",
      gradient: "from-neon-yellow to-neon-green"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card 
                className={`bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 ${
                  hoveredCategory === category.category ? 'neon-glow-blue scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCategory(category.category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl neon-text-blue">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                  <div className={`h-1 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-300 ${
                    hoveredCategory === category.category ? 'scale-x-100' : 'scale-x-0'
                  } origin-left`}></div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold text-${skill.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/60 rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: hoveredCategory === category.category ? `${skill.level}%` : '0%',
                              animationDelay: `${category.skills.indexOf(skill) * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Interactive Skill Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 neon-text-blue">Interactive Skill Cloud</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
              <div
                key={skill.name}
                className={`px-4 py-2 bg-gradient-to-r from-${skill.color}/20 to-${skill.color}/10 border border-${skill.color}/30 rounded-full text-sm font-mono cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-float`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  fontSize: `${0.8 + (skill.level / 100) * 0.4}rem`
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
