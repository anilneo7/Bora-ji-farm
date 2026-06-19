import React from 'react';
import { Link } from 'react-router-dom';
import './BlogComingSoon.css';

const BlogComingSoon = () => {
  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-clean-card">
        <div className="coming-soon-icon-container">
          <div className="icon-pulse-ring"></div>
          <svg className="coming-soon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </div>
        
        <div className="coming-soon-content">
          <h1 className="elegant-heading">Our Blog is Sprouting</h1>
          <p>We are cultivating fresh stories, recipes, and insights straight from the farm. Something beautiful is growing here.</p>
          
          <div className="coming-soon-actions">
            <Link to="/" className="btn-clean primary">
              <span className="btn-text">Return Home</span>
            </Link>
            <Link to="/products" className="btn-clean secondary">
              <span className="btn-text">Shop Fresh</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoon;
