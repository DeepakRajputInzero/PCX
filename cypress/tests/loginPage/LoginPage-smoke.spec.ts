
  it("Login test- Smoke Test", () => {   
    cy.visit("https://pcxstaging.primetechpa.com");
    cy.document().should(doc => {
      const titletext = doc.title
      expect(titletext).to.eql('PCX - Sign in');
    })
    cy.get("#login-email").should("be.visible").type("deepakr@inzerotech.com");
    cy.get("input[name='Password']").should("be.visible").type("Deepak@605");
    cy.get("#login-button").should("be.visible").click();    
    cy.contains("Sign Out").should("be.visible").click({ force: true });    
  });
