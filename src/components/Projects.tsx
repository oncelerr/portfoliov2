import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projectGroups, projects, type ProjectGroup } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTag } from "./SectionTag";

export function Projects() {
  const [active, setActive] = useState<ProjectGroup>("web");
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(() => projects.filter((p) => p.group === active), [active]);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTag index="02" tag="~/projects" />
        <h2 id="projects-heading" className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-content-secondary">
          A working selection: client systems shipped through VibeHive, personal builds, and the
          security research and tooling on the side.
        </p>

        <div role="group" aria-label="Filter projects by category" className="mt-8 flex flex-wrap gap-2">
          {projectGroups.map((group) => {
            const isActive = active === group.id;
            return (
              <button
                key={group.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(group.id)}
                className={`rounded-control border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-accent-content"
                    : "border-border-subtle text-content-secondary hover:border-border-strong hover:text-content-primary"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
