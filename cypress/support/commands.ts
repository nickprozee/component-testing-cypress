import { mount } from "cypress/react18";

Cypress.Commands.add("mount", mount);

Cypress.Commands.add("zoekOpClassNaam", function (className, timeout) {
  return cy.get(`*[class^="${className}"]`, { timeout: timeout ?? 5000 });
});

Cypress.Commands.add("klikGenereerButton", function () {
  return cy.get(`[cypress-id=card-button]`).click();
});
Cypress.Commands.add("getCard", function () {
  return cy.get(`[cypress-id=card-root]`).click();
});

Cypress.Commands.add("getVraag", function () {
  return cy.get(`[cypress-id=card-title]`);
});

Cypress.Commands.add("getAntwoord", function () {
  return cy.get(`[cypress-id=card-content]`);
});
