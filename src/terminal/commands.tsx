import type { ReactNode } from "react";
import { person } from "../data/site";
import { projectGroups, projects } from "../data/projects";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";
import { securityCapabilities, securityStack } from "../data/security";

export interface CommandResult {
  content?: ReactNode;
  clear?: boolean;
  navigateTo?: string;
}

const dim = "text-[color:var(--term-dim)]";
const accent = "text-[color:var(--term-accent)]";
const err = "text-[color:var(--term-err)]";
const link = "text-[color:var(--term-accent)] underline underline-offset-2 hover:opacity-80";

function Block({ children }: { children: ReactNode }) {
  return <div className="whitespace-pre-wrap leading-relaxed">{children}</div>;
}

function helpOutput(): ReactNode {
  const rows: [string, string][] = [
    ["help", "show this list"],
    ["about", "who is behind this terminal"],
    ["whoami", "who are YOU (hint: not much is known)"],
    ["projects [id|group]", "list or open a project (try: projects security)"],
    ["experience", "work history"],
    ["skills", "technical skill inventory"],
    ["security", "security capabilities & tooling"],
    ["contact", "ways to reach me"],
    ["resume", "open my resume (PDF) in a new tab"],
    ["ls [-la]", 'list "files" in this directory'],
    ["cat <file>", "print a file's contents"],
    ["open <target>", "open github / linkedin in a new tab"],
    ["history", "show commands you've run this session"],
    ["clear", "clear the terminal"],
    ["exit / gui", "switch to the normal website"],
  ];
  return (
    <Block>
      <span className={accent}>Available commands:</span>
      {"\n\n"}
      {rows.map(([cmd, desc]) => (
        <span key={cmd}>
          {"  "}
          <span className="inline-block w-[13rem]">{cmd}</span>
          <span className={dim}>{desc}</span>
          {"\n"}
        </span>
      ))}
      {"\n"}
      <span className={dim}>Tip: arrow keys cycle through command history.</span>
    </Block>
  );
}

function aboutOutput(): ReactNode {
  return (
    <Block>
      <span className={accent}>
        {person.name} ({person.handle})
      </span>
      {"\n"}
      <span>{person.title}</span>
      {"\n\n"}
      I studied Information Technology at the Technological Institute of the Philippines,
      graduating cum laude as a President Lister and scholar.
      {"\n\n"}
      Right now: SOC analyst at the Armed Forces of the Philippines (real-time threat monitoring
      and incident response), and lead full-stack developer at VibeHive Digital Services
      (React/Laravel, part-time).
      {"\n\n"}
      Next up: site reliability engineering — picking up Kubernetes, Terraform, Prometheus, and
      Grafana.
      {"\n\n"}
      <span className={dim}>Based in the Philippines. Open to remote work worldwide.</span>
    </Block>
  );
}

