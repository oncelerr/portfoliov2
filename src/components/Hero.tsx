import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { heroTech, person } from "../data/site";
import { HeroBackdrop } from "./HeroBackdrop";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" as const },
        };

  return (
    <section id="home" aria-label="Introduction" className="relative border-b border-border-subtle">
      <HeroBackdrop />
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.h1
          {...fadeUp(0)}
          className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-content-primary sm:text-5xl lg:text-6xl"
        >
          {person.name}
        </motion.h1>

        <motion.p
          {...fadeUp(0.08)}
          className="mt-3 font-display text-xl font-medium text-content-primary/90 sm:text-2xl"
        >
          {person.title}
        </motion.p>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-content-secondary sm:text-lg"
        >
          {person.oneLiner}
        </motion.p>

        <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-control bg-accent px-5 py-2.5 text-sm font-medium text-accent-content transition-transform hover:translate-x-0.5"
          >
            View projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-control border border-border-strong px-5 py-2.5 text-sm font-medium text-content-primary transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.32)}
          className="mt-14 max-w-xl font-mono text-xs text-content-secondary sm:text-sm"
        >
          {heroTech.join("  ·  ")}
        </motion.p>
      </div>
    </section>
  );
}
