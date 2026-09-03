import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales/translations';
import './Projects.css';

export function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">{t.title}</h2>
        <div className="projects__grid">
          {t.list.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <p className="project-card__stack">🧩 {project.stack}</p>
              <div className="project-card__links">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link demo"
                  >
                    🌐 {lang === 'ru' ? 'Демо' : 'Demo'}
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link repo"
                >
                  📂 {lang === 'ru' ? 'Код' : 'Code'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}