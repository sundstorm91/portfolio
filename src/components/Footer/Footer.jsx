// src/components/Footer.jsx
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__profiles">
          <a href="https://www.codewars.com/users/sundstorm91" target="_blank" rel="noopener noreferrer">
            Codewars
          </a>
          <a href="https://leetcode.com/u/sundstorm91/" target="_blank" rel="noopener noreferrer">
            Leetcode
          </a>
        </div>
        <p>© {new Date().getFullYear()}</p>
        <a href="https://github.com/sundstorm91" target="_blank" rel="noopener noreferrer">
          🐙 GitHub
        </a>
      </div>
    </footer>
  );
}