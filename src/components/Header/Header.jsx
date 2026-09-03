import './Header.css';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales/translations';

export function Header() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{t.header.title}</h1>
        <p className="header__subtitle">{t.header.subtitle}</p>
      </div>
      <nav className="header__nav">
        <a href="#about">{t.about.title}</a>
        <a href="#stack">{t.stack.title}</a>
        <a href="#projects">{t.projects.title}</a>
        <a href="#contacts">{t.contacts.title}</a>
        <button className="lang-toggle" onClick={toggleLang}>
          {lang === 'ru' ? 'EN' : 'RU'}
        </button>
      </nav>
      
    </header>
  );
}

