import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TerminalText } from "@/components/TerminalText";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBadge } from "@/components/SkillBadge";
import { Shield, Terminal, Lock, Eye, Server, Code, Network, Database, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBg from "@/assets/cyber-hero-bg.jpg";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { icon: Shield, name: "Penetration Testing", level: "Expert" },
    { icon: Lock, name: "Network Security", level: "Advanced" },
    { icon: Eye, name: "Threat Analysis", level: "Expert" },
    { icon: Server, name: "Server Hardening", level: "Advanced" },
    { icon: Code, name: "Security Auditing", level: "Expert" },
    { icon: Network, name: "Incident Response", level: "Advanced" },
    { icon: Database, name: "Data Protection", level: "Expert" },
    { icon: Terminal, name: "Scripting/Automation", level: "Advanced" },
  ];

  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description: "Automated tool for identifying security vulnerabilities in enterprise networks",
      tags: ["Python", "Nmap", "CVE Database", "Automation"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Security Dashboard",
      description: "Real-time monitoring system for detecting and responding to security threats",
      tags: ["React", "WebSocket", "ELK Stack", "Visualization"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Ethical Hacking Toolkit",
      description: "Collection of penetration testing scripts and tools for security assessments",
      tags: ["Bash", "Python", "Metasploit", "Kali Linux"],
      githubLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Scan Line Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan-line" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="font-bold text-lg">
              <span className="text-primary">&gt;</span> CYBERSEC.DEV
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">./about</a>
            <a href="#skills" className="hover:text-primary transition-colors">./skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">./projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">./contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="space-y-4 mb-8">
              <div className="font-mono text-sm text-muted-foreground text-left max-w-2xl mx-auto">
                <span className="text-primary">$</span> initializing_system...
              </div>
              <h1 className="text-5xl md:text-7xl font-bold">
                <TerminalText text="SECURITY SPECIALIST" delay={80} />
              </h1>
            </div>

            {showContent && (
              <div className="space-y-6 animate-fade-in-up">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Ethical Hacking • Security Architecture
                </p>
                <p className="text-foreground max-w-2xl mx-auto">
                  Protecting digital assets through comprehensive security assessments, 
                  vulnerability analysis, and proactive threat mitigation. Specializing in 
                  enterprise network security and advanced penetration testing methodologies.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button variant="cyber" size="lg" asChild>
                    <a href="#projects">
                      <Eye className="w-5 h-5" />
                      View Projects
                    </a>
                  </Button>
                  <Button variant="terminal" size="lg" asChild>
                    <a href="#contact">
                      <Mail className="w-5 h-5" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">&gt;</span> About Me
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                With over 5 years of experience in cybersecurity, I specialize in identifying 
                and mitigating security vulnerabilities before they can be exploited. My approach 
                combines technical expertise with strategic thinking to deliver comprehensive 
                security solutions.
              </p>
              <p>
                I hold certifications in CEH, OSCP, and CISSP, and have successfully conducted 
                penetration tests for Fortune 500 companies, securing critical infrastructure 
                and sensitive data against evolving threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">&gt;</span> Core Skills
            <span className="text-primary animate-blink">_</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">&gt;</span> Featured Projects
            <span className="text-primary animate-blink">_</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-primary">&gt;</span> Get In Touch
              <span className="text-primary animate-blink">_</span>
            </h2>
            <p className="text-lg text-foreground/90">
              Interested in collaboration or have a security challenge? Let's connect.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button variant="terminal" size="lg" asChild>
                <a href="mailto:contact@cybersec.dev">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button variant="terminal" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="terminal" size="lg" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span> Built with security in mind • © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
