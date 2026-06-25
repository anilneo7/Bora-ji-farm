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
          <p>{t('privacy.lastUpdated')}</p>
        </div>
      </div>

      <div className="privacy-page__container">
        <section className="privacy-page__section">
          <h2>{t('privacy.introTitle')}</h2>
          <p>
            {t('privacy.introDesc1')} <strong>Bora Ji Farms</strong>. {t('privacy.introDesc2')}
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>{t('privacy.noDataTitle')}</h2>
          <p>
            <strong>{t('privacy.noDataSubtitle')}</strong>
          </p>
          <p>
            {t('privacy.noDataDesc')}
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>{t('privacy.useOfDataTitle')}</h2>
          <p>
            {t('privacy.useOfDataDesc')}
          </p>
        </section>

        <section className="privacy-page__section">
          <h2>{t('privacy.contactTitle')}</h2>
          <p>
            {t('privacy.contactDesc')}
          </p>
          <div className="privacy-page__contact-info">
            <p><strong>Bora Ji Farms</strong></p>
            <p>Email: anilmehrar814@gmail.com</p>
            <p>Phone: +91 8285762242</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
