import React from 'react';
import { Button } from 'taulia-ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleBack = e => {
    e.preventDefault();
    navigate(-1);
  };
  const handleBackToHome = e => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="not-found-404">
      <img height="400" src="https://http.cat/404" alt={t('notFound.error')} />
      <h2>{t('notFound.error')}</h2>
      <p>{t('notFound.cantFind')}</p>
      <Button onClick={handleBack} theme="primary">
        {t('notFound.back')}
      </Button>
      <Button onClick={handleBackToHome} theme="light">
        {t('notFound.backHome')}
      </Button>
    </div>
  );
}

export default NotFound;
