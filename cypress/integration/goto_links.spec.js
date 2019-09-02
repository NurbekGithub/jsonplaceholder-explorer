import "@testing-library/cypress/add-commands";

it("open links and find titles", () => {
  cy.visit("localhost:3000");

  // posts
  cy.getByText(/posts/).click();
  cy.get("h1").contains("Posts");
  // comments
  cy.getByText(/comments/).click();
  cy.get("h1").contains(/comments/i);
  // albums
  cy.getByText(/albums/).click();
  cy.get("h1").contains(/albums/i);
  // photos
  cy.getByText(/photos/).click();
  cy.get("h1").contains(/photos/i);
  // todos
  cy.getByText(/todos/).click();
  cy.get("h1").contains(/todos/i);
  // users
  cy.getByText(/users/).click();
  cy.get("h1").contains(/users/i);
});
