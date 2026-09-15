import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { SectionTag } from "./SectionTag";

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTag index="05" tag="~/skills" />
        <h2 id="skills-heading" className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Skills
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.04, ease: "easeOut" }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-accent">{group.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-control border border-border-subtle px-2.5 py-1 text-sm text-content-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
