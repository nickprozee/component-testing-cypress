import { mount } from "cypress/react18";
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      zoekOpClassNaam(
        className: string,
        timeout?: number
      ): Chainable<JQuery<HTMLElement>>;

      klikGenereerButton(): Chainable<JQuery<HTMLElement>>;
      getVraag(): Chainable<JQuery<HTMLElement>>;
      getAntwoord(): Chainable<JQuery<HTMLElement>>;
      getCard(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
