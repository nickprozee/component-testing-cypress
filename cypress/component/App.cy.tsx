import App from "../../src/App";

describe("Card.cy.tsx", () => {
  it("Renders the card in app", () => {
    cy.mount(<App />);
    cy.getCard();
  });

  it("Renders the card and changes content on click", () => {
    cy.mount(<App />);
    cy.klikGenereerButton();
  });
});