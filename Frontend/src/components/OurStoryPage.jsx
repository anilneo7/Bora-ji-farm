import React, { useEffect, useState, useRef } from 'react';
import './OurStoryPage.css';
import farmImage from '../assets/farm_image.PNG';
import picture1 from '../assets/picture1.png';
import { FaGraduationCap, FaSeedling, FaUsers, FaHeart, FaLeaf } from 'react-icons/fa';

// Custom Hook for Scroll Reveal
const useScrollReveal = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin: "0px 0px -50px 0px" });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, [threshold]);

  return [domRef, isVisible];
};

const RevealSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section 
      ref={ref} 
      className={`story-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
};

const OurStoryPage = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax and scroll progress
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll progress percentage
  const scrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (totalHeight <= 0) return 0;
    return (scrollY / totalHeight) * 100;
  };

  return (
    <div className="story-page">
      {/* Scroll Progress Bar */}
      <div 
        className="story-progress-bar" 
        style={{ width: `${scrollProgress()}%` }}
      ></div>

      {/* Floating Background Particles */}
      <div className="story-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}>
            <FaLeaf />
          </div>
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <section className="story-hero">
        <div 
          className="story-hero__bg"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img src={farmImage} alt="Farm View" className="story-hero__img" />
          <div className="story-hero__overlay"></div>
        </div>
        <div className="story-hero__content">
          <h1 className="story-hero__title">Our Story</h1>
          <p className="story-hero__subtitle">From Corporate Boardrooms to Lush Green Fields</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="story-hero__scroll-indicator">
          <span>Discover</span>
          <div className="story-hero__mouse">
            <div className="story-hero__wheel"></div>
          </div>
        </div>
      </section>

      {/* Founder Highlight Section */}
      <section className="founder-highlight-section">
        <div className="founder-highlight-container glass-panel">
          <div className="founder-highlight-glow"></div>
          <div className="founder-highlight-layout">
            <div className="founder-highlight-image-column">
              <div className="founder-highlight-image-wrapper">
                <img src={picture1} alt="Owner & CEO" className="founder-highlight-image" />
              </div>
            </div>
            <div className="founder-highlight-content">
              <p className="founder-highlight-role">Owner & CEO</p>
              <h2 className="founder-highlight-name">Ganesh Singh Bora</h2>
              <h3 className="founder-highlight-title">The Visionary Behind Bora Ji Farms</h3>
              <div className="founder-highlight-divider"></div>
              <p className="founder-highlight-bio">
                Driven by a deep passion for sustainable agriculture and community empowerment, our founder built Bora Ji Farms from the ground up. 
              </p>
              <p className="founder-highlight-bio">
                Leaving behind a corporate career to return to the roots of Uttarakhand, the vision was clear: to create a thriving farm that prioritizes quality, freshness, and generating local employment. Today, that vision is a reality, delivering the finest products straight to your table while transforming the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="story-main">
        {/* Timeline vertical line */}
        <div className="story-timeline-line">
            <div className="story-timeline-line-progress" style={{ height: `${Math.min(100, Math.max(0, (scrollY - 200) / 15))}%` }}></div>
        </div>

        {/* The Beginning */}
        <RevealSection className="story-section--left">
          <div className="story-card glass-panel">
            <div className="story-card__glow"></div>
            <div className="story-card__icon-wrapper">
              <FaGraduationCap className="story-card__icon" />
            </div>
            <h2 className="story-card__title">The Corporate Years</h2>
            <p className="story-card__text">
              Armed with an MBA and big dreams, the journey began in the fast-paced corporate world. For over five years, the focus was on spreadsheets, meetings, and climbing the corporate ladder. While successful, there was always a yearning for something more meaningful—something closer to home and nature.
            </p>
          </div>
          <div className="story-timeline-dot"></div>
        </RevealSection>

        {/* The Transition */}
        <RevealSection className="story-section--right">
          <div className="story-timeline-dot"></div>
          <div className="story-card glass-panel">
            <div className="story-card__glow"></div>
            <div className="story-card__icon-wrapper">
              <FaSeedling className="story-card__icon" />
            </div>
            <h2 className="story-card__title">Return to Roots</h2>
            <p className="story-card__text">
              The turning point came when the realization dawned that true wealth isn't just financial. Leaving behind a lucrative corporate career, the decision was made to return to Uttarakhand. The goal? To start a farm that prioritizes quality, freshness, and sustainable practices.
            </p>
          </div>
        </RevealSection>

        {/* The Mission */}
        <RevealSection className="story-section--left">
          <div className="story-card glass-panel">
            <div className="story-card__glow"></div>
            <div className="story-card__icon-wrapper">
              <FaUsers className="story-card__icon" />
            </div>
            <h2 className="story-card__title">Empowering the Community</h2>
            <p className="story-card__text">
              Bora Ji Farms is more than just an agricultural enterprise. It was born out of a deep desire to cure the unemployment problem in Uttarakhand. By generating local employment and teaching modern farming techniques, we are building a thriving community and empowering our people.
            </p>
          </div>
          <div className="story-timeline-dot"></div>
        </RevealSection>

        {/* The Promise */}
        <RevealSection className="story-section--center">
          <div className="story-timeline-dot story-timeline-dot--final"></div>
          <div className="story-card glass-panel story-card--highlight">
            <div className="story-card__icon-wrapper">
              <FaHeart className="story-card__icon" />
            </div>
            <h2 className="story-card__title">Our Promise to You</h2>
            <p className="story-card__text">
              Today, our farm stands as a testament to hard work and vision. We are committed to providing you with the freshest, highest-quality poultry and farm products, delivered straight from our family farm to your table. When you choose Bora Ji Farms, you aren't just buying food; you're supporting a dream and a community.
            </p>
          </div>
        </RevealSection>
      </main>
    </div>
  );
};

export default OurStoryPage;
