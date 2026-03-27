import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const topLinks = [
    { name: 'FOODSERVICE', href: '#foodservice' },
    { name: 'NEWS', href: '#news' },
    { name: 'JOBS', href: '#jobs' },
    { name: 'CONTACT US', href: '#contact' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Sustainability', href: '#sustainability' }
  ];

  const supportLinks = [
    { name: 'Customer Service', href: '#customer-service' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Shipping Info', href: '#shipping' },
    { name: 'Returns', href: '#returns' }
  ];

  const companyLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Partners', href: '#partners' }
  ];

  const interestLinks = [
    { name: 'Easy Oven-Baked Chicken Breasts', href: '#oven-baked' },
    { name: 'Top 10 Chicken Breast Recipes', href: '#recipes' },
    { name: 'Speedy Turkey Chili', href: '#turkey-chili' },
    { name: 'Grilled Chicken Marinades', href: '#marinades' },
    { name: 'Healthy Chicken Meal Prep', href: '#meal-prep' },
    { name: 'Family Dinner Ideas', href: '#dinner-ideas' }
  ];

  const legalLinks = [
    { name: 'Uttarakhand Supply Chain', href: '#supply-chain' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'DO NOT SELL OR SHARE MY PERSONAL INFORMATION', href: '#do-not-sell' },
    { name: 'Manage Consent Preferences', href: '#consent' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#facebook', icon: <FaFacebook /> },
    { name: 'Instagram', href: '#instagram', icon: <FaInstagram /> },
    { name: 'LinkedIn', href: '#linkedin', icon: <FaLinkedin /> }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Navigation */}
        <div className="footer__top">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              {topLinks.map((link) => (
                <li key={link.name} className="footer__nav-item">
                  <a href={link.href} className="footer__nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="footer__newsletter">
          <h3 className="footer__newsletter-title">Stay Connected</h3>
          <p className="footer__newsletter-description">
            Get exclusive recipes, product updates, and special offers delivered to your inbox
          </p>
          <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="footer__newsletter-button">
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Main Content Grid */}
        <div className="footer__middle">
          <div className="footer__content-grid">
            {/* Brand Section */}
            <div className="footer__brand-section">
              <div className="footer__brand-logo">
                <span className="footer__brand-logo-text">BORA JI FARMS</span>
              </div>
              <p className="footer__brand-description">
                Premium quality poultry products since 2020. Committed to sustainable farming practices 
                and delivering farm-fresh goodness to families everywhere.
              </p>
              {/* <div className="footer__brand-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="footer__social-link"
                    aria-label={social.name}
                  >
                    <span className="footer__social-icon">{social.icon}</span>
                  </a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="footer__section">
              <h3 className="footer__section-title">Quick Links</h3>
              <ul className="footer__section-list">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer__section-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="footer__section">
              <h3 className="footer__section-title">Support</h3>
              <ul className="footer__section-list">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer__section-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer__section">
              <h3 className="footer__section-title">Company</h3>
              <ul className="footer__section-list">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer__section-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <ul className="footer__legal-list">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer__legal-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__copyright">
            <p>© 2026 BORA JI FARMS. All Rights Reserved.</p>
          </div>

          <div className="footer__social">
            <span className="footer__social-title">Follow Us:</span>
            <div className="footer__social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  <span className="footer__social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
