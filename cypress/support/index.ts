export {};

// Cypress element model: Chainable<JQuery<HTMLElement>>
// Dit is wat cypress terug geeft om dingen mee te kunnen doen. eg: cy.get('div') returned een Chainable<JQuery<HTMLElement>>
declare global {
  namespace Cypress {
    interface Chainable {
      zoekOpClassNaam(
        className: string,
        timeout?: number
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
