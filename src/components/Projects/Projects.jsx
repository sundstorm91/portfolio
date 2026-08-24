import './Projects.css';

export function Projects() {
  const projects = [
    {
      title: 'Minesweeper',
      description: 'Классический сапёр на чистом JS с таймером и таблицей лидеров.',
      stack: 'JS, CSS, знакомство с Webpack',
      demo: 'https://sundstorm91.github.io/Minesweeper/',
      repo: 'https://github.com/sundstorm91/Minesweeper',
    },
    {
      title: 'Momentum',
      description: 'Персонализированный дашборд с часами, погодой, плеером и сменой фона.',
      stack: 'JS, CSS, OpenWeatherMap API',
      demo: 'https://sundstorm91.github.io/momentum/',
      repo: 'https://github.com/sundstorm91/momentum',
    },

    {
      title: 'Plants',
      description: 'Первый проект в вёрстке: адаптивный лендинг с фильтрацией карточек, аккордеоном в ценах, дропдауном с контактами и бургер-меню. Написан на чистом JS без фреймворков.',
      stack: 'HTML, CSS, JS',
      demo: 'https://sundstorm91.github.io/Plants/',
      repo: 'https://github.com/sundstorm91/Plants',
    },

    {
      title: 'Shelter(убрать баги в /pets)',
      description: 'Двухстраничный сайт (главная + страница питомцев) с каруселью, пагинацией, модальными окнами и бургер-меню. Первый опыт реализации сложного UI на чистом JS.',
      stack: 'HTML, CSS, JS, БЭМ',
      demo: 'https://sundstorm91.github.io/Shelter/',
      repo: 'https://github.com/sundstorm91/Shelter',
    },

    {
      title: 'CSS Bayan',
      description: 'Аккордеон (раскрывающийся список) с мемами про разработку. Реализован полностью на CSS — без единой строчки JS. Тренировка селекторов, псевдоклассов, переходов и адаптива.',
      stack: 'HTML, SCSS',
      demo: 'https://sundstorm91.github.io/cssBayan/',
      repo: 'https://github.com/sundstorm91/cssBayan',
    },

    {
      title: 'CSS Diner',
      description: 'Интерактивная игра для изучения CSS-селекторов. 7 уровней, проверка ввода, подсветка элементов. Проект на TypeScript без фреймворков.',
      stack: 'TypeScript, SCSS',
      demo: 'https://sundstorm91.github.io/css-diner/',
      repo: 'https://github.com/sundstorm91/css-diner',
    },

    {
      title: 'Виртуальная клавиатура(Исправь README, Дополни дескрипшн!)',
      description: 'Проект на чистом Typescript с архитектурой, первая встреча с понятием state-management',
      stack: 'TypeScript, Event Handlers',
      demo: 'https://sundstorm91.github.io/virtual-keyboard-TS/',
      repo: 'https://github.com/sundstorm91/virtual-keyboard-TS',
    },

    {
      title: 'Stellar Burger',
      description: 'Fullstack-приложение для заказа бургеров с авторизацией и лентой заказов.',
      stack: 'React, Redux, Node.js, MongoDB, WebSocket',
      demo: 'https://sundstorm91.github.io/stellar-burger-react/',
      repo: 'https://github.com/sundstorm91/stellar-burger-react',
    },
    {
      title: 'TaskFlow',
      description: 'Менеджер задач с ролями, дедлайнами и фильтрацией. Next.js + Prisma.',
      stack: 'Next.js, TypeScript, Prisma, SQLite',
      demo: 'https://sundstorm91.github.io/taskflow/',
      repo: 'https://github.com/sundstorm91/taskflow',
    },
    {
      title: 'SPA на чистом JS',
      description: 'Одностраничное приложение с роутером, состоянием и компонентами без фреймворков.',
      stack: 'JS, TypeScript, Webpack',
      demo: 'https://sundstorm91.github.io/spa/',
      repo: 'https://github.com/sundstorm91/spa',
    },
    {
      title: 'Async Race',
      description: 'Гоночное приложение с управлением машинами, победителями и таблицей рекордов.',
      stack: 'JS, CSS, REST API',
      demo: 'https://sundstorm91.github.io/async-race/',
      repo: 'https://github.com/sundstorm91/async-race',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Проекты</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <p className="project-card__stack">🧩 {project.stack}</p>
              <div className="project-card__links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__link demo">
                  🌐 Демо
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-card__link repo">
                  📂 Код
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}