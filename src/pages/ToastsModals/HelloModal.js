import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'taulia-ui';

function HelloModal({ onRequestClose, open }) {
  return (
    <Modal width={800} open={open} onRequestClose={onRequestClose}>
      <strong>Hiya!</strong>
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
