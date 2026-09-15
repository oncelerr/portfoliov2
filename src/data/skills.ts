export interface SkillGroup {
  label: string;
  tag: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    tag: "lang",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "C#", "C++", "Java", "Lua", "R", "Bash"],
  },
  {
    label: "Web",
    tag: "web",
    items: ["HTML5", "CSS3", "React.js", "Node.js", "Angular", "REST APIs", "Framer Motion", "GSAP", "Vite"],
  },
  {
    label: "Databases & Cloud",
    tag: "data",
    items: ["MySQL", "PostgreSQL", "MongoDB", "MSSQL", "AWS (EC2, RDS)", "Cloudflare", "GCP"],
  },
  {
    label: "Security & Ops",
    tag: "sec",
    items: [
      "Wazuh SIEM",
      "Suricata",
      "Malcolm",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "nmap",
      "Kali Linux",
      "Incident Response",
      "Threat Intelligence",
    ],
  },
  {
    label: "Infrastructure",
    tag: "infra",
    items: ["Docker", "Kubernetes", "Proxmox", "Nginx", "PM2", "Ubiquiti / UniFi", "Terraform (learning)"],
  },
  {
    label: "Tools",
    tag: "tools",
    items: ["Git", "Agile / Scrum", "Qt Framework", "Figma", "n8n"],
  },
];
