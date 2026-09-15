import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, MapPin, Radar } from "lucide-react";
import { SectionTag } from "./SectionTag";

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function About() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion ? {} : reveal;

  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTag index="01" tag="~/about > whoami" />
        <h2 id="about-heading" className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          About
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <motion.div {...motionProps} className="space-y-5 text-base leading-relaxed text-content-secondary sm:text-lg">
            <p>
              I studied Information Technology at the Technological Institute of the Philippines,
              graduating cum laude as a President Lister and scholar. Since then I have spent close
              to two years splitting my time between building software and defending it.
            </p>
            <p>
              Right now that means two jobs running in parallel. I am a SOC analyst at the Armed
              Forces of the Philippines, watching SIEM alerts and running incident response when
              something gets through. On the side, I lead full-stack development at VibeHive Digital
              Services, shipping React and Laravel systems for real clients.
            </p>
            <p>
              The next stretch of that path is site reliability engineering. I am picking up
              Kubernetes, Terraform, and the Prometheus and Grafana stack, because the same instinct
              that makes me check logs after a deploy is the one that wants systems that stay up and
              tell you why when they do not.
            </p>
          </motion.div>

          <motion.dl
            {...motionProps}
            className="grid gap-6 self-start rounded-card border border-border-subtle bg-surface-1 p-6"
          >
            <div className="flex gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-content-secondary">Education</dt>
                <dd className="mt-1 text-sm text-content-primary">
                  BS Information Technology, Technological Institute of the Philippines
                  <span className="block text-content-secondary">Cum Laude &middot; President Lister &middot; Scholar</span>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Radar className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-content-secondary">Currently</dt>
                <dd className="mt-1 text-sm text-content-primary">
                  SOC Analyst, Armed Forces of the Philippines
                  <span className="block text-content-secondary">Lead Full Stack Developer, VibeHive (part-time)</span>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-content-secondary">Based in</dt>
                <dd className="mt-1 text-sm text-content-primary">Philippines, open to remote work worldwide</dd>
              </div>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
