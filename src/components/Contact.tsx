import { type FormEvent, useId, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { person } from "../data/site";
import { SectionTag } from "./SectionTag";

// TODO(owner): create a form at https://formspree.io and paste its form id below,
// e.g. "abcdwxyz". Until this is set, the form falls back to opening the
// visitor's email client with the message pre-filled, so nothing is broken.
const FORMSPREE_FORM_ID = "CONTACT_FORM_ENDPOINT_KEY";

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!email.trim()) next.email = "Enter your email.";
    else if (!isValidEmail(email)) next.email = "Enter a valid email address.";
    if (!message.trim()) next.message = "Enter a message.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const isConfigured = FORMSPREE_FORM_ID !== "CONTACT_FORM_ENDPOINT_KEY";

    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-b border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTag index="06" tag="~/contact" />
        <h2 id="contact-heading" className="mt-4 font-display text-3xl font-semibold text-content-primary sm:text-4xl">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-content-secondary">
          Building something that needs to ship fast and hold up under pressure? Let&apos;s talk.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-3 text-sm text-content-primary transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {person.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${person.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-content-primary transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {person.phone}
              </a>
            </li>
            <li>
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-content-primary transition-colors hover:text-accent"
              >
                <GithubIcon className="h-4 w-4 shrink-0 text-accent" />
                github.com/oncelerr
              </a>
            </li>
            <li>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-content-primary transition-colors hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4 shrink-0 text-accent" />
                linkedin.com/in/jjaaee
              </a>
            </li>
          </ul>

          <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={`${formId}-status`}>
            <div>
              <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-content-primary">
                Name
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                className="mt-1.5 w-full rounded-control border border-border-strong bg-surface-1 px-3 py-2 text-sm text-content-primary placeholder:text-content-secondary/60 focus-visible:border-accent"
                placeholder="Your name"
              />
              {errors.name && (
                <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-accent">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-content-primary">
                Email
              </label>
              <input
                id={`${formId}-email`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                className="mt-1.5 w-full rounded-control border border-border-strong bg-surface-1 px-3 py-2 text-sm text-content-primary placeholder:text-content-secondary/60 focus-visible:border-accent"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-accent">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-content-primary">
                Message
              </label>
              <textarea
                id={`${formId}-message`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                className="mt-1.5 w-full resize-y rounded-control border border-border-strong bg-surface-1 px-3 py-2 text-sm text-content-primary placeholder:text-content-secondary/60 focus-visible:border-accent"
                placeholder="What are you building?"
              />
              {errors.message && (
                <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-accent">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-control bg-accent px-5 py-2.5 text-sm font-medium text-accent-content transition-opacity disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>

            <p id={`${formId}-status`} role="status" aria-live="polite" className="text-sm">
              {status === "success" && (
                <span className="text-content-primary">
                  Message sent. I will get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-accent">
                  That did not go through. Email me directly at {person.email}.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
