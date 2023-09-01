import { DemoCard } from "../../src/components";

describe("Card.cy.tsx", () => {
  it("Renders the card", () => {
    cy.mount(
      <DemoCard
        title="Hello Universe?"
        content="Hello World!"
        onClick={() => {}}
      />
    );

    cy.get('[cypress-id=card-root]');
  });

  it("Renders the card and finds classname", () => {
    cy.mount(
      <DemoCard
        title="Hello Universe?"
        content="Hello World!"
        onClick={() => {}}
      />
    );

    cy.zoekOpClassNaam('MuiPaper');
  });
});