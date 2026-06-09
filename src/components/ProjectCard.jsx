export default function ProjectCard({ project }) {
  return (
    <article className="project-card-mobile">
      <div className="project-card-mobile__image-wrap">
        <img src={project.image} alt={project.name} />
      </div>

      <div className="project-card-mobile__content">
        <h3
          className={`project-card-mobile__title${
            project.serifTitle ? " project-card-mobile__title--serif" : ""
          }`}
        >
          {project.mobileTitle}
        </h3>

        <div className="project-card-mobile__tags">
          {project.mobileTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          href={project.link}
          className="project-card-mobile__btn"
          style={{ "--project-accent": project.accent }}
        >
          View Project
          <span className="project-card-mobile__btn-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
