import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { ModalContainer, ToastContainer, UserSettingsContext } from 'taulia-ui';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const { name } = useContext(UserSettingsContext);

  useEffect(() => {
    // Get language preference and set it in i18n
    i18n.changeLanguage('en-US');
  }, [i18n]);

  return (
    <>
      <Helmet title="Demo app" />
      <div className="link-container">
        <strong>{name}</strong>
        <Link to="/">Home</Link>
        <Link to="/hello">Translated Greetings</Link>
        <Link to="/toasts-n-modals">Toasts n Modals</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/omg-why-is-this-even-a-url-this-is-totally-wrong">
          Bad link
        </Link>
      </div>
      <ModalContainer />
      <ToastContainer />
    </>
  );
}

export default App;
