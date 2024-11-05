class tabs_fields {
  signin() {
    return cy.contains("a", "Sign In");
  }
  email() {
    return cy.get("#account_sign_in_form_email_id");
  }
  password() {
    return cy.get("#account_sign_in_form_passwd_id");
  }
  signIn() {
    return cy.get(".btn.btn-primary.input_submit");
  }
  signout() {
    return cy.contains("a", "Sign Out");
  }
  apparel() {
    return cy.contains("a", "Apparel");
  }
  furniture() {
    return cy.contains("a", "Furniture");
  }
  sport() {
    return cy.get(".header-navigation > :nth-child(1) > :nth-child(5) > a");
  }
  digitaldistribution() {
    return cy.contains("a", "Digital Distribution");
  }
}

export default new tabs_fields();
