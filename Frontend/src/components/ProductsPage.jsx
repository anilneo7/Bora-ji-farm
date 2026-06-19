import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import { FaWhatsapp, FaLeaf, FaTruck, FaShieldAlt, FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ProductsPage.css';
import farmImage from '../assets/farm_image.PNG';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { t } = useTranslation();

  const categories = ['All', 'Fresh Eggs', 'Poultry'];

  const products = [
    {
      id: 1,
      name: t('productsPage.items.1.name'),
      category: 'Fresh Eggs',
      description: t('productsPage.items.1.desc'),
      price: '₹120 / Dozen',
      image: '/src/assets/eggphoto.jpg',
      badge: t('productsPage.items.1.badge'),
      inStock: true
    },
    {
      id: 2,
      name: t('productsPage.items.2.name'),
      category: 'Poultry',
      description: t('productsPage.items.2.desc'),
      price: '₹220 / Kg',
      image: '/src/assets/chicken.jpg',
      badge: t('productsPage.items.2.badge'),
      inStock: true
    },
    {
      id: 3,
      name: t('productsPage.items.3.name'),
      category: 'Fresh Eggs',
      description: t('productsPage.items.3.desc'),
      price: '₹180 / Dozen',
      image: '/src/assets/eggphoto.jpg',
      badge: t('productsPage.items.3.badge'),
      inStock: true
    },
    {
      id: 4,
      name: t('productsPage.items.4.name'),
      category: 'Poultry',
      description: t('productsPage.items.4.desc'),
      price: '₹280 / Kg',
      image: '/src/assets/chicken.jpg',
      badge: t('productsPage.items.4.badge'),
      inStock: true
    },
    {
      id: 5,
      name: t('productsPage.items.5.name'),
      category: 'Fresh Eggs',
      description: t('productsPage.items.5.desc'),
      price: '₹150 / Dozen',
      image: '/src/assets/eggphoto.jpg',
      badge: t('productsPage.items.5.badge'),
      inStock: true
    },
    {
      id: 6,
      name: t('productsPage.items.6.name'),
      category: 'Poultry',
      description: t('productsPage.items.6.desc'),
      price: '₹950 / Kg',
      image: '/src/assets/kadaknath.webp',
      badge: t('productsPage.items.6.badge'),
      inStock: true
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleInquiry = (productName) => {
    const whatsappNumber = '918700304693';
    const message = encodeURIComponent(`Hi, I'm interested in ${productName}. Is it available?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="products-page">
      <nav className="products-page__breadcrumb">
        <div className="products-page__breadcrumb-container">
          <ul className="breadcrumb-list">
            <li><a href="/">{t('productsPage.breadcrumbHome')}</a></li>
            <li className="separator">/</li>
            <li className="active">{t('productsPage.breadcrumbProducts')}</li>
          </ul>
        </div>
      </nav>
      
      <main className="products-page__main">
        <section className="products-page__hero">
          <div className="products-page__hero-content">
            <div className="hero-content text-center">
              <div className="hero-badge">
                <FaLeaf className="badge-icon" />
                <span>{t('productsPage.organicBadge')}</span>
              </div>
              <h1 className="hero-title">{t('productsPage.heroTitle')}</h1>
              <p className="hero-description">
                {t('productsPage.heroDesc')}
              </p>
            </div>
            <div className="products-page__hero-image">
              <img src={farmImage} alt="Bora Ji Farm" className="products-page__hero-img" />
              <div className="products-page__hero-glass-card">
                <FaLeaf className="products-page__hero-glass-icon" />
                <span className="products-page__hero-glass-text">100% Organic Farm</span>
              </div>
            </div>
          </div>
        </section>

        <section className="category-filter-section">
          <div className="container">
            <h2 className="section-title">{t('productsPage.shopByCategory')}</h2>
            <div className="category-filters">
              {categories.map(category => {
                let displayedCategory = category;
                if (category === 'All') displayedCategory = t('productsPage.allProducts');
                else if (category === 'Fresh Eggs') displayedCategory = t('productsPage.freshEggs');
                else if (category === 'Poultry') displayedCategory = t('productsPage.poultry');
                return (
                  <button
                    key={category}
                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {displayedCategory}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section className="products-page__products">
          <div className="products-page__products-container">
            <p className="products-disclaimer">
              {t('productsPage.disclaimer')}
            </p>
            <div className="products-page__products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="products-page__product-card">
                  <div className="products-page__product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="products-page__product-image"
                    />
                    <div className="products-page__product-badge">{product.badge}</div>
                  </div>
                  
                  <div className="products-page__product-content">
                    <h3 className="products-page__product-name">{product.name}</h3>
                    <p className="products-page__product-description">{product.description}</p>
                    
                    <div className="products-page__product-meta">
                      <div className="product-price-row">
                        <div className="price-info">
                          <span className="price-label">{t('productsPage.priceLabel')}</span>
                          <span className="price-value">{product.price}</span>
                        </div>
                        <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                          {product.inStock ? t('productsPage.inStock') : t('productsPage.outOfStock')}
                        </span>
                      </div>
                      
                      <Button 
                        variant="primary" 
                        className="inquire-btn"
                        onClick={() => handleInquiry(product.name)}
                      >
                        <FaWhatsapp className="btn-icon" />
                        {t('productsPage.inquireBtn')}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose-section">
          <div className="container">
            <h2 className="section-title text-center">{t('productsPage.whyChooseTitle')}</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <FaTruck className="feature-icon" />
                </div>
                <h3>{t('productsPage.features.freeDelivery.title')}</h3>
                <p>{t('productsPage.features.freeDelivery.desc')}</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <FaShieldAlt className="feature-icon" />
                </div>
                <h3>{t('productsPage.features.qualityGuaranteed.title')}</h3>
                <p>{t('productsPage.features.qualityGuaranteed.desc')}</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <FaStar className="feature-icon" />
                </div>
                <h3>{t('productsPage.features.farmFresh.title')}</h3>
                <p>{t('productsPage.features.farmFresh.desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
