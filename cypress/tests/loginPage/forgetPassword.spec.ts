describe('Forget Password Test', () => {

  beforeEach(() => {
    cy.visit("https://pcxstaging.primetechpa.com");    
  });

  it('Forget Password-Positive Test', () => {
    cy.document().should(doc => {
      const titletext = doc.title
      expect(titletext).to.eql('PCX - Sign in');
    })
    cy.contains("Forgot Password?").should("be.visible").click();
    cy.get("input[name='Email']").should("be.visible").type("deepakr@inzerotech.com");
    cy.get(".recaptcha-checkbox-border").check();
  });
  
});