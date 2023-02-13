Cypress.Commands.add('typeInField', (value,field) => {
    cy.get(field).clear().type(value);
});
Cypress.Commands.add('fillExerciseForm', (user, email, role)=>{
    cy.get('[data-testid="text-name"]').clear().type(user);
    cy.get('[data-testid="text-email"]').clear().type(email);
    cy.get('[data-testid="text-role"]').clear().type(role);
});

