import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/logo.jpg" alt="AirPods Logo" className="logo-img" />
        <div className="Title-brand">AirPods</div>
      </div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#hero-section" className="nav-link" onClick={closeMenu}>
          Home
        </a>
        <hr className="nav-hr" />
        <a href="#features-section" className="nav-link" onClick={closeMenu}>
          About
        </a>
        <hr className="nav-hr" />
        <a href="#product-section" className="nav-link" onClick={closeMenu}>
          Product
        </a>
        <hr className="nav-hr" />
      </nav>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
