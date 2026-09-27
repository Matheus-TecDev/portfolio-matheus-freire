import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/hero/Hero";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ProjectCase } from "./components/work/ProjectCase";
import { useLocale } from "./hooks/useLocale";
import { useTheme } from "./hooks/useTheme";
import { translations } from "./i18n/translations";

export default function App() {
  const { locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const t = translations[locale];

  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.meta.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", t.meta.locale);
  }, [t]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const panel = params.get("panel");
    if (!panel) return;

    const target = panel === "work"
      ? (params.get("tab") === "experience" ? "experiencia" : "projetos")
      : panel === "about" ? "sobre" : panel === "contact" ? "contato" : null;

    if (!target) return;
    window.history.replaceState(null, "", `${window.location.pathname}#${target}`);
    window.requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
  }, []);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">{t.nav.skip}</a>
      <Header t={t} locale={locale} theme={theme} onLocaleChange={setLocale} onThemeToggle={toggleTheme} />
      <main id="main-content">
        <Hero t={t} />
        <section className="section projects-section" id="projetos" aria-labelledby="projects-title">
          <div className="shell">
            <header className="section-heading-simple projects-heading"><h2 id="projects-title">{t.work.title}</h2></header>
            <div className="project-list">
              {t.projects.map((project) => <ProjectCase key={project.title} project={project} t={t} />)}
            </div>
          </div>
        </section>
        <ExperienceSection t={t} />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>
    </div>
  );
}