function whoamiOutput(): ReactNode {
  return (
    <Block>
      guest
      {"\n"}
      <span className={dim}>
        (you're browsing anonymously — no account, no tracking, just curl and curiosity)
      </span>
      {"\n\n"}
      Looking for the person behind this site? try: <span className={accent}>about</span>
    </Block>
  );
}

function projectsOutput(args: string[]): ReactNode {
  const query = args[0]?.toLowerCase();

  if (query) {
    const single = projects.find((p) => p.id.toLowerCase() === query);
    if (single) {
      return (
        <Block>
          <span className={accent}>{single.title}</span>
          {single.org && <span className={dim}> — {single.org}</span>}
          {"\n\n"}
          {single.description}
          {"\n\n"}
          <span className={dim}>tags: </span>
          {single.tags.join(", ")}
          {single.links.length > 0 && (
            <>
              {"\n\n"}
              {single.links.map((l, i) => (
                <span key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {l.label}
                  </a>
                  {i < single.links.length - 1 ? "  " : ""}
                </span>
              ))}
            </>
          )}
        </Block>
      );
    }

    const group = projectGroups.find((g) => g.id === query);
    if (group) {
      return (
        <Block>
          <span className={accent}>== {group.label} ==</span>
          {"\n\n"}
          {projects
            .filter((p) => p.group === group.id)
            .map((p) => (
              <span key={p.id}>
                {"  "}
                <span className="inline-block w-[8rem]">{p.id}</span>
                {p.title}
                {"\n"}
              </span>
            ))}
          {"\n"}
          <span className={dim}>Try: projects {projects.find((p) => p.group === group.id)?.id}</span>
        </Block>
      );
    }

    return (
      <Block>
        <span className={err}>projects: no project or group named "{args[0]}"</span>
        {"\n"}
        <span className={dim}>Try: projects (with no arguments) to see everything.</span>
      </Block>
    );
  }

  return (
    <Block>
      {projectGroups.map((group, gi) => (
        <span key={group.id}>
          <span className={accent}>== {group.label} ==</span>
          {"\n"}
          {projects
            .filter((p) => p.group === group.id)
            .map((p) => (
              <span key={p.id}>
                {"  "}
                <span className="inline-block w-[8rem]">{p.id}</span>
                {p.title}
                {"\n"}
              </span>
            ))}
          {gi < projectGroups.length - 1 ? "\n" : ""}
        </span>
      ))}
      {"\n"}
      <span className={dim}>
        Try: projects &lt;id&gt; (e.g. projects pcs) or projects &lt;web|security|oss&gt;
      </span>
    </Block>
  );
}

function experienceOutput(): ReactNode {
  return (
    <Block>
      {experience.map((e, i) => (
        <span key={e.role + e.org}>
          <span className={accent}>{e.role}</span>
          {" — "}
          {e.org}
          {e.arrangement && <span className={dim}> ({e.arrangement})</span>}
          {"\n"}
          <span className={dim}>
            {e.start} – {e.end}
          </span>
          {"\n"}
          {e.summary}
          {i < experience.length - 1 ? "\n\n" : ""}
        </span>
      ))}
    </Block>
  );
}

function skillsOutput(): ReactNode {
  return (
    <Block>
      {skillGroups.map((group) => (
        <span key={group.tag}>
          <span className={accent + " inline-block w-[6rem]"}>{group.tag}</span>
          {group.items.join(", ")}
          {"\n"}
        </span>
      ))}
    </Block>
  );
}

function securityOutput(): ReactNode {
  return (
    <Block>
      {securityCapabilities.map((c, i) => (
        <span key={c.capability}>
          <span className={accent}>{c.capability}</span>
          {"\n"}
          {c.proof}
          {i < securityCapabilities.length - 1 ? "\n\n" : ""}
        </span>
      ))}
      {"\n\n"}
      <span className={dim}>stack: </span>
      {securityStack.join(", ")}
    </Block>
  );
}

function contactOutput(): ReactNode {
  const rows: [string, string, string][] = [
    ["email", person.email, `mailto:${person.email}`],
    ["phone", person.phone, `tel:${person.phone.replace(/\s+/g, "")}`],
    ["github", "github.com/oncelerr", person.github],
    ["linkedin", "linkedin.com/in/jjaaee", person.linkedin],
  ];
  return (
    <Block>
      {rows.map(([label, display, href]) => (
        <span key={label}>
          <span className={dim + " inline-block w-[6rem]"}>{label}</span>
          <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
            {display}
          </a>
          {"\n"}
        </span>
      ))}
    </Block>
  );
}

function lsOutput(args: string[]): ReactNode {
  const showHidden = args.includes("-la") || args.includes("-a") || args.includes("-al");
  return (
    <Block>
      about.md{"  "}experience.log{"  "}security/{"  "}contact.txt{"\n"}
      projects/{"  "}skills.json{"     "}resume.pdf
      {showHidden && (
        <>
          {"\n\n"}
          <span className={dim}>.env  .git  .aws{"  "}</span>
          <span className={dim}>(nice try)</span>
        </>
      )}
      {"\n\n"}
      <span className={dim}>use: cat &lt;file&gt;</span>
    </Block>
  );
}

function catOutput(args: string[]): ReactNode {
  const file = args[0]?.toLowerCase();
  if (!file) {
    return (
      <Block>
        <span className={err}>usage: cat &lt;file&gt;</span>
      </Block>
    );
  }

  switch (file) {
    case "about.md":
      return aboutOutput();
    case "experience.log":
      return experienceOutput();
    case "skills.json":
      return skillsOutput();
    case "contact.txt":
      return contactOutput();
    case "security":
    case "security/":
      return securityOutput();
    case "projects":
    case "projects/":
      return projectsOutput([]);
    case "resume.pdf":
      return (
        <Block>
          <span className={dim}>cat: resume.pdf: binary file. use: resume</span>
        </Block>
      );
    case ".env":
      return (
        <Block>
          <span className={dim}>
            # APP_SECRET=go_outside{"\n"}# DB_PASSWORD=hunter2 (a joke, obviously){"\n"}#{"\n"}#
            nice try — no real secrets in a static site.
          </span>
        </Block>
      );
    default:
      return (
        <Block>
          <span className={err}>
            cat: {file}: No such file or directory
          </span>
        </Block>
      );
  }
}

function openOutput(args: string[]): ReactNode {
  const target = args[0]?.toLowerCase();
  const map: Record<string, string> = {
    github: person.github,
    linkedin: person.linkedin,
    email: `mailto:${person.email}`,
  };
  if (target && map[target]) {
    window.open(map[target], "_blank", "noopener,noreferrer");
    return (
      <Block>
        <span className={dim}>Opening {target}...</span>
      </Block>
    );
  }
  return (
    <Block>
      <span className={err}>open: unknown target "{args[0] ?? ""}"</span>
      {"\n"}
      <span className={dim}>Try: open github | open linkedin | open email</span>
    </Block>
  );
}

export function runCommand(raw: string, history: string[]): CommandResult {
  const trimmed = raw.trim();
  const lower = trimmed.toLowerCase();

  if (lower === "rm -rf /" || lower === "sudo rm -rf /") {
    return {
      content: (
        <Block>
          <span className={err}>Deleting the internet...</span>
          {"\n"}
          <span className={dim}>(just kidding. nice meme though.)</span>
        </Block>
      ),
    };
  }

  const [cmdRaw, ...args] = trimmed.split(/\s+/).filter(Boolean);
  const cmd = (cmdRaw ?? "").toLowerCase();

  if (!cmd) return {};

  switch (cmd) {
    case "help":
      return { content: helpOutput() };
    case "about":
      return { content: aboutOutput() };
    case "whoami":
      return { content: whoamiOutput() };
    case "projects":
      return { content: projectsOutput(args) };
    case "experience":
      return { content: experienceOutput() };
    case "skills":
      return { content: skillsOutput() };
    case "security":
      return { content: securityOutput() };
    case "contact":
      return { content: contactOutput() };
    case "resume":
      window.open("/resume.pdf", "_blank", "noopener,noreferrer");
      return {
        content: (
          <Block>
            <span className={dim}>Opening resume.pdf in a new tab...</span>
          </Block>
        ),
      };
    case "ls":
      return { content: lsOutput(args) };
    case "cat":
      return { content: catOutput(args) };
    case "open":
      return { content: openOutput(args) };
    case "history":
      return {
        content: (
          <Block>
            {history.length === 0 && <span className={dim}>no commands yet</span>}
            {history.map((h, i) => (
              <span key={i}>
                <span className={dim}>{String(i + 1).padStart(3, " ")}</span> {h}
                {"\n"}
              </span>
            ))}
          </Block>
        ),
      };
    case "sudo":
      return {
        content: (
          <Block>
            [sudo] password for guest:{"\n"}
            <span className={err}>Nope. This incident will be — okay it won't, but still, no.</span>
          </Block>
        ),
      };
    case "matrix":
    case "hack":
      return {
        content: (
          <Block>
            <span className={accent}>wake up, neo...</span>
            {"\n"}
            <span className={dim}>just kidding. try: help</span>
          </Block>
        ),
      };
    case "nmap":
      return {
        content: (
          <Block>
            Starting Nmap... {"\n"}
            Host is up.{"\n"}
            PORT{"    "}STATE{"     "}SERVICE{"\n"}
            22/tcp{"  "}
            <span className={err}>closed</span>{"  "}ssh (nice try){"\n\n"}
            <span className={dim}>Type 'security' to see how I'd actually use nmap.</span>
          </Block>
        ),
      };
    case "date":
      return {
        content: (
          <Block>
            {new Date().toString()}
          </Block>
        ),
      };
    case "echo":
      return { content: <Block>{args.join(" ")}</Block> };
    case "clear":
      return { clear: true };
    case "exit":
    case "gui":
    case "site":
    case "quit":
      return {
        content: (
          <Block>
            <span className={dim}>Redirecting to the graphical site...</span>
          </Block>
        ),
        navigateTo: "/site",
      };
    default:
      return {
        content: (
          <Block>
            <span className={err}>command not found: {cmdRaw}</span>
            {"\n"}
            <span className={dim}>Type 'help' for a list of commands.</span>
          </Block>
        ),
      };
  }
}
