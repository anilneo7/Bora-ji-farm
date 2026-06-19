import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import brandLogo from '../assets/Bora ji farmlogo.png';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const topLinks = [
    // { name: 'FOODSERVICE', href: '/#foodservice' },
    { name: t('footer.facts'), href: 'https://en.wikipedia.org/wiki/Eggs_as_food' },
    {
      name: t('footer.jobs'),
      href: '#',
      onClick: (e) => {
        e.preventDefault();
        const phoneNumber = "918700304693";
        const message = "Hello Bora Ji Farms! I am interested in joining your team. Could you please share more details about current job openings?";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
      }
    },
    {
      name: t('footer.contact'),
      href: '#',
      onClick: (e) => {
        e.preventDefault();
        const phoneNumber = "918700304693";
        const message = "Hello Bora Ji Farms! I would like to inquire about your products.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
      }
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '', icon: <FaFacebook /> },
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
          <h3 className="footer__newsletter-title">{t('footer.queryTitle')}</h3>
          <p className="footer__newsletter-description">
            {t('footer.queryDesc')}
          </p>
          <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="text"
              id="whatsappQuery"
              placeholder={t('footer.queryPlaceholder')}
              className="footer__newsletter-input"
              required
            />
            <button type="submit" className="footer__newsletter-button">
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> {t('footer.queryBtn')}
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.facts')}</h4>
            <ul>
              <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/products">{t('footer.products')}</Link></li>
              <li><Link to="/recipes">{t('footer.recipes')}</Link></li>
              <li><Link to="/sustainability">{t('footer.sustainability')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.contact')}</h4>
            <ul>
              <li><Link to="/contact">{t('footer.customerService')}</Link></li>
              <li><Link to="/faq">{t('footer.faq')}</Link></li>
              <li><Link to="/shipping">{t('footer.shippingInfo')}</Link></li>
              <li><Link to="/returns">{t('footer.returns')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.aboutUs')}</h4>
            <ul>
              <li><Link to="/our-story">{t('footer.ourStory')}</Link></li>
              <li><Link to="/careers">{t('footer.careers')}</Link></li>
              <li><Link to="/press">{t('footer.press')}</Link></li>
              <li><Link to="/partners">{t('footer.partners')}</Link></li>
            </ul>
          </div>

          <div className="footer-links quick-recipes">
            <h4 className="footer-heading">{t('footer.recipes')}</h4>
            <ul>
              <li><Link to="/recipes/oven-baked-chicken">{t('footer.quickLink1')}</Link></li>
              <li><Link to="/recipes/top-10">{t('footer.quickLink2')}</Link></li>
              <li><Link to="/recipes/turkey-chili">{t('footer.quickLink3')}</Link></li>
              <li><Link to="/recipes/marinades">{t('footer.quickLink4')}</Link></li>
              <li><Link to="/recipes/meal-prep">{t('footer.quickLink5')}</Link></li>
              <li><Link to="/recipes/family-dinner">{t('footer.quickLink6')}</Link></li>
            </ul>
          </div>

          <div className="footer__copyright">
            <p>{t('footer.rights')}</p>
          </div>

          <div className="footer__creator">
            <span className="footer__creator-text">{t('footer.createdBy')}</span>
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
            <span className="footer__social-title">{t('footer.followUs')}</span>
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
