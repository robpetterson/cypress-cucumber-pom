class Televisions {
    checkPageTitle() {
        cy.title().should('eq', 'TVs | Televisions | John Lewis & Partners');
      }
}
export const televisions = new Televisions();