import { motion, useReducedMotion } from "framer-motion";
import { experience } from "../data/experience";
import { SectionTag } from "./SectionTag";

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTag index="04" tag="~/experience" />
        <h2
          id="experience-heading"
          className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl"
        >
          Experience
        </h2>

        <ol className="mt-10 space-y-10 border-l border-border-subtle pl-6 sm:pl-8">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.role}-${item.org}`}
              initial={reduceMotion ? undefined : { opacity: 0, x: -10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.05, ease: "easeOut" }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(1.5rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 sm:-left-[calc(2rem+4.5px)] ${
                  item.current ? "border-accent bg-accent" : "border-border-strong bg-surface-0"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-content-primary">{item.role}</h3>
                <p
                  className={`font-mono text-xs uppercase tracking-wide ${
                    item.current ? "text-accent" : "text-content-secondary"
                  }`}
                >
                  {item.start} &ndash; {item.end}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-content-secondary">
                {item.org}
                {item.arrangement && <span> &middot; {item.arrangement}</span>}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-content-secondary">{item.summary}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
