import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { person } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-content-primary">{person.name}</p>
            <p className="mt-1 max-w-sm text-sm text-content-secondary">{person.oneLiner}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-content-secondary">Elsewhere</p>
              <ul className="mt-3 flex gap-3">
                <li>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-border-subtle text-content-secondary transition-colors hover:border-border-strong hover:text-accent"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-border-subtle text-content-secondary transition-colors hover:border-border-strong hover:text-accent"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${person.email}`}
                    aria-label="Send an email"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-border-subtle text-content-secondary transition-colors hover:border-border-strong hover:text-accent"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-content-secondary">Legal</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li>
                  <Link to="/privacy" className="text-content-secondary hover:text-content-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-content-secondary hover:text-content-primary">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-content-secondary">© {year} Mark Jonathan M. Bacarac</p>
          <p className="font-mono text-xs text-content-secondary">$ exit 0</p>
        </div>
      </div>
    </footer>
  );
}
