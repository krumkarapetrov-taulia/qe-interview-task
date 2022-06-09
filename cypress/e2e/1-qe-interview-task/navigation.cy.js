describe('Navigation', () => {
  it('should navigate to quick links', () => {
    cy.visit('/');

    cy.contains('Welcome').should('exist');

    cy.visit('/hello');

    cy.get('[data-testid=selected-item-en-US]').should('exist');

    cy.go('back');

    cy.get('[data-testid=text-firstName]').should('exist');
  });
});
