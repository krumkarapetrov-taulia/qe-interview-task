describe('Home', () => {
  it('should update the welcome message when you enter your names', () => {
    cy.visit('/');
    cy.get('#root p').should(
      'contain',
      'Welcome to the Taulia template app, Jane Doe!'
    );
    cy.contains('First Name').should('exist');
    cy.contains('Last Name').should('exist');
    cy.typeInField('Krum', '[data-testid="text-firstName"]');
    cy.typeInField('Karapetrov', '[data-testid="text-lastName"]');

    cy.get('.tau-button').click();
    cy.get('#root p').should(
      'contain',
      'Welcome to the Taulia template app, Krum Karapetrov!'
    );
  });

  it('should not allow submitting of the form with an empty required field', function() {
    cy.visit('/');
    cy.get('#root p').should(
      'contain',
      'Welcome to the Taulia template app, Jane Doe!'
    );
    cy.contains('First Name').should('exist');
    cy.contains('Last Name').should('exist');
    cy.typeInField('Krum', '[data-testid="text-firstName"]');
    cy.get('[data-testid="text-lastName"]').clear();
    cy.get('[data-testid="text-firstName"]').click();
    cy.get(':nth-child(3) > .tau-field-error').should(
      'contain',
      'Required Field'
    );
    cy.get('.tau-button').should('be.disabled');
  });
});
