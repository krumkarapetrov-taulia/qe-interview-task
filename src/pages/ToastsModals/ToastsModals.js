import React, { useState } from 'react';
import { Button, toast } from 'taulia-ui';
import HelloModal from './HelloModal';

function ToastsModals() {
  const [openModal, setOpenModal] = useState(false);

  const onToastClick = () =>
    toast.success('Go to ux.taulia.com to read the documentation');

  return (
    <>
      <div>
        <Button onClick={onToastClick} theme="primary">
          Toasty
        </Button>
        <Button onClick={() => setOpenModal(true)}>Modal</Button>
      </div>
      <HelloModal onRequestClose={() => setOpenModal(false)} open={openModal} />
    </>
  );
}

export default ToastsModals;
