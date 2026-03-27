import React from 'react'
import Slider from './Slider'
import ProductsSection from './ProductsSection'
import brandLogo from '../assets/Bora ji farmlogo.png'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <main className="main-content">
        <section className="brand-hero">
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
                <button className="brand-hero__btn secondary">
                  LEARN MORE
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
