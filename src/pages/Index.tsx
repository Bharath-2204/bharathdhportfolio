import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TerminalText } from "@/components/TerminalText";
import { SmoothLink } from "@/components/SmoothLink";
import { ProjectCard } from "@/components/ProjectCard";
// Removed NavigationMenuLink to avoid Radix context errors in simple nav
import { Shield, Terminal, Eye, Code, Network, Github, Linkedin, Mail, ExternalLink, Globe, BookOpen, Award, Search, Crosshair, Cloud, FileDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/cyber-hero-bg.jpg";
import profileImg from "@/assets/profile.jpeg";

const resumeUrl = `${import.meta.env.BASE_URL}Bharath_Updated_V2.pdf`;

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
      skills: ["AWS (EC2, S3, IAM - Coursework)", "Amazon Bedrock", "Zero Trust Principles"],
    },
    {
      icon: Code,
      name: "Languages & DevOps",
      skills: ["Python", "Bash", "C", "Java", "SQL", "AWS", "Docker", "Jenkins", "Flask", "ReactJS", "MongoDB"],
    },
  ];

  const professionalExperiences = [
    {
      role: "Vulnerability Management Analyst",
      company: "Resilience, Inc",
      period: "Remote, United States | September 2026 – Present",
      highlights: [
        "Automated enterprise endpoint vulnerability scans using Nessus, analyzing scan telemetry to pinpoint unpatched OS flaws, policy deviations, and system misconfigurations.",
        "Triaged emerging CVEs by cross-referencing CVSS severity with threat intelligence feeds and asset criticality, accelerating patch prioritization for high-risk systems.",
        "Tracked patch deployment lifecycles and audited server infrastructure against CIS security benchmarks in close collaboration with system administration teams.",
      ],
    },
    {
      role: "Cybersecurity Analyst",
      company: "ActiveBytes Innovations",
      period: "January 2024 – June 2024",
      highlights: [
        "Deployed a multi-node honeypot network using custom Python scripts, capturing credential-stuffing attempts and mapping 15+ adversarial TTPs to MITRE ATT&CK for automated response integration.",
        "Engineered a custom Python log-parsing pipeline with anomaly-detection logic, reducing alert noise by ~55% by filtering benign baseline events and surfacing higher-priority incidents for SOC triage.",
        "Built a centralized monitoring dashboard correlating live honeypot triggers with threat intelligence indicators, reducing MTTD by ~25% and cutting analyst triage time by ~60% during testing.",
      ],
    },
  ];

  const volunteerExperiences = [
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
      title: "Ugroza: AI-Assisted Threat Intelligence Platform",
      highlights: [
        "Built a production-oriented CTI platform that automates threat actor research, cutting hours of manual intelligence gathering down to under four minutes.",
        "Collects intelligence from trusted sources, normalizes unstructured OSINT, enriches it with MITRE ATT&CK mappings, and generates source-backed dossiers via Amazon Bedrock (Llama 3.1).",
        "Modular Python/Streamlit/SQLite architecture with scraping, processing, persistence, and presentation layers.",
        "Pairs every dossier with exact source material to eliminate hallucinations and create a verifiable audit trail.",
        "Supports configurable search depth, intelligent caching, defensive JSON parsing, and secure credential management for practical security research.",
      ],
      tags: ["Python", "Streamlit", "AWS Bedrock", "Llama 3.1", "SQLite", "MITRE ATT&CK", "REST APIs", "Regex", "JSON", "OSINT"],
      githubLink: "https://github.com/Bharath-2204/Ugroza-A-Threat-Intelligence-Engine",
      blogLink: "https://medium.com/@bharhanu/ugroza-turning-osint-into-actionable-threat-intelligence-22cb75567c2c",
    },
    {
      title: "pfSense & Splunk SIEM Security Lab",
      highlights: [
        "Architected an isolated SOC sandbox on a host-only network spanning Kali Linux, pfSense, and Splunk Enterprise on Ubuntu.",
        "Deployed Suricata IPS on the pfSense WAN interface with automatic snort2c block-table enforcement.",
        "Diagnosed production-class failures including hypervisor subnet misconfiguration and RFC 1918 filtering that dropped recon traffic.",
        "Built an end-to-end syslog telemetry pipeline into Splunk with custom regex field extractions for src_ip and dest_ip.",
        "Operationalized adversary analytics with SPL queries to rank active threat actors against the perimeter.",
      ],
      tags: ["pfSense", "Suricata", "Splunk", "Syslog", "Kali Linux", "VMware", "IPS", "SIEM"],
      blogLink: "https://medium.com/@bharhanu/designing-an-isolated-soc-lab-part-1-setting-up-my-perimeter-and-siem-f435cb3c9527",
    },
    {
      title: "OSINT Command Line Automation Tool",
      highlights: [
        "Developed a script-ready OSINT CLI that automates domain and IP reputation analysis via the VirusTotal v2 API.",
        "Aggregates threat scores, URLs, passive DNS, subdomains, and WHOIS data to accelerate malicious-entity detection.",
        "Integrated ExifTool for forensic metadata extraction from images to support digital forensics workflows.",
        "Produces robust reporting suited for cybersecurity investigations and incident response.",
      ],
      tags: ["Python", "CLI", "VirusTotal API", "OSINT", "ExifTool", "Digital Forensics"],
      githubLink: "https://github.com/Bharath-2204/OSINT-Automation-Tool",
      blogLink: "https://medium.com/@bharhanu/building-an-all-in-one-osint-tool-automating-threat-intel-from-the-command-line-a07cce81c578",
    },
    {
      title: "EASM and Threat Intel Dashboard",
      highlights: [
        "Built an automated EASM platform that unifies passive recon: subdomain discovery, TLS inspection, Shodan exposure checks, and GitHub secret hunting.",
        "Implemented a custom risk scoring engine based on exposed credentials, TLS posture, high-risk ports, and attack-surface breadth.",
        "Added AWS Bedrock threat briefings and MITRE ATT&CK mapping grounded only in collected telemetry.",
        "Exports STIX 2.1 and JSON for downstream SIEM, SOAR, or threat intelligence workflows.",
        "Streamlit UI with concurrent reconnaissance tasks to reduce overall scan time.",
      ],
      tags: ["Python", "Streamlit", "AWS Bedrock", "GitHub API", "Shodan API", "HackerTarget", "crt.sh", "MITRE ATT&CK", "STIX 2.1", "REST APIs"],
      githubLink: "https://github.com/Bharath-2204/EASM-Dashboard",
      blogLink: "https://medium.com/@bharhanu/building-a-minimalist-easm-dashboard-with-automated-noise-filtering-and-local-ai-briefings-4c2016c90a02",
    },
    {
      title: "Physical Attack Surface Mapper",
      highlights: [
        "Built a Python recon utility to map the digital footprint around physical corporate facilities.",
        "Correlated geographic coordinates with Shodan and WiGLE APIs to find exposed hardware and high-risk wireless APs.",
        "Plotted aggregated intelligence on interactive Folium maps for red teams and physical penetration testers.",
        "Helps visualize proximity-based digital entry points before on-site engagements.",
      ],
      tags: ["Python", "Shodan API", "WiGLE API", "Folium", "Reconnaissance", "Physical Security"],
      githubLink: "https://github.com/Bharath-2204/Physical-Attack-Surface-Mapper",
      blogLink: "https://medium.com/@bharhanu/visualizing-physical-attack-surface-exposure-with-python-wigle-and-shodan-ec66b51df411",
    },
    {
      title: "AIDORK",
      highlights: [
        "Built a GPT-4 utility that generates precise, context-specific Google Dorks from user input.",
        "Expands discovery of exposed personal profiles, sensitive documents, and confidential data online.",
        "Uses Selenium for stealthy extraction from JavaScript-heavy and dynamic sites.",
        "Parses PDFs on the fly with PyMuPDF for scalable analysis without local file downloads.",
      ],
      tags: ["Python", "GPT-4", "Google Dorks", "Selenium", "Web Scraping", "PyMuPDF"],
      githubLink: "https://github.com/Bharath-2204/Dorking-with-AI",
    },
    {
      title: "AWS Cloud Security Assessment & Hardening of an E-Commerce Environment",
      highlights: [
        "Assessed and remediated an AWS-hosted OWASP Juice Shop environment across IAM, network, infrastructure, data protection, and logging.",
        "Identified critical risks including public subnet exposure, unrestricted network access, weak credentials, and missing monitoring.",
        "Implemented automated EC2 patch management with AWS Systems Manager, deploying 23 security updates via scheduled baselines.",
        "Eliminated hardcoded database credentials using AWS Secrets Manager with least-privilege IAM.",
        "Strengthened data protection with KMS encryption, CloudWatch logging, CloudTrail auditing, and security monitoring controls.",
      ],
      tags: ["AWS", "IAM", "VPC", "Systems Manager", "CloudWatch", "CloudTrail", "KMS", "Secrets Manager", "OWASP", "NIST"],
    },
    {
      title: "System Monitoring and Keylogging Tool",
      highlights: [
        "Developed a Python system monitoring tool capturing keystrokes, clipboard data, screenshots, microphone input, and system metadata.",
        "Uses Pynput, PIL, and Sounddevice for multi-channel activity collection.",
        "Automates encrypted log and media exfiltration to a controlled server via smtplib for remote auditing.",
        "Packaged as a portable Windows executable with PyInstaller for red team and forensic deployment without a local Python runtime.",
      ],
      tags: ["Python", "Pynput", "System Monitoring", "PyInstaller", "Red Team", "Forensics"],
      githubLink: "https://github.com/Bharath-2204/Python-Keylogger",
    },
    {
      title: "Unveiling ADHD - ADHD Detection and Comprehensive Care",
      highlights: [
        "Multi-modal web platform combining neuropsychological screening, EEG classification, and executive-functioning tools for ADHD evaluation and care.",
        "Ingests raw 19-channel EEG signals and extracts 11 quantitative features per channel (statistics, entropy, Hjorth parameters in theta/beta bands).",
        "Optimized EEGNet convolutional model achieved 92.91% validation accuracy distinguishing ADHD profiles from healthy controls.",
        "Pairs the diagnostic engine with WHO ASRS, Stroop, and Posner behavioral assessments.",
        "Includes privacy-focused aids (Bionic Reading formatter, extractive summarizer) in a low-contrast UI designed to reduce sensory overload.",
      ],
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
              <span className="text-foreground">CYBERSEC</span>
              <span className="text-primary">.DEV</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <SmoothLink className="hover:text-primary" to="#about">About</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#experience">Professional Experience</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#certifications">Certifications</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#skills">Skills</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#projects">Projects</SmoothLink>
            <SmoothLink className="hover:text-primary" to="#contact">Contact</SmoothLink>
            <a
              className="hover:text-primary flex items-center gap-1.5"
              href={resumeUrl}
              download="Bharath_Updated_V2.pdf"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black" />
        <div className="absolute inset-0 bg-primary/5" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="space-y-4 mb-8">
              <div className="font-mono text-sm text-muted-foreground text-left max-w-2xl mx-auto">
                <span className="text-primary">$</span> initializing_system...
              </div>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-foreground">CYBERSECURITY </span>
                <span className="text-primary">
                  <TerminalText text="ENGINEER" delay={80} />
                </span>
              </h1>
            </div>

            {showContent && (
              <div className="space-y-6 animate-fade-in-up">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Threat Intelligence | OSINT | Digital Forensics | Social Engineering
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button variant="cyber" size="lg" asChild>
                    <a href="#projects">
                      <Eye className="w-5 h-5" />
                      View Projects
                    </a>
                  </Button>
                  <Button variant="terminal" size="lg" asChild>
                    <a href={resumeUrl} download="Bharath_Updated_V2.pdf">
                      <FileDown className="w-5 h-5" />
                      Download Resume
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
                <span className="text-foreground">ABOUT </span>
                <span className="text-primary">ME</span>
                <span className="text-primary animate-blink">_</span>
              </h2>
              <div className="absolute top-0 right-0 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300" />
                <div className="relative border-2 border-primary/30 rounded-full overflow-hidden aspect-square w-44 md:w-56">
                  <img 
                    src={profileImg} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 text-lg text-foreground/90 leading-relaxed pr-48 md:pr-64">
                <p>
                  I am a Cybersecurity Engineer currently working as a Vulnerability Management Analyst at Resilience, Inc., where I focus on finding infrastructure weaknesses before attackers do. My day-to-day focus is on practical infrastructure security. Running vulnerability scans across enterprise endpoints, triaging incoming CVEs against threat reports, and coordinating with IT teams to track patch deployment and system hardening.
                </p>
                <p>
                  I hold a Master of Engineering in Cybersecurity from the University of Maryland, and my approach to security is simple: if a task is repetitive, write code to automate it.
                </p>
                <p>
                  Whether I'm building AI-driven threat intelligence tools using Amazon Bedrock, writing custom Python scripts to parse log telemetry, or setting up honeypots to capture live attack patterns, I am driven by practical, hands-on defense. I enjoy taking complex, messy threat data and engineering clean, automated workflows that keep enterprise networks secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-foreground">PROFESSIONAL EXPERIENCE</span>
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="space-y-6">
              {professionalExperiences.map((exp) => (
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

      {/* Volunteer Experience Section */}
      <section id="volunteer-experience" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-foreground">VOLUNTEER EXPERIENCE</span>
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="space-y-6">
              {volunteerExperiences.map((exp) => (
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
              <span className="text-foreground">CERTIFICATIONS</span>
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
            <span className="text-foreground">SKILLS</span>
            <span className="text-primary animate-blink">_</span>
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="bg-card/40 border border-border rounded-lg p-5 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-base font-semibold font-mono text-foreground leading-snug">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="font-mono text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="text-foreground">FEATURED </span>
              <span className="text-primary">PROJECTS</span>
              <span className="text-primary animate-blink">_</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <span className="text-foreground">GET IN </span>
              <span className="text-primary">TOUCH</span>
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
            <span className="text-foreground">Built with security in mind • © 2026 • </span>
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
