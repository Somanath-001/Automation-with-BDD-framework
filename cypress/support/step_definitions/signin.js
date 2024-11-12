const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
// import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import tabs from "../page_objects/tabs";
let data1;
let data2;

//Scenario: Validate to the signin functionality with valid credentials
Given("Navigated to the avactis home screen", () => {
  cy.visit("http://localhost/avactis/");
});
When("I click on signin button", () => {
  cy.fixture("credentials.json").then((data) => {
    data1 = data[0];
    data2 = data[1];
  });
  tabs.signin().click();
});
Then("I should navigated to the my account screen", () => {
  cy.get("h1").should("contain.text", "My Account");
});
When("I type the valid email id", () => {
  tabs.email().type(data1.email);
});
When("I type the valid password", () => {
  tabs.password().type(data1.password);
});
When("I click on the signin button", () => {
  tabs.signIn().click();
});
Then("I should be directed to the My Account screen", () => {
  cy.url().should("includes", "home");
  cy.get("h1").should("contain.text", "My Account");
});

//Scenario: Validate to the signin functionality with invalid email
When("I type the invalid email id", () => {
  tabs.email().clear().type(data2.email);
});
Then("I should see the account and password could not findout  error", () => {
  cy.get(".note.note-danger").should(
    "have.text",
    "Account and password could not be identified. Try again or create an account."
  );
});
// Scenario:Validate to the signin functionality with invalid password
When("I type the invalid password", () => {
  tabs.password().clear().type(data2.password);
});

// Scenario:Validate signin successfull and unsuccessfull
When("I enter the email {string} and password {string}", (email, password) => {
  tabs.email().clear().type(email);
  tabs.password().clear().type(password);
});
Then("I should see the message {string}", (message) => {
  if (message === "My Account") {
    cy.url().should("include", "home");
    cy.get("h1").should("contain.text", "My Account");
  } else {
    cy.get(".note.note-danger").should("have.text", message);
  }
});
