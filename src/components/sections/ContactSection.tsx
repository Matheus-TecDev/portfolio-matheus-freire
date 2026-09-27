import type { Translation } from "../../i18n/translations";

export function ContactSection({ t }: { t: Translation }) {
  return (
    <section className="contact-section" id="contato" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <header className="section-heading-simple"><h2 id="contact-title">{t.contact.title}</h2></header>
        <a className="contact-email" href={t.links.email}>matheus.tecnodev@gmail.com</a>
        <nav className="contact-links" aria-label={t.contact.socialLabel}>
          <a href={t.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={t.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <footer className="site-footer"><span>Matheus Freire</span><span>Fortaleza, CE · 2026</span></footer>
      </div>
    </section>
  );
}
