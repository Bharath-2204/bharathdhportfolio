import { useId, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, ChevronDown, FileDown, Github, Linkedin, Mail, Menu, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ugrozaImg from "@/assets/projects/ugroza.webp";
import easmImg from "@/assets/projects/easm-dashboard.webp";
import siemImg from "@/assets/projects/pfsense-splunk-siem.webp";
import mapperImg from "@/assets/projects/physical-attack-surface-mapper.webp";
import profileImg from "@/assets/profile.jpeg";

const base = import.meta.env.BASE_URL;
const resumeUrl = `${base}Bharath_Updated_V2.pdf`;
const medium = "https://medium.com/@bharhanu";

type Links = { demoVideo?: string; githubLink?: string; blogLink?: string };

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

const featured = {
  ugroza: {
    title: "Ugroza",
    subtitle: "Evidence-Reviewed Threat Intelligence Engine",
    built:
      "Ugroza turns public threat reporting into structured intelligence that analysts can trace back to the source. It reviews claims against supporting evidence and exports findings as STIX bundles or ATT&CK Navigator layers.",
    highlights: [
      "Collects public vendor reporting, government advisories, and technical media, then enriches actor profiles with direct MITRE ATT&CK reference mappings.",
      "Uses Amazon Nova Micro to extract evidence-linked claims and Mistral Large 3 to review factual support and analytical field classification through Amazon Bedrock.",
      "Validates claim structure and retained source quotations, excludes invalid findings, and preserves an audit trail for analyst inspection.",
      "Exports draft STIX 2.1 research bundles and ATT&CK Navigator layers for further analysis.",
      "Supports configurable research coverage, SQLite-backed research snapshots, and explicit refresh and re-analysis.",
      "Includes offline regression tests covering evidence validation, classification rules, model-response failures, and export integrity.",
    ],
    tags: ["Python", "Amazon Bedrock", "MITRE ATT&CK", "STIX 2.1", "ATT&CK Navigator", "Streamlit", "Amazon Nova Micro", "Mistral Large 3", "SQLite", "OSINT"],
    demoVideo: `${base}ugroza-technical-demo-narrated.mp4`,
    githubLink: "https://github.com/Bharath-2204/Ugroza-A-Threat-Intelligence-Engine",
    blogLink: "https://medium.com/@bharhanu/ugroza-turning-osint-into-actionable-threat-intelligence-22cb75567c2c",
  },
  others: [
    {
      title: "EASM and Threat Intel Dashboard",
      area: "Attack surface · CTI",
      image: { src: easmImg, alt: "Illustration of certificate, internet, cloud, and code signals merging into a weighted risk scale" },
      summary:
        "The dashboard brings external exposure findings from certificate logs, internet scanners, TLS checks, and public code into one view. A weighted risk score helps prioritize which findings to investigate first.",
      highlights: [
        "Unifies passive discovery across subdomains, TLS posture, Shodan exposure data, and potential secret exposures in public GitHub repositories.",
        "Scores findings using exposed credentials, TLS posture, high-risk ports, and the breadth of the external attack surface.",
        "Generates threat briefings with Amazon Bedrock and maps findings to MITRE ATT&CK using collected telemetry.",
        "Exports STIX 2.1 and JSON for downstream SIEM, SOAR, or threat intelligence workflows.",
        "Uses a Streamlit interface and runs collection tasks concurrently to reduce overall scan time.",
      ],
      tags: ["Python", "Shodan API", "AWS Bedrock", "MITRE ATT&CK", "STIX 2.1", "Streamlit", "GitHub API", "HackerTarget", "crt.sh", "REST APIs"],
      githubLink: "https://github.com/Bharath-2204/EASM-Dashboard",
      blogLink: "https://medium.com/@bharhanu/building-a-minimalist-easm-dashboard-with-automated-noise-filtering-and-local-ai-briefings-4c2016c90a02",
    },
    {
      title: "pfSense & Splunk SIEM Security Lab",
      area: "Detection · SOC",
      image: { src: siemImg, alt: "Illustration of a lab network passing through a firewall shield into a monitoring screen" },
      summary:
        "An isolated SOC lab follows a perimeter alert from Suricata on pfSense into Splunk. The resulting telemetry can be searched and correlated to investigate what happened at the network edge.",
      highlights: [
        "Built an isolated SOC sandbox on a host-only network spanning Kali Linux, pfSense, and Splunk Enterprise on Ubuntu.",
        "Deployed Suricata IPS on the pfSense WAN interface with automatic snort2c block-table enforcement.",
        "Diagnosed hypervisor subnet misconfiguration and RFC 1918 filtering that dropped lab traffic.",
        "Built an end-to-end syslog telemetry pipeline into Splunk with custom regex field extractions for `src_ip` and `dest_ip`.",
        "Wrote SPL queries to surface and rank source activity observed at the lab perimeter.",
      ],
      tags: ["pfSense", "Suricata", "Splunk", "Syslog", "Kali Linux", "VMware", "IPS", "SIEM"],
      blogLink: "https://medium.com/@bharhanu/designing-an-isolated-soc-lab-part-1-setting-up-my-perimeter-and-siem-f435cb3c9527",
    },
    {
      title: "Physical Attack Surface Mapper",
      area: "Recon · Physical security",
      image: { src: mapperImg, alt: "Illustration of a facility on a map with a radius marking nearby devices and access points" },
      summary:
        "An interactive map puts Shodan device records and WiGLE wireless access points in geographic context, showing how publicly documented exposures relate to a facility’s location.",
      highlights: [
        "Correlates geographic coordinates with Shodan device records and WiGLE wireless access point data.",
        "Plots the combined results on an interactive Folium map.",
        "Shows the facility and surrounding findings in one view for physical security assessments.",
      ],
      tags: ["Python", "Shodan API", "WiGLE API", "Folium", "Reconnaissance", "Physical Security"],
      chips: 4,
      demoVideo: `${base}physical_attack_surface_mapper_brag.mp4`,
      githubLink: "https://github.com/Bharath-2204/Physical-Attack-Surface-Mapper",
      blogLink: "https://medium.com/@bharhanu/visualizing-physical-attack-surface-exposure-with-python-wigle-and-shodan-ec66b51df411",
    },
  ],
};

const moreProjects = [
  {
    title: "AWS Cloud Security Assessment & Hardening of an E-Commerce Environment",
    area: "Cloud security · AppSec",
    summary:
      "An AWS-hosted OWASP Juice Shop lab was hardened by tightening network access, replacing hardcoded credentials, and automating EC2 patching. The scheduled patch baselines deployed 23 security updates.",
    highlights: [
      "Assessed the environment across IAM, networking, infrastructure, data protection, and logging.",
      "Identified risks including public subnet exposure, unrestricted network access, weak credentials, and missing monitoring.",
      "Implemented automated EC2 patch management with AWS Systems Manager, deploying 23 security updates through scheduled baselines.",
      "Replaced hardcoded database credentials with AWS Secrets Manager and least-privilege IAM permissions.",
      "Strengthened data protection and visibility with KMS encryption, CloudWatch logging, and CloudTrail auditing.",
    ],
    tags: ["AWS", "IAM", "Systems Manager", "Secrets Manager", "KMS", "VPC", "CloudWatch", "CloudTrail", "OWASP", "NIST"],
  },
  {
    title: "OSINT Command Line Automation Tool",
    area: "OSINT · Forensics",
    summary: "A Python CLI consolidates domain and IP reputation findings into one report and extracts image metadata for digital forensics workflows.",
    highlights: [
      "Automates domain and IP reputation analysis through the VirusTotal v2 API.",
      "Brings together threat scores, URLs, passive DNS, subdomains, and WHOIS data in a single report.",
      "Integrates ExifTool for forensic metadata extraction from images.",
      "Provides a script-ready interface for repeatable lookups and reporting.",
    ],
    tags: ["Python", "VirusTotal API", "ExifTool", "CLI", "OSINT", "Digital Forensics"],
    chips: 4,
    githubLink: "https://github.com/Bharath-2204/OSINT-Automation-Tool",
    blogLink: "https://medium.com/@bharhanu/building-an-all-in-one-osint-tool-automating-threat-intel-from-the-command-line-a07cce81c578",
  },
  {
    title: "AIDORK",
    area: "OSINT · Automation",
    summary: "A GPT-4 prototype turns plain-language research questions into structured search queries and processes public web pages and PDFs.",
    highlights: [
      "Generates context-specific search queries from plain-language input.",
      "Processes content from dynamic web pages and PDFs.",
      "Extracts PDF text in memory without saving the files locally.",
    ],
    tags: ["Python", "GPT-4", "Google Dorks", "Selenium", "PyMuPDF", "Web Scraping"],
    githubLink: "https://github.com/Bharath-2204/Dorking-with-AI",
  },
  {
    title: "System Monitoring and Keylogging Tool",
    area: "Red team · Forensics",
    summary: "A Python prototype explores how endpoint activity can be recorded and reviewed in a controlled Windows environment.",
    highlights: [
      "Records multiple types of endpoint activity for review in a controlled environment.",
      "Includes system metadata to provide context for the activity records.",
      "Packages the prototype as a portable Windows executable with PyInstaller.",
    ],
    tags: ["Python", "Pynput", "PyInstaller", "System Monitoring", "Red Team", "Forensics"],
    chips: 4,
    githubLink: "https://github.com/Bharath-2204/Python-Keylogger",
  },
  {
    title: "Unveiling ADHD — Research Capstone",
    area: "ML · Web platform",
    summary: "A team research capstone combined EEG classification, behavioral assessments, and reading tools in one web platform. Its EEGNet model reached 92.91% validation accuracy on the project dataset.",
    highlights: [
      "Processes raw 19-channel EEG signals and extracts 11 quantitative features per channel, including statistical, entropy, and Hjorth features.",
      "Uses an EEGNet model that achieved 92.91% validation accuracy on the project dataset when distinguishing ADHD and control samples.",
      "Includes WHO ASRS, Stroop, and Posner assessments alongside the EEG workflow.",
      "Offers a reading formatter and extractive summarizer in an interface designed to reduce visual clutter.",
    ],
    tags: ["Python", "PyTorch", "EEGNet", "SciPy", "CNN", "SQLite", "Matplotlib", "Web Development"],
    githubLink: "https://github.com/Bharath-2204/CapstoneWebsite",
  },
  {
    title: "Real-Time Object Measurement",
    area: "Computer vision",
    summary: "An OpenCV tool estimates object dimensions from uploaded images or live camera feeds, using a known-size reference to establish scale.",
    highlights: [
      "Uses ArUco markers for scale calibration.",
      "Supports uploaded images with known-size circular or rectangular reference objects.",
      "Accepts input from a laptop webcam or an Android device used as an IP webcam.",
      "Received a certificate from the IEEE Computer Society club upon project completion.",
    ],
    tags: ["Python", "OpenCV", "ArUco", "Streamlit", "Image Processing", "Computer Vision"],
    githubLink: "https://github.com/Bharath-2204/Real-Time-Object-Measurement-using-OpenCV",
  },
  {
    title: "Smart Mobility Stick",
    area: "Embedded · IoT",
    summary: "An Arduino-based mobility aid prototype uses proximity, light, and water sensors to provide feedback about the surrounding environment. My contribution focused on integrating and tuning the proximity sensor.",
    highlights: [
      "Integrates light, water, and proximity sensors with an Arduino Uno.",
      "Includes reflective stickers and warning lights for added visibility.",
      "The project received a perfect score from our professors.",
    ],
    tags: ["Arduino", "Sensors", "Microcontrollers", "Hardware", "Embedded Systems", "IoT"],
    chips: 4,
    githubLink: "https://github.com/Bharath-2204/Smart-Mobility-Stick-for-Visual-Impaired",
  },
];

const professionalExperiences = [
  {
    role: "Vulnerability Management Analyst",
    company: "Resilience, Inc",
    location: "Remote, United States",
    period: "Sep 2026 – Present",
    highlights: [
      "Automated enterprise endpoint vulnerability scans using Nessus, analyzing scan telemetry to pinpoint unpatched OS flaws, policy deviations, and system misconfigurations.",
      "Triaged emerging CVEs by cross-referencing CVSS severity with threat intelligence feeds and asset criticality, accelerating patch prioritization for high-risk systems.",
      "Tracked patch deployment lifecycles and audited server infrastructure against CIS security benchmarks in close collaboration with system administration teams.",
    ],
  },
  {
    role: "Cybersecurity Analyst",
    company: "ActiveBytes Innovations",
    location: "Bengaluru, India",
    period: "Jan 2024 – Jun 2024",
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
    location: "Remote, United States",
    period: "May 2026 – Present",
    highlights: [
      "Conducted anti-human-trafficking investigations using OSINT tradecraft and vetted OpSec protocols, producing structured intelligence reports escalated directly to federal law enforcement for case action.",
      "Verified age indicators by applying open-source research methodologies to analyze 100+ commercial sex advertisements, generating verified identity intelligence that strengthened victim-identification efforts.",
      "Shortened investigation cycle times by 15% through cross-referencing subject aliases via public records and SOCMINT, compiling comprehensive identity profiles.",
    ],
  },
  {
    role: "OSINT Analyst",
    company: "Trace Labs Search Party",
    location: "Remote, United States",
    period: "Apr 2025",
    highlights: [
      "Researched 10+ active missing persons cases leveraging open-source intelligence techniques, delivering verified digital-footprint analysis that produced actionable leads submitted to law enforcement.",
      "Traced subjects' recent digital activities utilizing advanced search operators and reverse image search, uncovering previously unknown associated accounts that generated 5+ new investigative leads.",
    ],
  },
];

const education = [
  {
    school: "University of Maryland",
    location: "College Park, MD",
    degree: "Master of Engineering, Cybersecurity",
    detail: "GPA 3.8 · Digital Forensics & Incident Response, Penetration Testing, Cloud Security, Information Assurance",
    date: "May 2026",
  },
  {
    school: "PES University",
    location: "Bengaluru, India",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    detail: "Computer Network Security, Applied Cryptography, Information Security, Blockchain",
    date: "May 2024",
  },
];

const skillCategories = [
  { name: "SIEM & Log Analysis", skills: ["Splunk", "Windows Event Logs", "Sysmon", "Linux/Bash Log Analysis", "Active Directory"] },
  { name: "Network Security & Monitoring", skills: ["Wireshark", "Snort", "Firewalls/ACLs", "Web Proxies", "Nessus", "Cisco Packet Tracer"] },
  { name: "Incident Response & Forensics", skills: ["Autopsy", "Foremost", "Volatility", "Cellebrite", "Phishing Analysis", "Malware Triage"] },
  { name: "Threat Intelligence", skills: ["MISP", "AlienVault OTX", "VirusTotal", "MITRE ATT&CK", "OSINT Frameworks", "Maltego"] },
  { name: "Offensive Security & Pen Testing", skills: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nmap", "Mimikatz", "Aircrack-ng", "Gophish"] },
  { name: "Frameworks & Standards", skills: ["NIST RMF", "NIST SP 800-series", "CMMC", "RBAC", "MFA", "Active Directory Principles"] },
  { name: "Cloud & Architecture", skills: ["AWS (EC2, S3, IAM - Coursework)", "Amazon Bedrock", "Zero Trust Principles"] },
  { name: "Languages & DevOps", skills: ["Python", "Bash", "C", "Java", "SQL", "AWS", "Docker", "Jenkins", "Flask", "ReactJS", "MongoDB"] },
];

const writing = [
  { title: "Ugroza: Turning OSINT into Actionable Threat Intelligence", href: featured.ugroza.blogLink },
  { title: "Building a Minimalist EASM Dashboard with Automated Noise Filtering and Local AI Briefings", href: featured.others[0].blogLink! },
  { title: "Designing an Isolated SOC Lab, Part 1: Setting Up My Perimeter and SIEM", href: featured.others[1].blogLink! },
  { title: "Visualizing Physical Attack Surface Exposure with Python, WiGLE, and Shodan", href: featured.others[2].blogLink! },
  { title: "Building an All-in-One OSINT Tool: Automating Threat Intel from the Command Line", href: moreProjects[1].blogLink! },
  {
    title: "72 Hours of Practical Infiltration: My Experience Earning the PORP Certification",
    href: "https://medium.com/@bharhanu/72-hours-of-practical-infiltration-my-experience-earning-the-porp-certification-0083b4013d8c",
  },
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const DemoButton = ({ title, src, size = "sm" }: { title: string; src: string; size?: "sm" | "default" }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="solid" size={size}>
        <Play aria-hidden />
        Watch demo
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-4xl border-border bg-surface" aria-describedby={undefined}>
      <DialogHeader>
        <DialogTitle className="text-foreground">{title} demo</DialogTitle>
      </DialogHeader>
      <video src={src} controls autoPlay className="w-full rounded-md bg-background" />
    </DialogContent>
  </Dialog>
);

const ProjectLinks = ({ title, demoVideo, githubLink, blogLink, size = "sm" }: Links & { title: string; size?: "sm" | "default" }) => (
  <div className="flex flex-wrap gap-2">
    {demoVideo && <DemoButton title={title} src={demoVideo} size={size} />}
    {githubLink && (
      <Button variant="line" size={size} asChild>
        <a href={githubLink} {...ext} aria-label={`${title} source code on GitHub`}>
          <Github aria-hidden />
          Source
        </a>
      </Button>
    )}
    {blogLink && (
      <Button variant="line" size={size} asChild>
        <a href={blogLink} {...ext} aria-label={`${title} write-up on Medium`}>
          <BookOpen aria-hidden />
          Write-up
        </a>
      </Button>
    )}
  </div>
);

// Visible stack row: the first `chips` technologies (default 5); the rest stay in Technical details.
const visibleStack = (p: { tags: string[]; chips?: number }) => p.tags.slice(0, p.chips ?? 5);
const hiddenStack = (p: { tags: string[]; chips?: number }) => p.tags.slice(p.chips ?? 5);

const ProjectImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <figure className={className}>
    <img src={src} alt={alt} width={1200} height={675} loading="lazy" className="aspect-video w-full rounded-lg border border-border object-cover" />
  </figure>
);

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
    {tags.map((t) => (
      <li key={t} className="tag">
        {t}
      </li>
    ))}
  </ul>
);

// Height animates via grid-template-rows 0fr -> 1fr, so any content height opens fully without clipping or snapping.
const Details = ({ label = "Technical details", children }: { label?: string; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex select-none items-center gap-1.5 rounded text-sm font-medium text-foreground hover:text-primary"
      >
        <ChevronDown
          aria-hidden
          className={`accordion-motion h-4 w-4 ${open ? "rotate-180" : ""}`}
        />
        {label}
      </button>
      <div
        id={id}
        role="region"
        aria-label={label}
        className={`accordion-motion grid ${
          open ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-3 pt-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-1.5 text-sm leading-relaxed">
    {items.map((h) => (
      <li key={h} className="flex gap-2.5">
        <span aria-hidden className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-primary/70" />
        <span>
          {h.split("`").map((part, i) =>
            i % 2 ? (
              <code key={i} className="font-mono text-[0.85em] text-foreground">
                {part}
              </code>
            ) : (
              part
            ),
          )}
        </span>
      </li>
    ))}
  </ul>
);

