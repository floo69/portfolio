
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full p-1 animate-glow-pulse">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <img
                    src="/api/placeholder/300/300"
                    alt="Floyd Carlo"
                    className="w-[90%] h-[90%] rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center animate-float">
                <span className="text-neon-blue font-mono font-bold">JS</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center animate-float animation-delay-1000">
                <span className="text-neon-purple font-mono font-bold">Go</span>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="animate-fade-in-up animation-delay-300">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 neon-text-blue">
                  Engineering Student & Creative Developer
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate full-stack developer and engineering student at Fr. Conceicao Rodrigues Institute of Technology, 
                  specializing in Information Technology. My journey in tech is driven by a deep fascination with how code can 
                  create meaningful digital experiences.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I believe in the power of technology to solve real-world problems. Whether I'm building scalable web applications, 
                  participating in hackathons, or exploring new frameworks, I approach every project with creativity, precision, 
                  and a commitment to innovation.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/20">
                    <h4 className="font-bold text-neon-blue mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">IT Engineering Student</p>
                    <p className="text-xs text-muted-foreground">Fr. Conceicao Rodrigues Institute</p>
                  </div>
                  <div className="text-center p-4 bg-neon-purple/10 rounded-lg border border-neon-purple/20">
                    <h4 className="font-bold text-neon-purple mb-2">Values</h4>
                    <p className="text-sm text-muted-foreground">Creativity • Impact • Innovation</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  {['Problem Solver', 'Creative Thinker', 'Team Player', 'Continuous Learner'].map((trait) => (
                    <span 
                      key={trait}
                      className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
