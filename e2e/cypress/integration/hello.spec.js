describe('Hello World', () => {
    it('should load Hello World page', () => {
        cy.visit('/');
        cy.get('#text').contains('world');
    });
});