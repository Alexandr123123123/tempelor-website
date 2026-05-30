import React, { useEffect } from 'react';
import { Outlet, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LanguageProvider = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const supportedLanguages = ['fr', 'nl', 'en'];

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/fr" replace />;
  }

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <Outlet />;
};
