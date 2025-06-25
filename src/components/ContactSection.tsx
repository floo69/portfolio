
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/floydcarlo',
      color: 'neon-blue',
      description: 'Check out my repositories and contributions'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/floyd-carlo',
      color: 'neon-purple',
      description: 'Connect with me professionally'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:floyd.carlo@example.com',
      color: 'neon-green',
      description: 'Send me a direct message'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on something amazing together
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl neon-text-blue flex items-center gap-2">
                  <Send size={24} />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border focus:border-neon-blue transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border focus:border-neon-blue transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-neon-blue transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-neon-blue transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-blue hover:bg-neon-blue/80 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-fade-in-up animation-delay-300">
            {/* Contact Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-purple/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl neon-text-purple flex items-center gap-2">
                  <MapPin size={20} />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a href="mailto:floyd.carlo@example.com" className="text-neon-blue hover:text-neon-purple transition-colors">
                    floyd.carlo@example.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold neon-text-blue">Connect With Me</h3>
              {socialLinks.map((social) => (
                <Card key={social.name} className="bg-card/50 backdrop-blur-sm border-border hover:border-neon-blue/50 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4">
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className={`p-3 bg-${social.color}/20 rounded-lg group-hover:bg-${social.color}/30 transition-colors`}>
                        <social.icon className={`text-${social.color}`} size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">
            "Code is poetry in motion, and every project is a new verse."
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Floyd Carlo. Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
