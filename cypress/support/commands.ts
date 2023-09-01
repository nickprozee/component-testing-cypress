import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', mount);

// cypress/support/index.ts
Cypress.Commands.add('zoekOpClassNaam', function (className, timeout) {
  return cy.get(`*[class^="${className}"]`, { timeout: timeout ?? 5000 });
});
