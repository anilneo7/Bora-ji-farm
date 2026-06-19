import React from 'react'
import Slider from './Slider'
import ProductsSection from './ProductsSection'
import brandLogo from '../assets/Bora ji farmlogo.png'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();

  const handleVisitStore = () => {
    const element = document.getElementById('location-card');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Remove class if already exists to restart animation
      element.classList.remove('location-section__detail-item--highlight');
      
      // Force reflow
      void element.offsetWidth;
      
      // Add the highlight class
      element.classList.add('location-section__detail-item--highlight');
      
      // Remove class after animation ends (3000ms)
      setTimeout(() => {
        element.classList.remove('location-section__detail-item--highlight');
      }, 2000);
    }
  };

  return (
    <>
      <main className="main-content">
        <section className="brand-hero">
          {/* Background Bubbles */}
          <div className="background-bubbles">
            <div className="bubble bubble--1"></div>
            <div className="bubble bubble--2"></div>
            <div className="bubble bubble--3"></div>
            <div className="bubble bubble--4"></div>
            <div className="bubble bubble--5"></div>
          </div>
          <div className="brand-hero__container">
            <div className="brand-hero__logo">
              <img src={brandLogo} alt="BORA JI FARMS" className="brand-hero__logo-img" />
            </div>
            <div className="brand-hero__content">
              <div className="brand-hero__badge">
                <span>EST. 2020</span>
              </div>
              <h1 className="brand-hero__title">
                Welcome to <span className="brand-highlight">BORA JI FARMS</span>
              </h1>
              <p className="brand-hero__subtitle">
                Premium quality poultry products with farm-fresh goodness
              </p>
              <div className="brand-hero__cta">
                <button 
                  className="brand-hero__btn primary"
                  onClick={() => navigate('/products')}
                >
                  EXPLORE PRODUCTS
                </button>
                <button 
                  className="brand-hero__btn secondary"
                  onClick={handleVisitStore}
                >
                  VISIT STORE
                </button>
              </div>
            </div>
          </div>
          <div className="brand-hero__decoration">
            <div className="brand-hero__circle brand-hero__circle--1"></div>
            <div className="brand-hero__circle brand-hero__circle--2"></div>
            <div className="brand-hero__circle brand-hero__circle--3"></div>
          </div>
        </section>
      </main>
      <Slider />
      <ProductsSection />
    </>
  )
}

export default HomePage
