/// <reference types="cypress" />

describe('Bejamas Recruitment Task Test 2', () => {

    beforeEach(() => {
      cy.visit(Cypress.env('url'));
    });
  
    it('Should have 6 products per page', () => {
      cy.wait(3000); 
      
      cy.document().then((doc) => {
        const textContent = doc.body.textContent;
        const dollarSignCount = (textContent.match(/\$/g) || []).length;
        expect(dollarSignCount).to.equal(12);
      });
    });
  });
  