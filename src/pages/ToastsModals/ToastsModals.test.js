import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ModalContainer, ToastContainer } from 'taulia-ui';
import ToastsModals from './ToastsModals';

describe('Toasts n Modals', () => {
  test('opens and closes the modal', () => {
    const { container, queryByText } = render(
      <>
        <ModalContainer />
        <ToastsModals />
      </>
    );

    expect(queryByText('Hiya!')).not.toBeInTheDocument();
    const modalButton = queryByText('Modal');
    fireEvent.click(modalButton);
    expect(queryByText('Hiya!')).toBeInTheDocument();
    fireEvent.keyDown(container, { key: 'Escape', keyCode: 27 });
    expect(queryByText('Hiya!')).not.toBeInTheDocument();
  });

  test('toasts a toast', async () => {
    const { queryByText } = render(<ToastsModals />);

    const { getByText: getByToastText } = render(<ToastContainer />);

    const toastButton = queryByText('Toasty');
    fireEvent.click(toastButton);
    await waitFor(() =>
      expect(
        getByToastText('Go to ux.taulia.com to read the documentation')
      ).toBeInTheDocument()
    );
  });
});
