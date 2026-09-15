import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { securityCapabilities, securityStack } from "../data/security";

const darkVars = {
  "--color-surface-0": "#0a0c10",
  "--color-surface-1": "#14171d",
  "--color-surface-2": "#1c2029",
  "--color-border-subtle": "#20242d",
  "--color-border-strong": "#565f70",
  "--color-content-primary": "#ecedef",
  "--color-content-secondary": "#a6acb6",
  "--color-accent": "#e3a53d",
  "--color-accent-content": "#0a0c10",
} as React.CSSProperties;

export function Security() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      style={darkVars}
      className="border-b border-border-subtle bg-surface-0 text-content-primary"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-content-secondary">
          <span className="line-rail" aria-hidden="true">
            03
          </span>
          <span className="text-accent">&gt; security_ops</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <ShieldCheck className="h-7 w-7 text-accent" aria-hidden="true" />
          <h2 id="security-heading" className="font-display text-3xl font-semibold sm:text-4xl">
            Security
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-content-secondary">
          The other half of the job: monitoring, responding, testing, and disclosing, always with
          authorization and always framed around defense.
        </p>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-card border border-border-subtle bg-border-subtle sm:grid-cols-2">
          {securityCapabilities.map((item, i) => (
            <motion.div
              key={item.capability}
              initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.04, ease: "easeOut" }}
              className="flex gap-4 bg-surface-1 p-6"
            >
              <span className="line-rail shrink-0 pt-0.5 text-xs" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="font-medium text-content-primary">{item.capability}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-content-secondary">{item.proof}</dd>
              </div>
            </motion.div>
          ))}
        </dl>

        <div className="mt-10 border-t border-border-subtle pt-6">
          <p className="font-mono text-xs uppercase tracking-wide text-content-secondary">Capabilities</p>
          <p className="mt-3 font-mono text-sm leading-loose text-content-primary">
            {securityStack.join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  );
}
