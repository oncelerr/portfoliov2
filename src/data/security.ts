export interface SecurityCapability {
  capability: string;
  proof: string;
}

export const securityCapabilities: SecurityCapability[] = [
  {
    capability: "SOC monitoring",
    proof:
      "Real-time alert triage and threat monitoring across Wazuh SIEM, Suricata, and Malcolm, with formal shift reporting.",
  },
  {
    capability: "Incident response & malware forensics",
    proof:
      "Led a full forensic investigation of a weaponized Windows .lnk file end to end: analysis, IOC mapping, containment, and remediation.",
  },
  {
    capability: "Phishing-simulation lab",
    proof:
      "Designed and ran a controlled phishing-awareness environment to measure and reduce human-layer risk.",
  },
  {
    capability: "Vulnerability research & responsible disclosure",
    proof:
      "Found and validated a zero-interaction vulnerability class in an open-source XMPP client through authorized lab research, disclosed responsibly.",
  },
  {
    capability: "Bug bounty",
    proof:
      "Active in a public bug-bounty program: reconnaissance, discovery, and reporting within authorized scope.",
  },
  {
    capability: "CTF",
    proof:
      "Regular HackTheBox and academic CTF competitor across web, binary exploitation, forensics, and OSINT.",
  },
];

export const securityStack = [
  "Wazuh SIEM",
  "Suricata",
  "Malcolm",
  "Wireshark",
  "Burp Suite",
  "Kali Linux",
  "Incident Response",
  "Threat Intel",
] as const;
