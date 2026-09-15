export interface ExperienceItem {
  role: string;
  org: string;
  arrangement?: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "Security Operations Center (SOC) Analyst",
    org: "Armed Forces of the Philippines",
    start: "Apr 2024",
    end: "Present",
    current: true,
    summary:
      "Real-time threat monitoring and incident response with Wazuh SIEM, Suricata, Malcolm, and Wireshark; formal shift reporting; forensic malware investigation; infrastructure hardening.",
  },
  {
    role: "Lead Full Stack Developer",
    org: "VibeHive Digital Services",
    arrangement: "Part-Time / Freelance",
    start: "Aug 2025",
    end: "Present",
    current: true,
    summary:
      "Lead design and development of full-stack, conversion-focused web systems (React, TypeScript, Framer Motion, GSAP, Laravel); 10+ projects delivered; performance improved roughly 30%.",
  },
  {
    role: "Full Stack Website Developer",
    org: "iAm TechSolution",
    start: "Sep 2024",
    end: "Aug 2025",
    current: false,
    summary:
      "Led system design and full-stack development; API development across 5+ large-scale projects; 95% on-time delivery.",
  },
  {
    role: "Web Designer",
    org: "Bizolve",
    start: "Mar 2022",
    end: "Sep 2022",
    current: false,
    summary: "Designed 20+ websites on the Odoo platform; custom UI improving UX and client retention.",
  },
];
