import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TerminalText } from "@/components/TerminalText";
import { SmoothLink } from "@/components/SmoothLink";
import { ProjectCard } from "@/components/ProjectCard";
// Removed NavigationMenuLink to avoid Radix context errors in simple nav
import { Shield, Terminal, Lock, Eye, Server, Code, Network, Database, Github, Linkedin, Mail, ExternalLink, Cloud, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/cyber-hero-bg.jpg";
import profileImg from "@/assets/profile.jpeg";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      icon: Code,
      name: "Languages",
      skills: ["Python", "C", "Bash", "Rust", "Java", "JavaScript (ReactJS)"]
    },
    {
      icon: Shield,
      name: "Penetration Testing and Offensive Security",
      skills: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nmap", "BeEF", "Aircrack-ng", "Mimikatz", "Social Engineer Toolkit (SET)", "Maltego", "Gophish", "DNSrecon", "Autopsy", "Foremost", "Cellebrite"]
    },
    {
      icon: Eye,
      name: "Security and Monitoring",
      skills: ["Splunk", "Snort", "Wireshark", "Nessus", "CISCO Packet Tracer", "NIST Framework", "CMMC Framework"]
    },
    {
      icon: Globe,
      name: "Web Development",
      skills: ["Flask", "ReactJS", "OpenCV", "Postman API"]
    },
    {
      icon: Database,
      name: "Databases",
      skills: ["MySQL", "SQLite", "MongoDB"]
    },
    {
      icon: Cloud,
      name: "DevOps and Cloud",
      skills: ["AWS", "Docker", "Jenkins"]
    },
  ];

  const experiences = [
    {
      role: "Cybersecurity Intern",
      company: "ActiveBytes Innovations",
      period: "Bengaluru, India | January 2024 – June 2024",
      highlights: [
        "Architected and deployed a multi-vector honeypot network simulating brute force, phishing, and recon, increasing detection accuracy by 40% in controlled tests",
        "Designed and integrated automated alerting with centralized log aggregation to optimize SOC workflows and enable real-time threat visibility",
        "Contributed to development of a proprietary SIEM leveraging ML for anomaly detection and clustering, improving threat intelligence and pattern identification",
        "Processed and analyzed 50,000+ telemetry events monthly; automated incident prioritization to reduce MTTR by 30% and false positives by 25%",
        "Collaborated with cross-functional teams, applying cybersecurity and data science methods to mature threat hunting and SOC effectiveness",
      ],
    },
  ];

  const projects = [
    {
      title: "OSINT Command Line Automation Tool",
      description: "Developed a flexible, script-ready OSINT CLI tool that streamlines cybersecurity investigations and incident response by automating the reputation analysis of domains and IPs using the VirusTotal v2 API. The tool aggregates and analyzes critical threat intelligence—such as threat scores, URLs, passive DNS records, subdomains, and WHOIS data—to accelerate detection of malicious entities. Enhanced with ExifTool integration for forensic metadata extraction from images, it enables comprehensive evidence analysis, supporting digital forensics and threat intelligence workflows with robust reporting capabilities.",
      tags: ["Python", "CLI", "VirusTotal API", "OSINT", "ExifTool", "Digital Forensics"],
      githubLink: "https://github.com/Bharath-2204/OSINT-Automation-Tool",
    },
    {
      title: "AIDORK",
      description: "Built a GPT-4-powered utility that generates precise, context-specific Google Dorks from user input, dramatically expanding the ability to uncover exposed personal profiles, sensitive documents, and confidential data online. The tool combines advanced deep scraping capabilities—utilizing Selenium for stealthy, automated extraction from JavaScript-heavy and dynamic sites—with seamless on-the-fly PDF parsing via PyMuPDF, facilitating rapid, scalable analysis across large datasets without requiring file downloads for enhanced operational efficiency and security.",
      tags: ["Python", "GPT-4", "Google Dorks", "Selenium", "Web Scraping", "PyMuPDF"],
      githubLink: "https://github.com/Bharath-2204/Dorking-with-AI",
    },
    {
      title: "System Monitoring and Keylogging Tool",
      description: "Developed a stealthy, Python-based system monitoring and keylogging tool designed to capture a wide range of user and system activities, including keystrokes, clipboard data, screenshots, microphone input, and system metadata, leveraging Pynput, PIL, and Sounddevice libraries. The tool enables secure, real-time remote auditing through integrated smtplib functionality that automates encrypted log and media exfiltration to a controlled server. Packaged as a fully portable Windows executable using PyInstaller, the solution supports seamless deployment without requiring a local Python environment, facilitating rapid and discreet installations for red team operations and forensic investigations.",
      tags: ["Python", "Pynput", "System Monitoring", "PyInstaller", "Red Team", "Forensics"],
      githubLink: "https://github.com/Bharath-2204/Python-Keylogger",
    },
    {
      title: "Unveiling ADHD - ADHD Detection and Comprehensive Care",
      description: "In our group project on ADHD, we utilized deep learning models for EEG-based detection, alongside traditional assessments like the Stroop and Posner tests. My role focused on developing a Flask-based website, ensuring smooth integration of all components. I also implemented cybersecurity measures, including secure data transmission and encryption, to protect user data. The platform offers more than detection, featuring a bionic generator, text summarizer, and productivity tools, providing comprehensive support for individuals with ADHD.",
      tags: ["Flask", "Deep Learning", "EEG", "Cybersecurity", "Web Development", "Encryption"],
      githubLink: "https://github.com/Bharath-2204/CapstoneWebsite",
    },
    {
      title: "Real-time Object Measurement",
      description: "Developed a real-time measurement tool using ArUco markers for accurate object sizing. The app allows users to upload images with known reference objects (circular or rectangular) for precise measurements. It supports both laptop webcams and IP webcams (via an Android app). Gained hands-on experience with OpenCV, ArUco markers, Streamlit, and image processing. Received a certificate from the IEEE Computer Society club upon project completion.",
      tags: ["OpenCV", "ArUco", "Streamlit", "Image Processing", "Python", "Computer Vision"],
      githubLink: "https://github.com/Bharath-2204/Real-Time-Object-Measurement-using-OpenCV",
    },
    {
      title: "Smart Mobility Stick",
      description: "Developed a Smart Mobility Stick to assist visually impaired individuals with navigation. The stick features light, water, and proximity sensors integrated with an Arduino Uno microcontroller, along with reflective stickers and warning lights for added safety. My role focused on optimizing the proximity sensor integration. The project received high praise and a perfect score from our professors, highlighting our team's dedication to creating meaningful solutions.",
      tags: ["Arduino", "Sensors", "Embedded Systems", "IoT", "Hardware", "Microcontrollers"],
      githubLink: "https://github.com/Bharath-2204/Smart-Mobility-Stick-for-Visual-Impaired",
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
            <SmoothLink className="hover:text-primary" to="#about">About</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#experience">Experience</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#skills">Skills</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#projects">Projects</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#contact">Contact</SmoothLink>
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
                <TerminalText text="CYBERSECURITY ENGINEER" delay={80} />
              </h1>
            </div>

            {showContent && (
              <div className="space-y-6 animate-fade-in-up">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Red Teaming • OSINT Automation • Social Engineering • Forensics
                </p>
                <p className="text-foreground max-w-2xl mx-auto">
                  Focused on red teaming, OSINT, and social engineering, my work involves developing tools and techniques for security investigations, breach analysis, and intelligence gathering. I engage in automating threat detection, researching digital assets, and applying forensic methods to support practical cybersecurity challenges. This approach combines both technical and human factors to improve security outcomes.
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
      <section id="about" className="py-20 bg-card/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <span className="text-primary">&gt;</span> About Me
                <span className="text-primary animate-blink">_</span>
              </h2>
              <div className="absolute top-0 right-0 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative border-2 border-primary/30 rounded-full overflow-hidden aspect-square w-32 md:w-40">
                  <img 
                    src={profileImg} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 text-lg text-foreground/90 leading-relaxed pr-40 md:pr-48">
                <p>
                  I am a dedicated cybersecurity enthusiast currently pursuing a Master's degree in Cybersecurity at the University of Maryland, College Park. With a strong focus on Red Teaming, OSINT (Open Source Intelligence), and social engineering, I actively develop my practical expertise through a blend of self-study, hands-on labs, and personal projects. These experiences encompass penetration testing, vulnerability assessments, and comprehensive security evaluations—equipping me with solid skills to analyze and mitigate modern cyber threats.
                </p>
                <p>
                  My passion extends beyond technical proficiency; I am deeply fascinated by crime genres, including real-life crime podcasts and documentaries. Exploring investigative methodologies and the psychological dimensions of criminal behavior fuels my analytical mindset and sharpens my approach to cybersecurity challenges, blending human factors with technical insight.
                </p>
                <p>
                  Committed to continuous learning, I am focused on building and optimizing security solutions that anticipate evolving attack vectors while integrating threat intelligence and automated response capabilities. This holistic perspective enables me to contribute meaningfully to defense strategies and incident response frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">&gt;</span> Experience
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={`${exp.role}-${exp.company}`} className="rounded-lg border border-border bg-card/40 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div className="text-xl font-semibold">
                      {exp.role} <span className="text-primary">@</span> {exp.company}
                    </div>
                    <div className="text-muted-foreground">{exp.period}</div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary">&gt;</span> Skills
            <span className="text-primary animate-blink">_</span>
          </h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="bg-card/40 border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold font-mono text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="font-mono text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/50 scroll-mt-24">
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
      <section id="contact" className="py-20 scroll-mt-24">
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
                <a href="mailto:bharhanu@terpmail.umd.edu">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button variant="terminal" size="lg" asChild>
                <a href="https://github.com/Bharath-2204/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="terminal" size="lg" asChild>
                <a href="https://www.linkedin.com/in/bharath-d-h-ba22a2003" target="_blank" rel="noopener noreferrer">
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
