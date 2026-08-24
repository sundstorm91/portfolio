import './Stack.css';

export function Stack() {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'Express', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'SQLite', icon: '🗄️' },
    { name: 'Git', icon: '🐙' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Redux Toolkit', icon: '🔴' },
  ];

  return (
    <section id="stack" className="stack">
      <div className="stack__container">
        <h2 className="stack__title">Технологии</h2>
        <div className="stack__grid">
          {technologies.map((tech) => (
            <div key={tech.name} className="stack__item">
              <span className="stack__icon">{tech.icon}</span>
              <span className="stack__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

