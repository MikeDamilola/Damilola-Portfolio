export default function ProjectCard({ project }) {
  return (
    <article className="project-card-mobile">
      <div className="project-card-mobile__image-wrap" style={{ background: project.bg }}>
        <img src={project.image} alt={project.mobileTitle} />
      </div>

      <div className="project-card-mobile__content">
        <h3 className="project-card-mobile__title">{project.mobileTitle}</h3>

        <p className="project-card-mobile__tags">
          {project.mobileTags.join(" • ")}
        </p>

        <a href={project.link} className="project-card-mobile__btn">
          View Project
          <span className="project-card-mobile__btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
