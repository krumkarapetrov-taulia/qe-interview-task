import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { i18next } from 'taulia-ui';
import { initReactI18next } from 'react-i18next';

import UserSettingsProvider from './contexts/userSettingsProvider';
import { App } from './pages/App';
import { Dashboard } from './pages/Dashboard';
import { HelloWorld } from './pages/HelloWorld';
import { Exercise } from './pages/Exercise';
import { ToastsModals } from './pages/ToastsModals';
import { NotFound } from './pages/NotFound';
import TRANSLATIONS from './translations/translations';
import CONSTANTS from './globals';
import './main.scss';

i18next.use(initReactI18next).init({
  resources: TRANSLATIONS,
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: { escapeValue: false },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserSettingsProvider>
      <div className="app">
        <App />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            path={CONSTANTS.HELLO_WORLD_ENDPOINT}
            element={<HelloWorld />}
          />
          <Route
            path={CONSTANTS.TOASTS_MODALS_ENDPOINT}
            element={<ToastsModals />}
          />
          <Route path={CONSTANTS.EXERCISE} element={<Exercise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UserSettingsProvider>
  </BrowserRouter>
);
