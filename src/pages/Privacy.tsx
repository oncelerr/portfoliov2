import { LegalLayout } from "../components/LegalLayout";
import { person } from "../data/site";

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 15, 2026">
      <p>
        This is the privacy policy for {person.name}&apos;s personal portfolio site at{" "}
        <span className="text-content-primary">jaehyung.site</span>. It is a static site with no
        user accounts, no server-side database, and no advertising. This policy covers the only
        place the site collects anything: the contact form.
      </p>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">What is collected</h2>
        <p className="mt-2">
          If you use the contact form, I collect the name, email address, and message you type
          into it. I do not collect anything else automatically, no analytics scripts, no
          advertising pixels, and no tracking cookies are installed on this site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">How it is submitted</h2>
        <p className="mt-2">
          The form is wired to a form-processing service (Formspree). When configured, submitting
          the form sends your name, email, and message directly to Formspree, which forwards it to
          my inbox. Formspree processes that data under its own privacy policy, available at{" "}
          <a
            href="https://formspree.io/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            formspree.io/legal/privacy-policy
          </a>
          . If the form endpoint is not yet configured, submitting it instead opens your own email
          client with the message pre-filled, in which case nothing is sent through a third party
          at all, it goes directly from your device through your own email provider.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Why it is collected</h2>
        <p className="mt-2">
          Solely to read and reply to your message. I do not use contact-form submissions for
          marketing, and I do not sell or share them with anyone beyond the form processor named
          above.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">How long it is kept</h2>
        <p className="mt-2">
          Messages stay in my email inbox and, where applicable, in the Formspree dashboard, for as
          long as I need them to handle the conversation, and I delete them when they are no longer
          relevant. Since the site itself has no database, it retains nothing on its own.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Third-party links</h2>
        <p className="mt-2">
          This site links out to GitHub, LinkedIn, and VibeHive Digital Services. Those sites have
          their own privacy practices, which this policy does not cover.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Children</h2>
        <p className="mt-2">This site is not directed at children and is not knowingly used to collect data from them.</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Your requests</h2>
        <p className="mt-2">
          To ask what I hold about you, or to have a message you sent deleted, email me at{" "}
          <a href={`mailto:${person.email}`} className="text-accent hover:underline">
            {person.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Changes</h2>
        <p className="mt-2">
          If this policy changes, the update date at the top of this page will change with it.
        </p>
      </section>
    </LegalLayout>
  );
}
