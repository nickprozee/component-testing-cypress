import App from "../../src/App";

describe("Card.cy.tsx", () => {
  it("Renders the card and finds classname", () => {
    cy.mount(<App />);
    cy.zoekOpClassNaam('MuiPaper');
  });
});