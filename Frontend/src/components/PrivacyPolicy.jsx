import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-page__header">
        <div className="privacy-page__header-overlay"></div>
        <div className="privacy-page__header-content">
          <h1>{t('privacy.title')}</h1>
          <p>{t('privacy.updated')}</p>
        </div>
      </div>

      <div className="privacy-page__container">
        <section className="privacy-page__section">
          <h2>{t('privacy.sec1Title')}</h2>
          <p>
            {t('privacy.sec1Desc')}
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>{t('privacy.sec2Title')}</h2>
          <p>
            <strong>{t('privacy.sec2Desc1')}</strong>
          </p>
          <p>
            {t('privacy.sec2Desc2')}
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>{t('privacy.sec3Title')}</h2>
          <p>
            {t('privacy.sec3Desc')}
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>{t('privacy.sec4Title')}</h2>
          <p>
            {t('privacy.sec4Desc')}
          </p>
          <div className="privacy-page__contact-info">
            <p><strong>{t('privacy.contactName')}</strong></p>
            <p>Email: support@borajifarms.com</p>
            <p>Phone: +91 8700304693</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
