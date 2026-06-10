import React, { useEffect } from 'react';
import './OurStoryPage.css';
import farmImage from '../assets/farm_image.PNG';
import { FaGraduationCap, FaSeedling, FaUsers, FaHeart } from 'react-icons/fa';

const OurStoryPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="story-page">
      {/* Hero Section */}
      <section className="story-hero">
        <div className="story-hero__bg">
          <img src={farmImage} alt="Farm View" className="story-hero__img" />
          <div className="story-hero__overlay"></div>
        </div>
        <div className="story-hero__content">
          <h1 className="story-hero__title">Our Story</h1>
          <p className="story-hero__subtitle">From Corporate Boardrooms to Lush Green Fields</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="story-main">
        {/* The Beginning */}
        <section className="story-section story-section--left">
          <div className="story-card glass-panel">
            <div className="story-card__icon-wrapper">
              <FaGraduationCap className="story-card__icon" />
            </div>
            <h2 className="story-card__title">The Corporate Years</h2>
            <p className="story-card__text">
              Armed with an MBA and big dreams, the journey began in the fast-paced corporate world. For over five years, the focus was on spreadsheets, meetings, and climbing the corporate ladder. While successful, there was always a yearning for something more meaningful—something closer to home and nature.
            </p>
          </div>
        </section>

        {/* The Transition */}
        <section className="story-section story-section--right">
          <div className="story-card glass-panel">
            <div className="story-card__icon-wrapper">
              <FaSeedling className="story-card__icon" />
            </div>
            <h2 className="story-card__title">Return to Roots</h2>
            <p className="story-card__text">
              The turning point came when the realization dawned that true wealth isn't just financial. Leaving behind a lucrative corporate career, the decision was made to return to Uttarakhand. The goal? To start a farm that prioritizes quality, freshness, and sustainable practices.
            </p>
          </div>
        </section>

        {/* The Mission */}
        <section className="story-section story-section--left">
          <div className="story-card glass-panel">
            <div className="story-card__icon-wrapper">
              <FaUsers className="story-card__icon" />
            </div>
            <h2 className="story-card__title">Empowering the Community</h2>
            <p className="story-card__text">
              Bora Ji Farms is more than just an agricultural enterprise. It was born out of a deep desire to cure the unemployment problem in Uttarakhand. By generating local employment and teaching modern farming techniques, we are building a thriving community and empowering our people.
            </p>
          </div>
        </section>

        {/* The Promise */}
        <section className="story-section story-section--center">
          <div className="story-card glass-panel story-card--highlight">
            <div className="story-card__icon-wrapper">
              <FaHeart className="story-card__icon" />
            </div>
            <h2 className="story-card__title">Our Promise to You</h2>
            <p className="story-card__text">
              Today, our farm stands as a testament to hard work and vision. We are committed to providing you with the freshest, highest-quality poultry and farm products, delivered straight from our family farm to your table. When you choose Bora Ji Farms, you aren't just buying food; you're supporting a dream and a community.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurStoryPage;
