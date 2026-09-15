import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { ProjectMockup } from "./ProjectMockup";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-border-subtle bg-surface-1 transition-colors hover:border-border-strong">
      <ProjectMockup variant={project.mockup ?? "none"} />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-content-primary">{project.title}</h3>
        {project.org && (
          <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-content-secondary">{project.org}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-content-secondary">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-control border border-border-subtle px-2 py-0.5 font-mono text-[11px] text-content-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border-subtle pt-4">
            {project.links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
