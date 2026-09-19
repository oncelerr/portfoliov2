import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link to="/site" className="font-mono text-xs uppercase tracking-wide text-content-secondary hover:text-accent">
        &larr; Back to site
      </Link>
      <h1 className="mt-6 font-display text-3xl font-semibold text-content-primary sm:text-4xl">{title}</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-wide text-content-secondary">
        Last updated {updated}
      </p>
      <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-content-secondary sm:text-base">
        {children}
      </div>
    </article>
  );
}
