describe("Dekstop header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 800);
    cy.get("[data-cy='desktop-header']").as("header");
  });

  it("Clicks internal links", () => {
    cy.get("@header").contains("Features").click();
    cy.url().should("include", "/#features");
    cy.go("back");

    cy.get("@header").contains("Support").click();
    cy.url().should("include", "/support");
    cy.go("back");

    cy.get("@header").contains("Login").click();
    cy.url().should("include", "/login");
    cy.go("back");

    cy.get("@header").contains("Sign Up").click();
    cy.url().should("include", "/signup");
    cy.go("back");

    cy.get("@header").contains("Dashboard").click();
    cy.url().should("include", "/dashboard");
    cy.go("back");
  });
});

describe("Mobile header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(400, 800);
    cy.get("[data-cy='desktop-mobile']").as("header");
  });

  it("Clicks internal links", () => {
    cy.get("[data-cy='hamburger']").click();

    cy.get("@header").contains("Features").click();
    cy.url().should("include", "/#features");
    cy.go("back");

    cy.get("[data-cy='hamburger']").click();

    cy.get("@header").contains("Support").click();
    cy.url().should("include", "/support");
    cy.go("back");

    cy.get("[data-cy='hamburger']").click();

    cy.get("@header").contains("Login").click();
    cy.url().should("include", "/login");
    cy.go("back");

    cy.get("[data-cy='hamburger']").click();

    cy.get("@header").contains("Sign Up").click();
    cy.url().should("include", "/signup");
    cy.go("back");
  });
});
