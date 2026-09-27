import type { ProjectContent } from "../../types";
import type { Translation } from "../../i18n/translations";
import { ExternalIcon } from "../shared/Icons";
import { EvidenceGallery } from "./EvidenceGallery";

type Props = { project: ProjectContent; t: Translation };

export function ProjectCase({ project, t }: Props) {
  return (
    <article className={`project-case ${project.evidence.length > 0 ? "project-case--featured" : ""}`}>
      <header className="project-case__header">
        <p className="project-case__meta">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-case__lead">{project.lead}</p>
        <div className="project-case__contribution"><span>{t.work.contribution}</span><p>{project.decisions[0]}</p></div>
        <p className="project-case__stack">{project.stack.slice(0, 4).join(" · ")}</p>
        <div className="project-case__links">
          {project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label}<ExternalIcon /><span className="sr-only">({t.work.open})</span></a>)}
        </div>
      </header>
      {project.evidence.length > 0 ? (
        <div className="project-case__visual"><EvidenceGallery evidence={project.evidence} label={t.work.evidence} enlargeLabel={t.work.enlargeImage} closeLabel={t.work.closeImage} /></div>
      ) : null}
      <details className="project-details">
        <summary><span>{t.work.details}</span><span aria-hidden="true">+</span></summary>
        <div className="project-details__body">
          <section className="project-details__problem"><h4>{t.work.problem}</h4><p>{project.context}</p></section>
          <section><h4>{t.work.decisions}</h4><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></section>
          <section><h4>{t.work.validation}</h4><ul>{project.validation.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h4>{t.work.technologies}</h4><p>{project.stack.join(" · ")}</p></section>
          <section><h4>{t.work.limitations}</h4><ul>{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
      </details>
    </article>
  );
}
