describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1400, 800);
    cy.get("[data-cy='footer']").as("footer");
  });

  it("Clicks internal links", () => {
    cy.get("@footer").contains("Support").click();
    cy.url().should("include", "/support");
    cy.go("back");

    cy.get("@footer").contains("Terms & Conditions").click();
    cy.url().should("include", "/terms");
    cy.go("back");

    cy.get("@footer").contains("Privacy Policy").click();
    cy.url().should("include", "/policy");
    cy.go("back");

    cy.get("@footer").contains("Login").click();
    cy.url().should("include", "/login");
    cy.go("back");

    cy.get("@footer").contains("Sign Up").click();
    cy.url().should("include", "/signup");
    cy.go("back");
  });
});
