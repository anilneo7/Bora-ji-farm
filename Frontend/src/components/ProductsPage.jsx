import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import { FaShoppingCart, FaStar, FaTruck } from 'react-icons/fa';
import './ProductsPage.css';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'eggs', name: 'Fresh Eggs' },
    { id: 'chicken', name: 'Poultry' },
    { id: 'organic', name: 'Organic' }
  ];

  const products = [
    {
      id: 1,
      name: 'FRESH EGGS',
      category: 'eggs',
      description: 'Premium quality farm-fresh eggs from free-range chickens',
      price: '$4.99/dozen',
      image: '/src/assets/eggphoto.jpg',
      rating: 4.8,
      inStock: true,
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      name: 'FREE CHICKEN',
      category: 'chicken',
      description: 'Farm-fresh chicken, naturally raised without antibiotics',
      price: '$8.99/lb',
      image: '/src/assets/chicken.jpg',
      rating: 4.6,
      inStock: true,
      badge: 'PREMIUM'
    },
    {
      id: 3,
      name: 'ORGANIC EGGS',
      category: 'eggs',
      description: 'Certified organic eggs from pasture-raised chickens',
      price: '$6.99/dozen',
      image: '/src/assets/eggphoto.jpg',
      rating: 4.9,
      inStock: true,
      badge: 'ORGANIC'
    },
    {
      id: 4,
      name: 'HERB-ROASTED CHICKEN',
      category: 'chicken',
      description: 'Premium herb-roasted whole chicken with herbs and spices',
      price: '$12.99/each',
      image: '/src/assets/chicken.jpg',
      rating: 4.7,
      inStock: false,
      badge: 'OUT OF STOCK'
    },
    {
      id: 5,
      name: 'BROWN EGGS',
      category: 'eggs',
      description: 'Nutrient-rich brown eggs from heritage breed chickens',
      price: '$5.49/dozen',
      image: '/src/assets/eggphoto.jpg',
      rating: 4.5,
      inStock: true,
      badge: 'HERITAGE'
    },
    {
      id: 6,
      name: 'GRILLED CHICKEN BREAST',
      category: 'chicken',
      description: 'Tender grilled chicken breast, perfect for healthy meals',
      price: '$9.99/lb',
      image: '/src/assets/chicken.jpg',
      rating: 4.8,
      inStock: true,
      badge: 'LEAN'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="products-page">
      <Navbar />
      
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
              <div className="products-page__hero-bubble"></div>
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
                        <span className="products-page__price-label">Price:</span>
                        <span className="products-page__price-value">{product.price}</span>
                      </div>
                      
                      <div className="products-page__product-stock">
                        <span className={`products-page__stock-status ${!product.inStock ? 'products-page__stock-status--out' : ''}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="products-page__product-actions">
                      <Button 
                        variant="primary" 
                        size="small"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className="products-page__add-to-cart"
                      >
                        <FaShoppingCart className="products-page__cart-icon" />
                        Add to Cart
                      </Button>
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
                  <FaShoppingCart />
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

      <Footer />
    </div>
  );
};

export default ProductsPage;
