describe('Navigation', () => {
  it('should navigate from home to greetings and back to home links', () => {
    cy.visit('/');

    cy.contains('Welcome').should('exist');
    cy.visit('/hello');
    cy.contains('Hello Jane Doe').should('exist');
    cy.contains('English (US)').should('exist');
    cy.go('back');
    cy.contains('First Name').should('exist');
  });

  it('should navigate through all available navigation options successfully', () => {

    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/hello');
    cy.get('h2').should('contain', 'Hello Jane Doe');
    cy.contains('English (US)').should('exist');
    cy.visit('/toasts-n-modals');
    cy.contains('Toasty').should('exist');
    cy.contains('Modal').should('exist');
    cy.visit('/exercise');
    cy.contains('Full Name').should('exist');
    cy.contains('Email').should('exist');
    cy.contains('Role').should('exist');
    cy.visit('/omg-why-is-this-even-a-url-this-is-totally-wrong');
    cy.get('h2').should('contain', 'Error (404)');


  });

});
