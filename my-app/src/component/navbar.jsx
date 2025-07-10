import React, { useState } from 'react';
import '../component_css/navbar.css';
import image from '../component_css/images/logo-dark-transparent.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
      <img 
      src={image} 
      alt=""
      width="200"
      height="50"
      />
        </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <a href="#home"><li className='nav-link'>Home</li></a>
          <a href="#about"><li className='nav-link'>About</li></a>
          <a href="#skills"><li className='nav-link'>Skills</li></a>
          <a href="#projects"><li className='nav-link'>My Projects</li></a>
          <a href="#contact"><li className='nav-link'>Contact</li></a>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
