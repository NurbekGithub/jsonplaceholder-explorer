import "@testing-library/cypress/add-commands";

it("Opens app on localhost:3000", () => {
  cy.visit("localhost:3000");

  // header
  cy.getByText(/home/i);
  cy.getByText(/posts/);
  cy.getByText(/comments/);
  cy.getByText(/albums/);
  cy.getByText(/photos/);
  cy.getByText(/todos/);
  cy.getByText(/users/);

  // content
  cy.getByText("Welcome to jsonplaceholder");
});
