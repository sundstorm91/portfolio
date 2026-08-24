import './Contacts.css';

export function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
        <h2 className="contacts__title">Контакты</h2>
        <div className="contacts__links">
          <a href="https://github.com/sundstorm91" target="_blank" rel="noopener noreferrer" className="contacts__link">
            🐙 GitHub
          </a>
          <a href="https://t.me/sundstorm91" target="_blank" rel="noopener noreferrer" className="contacts__link">
            ✈️ Telegram
          </a>
          <a href="mailto:sundstorm91@gmail.com" className="contacts__link">
            📧 Email
          </a>
          <a href="https://www.linkedin.com/in/aleksandr-sund-919974277/" target="_blank" rel="noopener noreferrer" className="contacts__link">
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

