import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-page__header">
        <div className="privacy-page__header-overlay"></div>
        <div className="privacy-page__header-content">
          <h1>Privacy Policy</h1>
          <p>Last updated: June 2026</p>
        </div>
      </div>

      <div className="privacy-page__container">
        <section className="privacy-page__section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Bora Ji Farms</strong>. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>2. No Data Collection</h2>
          <p>
            <strong>We do not collect, store, or process any personal data from our users.</strong>
          </p>
          <p>
            Bora Ji Farms is designed to provide information about our products and services without requiring you to share any personal information. 
            When you browse our website, we do not use cookies or any other tracking technologies to gather personal data, identity data, contact data, or technical data.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>3. Use of Data</h2>
          <p>
            Because we do not collect any personal data, we do not use, share, or sell your information to any third parties under any circumstances. 
            Your privacy is fully guaranteed while browsing our site.
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <div className="privacy-page__contact-info">
            <p><strong>Bora Ji Farms</strong></p>
            <p>Email: support@borajifarms.com</p>
            <p>Phone: +91 8700304693</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
