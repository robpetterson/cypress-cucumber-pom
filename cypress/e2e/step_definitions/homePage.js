import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {johnLewisHomePage} from '@pages/JohnLewisHomePage'
  
  Given("A Customer is on the John Lewis Home Page", () => {
    cy.visit("/");
  });