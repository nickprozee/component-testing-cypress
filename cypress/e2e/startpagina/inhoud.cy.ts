describe('Controleer startpagina componenten op textuele inhoud', function () {
  beforeEach(() => cy.visit('https://google.com'));

  it('Heeft 3 Jumbotrons met juiste inhoud', function () {
    cy.zoekOpClassNaam('gLFyf');
  });
});
