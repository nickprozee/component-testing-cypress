import App from "../../src/App";

describe("Card.cy.tsx", () => {
  it("Renders the card in app", () => {
    cy.mount(<App />);
    cy.getCard();
  });

  it("Changes the joke content on click", () => {
    cy.mount(<App />);

    cy.getVraag().then((vraag) => {
      cy.klikGenereerButton();

      cy.getVraag().then((_vraag) => {

        cy.wrap(_vraag).should('not.eq', vraag);
        cy.wrap(_vraag).should('eq', _vraag);
        
      });
    });
  });

  it("Changes the answer content on click", () => {
    cy.mount(<App />);

    cy.getAntwoord().then((antwoord) => {
      cy.klikGenereerButton();

      cy.getAntwoord().then((_antwoord) => {

        cy.wrap(_antwoord).should('not.eq', antwoord);
        cy.wrap(_antwoord).should('eq', _antwoord);
        
      });
    });
  });
});
