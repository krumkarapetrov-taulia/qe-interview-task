describe('Greetings', () =>{

  it("should give the correct greeting of the selected language when selected from the dropdown", () => {

    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/hello');
    cy.contains('English (US)').should('exist');
    cy.get('[data-testid="select-trigger"]').click();
    cy.get('[data-testid="option-en-GB"]').click()
    cy.get('.placeholder').should('contain', 'English (UK)');
    cy.get('h2').should('contain', 'Ello Jane Doe');
    cy.get('[data-testid="select-trigger"]').click();
    cy.get('[data-testid="option-sv-SE"]').click();
    cy.get('h2').should('contain','Hej Jane Doe');

  });

  it("should change the greeting depending on the selection from the radio buttons", () => {

    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/hello');
    cy.contains('English (US)').should('exist');
    cy.get('h2').should('contain','Hello Jane Doe');
    cy.get(':nth-child(2) > .input > .icon')
      .should('not.be.checked')
      .click();
    cy.get('h2').should('contain','Hello world!');

  });

});