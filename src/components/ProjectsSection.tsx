
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowUp } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "URL Shortener",
      description: "A high-performance URL shortening service built with Go, featuring Docker containerization and responsive HTML/CSS frontend.",
      longDescription: "This project demonstrates clean architecture principles with Go's goroutines for concurrent request handling. Features include custom short URLs, analytics tracking, and Redis caching for optimal performance.",
      tech: ["Go", "Docker", "HTML/CSS", "Redis", "PostgreSQL"],
      github: "https://github.com/floydcarlo/url-shortener",
      demo: "#",
      image: "/api/placeholder/600/400",
      gradient: "from-neon-blue to-neon-green"
    },
    {
      id: 2,
      title: "Full-Stack Form Application",
      description: "Enterprise-grade form management system with Flask backend, Express.js API layer, AWS deployment, and Jenkins CI/CD pipeline.",
      longDescription: "A comprehensive form management platform featuring user authentication, real-time validation, file uploads to AWS S3, and automated deployments. Built with microservices architecture and comprehensive testing suite.",
      tech: ["Flask", "Express.js", "AWS", "Jenkins", "React", "PostgreSQL"],
      github: "https://github.com/floydcarlo/fullstack-forms",
      demo: "#",
      image: "/api/placeholder/600/400",
      gradient: "from-neon-purple to-neon-pink"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my passion for building scalable, innovative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card 
                className={`group bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  hoveredProject === project.id ? 'neon-glow-blue' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUp className="text-white transform rotate-45" size={24} />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl neon-text-blue group-hover:text-neon-purple transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline"
                      className="flex-1 neon-border-blue text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      className="flex-1 bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold transition-all duration-300"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="neon-border-purple text-neon-purple hover:bg-neon-purple/10 px-8 py-3 transition-all duration-300"
            onClick={() => window.open('https://github.com/floydcarlo', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
