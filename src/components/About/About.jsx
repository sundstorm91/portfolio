import './About.css';

export function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">Обо мне</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos libero. Atque vel, non expedita dolorum nulla minima accusantium sit.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque accusamus ducimus blanditiis atque iste commodi. Laboriosam laudantium iste aliquid provident itaque, quibusdam soluta dignissimos.
            </p>
          </div>
          <div className="about__photo">
            <div className="about__photo-placeholder">📸</div>
          </div>
        </div>
      </div>
    </section>
  );
}
