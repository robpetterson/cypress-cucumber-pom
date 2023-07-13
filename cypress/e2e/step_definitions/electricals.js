import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  import {electricals} from '@pages/Electricals'
import { televisions } from "@pages/Televisions";

// Create custom hooks with unique keys


  When("Customer hovers over Electricals link", () => {
    cy.setLocalStorage('myKey', 'myValue');
    cy.getLocalStorage('myKey').should('equal', 'myValue');

    cy.get('.header-wrapper-siteWide--5d435') 
      .should('exist') // Ensure the element is present before hovering
      .contains('Electricals')
      .trigger('mouseover', { force: true })

    
      
  });

  When("Customer clicks on Televisions link", () => {
      cy.get('[data-testid="nav-televisions"]') // Replace with the correct class selector
      .trigger('mouseover', { force: true }).click()
      cy.get('[data-test="allow-all"]').click();
      
  });

  Then ("The Televisions page will be displayed", () => {
   televisions.checkPageTitle();
    
});



  