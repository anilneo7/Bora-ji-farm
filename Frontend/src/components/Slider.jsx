import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/src/assets/farmSlider1.png',
      title: 'Quality Poultry Products',
      subtitle: 'Farm-fresh goodness delivered to your table',
      buttonText: 'EXPLORE PRODUCTS'
    },
    {
      id: 2,
      image: '/src/assets/farmSlider2.png',
      title: 'Sustainable Farming Practices',
      subtitle: 'Committed to animal welfare and environmental stewardship',
      buttonText: 'OUR STORY'
    },
    {
      id: 3,
      image: '/src/assets/farmSlider3.png',
      title: 'Delicious Recipes & Ideas',
      subtitle: 'Discover amazing ways to enjoy our premium products',
      buttonText: 'VIEW RECIPES'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider__slide ${index === currentSlide ? 'slider__slide--active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="slider__image"
              />
              <div className="slider__overlay">
                <div className="slider__content">
                  <h1 className="slider__title">{slide.title}</h1>
                  <p className="slider__subtitle">{slide.subtitle}</p>
                  <Button 
                    variant="primary" 
                    size="large"
                    onClick={() => console.log(`${slide.buttonText} clicked`)}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="slider__nav slider__nav--prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button 
          className="slider__nav slider__nav--next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="slider__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider__dot ${index === currentSlide ? 'slider__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
