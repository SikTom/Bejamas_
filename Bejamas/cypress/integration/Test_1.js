/// <reference types="cypress" />

describe('Bejamas Recruitment Task Test 1', () => {

    beforeEach(() => {
      cy.visit(Cypress.env('url'));
    });
  
    it('Should not have a cart badge when the cart is empty', () => {
        cy.get('#__next > div > div > div > div:nth-child(2) > button > span').should('not.exist');
      });
  });
  