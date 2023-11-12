describe('Logout function', () => {
  it('allows a user to log out with logout button', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#registerForm button[type=button]').contains('Login').click();
    cy.getAllLocalStorage().should('be.empty');
    cy.wait(1000);
    cy.get('#loginEmail').type(Cypress.env('pass_email'));
    cy.get('#loginPassword').type(Cypress.env('pass_password'));
    cy.get('#loginForm button[type=submit]').contains('Login').click();
    cy.wait(1000);
    cy.getAllLocalStorage().should('not.be.empty');
    cy.location('href').should('include', 'view=profile&name');
    cy.get('header button[type=button]').contains('Logout').click();
    cy.getAllLocalStorage().should('be.empty');
  });
});
