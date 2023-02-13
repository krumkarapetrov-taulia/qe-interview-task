describe('BadLink',() =>{

    it('should navigate to the bad link and get a 404 error',  () => {

        cy.visit('/');
        cy.visit('/omg-why-is-this-even-a-url-this-is-totally-wrong');
        cy.get('p').should('contain','We can\'t seem to find the page you\'re looking for.');
        cy.get('img').should('be.visible');
        cy.get('h2').should('contain', 'Error (404)');
        cy.get('.theme-light').click();
        cy.contains('Welcome').should('exist');

    });
});

