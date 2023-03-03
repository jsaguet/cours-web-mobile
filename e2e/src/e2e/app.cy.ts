describe('cours-web-mobile', () => {
  beforeEach(() => cy.visit('/'));

  it('should display "Next" button', () => {
    cy.get('#next').contains('Next');
  });

  it('should display "Like" button', () => {
    cy.get('#like').contains('Like');
  });

  it('should display liked joke', () => {
    cy.get('#liked-jokes > app-joke').should('have.length', 0);

    cy.get('#like').click();

    cy.get('#liked-jokes > app-joke').should('have.length', 1);
  });

  it('should display liked joke', () => {
    cy.get('#liked-jokes > app-joke').should('have.length', 0);

    cy.get('#like').click();

    cy.get('#liked-jokes > app-joke').should('have.length', 1);
  });
});
