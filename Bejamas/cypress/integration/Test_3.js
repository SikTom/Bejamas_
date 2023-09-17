/// <reference types="cypress" />

describe('Bejamas Recruitment Task Tests 3', () => {

    beforeEach(() => {
      cy.visit(Cypress.env('url'));
    });
  
    it('Should have the Bejamas logo with the specified height', () => {
      cy.get('#__next > div > div > div > div:nth-child(1) > svg').should('have.css', 'height', '25.2px');
    });
  });
  