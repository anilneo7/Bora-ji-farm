import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './OurStoryPage.css';
import farmImage from '../assets/farm_image.jpeg';
import picture1 from '../assets/picture1.jpeg';
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
  const { t } = useTranslation();

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
          <h1 className="story-hero__title">{t('story.heroTitle')}</h1>
          <p className="story-hero__subtitle">{t('story.heroSubtitle')}</p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="story-hero__scroll-indicator">
          <span>{t('story.discover')}</span>
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
              <p className="founder-highlight-role">{t('story.ownerRole')}</p>
              <h2 className="founder-highlight-name">{t('story.ownerName')}</h2>
              <h3 className="founder-highlight-title">{t('story.ownerTitle')}</h3>
              <div className="founder-highlight-divider"></div>
              <p className="founder-highlight-bio">
                {t('story.ownerBio1')} 
              </p>
              <p className="founder-highlight-bio">
                {t('story.ownerBio2')}
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
            <h2 className="story-card__title">{t('story.corpTitle')}</h2>
            <p className="story-card__text">
              {t('story.corpDesc')}
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
            <h2 className="story-card__title">{t('story.rootsTitle')}</h2>
            <p className="story-card__text">
              {t('story.rootsDesc')}
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
            <h2 className="story-card__title">{t('story.missionTitle')}</h2>
            <p className="story-card__text">
              {t('story.missionDesc')}
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
            <h2 className="story-card__title">{t('story.promiseTitle')}</h2>
            <p className="story-card__text">
              {t('story.promiseDesc')}
            </p>
          </div>
        </RevealSection>
      </main>
    </div>
  );
};

export default OurStoryPage;
