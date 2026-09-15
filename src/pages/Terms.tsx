import { LegalLayout } from "../components/LegalLayout";
import { person } from "../data/site";

export function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" updated="September 15, 2026">
      <p>
        These terms cover your use of {person.name}&apos;s personal portfolio site at{" "}
        <span className="text-content-primary">jaehyung.site</span>. By using this site, you agree
        to them.
      </p>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Ownership of content</h2>
        <p className="mt-2">
          The site&apos;s design, code, and writing are mine unless stated otherwise. Project case
          studies describe work delivered for clients through VibeHive Digital Services or in a
          personal capacity; ownership of the underlying products and brands stays with the
          respective client or organization, and they are shown here for portfolio purposes with
          descriptions of my own contribution. You may not copy, redistribute, or present this
          site&apos;s content as your own.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Acceptable use</h2>
        <p className="mt-2">
          Use this site the way it is intended: to read about my work and get in touch. You may not
          scrape it at volume, attempt to disrupt it, or probe, scan, or test its security without
          my prior written authorization. If you find a genuine vulnerability, I would rather hear
          about it directly, email me at{" "}
          <a href={`mailto:${person.email}`} className="text-accent hover:underline">
            {person.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Third-party links</h2>
        <p className="mt-2">
          Links to GitHub, LinkedIn, VibeHive, and similar sites are provided for convenience. I do
          not control those sites and am not responsible for their content or availability.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">No warranty</h2>
        <p className="mt-2">
          This site is provided as is, without warranties of any kind. I make a reasonable effort
          to keep it accurate and available, but I do not guarantee it will be error-free or
          uninterrupted.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Limitation of liability</h2>
        <p className="mt-2">
          To the extent permitted by law, I am not liable for damages arising from your use of this
          site or reliance on its content.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Governing law</h2>
        <p className="mt-2">These terms are governed by the laws of the Republic of the Philippines.</p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Changes</h2>
        <p className="mt-2">
          I may update these terms as the site changes. The update date at the top of this page
          reflects the latest version.
        </p>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-content-primary">Contact</h2>
        <p className="mt-2">
          Questions about these terms can go to{" "}
          <a href={`mailto:${person.email}`} className="text-accent hover:underline">
            {person.email}
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
