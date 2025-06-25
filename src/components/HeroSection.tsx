
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Code. Create. Innovate.';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-blue/10 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-neon-purple/10 rounded-full animate-float animation-delay-1000 blur-sm"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-neon-pink/10 rounded-full animate-float animation-delay-2000 blur-sm"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Main heading with typing effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text font-mono">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-500">
          Hi, I'm <span className="neon-text-blue font-semibold">Floyd Carlo</span>
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-700">
          Full-Stack Developer & Engineering Student crafting digital experiences that bridge creativity and technology
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-1000">
          <Button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold px-8 py-3 neon-glow-blue transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="neon-border-blue text-neon-blue hover:bg-neon-blue/10 px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="mx-auto text-neon-blue" size={32} />
        </div>
      </div>
      
      {/* Code snippets floating effect */}
      <div className="absolute top-1/4 left-4 opacity-30 font-mono text-sm text-neon-purple animate-float">
        {'{ developer: "passionate" }'}
      </div>
      <div className="absolute bottom-1/4 right-4 opacity-30 font-mono text-sm text-neon-green animate-float animation-delay-1500">
        {'console.log("Hello World!");'}
      </div>
    </section>
  );
};

export default HeroSection;
