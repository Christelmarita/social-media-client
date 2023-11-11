describe('Successful Login and Access Profile', () => {
  it('successfully logs in and accesses the profile', () => {
    cy.visit('/');
    cy.get('#registerModal').contains('Login').click();
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(Cypress.env('pass_email'));
    cy.get('#loginPassword').type(Cypress.env('pass_password'));
    cy.get('#loginModal #login-button', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.url().should('include', '/profile');
  });
});
