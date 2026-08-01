import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { FaMapMarkerAlt, FaClock, FaPhone, FaMap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ProductsSection.css';

const ProductsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const products = [
    {
      id: 1,
      category: t('home.products.1.category'),
      name: t('home.products.1.name'),
      description: t('home.products.1.desc'),
      price: '₹120 / Dozen',
      image: '/eggphoto.jpg',
      whatsAppMsg: 'Hello Bora Ji Farms! I would like to inquire about your Premium Farm Eggs.'
    },
    {
      id: 2,
      category: t('home.products.2.category'),
      name: t('home.products.2.name'),
      description: t('home.products.2.desc'),
      price: '₹220 / Kg',
      image: '/chicken.jpg',
      customStyle: { '--img-rotate': '90deg', '--img-scale': '0.80' },
      whatsAppMsg: 'Hello Bora Ji Farms! I would like to inquire about your Farm-Fresh Chicken.'
    }
  ];

  return (
    <div>
      <section className="products-section">
        {/* Background Glows */}
        <div className="ambient-glows">
          <div className="glow glow--1"></div>
          <div className="glow glow--2"></div>
          <div className="glow glow--3"></div>
          <div className="glow glow--4"></div>
        </div>

        <div className="products-section__container">
          <div className="products-section__content">
            <div className="products-section__header">
              <span className="products-section__subtitle">{t('home.sectionSubtitle')}</span>
              <h1 className="products-section__title">
                {t('home.sectionTitle')}
              </h1>
              <p className="products-section__description">
                {t('home.sectionDesc')}
              </p>
            </div>

            <div className="products-section__actions">
              <Button
                variant="primary"
                size="large"
                onClick={() => navigate('/products')}
                className="products-section__main-button"
              >
                {t('home.viewAllProducts')}
              </Button>
            </div>
          </div>

          <div className="products-section__products">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => {
                  const phoneNumber = "918285762242";
                  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(product.whatsAppMsg)}`, "_blank");
                }}
              >
                <div className="product-card__image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                    style={product.customStyle || {}}
                  />
                  <div className="product-card__badge">{product.category}</div>
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <div className="product-card__footer">
                    {/* <span className="product-card__price">{product.price}</span> */}
                    <span className="product-card__cta">{t('home.inquireNow')} <span className="arrow">→</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-section__decorative-element">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
            <path d="M0 50 Q50 0 100 50 T200 50" stroke="#FFD700" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="8" fill="#FFD700" />
            <circle cx="150" cy="50" r="8" fill="#FFD700" />
          </svg>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section" id="visit">
        <div className="location-section__container">
          <div className="location-section__grid">
            <div className="location-section__content">
              <div className="location-section__header">
                <span className="location-section__badge">{t('home.visitSanctuary')}</span>
                <h2 className="location-section__title">
                  {t('home.comeExperience')} <br />
                  <span className="text-highlight">{t('home.pureFreshness')}</span>
                </h2>
                <p className="location-section__description">
                  {t('home.locationDesc')}
                </p>
              </div>

              <div className="location-section__details-grid">
                <div className="location-detail-card" id="location-card">
                  <div className="location-detail-card__icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="location-detail-card__info">
                    <h3>{t('home.ourLocation')}</h3>
                    <p>{t('home.locationAddress')}</p>
                    <a href="https://maps.app.goo.gl/b7o1xnpL4JCS4eub8" target="_blank" rel="noopener noreferrer" className="location-link">
                      {t('home.getDirections')} <FaMap />
                    </a>
                  </div>
                </div>

                <div className="location-detail-card">
                  <div className="location-detail-card__icon">
                    <FaClock />
                  </div>
                  <div className="location-detail-card__info">
                    <h3>{t('home.openingHours')}</h3>
                    <p>{t('home.hoursDetail')}</p>
                    <span className="status-badge">{t('home.alwaysOpen')}</span>
                  </div>
                </div>

                <div className="location-detail-card">
                  <div className="location-detail-card__icon">
                    <FaPhone />
                  </div>
                  <div className="location-detail-card__info">
                    <h3>{t('home.contactUs')}</h3>
                    <p>+91 98765 43210</p>
                    <p className="email">anilmehrar814@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="location-section__actions">
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => {
                    const phoneNumber = "918285762242";
                    const message = "Hello Bora Ji Farms! I would like to inquire about your products.";
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                  className="location-cta-button"
                >
                  {t('home.chatOnWhatsapp')}
                </Button>
              </div>
            </div>

            <div className="location-section__visual">
              <div className="map-experience-card">
                <div className="map-experience-card__image">
                  {/* This would ideally be a static map image or a beautiful farm photo */}
                  {/* <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" alt="Farm Overview" /> */}
                  <img src="/farm_image.jpeg" alt="Farm Overview" />
                  <div className="map-experience-card__overlay">
                    <div className="ping-container">
                      <div className="ping"></div>
                      <div className="ping-dot"></div>
                    </div>
                    <div className="location-tag">Bora Ji Farms</div>
                  </div>
                </div>
                <div className="map-experience-card__content">
                  <h4>{t('home.findOnMap')}</h4>
                  <p>{t('home.mapDesc')}</p>
                  <Button variant="secondary" size="small" onClick={() => window.open('https://maps.app.goo.gl/b7o1xnpL4JCS4eub8', '_blank')}>
                    {t('home.openInGoogleMaps')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="location-decorations">
          <div className="decor-circle decor-circle--1"></div>
          <div className="decor-circle decor-circle--2"></div>
          <div className="decor-svg">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path d="M400 200C400 310.457 310.457 400 200 400C89.543 400 0 310.457 0 200C0 89.543 89.543 0 200 0C310.457 0 400 89.543 400 200Z" fill="url(#paint0_radial)" fillOpacity="0.05" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
                  <stop stopColor="#4CAF50" />
                  <stop offset="1" stopColor="#4CAF50" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProductsSection;
