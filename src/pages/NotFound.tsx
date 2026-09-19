import { Link } from "react-router-dom";
import { SectionTag } from "../components/SectionTag";

export function NotFound() {
  return (
    <section className="border-b border-border-subtle">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionTag index="404" tag="~/not-found" />
        <h1 className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Nothing here.
        </h1>
        <p className="mt-3 max-w-xl text-content-secondary">
          That page doesn&apos;t exist. Might be a typo, a dead link, or a route that never was.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent hover:underline"
        >
          &larr; Back to site
        </Link>
      </div>
    </section>
  );
}
