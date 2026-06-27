import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TerminalText } from "@/components/TerminalText";
import { SmoothLink } from "@/components/SmoothLink";
import { ProjectCard } from "@/components/ProjectCard";
// Removed NavigationMenuLink to avoid Radix context errors in simple nav
import { Shield, Terminal, Eye, Code, Network, Github, Linkedin, Mail, ExternalLink, Globe, BookOpen, Award, Search, Crosshair, Cloud } from "lucide-react";
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
      icon: Eye,
      name: "SIEM & Log Analysis",
      skills: ["Splunk", "Windows Event Logs", "Sysmon", "Linux/Bash Log Analysis", "Active Directory"],
    },
    {
      icon: Network,
      name: "Network Security & Monitoring",
      skills: ["Wireshark", "Snort", "Firewalls/ACLs", "Web Proxies", "Nessus", "Cisco Packet Tracer"],
    },
    {
      icon: Search,
      name: "Incident Response & Forensics",
      skills: ["Autopsy", "Foremost", "Volatility", "Cellebrite", "Phishing Analysis", "Malware Triage"],
    },
    {
      icon: Globe,
      name: "Threat Intelligence",
      skills: ["MISP", "AlienVault OTX", "VirusTotal", "MITRE ATT&CK", "OSINT Frameworks", "Maltego"],
    },
    {
      icon: Crosshair,
      name: "Offensive Security & Pen Testing",
      skills: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nmap", "Mimikatz", "Aircrack-ng", "Gophish"],
    },
    {
      icon: Shield,
      name: "Frameworks & Standards",
      skills: ["NIST RMF", "NIST SP 800-series", "CMMC", "RBAC", "MFA", "Active Directory Principles"],
    },
    {
      icon: Cloud,
      name: "Cloud & Architecture",
      skills: ["AWS (EC2, S3, IAM - Coursework)", "Zero Trust Principles"],
    },
    {
      icon: Code,
      name: "Languages & DevOps",
      skills: ["Python", "Bash", "C", "Java", "SQL", "AWS", "Docker", "Jenkins", "Flask", "ReactJS", "MongoDB"],
    },
  ];

  const experiences = [
    {
      role: "OSINT Analyst",
      company: "Guardian Group (Project 1591)",
      period: "Remote, United States | May 2026 – Present",
      highlights: [
        "Conducted anti-human-trafficking investigations using OSINT tradecraft and vetted OpSec protocols, producing structured intelligence reports escalated directly to federal law enforcement for case action.",
        "Verified age indicators by applying open-source research methodologies to analyze 100+ commercial sex advertisements, generating verified identity intelligence that strengthened victim-identification efforts.",
        "Shortened investigation cycle times by 15% through cross-referencing subject aliases via public records and SOCMINT, compiling comprehensive identity profiles.",
      ],
    },
    {
      role: "OSINT Analyst",
      company: "Trace Labs Search Party",
      period: "Remote, United States | April 2025 – April 2025",
      highlights: [
        "Researched 10+ active missing persons cases leveraging open-source intelligence techniques, delivering verified digital-footprint analysis that produced actionable leads submitted to law enforcement.",
        "Traced subjects' recent digital activities utilizing advanced search operators and reverse image search, uncovering previously unknown associated accounts that generated 5+ new investigative leads.",
      ],
    },
    {
      role: "Cybersecurity Intern",
      company: "ActiveBytes Innovations",
      period: "January 2024 – June 2024",
      highlights: [
        "Deployed a honeypot network using custom Python scripts to isolate and log credential-stuffing attack patterns, capturing adversarial TTPs that directly informed a custom SIEM and automated response playbook.",
        "Configured a data pipeline processing ~50,000 monthly security events with anomaly-detection logic, reducing alert noise by filtering baseline events and surfacing high-priority incidents for the SOC team.",
        "Built a centralized monitoring dashboard correlating live honeypot triggers with threat intelligence indicators, streamlining the incident triage process and reducing mean time to detection.",
      ],
    },
  ];

  const certifications = [
    {
      name: "Practical OSINT Research Professional",
      issuer: "TCM Security",
      year: "2025",
      certificateLink: "https://images.credential.net/embed/e6vasrvk_1779115686262.png",
      blogLink: "https://medium.com/@bharhanu/72-hours-of-practical-infiltration-my-experience-earning-the-porp-certification-0083b4013d8c",
    },
  ];

  const projects = [
    {
      title: "pfSense & Splunk SIEM Security Lab",
      description: "Architected and operationalized an isolated, enterprise-grade SOC sandbox on a host-only virtual network (VMnet1) spanning Kali Linux (external threat actor), pfSense Community Edition (perimeter gateway with stateful packet inspection), and Splunk Enterprise on Ubuntu (centralized SIEM). Engineered complete network isolation to contain offensive testing without leaking traffic to the public internet, then deployed Suricata IPS on the pfSense WAN interface in Legacy Mode with automatic snort2c block-table enforcement. Diagnosed and resolved production-class operational failures—including hypervisor subnet misconfiguration that blinded syslog ingestion and RFC 1918 private-network filtering that dropped recon traffic before packets ever reached Suricata. Built an end-to-end telemetry pipeline shipping pfSense filterlog events over UDP 514 into Splunk, authored custom regex field extractions (src_ip, dest_ip) via the Interactive Field Extractor to structure dense comma-delimited logs, and operationalized adversary analytics with SPL queries to rank active threat actors against the perimeter.",
      tags: ["pfSense", "Suricata", "Splunk", "Syslog", "Kali Linux", "VMware", "IPS", "SIEM"],
      blogLink: "https://medium.com/@bharhanu/designing-an-isolated-soc-lab-part-1-setting-up-my-perimeter-and-siem-f435cb3c9527",
    },
    {
      title: "OSINT Command Line Automation Tool",
      description: "Developed a flexible, script-ready OSINT CLI tool that streamlines cybersecurity investigations and incident response by automating the reputation analysis of domains and IPs using the VirusTotal v2 API. The tool aggregates and analyzes critical threat intelligence—such as threat scores, URLs, passive DNS records, subdomains, and WHOIS data—to accelerate detection of malicious entities. Enhanced with ExifTool integration for forensic metadata extraction from images, it enables comprehensive evidence analysis, supporting digital forensics and threat intelligence workflows with robust reporting capabilities.",
      tags: ["Python", "CLI", "VirusTotal API", "OSINT", "ExifTool", "Digital Forensics"],
      githubLink: "https://github.com/Bharath-2204/OSINT-Automation-Tool",
      blogLink: "https://medium.com/@bharhanu/building-an-all-in-one-osint-tool-automating-threat-intel-from-the-command-line-a07cce81c578",
    },
    {
      title: "Air-Gapped EASM and Threat Intelligence Platform",
      description: "Developed an automated External Attack Surface Management (EASM) platform to map corporate infrastructure, discover leaked credentials, and track active malware campaigns. Integrated authenticated REST APIs from GitHub and AlienVault OTX with Python-side data sanitization to reduce public documentation noise and isolate high-fidelity configuration leaks. Implemented an air-gapped threat analysis workflow powered by a local offline LLM (Phi-3 via Ollama) to generate executive security briefings entirely offline, ensuring zero data leakage of sensitive reconnaissance targets to third-party cloud providers. Packaged with a Streamlit web interface for centralized intelligence visualization.",
      tags: ["Python", "EASM", "Threat Intelligence", "GitHub API", "AlienVault OTX", "Streamlit", "Ollama", "Phi-3"],
      githubLink: "https://github.com/Bharath-2204/EASM-Dashboard",
      blogLink: "https://medium.com/@bharhanu/building-a-minimalist-easm-dashboard-with-automated-noise-filtering-and-local-ai-briefings-4c2016c90a02",
    },
    {
      title: "Physical Attack Surface Mapper",
      description: "Developed an automated reconnaissance utility in Python to map the digital footprint surrounding physical corporate facilities. Correlated precise geographic coordinates with the Shodan and WiGLE APIs to identify exposed internet-facing hardware and high-risk wireless access points within a localized bounding box. Automatically plotted aggregated intelligence onto interactive Folium maps to help red teams and physical penetration testers visualize external security gaps and analyze proximity-based digital entry points prior to on-site engagements.",
      tags: ["Python", "Shodan API", "WiGLE API", "Folium", "Reconnaissance", "Physical Security"],
      githubLink: "https://github.com/Bharath-2204/Physical-Attack-Surface-Mapper",
      blogLink: "https://medium.com/@bharhanu/visualizing-physical-attack-surface-exposure-with-python-wigle-and-shodan-ec66b51df411",
    },
    {
      title: "AIDORK",
      description: "Built a GPT-4-powered utility that generates precise, context-specific Google Dorks from user input, dramatically expanding the ability to uncover exposed personal profiles, sensitive documents, and confidential data online. The tool combines advanced deep scraping capabilities—utilizing Selenium for stealthy, automated extraction from JavaScript-heavy and dynamic sites—with seamless on-the-fly PDF parsing via PyMuPDF, facilitating rapid, scalable analysis across large datasets without requiring file downloads for enhanced operational efficiency and security.",
      tags: ["Python", "GPT-4", "Google Dorks", "Selenium", "Web Scraping", "PyMuPDF"],
      githubLink: "https://github.com/Bharath-2204/Dorking-with-AI",
    },
    {
      title: "AWS Cloud Security Assessment & Hardening of an E-Commerce Environment",
      description: "Conducted a comprehensive cloud security assessment and remediation engagement for an AWS-hosted OWASP Juice Shop e-commerce environment. Performed vulnerability analysis across IAM, network security, infrastructure, data protection, and logging controls, identifying critical risks including public-facing services, weak access controls, hardcoded credentials, lack of encryption, insecure network segmentation, and insufficient monitoring. Designed and implemented security hardening measures using AWS-native services, including least-privilege IAM policies, Secrets Manager for credential management, automated EC2 patching, CloudWatch logging, CloudTrail auditing, and KMS-backed encryption. Validated remediation effectiveness through policy simulation, patch compliance testing, log monitoring, and audit trail verification, significantly improving the environment's overall security posture.",
      highlights: [
        "Identified and prioritized critical cloud security risks including public subnet exposure, unrestricted network access, weak credential management, and missing monitoring controls.",
        "Implemented automated EC2 patch management using AWS Systems Manager, successfully deploying 23 security updates through scheduled patch baselines.",
        "Eliminated hardcoded database credentials by integrating AWS Secrets Manager with least-privilege IAM access controls.",
        "Strengthened data protection through AWS KMS-backed encryption, centralized logging, CloudTrail auditing, and security monitoring controls.",
      ],
      tags: ["AWS", "IAM", "VPC", "Systems Manager", "CloudWatch", "CloudTrail", "KMS", "Secrets Manager", "OWASP", "NIST"],
    },
    {
      title: "System Monitoring and Keylogging Tool",
      description: "Developed a stealthy, Python-based system monitoring and keylogging tool designed to capture a wide range of user and system activities, including keystrokes, clipboard data, screenshots, microphone input, and system metadata, leveraging Pynput, PIL, and Sounddevice libraries. The tool enables secure, real-time remote auditing through integrated smtplib functionality that automates encrypted log and media exfiltration to a controlled server. Packaged as a fully portable Windows executable using PyInstaller, the solution supports seamless deployment without requiring a local Python environment, facilitating rapid and discreet installations for red team operations and forensic investigations.",
      tags: ["Python", "Pynput", "System Monitoring", "PyInstaller", "Red Team", "Forensics"],
      githubLink: "https://github.com/Bharath-2204/Python-Keylogger",
    },
    {
      title: "Unveiling ADHD - ADHD Detection and Comprehensive Care",
      description: "This multi-modal web platform integrates interactive neuropsychological screening, an automated EEG classification pipeline, and localized executive functioning tools to provide a data-driven approach to ADHD evaluation and daily management. The backend architecture ingests raw 19-channel EEG signals, pre-processing and extracting 11 quantitative features per channel—including statistical descriptors, entropy, and Hjorth parameters targeted within the theta and beta frequency bands. By validating these spectral-temporal feature matrices across multiple architectures, an optimized convolutional network topology (EEGNet) achieved a 92.91% validation accuracy in distinguishing ADHD profiles from healthy controls. To bridge the gap between objective clinical engineering and day-to-day patient care, the application pairs this deep learning diagnostic engine with digital implementations of behavioral assessments (WHO ASRS, Stroop, and Posner tasks) alongside built-in, privacy-focused productivity aids like a Bionic Reading typography formatter and an extractive text summarizer, all delivered through a desaturated, low-contrast user interface designed specifically to prevent sensory overload.",
      tags: ["Python", "PyTorch", "EEGNet", "SciPy", "CNN", "SQLite", "Matplotlib", "Web Development"],
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
            <SmoothLink className="hover:text-primary" to="#certifications">Certifications</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#skills">Skills</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#projects">Projects</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#contact">Contact</SmoothLink>
            <a
              className="hover:text-primary flex items-center gap-1.5"
              href="https://medium.com/@bharhanu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </a>
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
                  Threat Intelligence | OSINT | Digital Forensics | Social Engineering
                </p>
                <p className="text-foreground max-w-2xl mx-auto">
                  Cybersecurity Engineer & OSINT Analyst formulating data-driven security solutions and advanced open-source intelligence. From building custom automated pipelines to delivering actionable investigative intelligence, I engineer tools that map attack surfaces and expose critical threat vectors.
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
                  I am a Cybersecurity Engineer and OSINT Analyst focused on building tools that turn raw data into actionable intelligence. Having recently earned my Master of Engineering in Cybersecurity from the University of Maryland, my work bridges the gap between proactive threat intelligence and hands-on defense.
                </p>
                <p>
                  Right now, I apply OSINT tradecraft at Guardian Group to support anti-human-trafficking investigations, generating structured intelligence reports escalated directly to federal law enforcement for case action. Whether I'm building custom Python-based honeypots, tracking digital footprints for active missing persons cases, or optimizing SIEM pipelines to process 50,000 monthly security events, I look for ways to engineer smarter solutions.
                </p>
                <p>
                  I prefer code over manual clicks. If a security workflow can be automated, like cutting threat indicator lookup times from five minutes to under 30 seconds or integrating local AI models to secure reconnaissance data without risking data leaks, I will build the script to do it.
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-card/50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">&gt;</span> Certifications
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="rounded-lg border border-border bg-card/40 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <div className="text-xl font-semibold">{cert.name}</div>
                        <div className="text-muted-foreground">
                          {cert.issuer} • {cert.year}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <Button variant="terminal" size="sm" asChild>
                      <a href={cert.certificateLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={cert.blogLink} target="_blank" rel="noopener noreferrer">
                        <BookOpen className="w-4 h-4" />
                        Read Write-Up
                      </a>
                    </Button>
                  </div>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">&gt;</span> Featured Projects
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
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
              <Button variant="terminal" size="lg" asChild>
                <a href="https://medium.com/@bharhanu" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5" />
                  Medium
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
            <span className="text-primary">&gt;</span> Built with security in mind • © 2026 •{" "}
            <a
              href="https://medium.com/@bharhanu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Medium
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
