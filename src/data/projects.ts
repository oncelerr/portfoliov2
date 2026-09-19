export type ProjectGroup = "web" | "security" | "oss";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  group: ProjectGroup;
  title: string;
  org?: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  mockup?: "browser" | "terminal" | "report" | "none";
  image?: string;
}

export const projectGroups: { id: ProjectGroup; label: string; tag: string }[] = [
  { id: "web", label: "Web & Full-Stack", tag: "01" },
  { id: "security", label: "Security & Tooling", tag: "02" },
  { id: "oss", label: "Open Source / Experiments", tag: "03" },
];

export const projects: Project[] = [
  // Web & Full-Stack
  {
    id: "pcs",
    group: "web",
    title: "Premium Corporate Solutions",
    org: "VibeHive",
    description:
      "Rebuilt an inherited legal-services site plagued by poor UX, no client-management system, and critical security vulnerabilities. Zero critical vulnerabilities after penetration testing, launched in 6 weeks, and self-serve case tracking that ended client back-and-forth.",
    tags: ["React", "UI/UX", "Client Portal", "Penetration Testing", "Secure Build"],
    links: [
      { label: "Case study", href: "https://vibehiveph.site/our-works" },
      { label: "GitHub", href: "https://github.com/oncelerr/pcs-v2" },
    ],
    mockup: "browser",
    image: "/images/projects/pcs.png",
  },
  {
    id: "kogh",
    group: "web",
    title: "KOGH Cloud",
    org: "VibeHive",
    description:
      "Built a professional web presence for a budget-conscious cloud-services company that had no effective way to communicate complex technical offerings. Launched in 4 weeks; increased web traffic and brand awareness in a competitive cloud market.",
    tags: ["React", "Marketing Site", "SEO", "Performance"],
    links: [
      { label: "Case study", href: "https://vibehiveph.site/our-works" },
      { label: "GitHub", href: "https://github.com/oncelerr/kogh-cloud" },
    ],
    mockup: "browser",
    image: "/images/projects/kogh.png",
  },
  {
    id: "vts",
    group: "web",
    title: "Vertical Talent Solutions",
    org: "VibeHive",
    description:
      "Transformed an outdated single-person no-code WordPress site that was undermining credibility with enterprise prospects. Full UI/UX and website rebuild to enterprise-grade standard, with a user journey optimized for B2B HR decision-makers.",
    tags: ["React", "Enterprise UI/UX", "B2B", "Conversion"],
    links: [
      { label: "Case study", href: "https://vibehiveph.site/our-works" },
      { label: "GitHub", href: "https://github.com/oncelerr/VTS" },
    ],
    mockup: "browser",
    image: "/images/projects/vts.png",
  },
  {
    id: "kmbm",
    group: "web",
    title: "Kuha Mo Bayad Mo",
    description:
      'A Laravel-based "honesty store" web application: self-service purchasing on a trust-based payment flow. Included the deployment and security-hardening work behind it.',
    tags: ["Laravel", "PHP", "MySQL", "Deployment", "Security Hardening"],
    links: [{ label: "GitHub", href: "https://github.com/oncelerr" }],
    mockup: "browser",
  },
  {
    id: "election-scrapers",
    group: "web",
    title: "Philippine Election Results Scrapers",
    description:
      "Python scrapers that collect and structure Philippine election results data for analysis.",
    tags: ["Python", "Web Scraping", "Data Pipeline"],
    links: [{ label: "GitHub", href: "https://github.com/oncelerr" }],
    mockup: "terminal",
  },

  // Security & Tooling (organization-agnostic, defensive framing only)
  {
    id: "lnk-forensics",
    group: "security",
    title: "Malicious LNK File: Forensic Incident Response",
    description:
      "End-to-end forensic investigation of a weaponized Windows .lnk shortcut file. Reverse-analyzed the file's behavior, mapped indicators of compromise, assessed severity, and delivered a full incident-response package covering containment and remediation. Purely defensive: detection, analysis, and response.",
    tags: ["Incident Response", "Malware Forensics", "Windows Internals", "IOC Analysis", "DFIR"],
    links: [],
    mockup: "report",
  },
  {
    id: "phishing-lab",
    group: "security",
    title: "Phishing-Simulation & Awareness Lab",
    description:
      "Designed and ran a controlled phishing-simulation environment for security-awareness testing and training, measuring click and report behavior and hardening the human layer. Isolated lab, defensive purpose: measure, educate, reduce risk.",
    tags: ["Phishing Simulation", "Security Awareness", "Blue Team", "Reporting"],
    links: [],
    mockup: "report",
  },
  {
    id: "siem-automation",
    group: "security",
    title: "SIEM-Driven SOC Reporting Automation",
    description:
      "Node.js automation that ingests SIEM (Wazuh) CSV exports and generates structured, review-ready security shift reports: executive summaries, alert-disposition tables, and telemetry sections, replacing manual compilation.",
    tags: ["Node.js", "Wazuh", "SIEM", "Automation", "Reporting"],
    links: [],
    mockup: "terminal",
  },
  {
    id: "xmpp-research",
    group: "security",
    title: "Zero-Interaction Vulnerability Research: XMPP Client",
    description:
      "Discovered a zero-interaction vulnerability class in an open-source XMPP/Jabber client (Cheogram) during authorized lab research. Developed a controlled proof-of-concept to validate impact, documented the findings, and handled disclosure responsibly. Exploit construction and reproduction steps are intentionally not published; this is the outcome and the disclosure process, not a how-to.",
    tags: ["Vulnerability Research", "XMPP/Jabber", "Responsible Disclosure", "PoC Validation", "Blue/Red"],
    links: [],
    mockup: "report",
  },
  {
    id: "bug-bounty",
    group: "security",
    title: "Bug Bounty: Public Program Research",
    description:
      "Active participation in a public bug-bounty program via a coordinated-disclosure platform: reconnaissance, vulnerability discovery, and responsible reporting within authorized scope.",
    tags: ["Bug Bounty", "Web Security", "Responsible Disclosure", "Recon"],
    links: [],
    mockup: "terminal",
  },
  {
    id: "ctf",
    group: "security",
    title: "CTF Competitions",
    description:
      "Regular capture-the-flag competitor across HackTheBox and academic CTFs. Categories: web exploitation, binary exploitation, steganography, forensics, and OSINT.",
    tags: ["CTF", "HackTheBox", "Web Exploitation", "Forensics", "OSINT"],
    links: [],
    mockup: "terminal",
  },
  {
    id: "field-network",
    group: "security",
    title: "Compact Mobile Station: Portable Network Units",
    description:
      "Contributed to development of portable mini-rack network units for multi-location field deployment, including secure network design and hardened configuration baselines.",
    tags: ["Network Security", "Hardening", "Infrastructure", "Secure Design"],
    links: [],
    mockup: "report",
  },

  // Open Source / Experiments
  {
    id: "kill-chain-video",
    group: "oss",
    title: "Cyber Kill Chain: Explainer Video",
    description:
      "A short educational video walking through the Cyber Kill Chain, produced with AI-generated narration and visuals.",
    tags: ["Security Education", "Content", "AI Tooling"],
    links: [{ label: "GitHub", href: "https://github.com/oncelerr" }],
    mockup: "none",
  },
  {
    id: "vr4ce",
    group: "oss",
    title: "VR4CE",
    description: "VR for Chemistry Laboratory, an academic virtual-reality lab simulation project.",
    tags: ["C#", "Unity", "Virtual Reality", "Education"],
    links: [{ label: "GitHub", href: "https://github.com/oncelerr/VR4CE" }],
    mockup: "none",
  },
  {
    id: "simple-blog",
    group: "oss",
    title: "simple-blog-application",
    description:
      "A blog web application built with React 19, TypeScript, Redux Toolkit, and Supabase, put together as part of a junior developer technical assessment.",
    tags: ["React 19", "TypeScript", "Redux Toolkit", "Supabase"],
    links: [{ label: "GitHub", href: "https://github.com/oncelerr/simple-blog-application" }],
    mockup: "browser",
  },
];
