import React, { useState } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import { FaStar, FaTruck, FaLeaf, FaWhatsapp, FaStore } from 'react-icons/fa';
import './ProductsPage.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'eggs', name: 'Fresh Eggs' },
    { id: 'chicken', name: 'Poultry' }
  ];

  const products = [
    {
      id: 1,
      name: 'FRESH EGGS',
      category: 'eggs',
      description: 'Premium quality farm-fresh eggs from free-range chickens',
      price: '₹60/dozen',
      image: '/src/assets/FRESH_EGGS.jpg',
      rating: 4.8,
      inStock: true,
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'BROILER CHICKEN',
      category: 'chicken',
      description: 'High-quality broiler chicken, tender and perfect for roasting or grilling',
      price: '₹150/kg',
      image: '/src/assets/Broiler_chicken.jpg',
      rating: 4.7,
      inStock: true,
      badge: 'FRESH'
    },
    {
      id: 3,
      name: 'ORGANIC EGGS',
      category: 'eggs',
      description: 'Certified organic eggs from pasture-raised chickens',
      price: '₹80/dozen',
      image: '/src/assets/FRESH_EGGS.jpg',
      rating: 4.9,
      inStock: true,
      badge: 'ORGANIC'
    },
    {
      id: 4,
      name: 'LAYER CHICKEN',
      category: 'chicken',
      description: 'Farm-raised layer chicken, ideal for traditional recipes and soup stocks',
      price: '₹200/each',
      image: '/src/assets/layer_chicken.jpg',
      rating: 4.5,
      inStock: true,
      badge: 'POPULAR'
    },
    {
      id: 5,
      name: 'BROWN EGGS',
      category: 'eggs',
      description: 'Nutrient-rich brown eggs from heritage breed chickens',
      price: '₹75/dozen',
      image: '/src/assets/BROWN_EGGS.jpg',
      rating: 4.5,
      inStock: true,
      badge: 'HERITAGE'
    },
    {
      id: 6,
      name: 'KADAKNATH CHICKEN',
      category: 'chicken',
      description: 'Famous black chicken breed, highly valued for its rich nutritional and medicinal qualities',
      price: '₹550/each',
      image: '/src/assets/Kadaknath_chicken.jpg',
      rating: 4.9,
      inStock: true,
      badge: 'EXOTIC'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleInquiry = (product) => {
    const whatsappNumber = '918700304693';
    const message = encodeURIComponent(`Hi, I'm interested in ${product.name}. Is it available?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="products-page">
      {/* <Navbar /> */}
      
      {/* Breadcrumb Navigation */}
      <nav className="products-page__breadcrumb">
        <div className="products-page__breadcrumb-container">
          <a href="#home" className="products-page__breadcrumb-link">Home</a>
          <span className="products-page__breadcrumb-separator">/</span>
          <a href="#products" className="products-page__breadcrumb-link">Products</a>
        </div>
      </nav>
      
      <main className="products-page__main">
        {/* Hero Section */}
        <section className="products-page__hero">
          <div className="products-page__hero-content">
            <div className="products-page__hero-text">
              <h1 className="products-page__hero-title">
                Our Premium Farm Products
              </h1>
              <p className="products-page__hero-description">
                From farm-fresh eggs to premium poultry, discover the finest quality products 
                straight from our family farm to your table.
              </p>
            </div>
            <div className="products-page__hero-image">
              <div className="products-page__hero-glass-card">
                <FaLeaf className="products-page__hero-glass-icon" />
                <span className="products-page__hero-glass-text">100% Organic Farm</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="products-page__categories">
          <div className="products-page__categories-container">
            <h2 className="products-page__section-title">Shop by Category</h2>
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
              * Note: The prices listed below are approximate and may vary. Please confirm the final price when making an inquiry on WhatsApp.
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
                        <span className="products-page__price-label">Price</span>
                        <span className="products-page__price-value">{product.price}</span>
                      </div>
                      
                      <div className="products-page__product-stock">
                        <span className={`products-page__stock-status ${!product.inStock ? 'products-page__stock-status--out' : ''}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="products-page__product-actions">
                      <button
                        className="products-page__inquiry-btn"
                        onClick={() => handleInquiry(product)}
                      >
                        <FaWhatsapp className="products-page__btn-icon" />
                        Inquire on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="products-page__features">
          <div className="products-page__features-container">
            <h2 className="products-page__section-title">Why Choose Our Products?</h2>
            <div className="products-page__features-grid">
              <div className="products-page__feature-card">
                <div className="products-page__feature-icon">
                  <FaTruck />
                </div>
                <h3 className="products-page__feature-title">Free Delivery</h3>
                <p className="products-page__feature-description">
                  Free delivery on orders over $50 within 20 miles radius
                </p>
              </div>
              
              <div className="products-page__feature-card">
                <div className="products-page__feature-icon">
                  <FaStar />
                </div>
                <h3 className="products-page__feature-title">Quality Guaranteed</h3>
                <p className="products-page__feature-description">
                  100% satisfaction guarantee on all our farm products
                </p>
              </div>
              
              <div className="products-page__feature-card">
                <div className="products-page__feature-icon">
                  <FaStore />
                </div>
                <h3 className="products-page__feature-title">Farm Fresh</h3>
                <p className="products-page__feature-description">
                  All products are harvested and delivered fresh daily
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
