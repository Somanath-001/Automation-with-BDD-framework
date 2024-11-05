// Given Navigated to the avactis home screen
//         When I click on signin button
//         Then I should navigated to the my account screen
//         And I type the valid email id
//         And I type the valid password
//         When I click on signin button

const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");

//         Then I should be directed to the My Account screen
Given("Navigated to the avactis home screen", () => {
  cy.visit("http://localhost/avactis/");
});
When("I click on signin button", () => {});
