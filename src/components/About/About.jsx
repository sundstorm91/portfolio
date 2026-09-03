import './About.css';
import { translations } from '../../locales/translations'
import { useLanguage } from '../../context/LanguageContext'
export function About() {

  const { lang, toggleLang } = useLanguage()
  const t = translations[lang].about

  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">{t.title}</h2>
        <div className="about__content">
          <div className="about__text">
           {t.text}
          </div>
          <div className="about__photo">
            <div className="about__photo-placeholder">📸</div>
          </div>
        </div>
      </div>
    </section>
  );
}
