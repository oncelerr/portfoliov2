import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { nav, person } from "../data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeHref, setActiveHref] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isHome) return;

    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface-0">
      <nav
        ref={navRef}
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href={isHome ? "#home" : "/"}
          className="font-display text-sm font-semibold tracking-tight text-content-primary"
        >
          {person.handle}<span className="text-accent">.</span>
          <span className="sr-only"> {person.name}, home</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = isHome && activeHref === item.href;
            const href = isHome ? item.href : `/${item.href}`;
            return (
              <li key={item.href}>
                <a
                  href={href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative inline-flex items-center px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                    isActive ? "text-accent" : "text-content-secondary hover:text-content-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={person.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-control border border-border-strong px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-content-primary transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-control border border-border-subtle text-content-secondary md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="border-t border-border-subtle bg-surface-0 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-control px-3 py-2 font-mono text-sm uppercase tracking-wide text-content-secondary hover:bg-surface-1 hover:text-content-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={person.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-control border border-border-strong px-3 py-2 text-center font-mono text-sm uppercase tracking-wide text-content-primary"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
