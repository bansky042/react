// Footer.jsx
import React from 'react';
import '../component_css/footer.css'; // Link your CSS

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Me</h2>
          <p>
            I’m a full-stack developer passionate about creating efficient,
            scalable, and beautiful web applications. Let's build something great together.
          </p>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h2>Follow Me</h2>
          <div className="social-icons">
            <a href="https://facebook.com" className="icon-circle" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" className="icon-circle" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" className="icon-circle" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com" className="icon-circle" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kosisochukwu Abana. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
