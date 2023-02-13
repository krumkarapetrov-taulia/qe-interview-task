describe('ToastNModals', () => {
  it('should go to Toast n Modals and check the toast message', () => {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('toasts-n-modals');
    cy.get('.theme-primary').click();
    cy.get('.Toastify__toast-body').should('contain', 'Go to ux.taulia.com');
  });

  it('should go to Toast and Modals and check the Modals popup and message', function() {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('toasts-n-modals');
    cy.get('.theme-light').click();
    cy.get('.tau-modal-body > strong').should('contain', 'Hello Jane Doe');
    cy.get('.tau-modal-body > .tau-button').click();
  });
});
