import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          The Ella Effect
        </Link>
        
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link" onClick={closeMobileMenu}>
              Portfolio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className="navbar-link" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/faq" className="navbar-link" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link contact-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
