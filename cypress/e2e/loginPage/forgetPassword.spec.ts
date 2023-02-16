import "cypress-iframe";
import { faker } from "@faker-js/faker";
describe("Forget Password Test", () => {
  beforeEach(() => {
    cy.visit("https://pcxstaging.primetechpa.com");
  });

  it("Forget Password-Positive Test", () => {
    cy.document().should((doc) => {
      const titletext = doc.title;
      expect(titletext).to.eql("PCX - Sign in");
    });
    cy.contains("Forgot Password?").should("be.visible").click();
    cy.get("input[name='Email']")
      .should("be.visible")
      .type("deepakr@inzerotech.com");
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
      .then(
      ($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find("span[role='checkbox']")
          .should("be.visible")
          .click();
      }
    );
  });

  it("Forget Password without click on Captcha", () => {
    cy.document().should((doc) => {
      const titletext = doc.title;
      expect(titletext).to.eql("PCX - Sign in");
    });
    cy.contains("Forgot Password?").should("be.visible").click();
    cy.get("input[name='Email']")
      .should("be.visible")
      .type(faker.internet.email());
    // cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
    //   .then(
    //   ($iframe) => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body)
    //       .find("span[role='checkbox']")
    //       .should("be.visible")
    //       .click();
    //   }
    // );
    cy.get('#forgot-password-button').should('be.visible').click();
    cy.get(".login-message-container div ul li").should('have.text', 'Please complete the Recaptcha');
    //Return to Login page 
    cy.contains("Return to Sign in").should('be.visible').click();
  });
});
