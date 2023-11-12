describe('Form validation test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('#registerForm button[type=button]').contains('Login').click();
    cy.wait(1000);
  });

  it('should not allow empty email field when logging in', () => {
    cy.get('#loginEmail').type(' ');
    cy.get('#loginEmail:invalid').should('exist');
  });

  it('should not allow empty password field when logging in', () => {
    cy.get('#loginEmail').type(Cypress.env('pass_email'));
    cy.get('#loginPassword:invalid').should('exist');
  });

  it('should not allow a wrong email when logging in', () => {
    cy.get('#loginEmail').type(Cypress.env('fail_email'));
    cy.get('#loginEmail:invalid').should('exist');
    cy.on('window:alert', (alert) => {
      expect(alert).to.contains('User email or password is incorrect.');
    });
  });

  it('should not allow a wrong password when logging in', () => {
    cy.get('#loginEmail').type(Cypress.env('pass_email'));
    cy.get('#loginPassword').type(Cypress.env('fail_password'));
    cy.get('#loginForm button[type=submit]').contains('Login').click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.contains('User email or password is incorrect.');
    });
  });
});