const Section = ({ id, title, intro, children, className = "" }: { id?: string; title: string; intro?: ReactNode; children: ReactNode; className?: string }) => (
  <section id={id} className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">{title}</h2>
      {intro && <p className="mt-2 max-w-2xl text-body">{intro}</p>}
    </div>
    {children}
  </section>
);

const ExperienceList = ({ items }: { items: typeof professionalExperiences }) => (
  <ol className="divide-y divide-border border-y border-border">
    {items.map((exp) => (
      <li key={`${exp.role}-${exp.company}`} className="grid py-5 md:grid-cols-[11rem_1fr] md:gap-x-8">
        <h4 className="text-lg font-semibold md:col-start-2 md:row-start-1">
          {exp.role} <span className="font-normal text-muted-foreground">·</span>{" "}
          <span className="font-medium text-body">{exp.company}</span>
        </h4>
        <p className="mt-1 text-[0.95rem] font-medium leading-7 text-body md:col-start-1 md:row-start-1 md:mt-0">{exp.period}</p>
        <div className="md:col-start-2">
          <p className="mt-0.5 text-sm text-muted-foreground">{exp.location}</p>
          <div className="mt-3 max-w-3xl">
            <Bullets items={exp.highlights} />
          </div>
        </div>
      </li>
    ))}
  </ol>
);

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const u = featured.ugroza;

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="text-[1.05rem] font-semibold tracking-tight text-foreground">
            Bharath D H
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[17px] font-medium text-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button variant="line" size="sm" asChild className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground">
              <a href={resumeUrl} {...ext}>
                Resume
              </a>
            </Button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="line" size="sm" asChild className="border-primary/60 text-primary">
              <a href={resumeUrl} {...ext}>
                Resume
              </a>
            </Button>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" aria-label="Primary" className="border-t border-border px-4 pb-3 md:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block border-b border-border/60 py-3 text-[17px] font-medium text-foreground transition-colors last:border-0 hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-16 lg:pb-14 lg:pt-14">
          <div>
            <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[clamp(2.75rem,3.9vw,3.5rem)]">
              Bharath Dibbadahalli Hanumanthappa
            </h1>
            <p className="mt-5 text-xl font-medium text-foreground sm:text-2xl">Cybersecurity Engineer</p>
            <p className="mt-1.5 text-body sm:text-lg">Threat Intelligence · Security Operations Center · Vulnerability Management</p>
            <div aria-hidden className="mt-6 h-[3px] w-14 rounded-full bg-primary" />
            <p className="mt-5 flex items-start gap-2.5 text-body">
              <span aria-hidden className="relative mt-[0.55em] flex h-2 w-2 shrink-0">
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>
                Vulnerability Management Analyst at <span className="font-medium text-foreground">Resilience</span>
              </span>
            </p>
            <p className="mt-4 max-w-[54ch] leading-relaxed text-body">
              I find and prioritize infrastructure weaknesses before attackers do: scanning endpoints, triaging CVEs against threat intelligence, and tracking patching with IT teams. If a task is repetitive, I automate it, from Amazon Bedrock threat intelligence tools to Python log pipelines and honeypots.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="solid" size="lg" asChild className="px-6">
                <a href="#projects">
                  View featured projects
                  <ArrowRight aria-hidden />
                </a>
              </Button>
              <Button variant="line" size="lg" asChild className="px-6">
                <a href={resumeUrl} {...ext}>
                  <FileDown aria-hidden />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          {/* shortcut: crop is done in CSS over the original photo; offsets are tuned to this image, re-tune if the photo changes */}
          <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-xl border border-border bg-surface sm:w-52 lg:w-[280px]">
            <img
              src={profileImg}
              alt="Portrait of Bharath Dibbadahalli Hanumanthappa"
              className="absolute max-w-none"
              style={{ width: "254%", left: "-74.5%", top: "-28%" }}
            />
          </div>
        </section>

        {/* Featured */}
        <Section id="projects" title="Featured projects" className="scroll-mt-20">
          <article className="grid overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-[1.25fr_1fr]">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-2xl font-semibold tracking-tight">{u.title}</h3>
                <span className="inline-flex items-center rounded border border-primary/50 px-2 py-0.5 text-xs font-medium text-primary">Flagship · CTI</span>
              </div>
              <p className="mt-1 text-lg text-foreground/90">{u.subtitle}</p>
              <p className="mt-5 max-w-[65ch] leading-relaxed">{u.built}</p>
              <div className="mt-6">
                <ProjectLinks title={u.title} demoVideo={u.demoVideo} githubLink={u.githubLink} blogLink={u.blogLink} size="default" />
              </div>
              <div className="mt-4">
                <Tags tags={visibleStack(u)} />
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <Details>
                  <Bullets items={u.highlights} />
                  {hiddenStack(u).length > 0 && <Tags tags={hiddenStack(u)} />}
                </Details>
              </div>
            </div>
            <div className="flex items-center border-t border-border bg-background/30 p-5 sm:p-8 lg:border-l lg:border-t-0">
              <ProjectImage
                src={ugrozaImg}
                alt="Illustration of source documents passing through a magnifying glass into a verified claim"
                className="w-full"
              />
            </div>
          </article>

          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.others.map((p) => (
              // Subgrid: cards in a row share their image / content / accordion tracks, so titles and
              // Technical details buttons line up and opening one panel never moves the others' buttons.
              <article key={p.title} className="row-span-3 grid grid-rows-subgrid gap-y-0 overflow-hidden rounded-xl border border-border bg-surface">
                <ProjectImage src={p.image.src} alt={p.image.alt} className="border-b border-border p-4" />
                <div className="px-5 pt-5">
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.area}</p>
                  <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>
                  <div className="mt-5">
                    <ProjectLinks title={p.title} demoVideo={p.demoVideo} githubLink={p.githubLink} blogLink={p.blogLink} />
                  </div>
                  <div className="mt-4">
                    <Tags tags={visibleStack(p)} />
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <div className="mt-5 border-t border-border pt-4">
                    <Details>
                      <Bullets items={p.highlights} />
                      {hiddenStack(p).length > 0 && <Tags tags={hiddenStack(p)} />}
                    </Details>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* More projects */}
        <Section id="more-projects" title="More projects" className="mt-16 scroll-mt-20 sm:mt-20">
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
            {moreProjects.map((p) => (
              <li key={p.title} className="grid p-5 md:grid-cols-[1fr_auto] md:gap-x-10 md:p-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold sm:text-[1.05rem]">{p.title}</h3>
                    <span className="text-xs text-muted-foreground">{p.area}</span>
                  </div>
                  <p className="mt-1.5 max-w-[80ch] text-sm leading-relaxed">{p.summary}</p>
                </div>
                {(p.githubLink || p.blogLink) && (
                  <div className="mt-3 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0">
                    <ProjectLinks title={p.title} githubLink={p.githubLink} blogLink={p.blogLink} />
                  </div>
                )}
                <div className="mt-3 md:col-start-1">
                  <Tags tags={visibleStack(p)} />
                </div>
                <div className="mt-3 md:col-start-1">
                  <Details>
                    <Bullets items={p.highlights} />
                    {hiddenStack(p).length > 0 && <Tags tags={hiddenStack(p)} />}
                  </Details>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" className="mt-16 scroll-mt-20 sm:mt-20">
          <h3 className="mb-4 text-[1.3rem] font-semibold tracking-tight text-foreground">Professional</h3>
          <ExperienceList items={professionalExperiences} />
          <h3 className="mb-4 mt-14 text-[1.3rem] font-semibold tracking-tight text-foreground">Volunteer</h3>
          <ExperienceList items={volunteerExperiences} />
        </Section>

        {/* Education */}
        <Section id="education" title="Education" className="mt-16 scroll-mt-20 sm:mt-20">
          <div className="grid gap-4 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.school} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold">{e.school}</h3>
                  <span className="shrink-0 font-mono text-[0.8rem] text-muted-foreground">{e.date}</span>
                </div>
                <p className="mt-1 text-foreground/90">{e.degree}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{e.location}</p>
                <p className="mt-3 text-sm leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="Certifications" className="mt-16 scroll-mt-20 sm:mt-20">
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold">Practical OSINT Research Professional</h3>
                <span className="shrink-0 font-mono text-[0.8rem] text-muted-foreground">2025</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">TCM Security</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="line" size="sm" asChild>
                  <a href="https://images.credential.net/embed/e6vasrvk_1779115686262.png" {...ext}>
                    <ArrowUpRight aria-hidden />
                    View certificate
                  </a>
                </Button>
                <Button variant="line" size="sm" asChild>
                  <a href={writing[5].href} {...ext}>
                    <BookOpen aria-hidden />
                    Write-up
                  </a>
                </Button>
              </div>
            </li>
            <li className="rounded-xl border border-dashed border-border p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold">CompTIA Security+</h3>
                <span className="shrink-0 font-mono text-[0.8rem] text-muted-foreground">2026</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">CompTIA</p>
              <p className="mt-4 inline-flex rounded border border-border px-2 py-0.5 font-mono text-[0.72rem] text-body">In progress</p>
            </li>
          </ul>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" className="mt-16 scroll-mt-20 sm:mt-20">
          <dl className="grid gap-x-10 border-t border-border md:grid-cols-2">
            {skillCategories.map((c) => (
              <div key={c.name} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[13rem_1fr] sm:gap-4">
                <dt className="text-sm font-medium text-foreground">{c.name}</dt>
                <dd className="text-sm leading-relaxed">{c.skills.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Writing */}
        <Section
          id="writing"
          title="Writing"
          intro="Write-ups on the projects above and on threat intelligence research, published on Medium."
          className="mt-16 scroll-mt-20 sm:mt-20"
        >
          <ul className="divide-y divide-border border-y border-border">
            {writing.map((w) => (
              <li key={w.href}>
                <a href={w.href} {...ext} className="group flex items-center justify-between gap-6 py-4 text-foreground transition-colors hover:text-primary">
                  <span className="leading-snug">{w.title}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <Button variant="line" size="sm" asChild className="mt-5">
            <a href={medium} {...ext}>
              <BookOpen aria-hidden />
              All writing on Medium
            </a>
          </Button>
        </Section>

        {/* Contact */}
        <section id="contact" className="mx-auto mt-16 w-full max-w-6xl scroll-mt-20 px-4 sm:mt-20 sm:px-6">
          <div className="grid gap-6 rounded-xl border border-border bg-surface p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">Get in touch</h2>
              <p className="mt-2 max-w-xl">Interested in collaboration or have a security challenge? Let's connect.</p>
              <a href="mailto:bharhanu@terpmail.umd.edu" className="mt-3 inline-block font-mono text-sm text-primary underline decoration-primary/40 hover:decoration-primary">
                bharhanu@terpmail.umd.edu
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="solid" asChild>
                <a href="mailto:bharhanu@terpmail.umd.edu">
                  <Mail aria-hidden />
                  Email
                </a>
              </Button>
              <Button variant="line" asChild>
                <a href="https://www.linkedin.com/in/bharath-d-h-ba22a2003" {...ext}>
                  <Linkedin aria-hidden />
                  LinkedIn
                </a>
              </Button>
              <Button variant="line" asChild>
                <a href="https://github.com/Bharath-2204/" {...ext}>
                  <Github aria-hidden />
                  GitHub
                </a>
              </Button>
              <Button variant="line" asChild>
                <a href={resumeUrl} {...ext}>
                  <FileDown aria-hidden />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-8 text-sm text-muted-foreground sm:px-6">
        <span>© 2026 Bharath Dibbadahalli Hanumanthappa</span>
        <a href={medium} {...ext} className="hover:text-primary">
          Medium
        </a>
      </footer>
    </div>
  );
};

export default Index;
