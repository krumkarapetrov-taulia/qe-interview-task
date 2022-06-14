import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, UserSettingsContext } from 'taulia-ui';
import { useTranslation } from 'react-i18next';

function HelloModal({ onRequestClose, open }) {
  const { name } = useContext(UserSettingsContext);
  const { t } = useTranslation();

  return (
    <Modal width={800} open={open} onRequestClose={onRequestClose}>
      <strong>{t('helloWorld.helloName', { name })}</strong>
      <hr />
      <Button onClick={onRequestClose} theme="primary" type="submit">
        Bye
      </Button>
    </Modal>
  );
}

HelloModal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

HelloModal.defaultProps = {
  open: true,
};

export default HelloModal;
