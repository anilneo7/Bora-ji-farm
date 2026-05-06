import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { FaMapMarkerAlt, FaClock, FaPhone, FaMap } from 'react-icons/fa';
import './ProductsSection.css';

const ProductsSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'FRESH EGGS',
      description: 'Premium Quality Eggs',
      image: '/src/assets/eggphoto.jpg'
    },
    {
      id: 2,
      name: 'FREE CHICKEN',
      description: 'Farm-Fresh chicken',
      image: '/src/assets/chicken.jpg'
    }
  ];

  return (
    <div>
      <section className="products-section">
        {/* Background Bubbles */}
        <div className="background-bubbles">
          <div className="bubble bubble--1"></div>
          <div className="bubble bubble--2"></div>
          <div className="bubble bubble--3"></div>
          <div className="bubble bubble--4"></div>
          <div className="bubble bubble--5"></div>
        </div>

        <div className="products-section__container">
          <div className="products-section__content">
            <div className="products-section__header">
              <h2 className="products-section__subtitle">our products</h2>
              <h1 className="products-section__title">
                From fresh whole chickens to ready-to-eat meals.
              </h1>
              <p className="products-section__description">
                We have your perfect protein.
              </p>
            </div>

            <div className="products-section__actions">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => navigate('/products')}
                className="products-section__main-button"
              >
                VIEW ALL PRODUCTS
              </Button>
            </div>
          </div>

          <div className="products-section__products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card__image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-card__image"
                  />
                  <div className="product-card__badge">{product.name}</div>
                </div>
                <div className="product-card__content">
                  <p className="product-card__description">{product.description}</p>
                  <p className="product-card__price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="products-section__decorative-element">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
            <path d="M0 50 Q50 0 100 50 T200 50" stroke="#FFD700" strokeWidth="3" fill="none"/>
            <circle cx="50" cy="50" r="8" fill="#FFD700"/>
            <circle cx="150" cy="50" r="8" fill="#FFD700"/>
          </svg>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section" id="visit">
        <div className="location-section__container">
          <div className="location-section__grid">
            <div className="location-section__content">
              <div className="location-section__header">
                <span className="location-section__badge">Visit Our Sanctuary</span>
                <h2 className="location-section__title">
                  Come Experience <br />
                  <span className="text-highlight">Pure Freshness</span>
                </h2>
                <p className="location-section__description">
                  Nestled in the heart of Uttarakhand, BORA JI FARMS is more than just a farm. It's a testament to our commitment to nature, quality, and sustainable living.
                </p>
              </div>

              <div className="location-section__details-grid">
                <div className="location-detail-card" id="location-card">
                  <div className="location-detail-card__icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="location-detail-card__info">
                    <h3>Our Location</h3>
                    <p>10 Mins from Someshwar Market, Uttarakhand</p>
                    <a href="https://maps.app.goo.gl/b7o1xnpL4JCS4eub8" target="_blank" rel="noopener noreferrer" className="location-link">
                      Get Directions <FaMap />
                    </a>
                  </div>
                </div>

                <div className="location-detail-card">
                  <div className="location-detail-card__icon">
                    <FaClock />
                  </div>
                  <div className="location-detail-card__info">
                    <h3>Opening Hours</h3>
                    <p>Mon - Sun: 08:00 AM - 06:00 PM</p>
                    <span className="status-badge">Always Open</span>
                  </div>
                </div>

                <div className="location-detail-card">
                  <div className="location-detail-card__icon">
                    <FaPhone />
                  </div>
                  <div className="location-detail-card__info">
                    <h3>Contact Us</h3>
                    <p>+91 (555) 123-4567</p>
                    <p className="email">info@borajifarms.com</p>
                  </div>
                </div>
              </div>

              <div className="location-section__actions">
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => console.log('Schedule visit clicked')}
                  className="location-cta-button"
                >
                  SCHEDULE A PRIVATE TOUR
                </Button>
              </div>
            </div>

            <div className="location-section__visual">
              <div className="map-experience-card">
                <div className="map-experience-card__image">
                   {/* This would ideally be a static map image or a beautiful farm photo */}
                   <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000" alt="Farm Overview" />
                   <div className="map-experience-card__overlay">
                      <div className="ping-container">
                        <div className="ping"></div>
                        <div className="ping-dot"></div>
                      </div>
                      <div className="location-tag">Bora Ji Farms</div>
                   </div>
                </div>
                <div className="map-experience-card__content">
                  <h4>Find Us on the Map</h4>
                  <p>Explore our lush green fields and experience the farm life firsthand.</p>
                  <Button variant="secondary" size="small" onClick={() => window.open('https://maps.app.goo.gl/b7o1xnpL4JCS4eub8', '_blank')}>
                    OPEN IN GOOGLE MAPS
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
              <path d="M400 200C400 310.457 310.457 400 200 400C89.543 400 0 310.457 0 200C0 89.543 89.543 0 200 0C310.457 0 400 89.543 400 200Z" fill="url(#paint0_radial)" fillOpacity="0.05"/>
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
                  <stop stopColor="#4CAF50"/>
                  <stop offset="1" stopColor="#4CAF50" stopOpacity="0"/>
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
