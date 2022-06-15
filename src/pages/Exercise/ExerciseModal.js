import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Modal, Spinner, UserSettingsContext } from 'taulia-ui';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ExerciseModal({ numberOfEmployees, onRequestClose, open }) {
  const { name } = useContext(UserSettingsContext);
  const [spinning, setSpinning] = useState(false);
  const { t } = useTranslation();
  const onSave = () => {
    const randTimeout = Math.floor(Math.random() * 1500) + 50;

    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);
      onRequestClose();
    }, randTimeout);
  };

  return (
    <Modal
      width={800}
      open={open}
      fadeClose={false}
      onRequestClose={onRequestClose}
      header="Example Modal"
      footerActions={[
        {
          title: 'Cancel',
          theme: 'text',
          onClick: onRequestClose,
        },
        {
          spinning,
          title: 'Save',
          theme: 'primary',
          onClick: onSave,
        },
      ]}
    >
      <strong>{t('helloWorld.helloName', { name })}</strong>
      <p>you have {numberOfEmployees} employees to review!</p>
      <p>
        <Link to="/hello">Go To Translations</Link>
      </p>
      {spinning ? <Spinner showBackground hasDelay={false} /> : null}
    </Modal>
  );
}

ExerciseModal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  numberOfEmployees: PropTypes.number,
};

ExerciseModal.defaultProps = {
  open: false,
  numberOfEmployees: 0,
};

export default ExerciseModal;
