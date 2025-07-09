import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`right ${menuOpen ? 'nav_open' : ''}`}>
          <a href="#home" className="nav_items" onClick={toggleMenu}>Home</a>
          <a href="#experience" className="nav_items" onClick={toggleMenu}>Experience</a>
          <a href="#skills" className="nav_items" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="nav_items" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="nav_items" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;