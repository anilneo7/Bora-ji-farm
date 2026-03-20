import React from 'react';
import Button from './Button';
import './ProductsSection.css';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'FRESH EGGS',
      description: 'Premium quality boiler eggs',
      image: '/src/assets/turkey-breast.png'
    },
    {
      id: 2,
      name: 'FREE CHICKEN',
      description: 'Farm-fresh chicken',
      image: '/src/assets/free-range.png'
    }
  ];

  return (
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
            
            <div className="products-section__links">
              <a href="#ready-to-cook" className="products-section__link">
                READY TO COOK PRODUCTS
              </a>
              <span className="products-section__separator">|</span>
              <a href="#pre-cooked" className="products-section__link">
                PRE-COOKED PRODUCTS
              </a>
            </div>
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
  );
};

export default ProductsSection;
