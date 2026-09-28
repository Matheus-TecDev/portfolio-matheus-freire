import type { Translation } from "../../i18n/translations";
import { ArrowIcon, ExternalIcon, GithubIcon, LinkedinIcon } from "../shared/Icons";

const resumeUrl = "/documents/matheus-freire-curriculo.pdf";

export function Hero({ t }: { t: Translation }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content shell">
        <p className="hero__role">{t.hero.role}</p>
        <h1 id="hero-title">Matheus Freire</h1>
        <p className="hero__summary">{t.hero.summary}</p>
        <p className="hero__location">{t.hero.status}</p>
        <nav className="hero__links" aria-label={t.hero.socialLabel}>
          <a href="#projetos">{t.hero.primary}<ArrowIcon /></a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">{t.hero.resume}<ExternalIcon /></a>
          <a href={t.links.github} target="_blank" rel="noreferrer"><GithubIcon />GitHub</a>
          <a href={t.links.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon />LinkedIn</a>
        </nav>
      </div>
    </section>
  );
}
