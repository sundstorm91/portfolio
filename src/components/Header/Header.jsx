import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Aleksandr</h1>
        <p className="header__subtitle">Frontend Developer</p>
      </div>
      <nav className="header__nav">
        <a href="#about">Обо мне</a>
        <a href="#stack">Стек</a>
        <a href="#projects">Проекты</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}

