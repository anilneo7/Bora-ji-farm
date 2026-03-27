import React from 'react';
import Button from './Button';
import { FaMapMarkerAlt, FaClock, FaPhone, FaMap } from 'react-icons/fa';
import './ProductsSection.css';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'FRESH EGGS',
      description: 'Premium quality Eggs',
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
                onClick={() => console.log('View all products clicked')}
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
      <section className="location-section">
        <div className="location-section__container">
          <div className="location-section__content">
            <div className="location-section__header">
              <h2 className="location-section__subtitle">Visit Our Farm</h2>
              <h1 className="location-section__title">
                Come Experience Freshness
              </h1>
              <p className="location-section__description">
                Visit BORA JI FARMS and see where the magic happens. Experience our commitment to quality and sustainable farming firsthand.
              </p>
            </div>

            <div className="location-section__info">
              <div className="location-section__details">
                <div className="location-section__detail-item">
                  <div className="location-section__icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="location-section__text">
                    <h3>Location</h3>
                    <p>2 KM from Someshwar Market, Uttarakhand</p>
                    <p>Google Maps: <a href="https://maps.app.goo.gl/b7o1xnpL4JCS4eub8" target="_blank" rel="noopener noreferrer">View on Maps</a></p>
                  </div>
                </div>
                
                <div className="location-section__detail-item">
                  <div className="location-section__icon">
                    <FaClock />
                  </div>
                  <div className="location-section__text">
                    <h3>Hours</h3>
                    <p>Mon-Sun: 8 AM - 6 PM</p>
                  </div>
                </div>
                
                <div className="location-section__detail-item">
                  <div className="location-section__icon">
                    <FaPhone />
                  </div>
                  <div className="location-section__text">
                    <h3>Contact</h3>
                    <p>(555) 123-4567<br/>info@borajifarms.com</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="location-section__cta">
              <Button 
                variant="primary" 
                size="large"
                onClick={() => console.log('Schedule visit clicked')}
                className="location-section__cta-button"
              >
                SCHEDULE A VISIT
              </Button>
            </div>
          </div>

          <div className="location-section__decoration-element">
            <svg width="150" height="80" viewBox="0 0 150 80" fill="none">
              <path d="M20 40 Q75 20 130 40" stroke="#4CAF50" strokeWidth="2" fill="none"/>
              <circle cx="75" cy="40" r="6" fill="#4CAF50"/>
              <path d="M30 60 L120 60" stroke="#FFD700" strokeWidth="1" strokeDasharray="5,5"/>
            </svg>
          </div>

          <div className="location-section__decoration">
            <div className="location-section__circle location-section__circle--1"></div>
            <div className="location-section__circle location-section__circle--2"></div>
            <div className="location-section__circle location-section__circle--3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProductsSection;
