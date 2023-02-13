describe('Exercise', () => {
  const user = 'Krum Karapetrov';
  const email = 'someemail@email.com';
  const role = 'Admin';
  const wrongEmail = 'someemail.com';

  it('should go to Exercise page and create a new user with role Admin', () => {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/exercise');
    cy.contains('Full Name').should('exist');
    cy.contains('Email').should('exist');
    cy.contains('Role').should('exist');
    cy.fillExerciseForm(user, email, role);
    cy.get('.submit')
      .should('be.enabled')
      .click();
    cy.contains('td', user)
      .siblings()
      .should('contain', email)
      .should('contain', role);
  });

  it('should display correct message when open modals button is pressed', () => {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/exercise');
    let count = 0;
    cy.get('.table-wrapper tbody').then($tbody => {
      count = $tbody.find('tr').length;
      cy.get('div > .tau-button')
        .should('be.visible')
        .click();
      cy.get('[data-testid="modal-header"]').should('contain', 'Example Modal');
      cy.get('.tau-modal-body')
        .should('contain', 'Hello Jane Doe')
        .should('contain', 'you have ' + count + ' employees to review!');
      cy.get('[data-testid="modal-footer"] > .tau-button').click();
    });
  });

  it('should not allow user email and role fields to be left empty and give warnings', function() {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/exercise');
    cy.contains('Full Name').should('exist');
    cy.contains('Email').should('exist');
    cy.contains('Role').should('exist');
    cy.get('[data-testid="text-name"]').clear();
    cy.get('[data-testid="text-email"]').clear();
    cy.get('[data-testid="text-role"]').clear();
    cy.get('[data-testid="text-name"]').click();
    cy.get('.tau-field-error').should('contain', 'Required Field');
    cy.get(':nth-child(3) > .tau-field-error').should(
      'contain',
      'Required Field'
    );
    cy.get('.tau-field-error > span').should('contain', 'Required Field');
  });

  it('should check that submit button is not active when one of required fields is empty', () => {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/exercise');
    cy.contains('Full Name').should('exist');
    cy.contains('Email').should('exist');
    cy.contains('Role').should('exist');
    cy.fillExerciseForm(user, email, '{backspace}');
    cy.get('.submit').should('be.disabled');
  });

  it('should not allow the usage of an e-mail in an incorrect format', function() {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/exercise');
    cy.contains('Full Name').should('exist');
    cy.contains('Email').should('exist');
    cy.contains('Role').should('exist');
    cy.fillExerciseForm(user, wrongEmail, role);
    cy.get('.tau-field-error > span')
      .should('be.visible')
      .should('contain', 'Invalid email');
    cy.get('.submit').should('be.disabled');
  });

  it('handle credentials in scripts different than Roman', function() {
    cy.visit('/');
    cy.contains('Welcome').should('exist');
    cy.visit('/exercise');
    cy.contains('Full Name').should('exist');
    cy.contains('Email').should('exist');
    cy.contains('Role').should('exist');
    cy.fillExerciseForm('Крум Карапетров', email, 'Администратор');
    cy.get('.submit')
      .should('be.enabled')
      .click();
    cy.contains('td', 'Крум Карапетров')
      .siblings()
      .should('contain', email)
      .should('contain', 'Администратор');
  });
});
