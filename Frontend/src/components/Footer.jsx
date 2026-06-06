import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const topLinks = [
    // { name: 'FOODSERVICE', href: '/#foodservice' },
    { name: 'FACTS', href: 'https://en.wikipedia.org/wiki/Eggs_as_food' },
    {
      name: 'JOBS',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
        const phoneNumber = "918700304693";
        const message = "Hello Bora Ji Farms! I am interested in joining your team. Could you please share more details about current job openings?";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
      }
    },
    {
      name: 'CONTACT US',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
        const phoneNumber = "918700304693";
        const message = "Hello Bora Ji Farms! I would like to inquire about your products.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
      }
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Products', href: '/products' },
    { name: 'Recipes', href: '/#recipes' },
    { name: 'Sustainability', href: '/#sustainability' }
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
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'WE DO NOT SELL OR SHARE YOUR PERSONAL INFORMATION' },
    { name: 'Manage Consent Preferences', href: '#consent' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#facebook', icon: <FaFacebook /> },
    { name: 'Instagram', href: '#instagram', icon: <FaInstagram /> },
    { name: 'LinkedIn', href: '#linkedin', icon: <FaLinkedin /> }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.whatsappQuery.value;
    const phoneNumber = "918700304693";
    const message = `Hello Bora Ji Farms! ${query}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    e.target.reset();
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
                  {link.onClick ? (
                    <a href={link.href || '#'} onClick={link.onClick} className="footer__nav-link">
                      {link.name}
                    </a>
                  ) : link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link to={link.href} target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer__nav-link">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="footer__newsletter">
          <h3 className="footer__newsletter-title">Send a Query</h3>
          <p className="footer__newsletter-description">
            Have questions about our products? Send us a direct message on WhatsApp!
          </p>
          <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="text"
              id="whatsappQuery"
              placeholder="Enter your query here"
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="footer__newsletter-button">
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> SEND VIA WHATSAPP
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <ul className="footer__legal-list">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  {link.href && link.href.startsWith('/') ? (
                    <Link to={link.href} className="footer__legal-link">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer__legal-link">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__copyright">
            <p>© 2026 BORA JI FARMS. All Rights Reserved.</p>
          </div>

          <div className="footer__creator">
            <span className="footer__creator-text">Created by</span>
            <a
              href="https://www.linkedin.com/in/anil-mehra-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__creator-link"
            >
              ANIL MEHRA <FaLinkedin className="footer__creator-icon" />
            </a>
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
