import type { Translation } from "../../i18n/translations";
import { ExternalIcon } from "../shared/Icons";

const credentialUrl = "https://www.credly.com/badges/19345c68-45b8-4f0f-ac74-972872d1b79d/public_url";

export function AboutSection({ t }: { t: Translation }) {
  return (
    <section className="section about-section" id="sobre" aria-labelledby="about-title">
      <div className="shell">
        <header className="section-heading-simple"><h2 id="about-title">{t.about.title}</h2></header>
        <div className="about-copy">
          <p>{t.about.paragraphs[0]}</p>
          <a href={credentialUrl} target="_blank" rel="noreferrer">
            <strong>{t.about.credential}</strong>
            <span>{t.about.credentialDetail}</span>
            <span>{t.about.viewCredential}<ExternalIcon /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
