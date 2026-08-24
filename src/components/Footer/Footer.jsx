import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© {new Date().getFullYear()} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, ad.</p>
        <p>
          <a href="https://github.com/sundstorm91" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

