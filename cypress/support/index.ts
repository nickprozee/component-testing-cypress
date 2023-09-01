import { mount } from 'cypress/react18';
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      zoekOpClassNaam(
        className: string,
        timeout?: number
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
