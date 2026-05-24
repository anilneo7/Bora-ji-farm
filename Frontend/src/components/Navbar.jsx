import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import logoImage from '../assets/Bora ji farmlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'PRODUCTS', href: '/products' },
    { name: 'RECIPES', href: '/#recipes' },
    { name: 'BLOG', href: '/#blog' },
    { name: 'OUR STORY', href: '/#our-story' }
  ];

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
          {/* <Button variant="primary" size="medium" onClick={() => console.log('Where to buy clicked')}>
            WHERE TO BUY
          </Button> */}
          <button className="navbar__search-btn" onClick={() => console.log('Search clicked')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#333" strokeWidth="2" />
              <path d="M13 13 L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
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
