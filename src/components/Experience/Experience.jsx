import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales/translations';
import './Experience.css';

export function Experience() {
  const { lang,} = useLanguage()
  const t = translations[lang].experience

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2 className="experience__title">{t.title}</h2>
        <div className="experience__content">
          <div className="experience__text">
           {t.text}
          </div>

        </div>
      </div>
    </section>
  );
}