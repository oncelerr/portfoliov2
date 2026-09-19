import { useLocation, Link } from "react-router-dom";
import { SectionTag } from "../components/SectionTag";
import { person } from "../data/site";

export function Honeypot() {
  const location = useLocation();

  return (
    <section className="border-b border-border-subtle">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionTag index="418" tag="~/nice-try" />
        <h1 className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Caught in the honeypot.
        </h1>

        <div className="mt-8 overflow-hidden rounded-card border border-border-subtle bg-surface-1">
          <div className="flex items-center gap-1.5 border-b border-border-subtle px-3 py-2">
            <span className="h-2 w-2 rounded-full border border-border-strong" />
            <span className="h-2 w-2 rounded-full border border-border-strong" />
            <span className="h-2 w-2 rounded-full border border-border-strong" />
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-content-secondary">
            <code>
              <span className="text-content-secondary/70">$ curl -i https://jaehyung.site{location.pathname}</span>
              {"\n"}
              {"HTTP/1.1 418 I'm a teapot"}
              {"\n"}
              {"X-Recon-Detected: true"}
              {"\n"}
              {"X-Backend-Found: false"}
              {"\n\n"}
              <span className="text-accent">{"> no database. no CMS. no exposed secrets. static React build only."}</span>
              {"\n"}
              <span className="text-accent">{"> I know what you're doing. Haha. This is just a portfolio, why attack? 😄"}</span>
            </code>
          </pre>
        </div>

        <p className="mt-6 max-w-xl text-content-secondary">
          Genuinely, though — if you&apos;re the kind of person who probes random sites for{" "}
          <code className="rounded-control bg-surface-2 px-1.5 py-0.5 font-mono text-[13px]">{location.pathname}</code>,
          I&apos;d rather point that curiosity somewhere useful. Check the{" "}
          <a href="/site#security" className="text-accent hover:underline">
            security work
          </a>{" "}
          on this site, or email me and let&apos;s do it properly:{" "}
          <a href={`mailto:${person.email}`} className="text-accent hover:underline">
            {person.email}
          </a>
          .
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-accent hover:underline"
        >
          &larr; Back to the actual site
        </Link>
      </div>
    </section>
  );
}
