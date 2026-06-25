import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Button from './Button';
import { FaStar, FaLeaf, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './ProductsPage.css';
import farmImage from '../assets/farm_image.PNG';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useTranslation();

  const categories = [
    { id: 'all', name: t('productsPage.allProducts') },
    { id: 'eggs', name: t('productsPage.freshEggs') },
    { id: 'chicken', name: t('productsPage.poultry') }
  ];

  const products = [
    {
      id: 1,
      name: t('productsPage.items.1.name'),
      category: 'eggs',
      description: t('productsPage.items.1.desc'),
      price: '₹60/dozen',
      image: '/src/assets/FRESH_EGGS.jpg',
      rating: 4.8,
      inStock: true,
      badge: t('productsPage.items.1.badge')
    },
    {
      id: 2,
      name: t('productsPage.items.2.name'),
      category: 'chicken',
      description: t('productsPage.items.2.desc'),
      price: '₹150/kg',
      image: '/src/assets/Broiler_chicken.jpg',
      rating: 4.7,
      inStock: true,
      badge: t('productsPage.items.2.badge')
    },
    {
      id: 3,
      name: t('productsPage.items.3.name'),
      category: 'eggs',
      description: t('productsPage.items.3.desc'),
      price: '₹80/dozen',
      image: '/src/assets/eggphoto.jpg',
      rating: 4.9,
      inStock: true,
      badge: t('productsPage.items.3.badge')
    },
    {
      id: 4,
      name: t('productsPage.items.4.name'),
      category: 'chicken',
      description: t('productsPage.items.4.desc'),
      price: '₹200/each',
      image: '/src/assets/layer_chicken.jpg',
      rating: 4.5,
      inStock: true,
      badge: t('productsPage.items.4.badge')
    },
    {
      id: 5,
      name: t('productsPage.items.5.name'),
      category: 'eggs',
      description: t('productsPage.items.5.desc'),
      price: '₹75/dozen',
      image: '/src/assets/BROWN_EGGS.jpg',
      rating: 4.5,
      inStock: true,
      badge: t('productsPage.items.5.badge')
    },
    {
      id: 6,
      name: t('productsPage.items.6.name'),
      category: 'chicken',
      description: t('productsPage.items.6.desc'),
      price: '₹550/each',
      image: '/src/assets/Kadaknath_chicken.jpg',
      rating: 4.9,
      inStock: true,
      badge: t('productsPage.items.6.badge')
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleInquiry = (product) => {
    const whatsappNumber = '918285762242';
    const message = encodeURIComponent(`Hi, I'm interested in ${product.name}. Is it available?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="products-page">
      {/* <Navbar /> */}
      
      {/* Breadcrumb Navigation */}
      <nav className="products-page__breadcrumb">
        <div className="products-page__breadcrumb-container">
          <Link to="/" className="products-page__breadcrumb-link">Home</Link>
          <span className="products-page__breadcrumb-separator">/</span>
        </div>
      </nav>
      
      <main className="products-page__main">
        {/* Hero Section */}
        <section className="products-page__hero">
          <div className="products-page__hero-content">
            <div className="products-page__hero-text">
              <h1 className="products-page__hero-title">
                {t('productsPage.heroTitle')}
              </h1>
              <p className="products-page__hero-description">
                {t('productsPage.heroDesc')}
              </p>
            </div>
            <div className="products-page__hero-image">
              <img src={farmImage} alt="Bora Ji Farm" className="products-page__hero-img" />
              <div className="products-page__hero-glass-card">
                <FaLeaf className="products-page__hero-glass-icon" />
                <span className="products-page__hero-glass-text">{t('productsPage.organicFarm')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="products-page__categories">
          <div className="products-page__categories-container">
            <h2 className="products-page__section-title">{t('productsPage.shopByCategory')}</h2>
            <div className="products-page__category-tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`products-page__category-tab ${selectedCategory === category.id ? 'products-page__category-tab--active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-page__products">
          <div className="products-page__products-container">
            <p className="products-page__disclaimer">
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
                    <div className="products-page__product-rating">
                      <FaStar className="products-page__rating-star" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="products-page__product-content">
                    <h3 className="products-page__product-name">{product.name}</h3>
                    <p className="products-page__product-description">{product.description}</p>
                    
                    <div className="products-page__product-meta">
                      <div className="products-page__product-price">
                        <span className="products-page__price-label">{t('productsPage.priceLabel')}</span>
                        <span className="products-page__price-value">{product.price}</span>
                      </div>
                      
                      <div className="products-page__product-stock">
                        <span className={`products-page__stock-status ${!product.inStock ? 'products-page__stock-status--out' : ''}`}>
                          {product.inStock ? t('productsPage.inStock') : t('productsPage.outOfStock')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="products-page__product-actions">
                      <button
                        className="products-page__inquiry-btn"
                        onClick={() => handleInquiry(product)}
                      >
                        <FaWhatsapp className="products-page__btn-icon" />
                        {t('productsPage.inquireBtn')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProductsPage;
