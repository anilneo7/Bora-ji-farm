import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logoImage from '../assets/Bora ji farmlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'HI' : 'EN');
  };

  const baseLinks = [
    { name: 'PRODUCTS', href: '/products' },
    { name: 'RECIPES', href: '/recipes' },
    { name: 'BLOG', href: '/blog' },
    { name: 'OUR STORY', href: '/our-story' }
  ];

  const navLinks = location.pathname !== '/' 
    ? [{ name: 'HOME', href: '/' }, ...baseLinks]
    : baseLinks;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <Link to="/" className="navbar__brand-link">
            <div className="navbar__rooster">
              <img src={logoImage} alt="BORA JI FARMS" className="navbar__logo-img" />
            </div>
            <div className="navbar__brand-text">
              <h1 className="navbar__brand-name">BORA JI FARMS</h1>
            </div>
          </Link>
        </div>

        <div className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__nav-links">
            {navLinks.map((link) => (
              <li key={link.name} className="navbar__nav-item">
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link to={link.href} className="navbar__nav-link">
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.href} className="navbar__nav-link">
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar__actions">
          <div className="navbar__lang-wrapper" title={language === 'EN' ? "Translate website to Hindi" : "Translate website to English"} onClick={toggleLanguage}>
            <div className="navbar__lang-toggle" aria-label="Toggle Language">
              <div className={`navbar__lang-slider ${language === 'HI' ? 'right' : 'left'}`}></div>
              <span className={`navbar__lang-option ${language === 'EN' ? 'active' : ''}`}>ENG</span>
              <span className={`navbar__lang-option ${language === 'HI' ? 'active' : ''}`}>हिंदी</span>
            </div>
          </div>
          {/* <Button variant="primary" size="medium" onClick={() => console.log('Where to buy clicked')}>
            WHERE TO BUY
          </Button> */}
          <button
            className="navbar__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`navbar__hamburger ${isMobileMenuOpen ? 'navbar__hamburger--active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
