import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import logoImage from '../assets/Bora ji farmlogo.png';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'EN' ? 'HI' : 'EN';
    i18n.changeLanguage(newLang);
  };

  const baseLinks = [
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.recipes'), href: '/recipes' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.story'), href: '/our-story' }
  ];

  const navLinks = location.pathname !== '/' 
    ? [{ name: t('nav.home'), href: '/' }, ...baseLinks]
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
          <div className="navbar__lang-wrapper" title={i18n.language === 'EN' ? t('nav.translateToHindi') : t('nav.translateToEnglish')} onClick={toggleLanguage}>
            <div className="navbar__lang-toggle" aria-label="Toggle Language">
              <div className={`navbar__lang-slider ${i18n.language === 'HI' ? 'right' : 'left'}`}></div>
              <span className={`navbar__lang-option ${i18n.language === 'EN' ? 'active' : ''}`}>ENG</span>
              <span className={`navbar__lang-option ${i18n.language === 'HI' ? 'active' : ''}`}>हिंदी</span>
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
