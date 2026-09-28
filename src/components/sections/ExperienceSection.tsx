import type { Translation } from "../../i18n/translations";

export function ExperienceSection({ t }: { t: Translation }) {
  const experience = t.experience;
  return (
    <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
      <div className="shell">
        <header className="section-heading-simple"><h2 id="experience-title">{experience.title}</h2></header>
        <article className="experience-entry">
          <div className="experience-entry__identity"><p>{experience.company}</p><h3>{experience.role}</h3>{experience.period ? <span>{experience.period}</span> : null}</div>
          <div className="experience-entry__work">
            <p className="experience-entry__context">{experience.business}</p>
            <ul>{experience.engineering.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </article>
      </div>
    </section>
  );
}
