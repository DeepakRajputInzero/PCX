describe("Login page Test", () => {
  beforeEach(() => {
    cy.visit("https://pcxstaging.primetechpa.com");    
  });

  it("Login Test- Positive Scenarioes- Valid Email Id and Password ", () => {
    //Enter Email
    cy.get("#login-email")
      .should("be.visible")
      .type("deepakr@inzerotech.com")
      .invoke("val")
      .then((myValue: any) => {
        cy.log(myValue);
      })
    //Eneter Password
    cy.get("input[name='Password']")
      .should("be.visible")
      .type("Deepak@605")
      .invoke("val")
      .then((myValue: any) => {
      cy.log(myValue);
      });
    //Click on Login Button
    cy.get("#login-button").should("be.visible").click();    
  });

  it("Login Test- Negative Scenarioes-Valid Email Id and Invalid Password ", () => {
    cy.get("#login-email").should("be.visible").type("deepakr@inzerotech.com");
    cy.get("input[name='Password']").should("be.visible").type("xyz");
    cy.get("#login-button").should("be.visible").click();
    
  });

  it("Login Test- Negative Scenarioes-Invalid Email Id and Invalid Password ", () => {
    cy.get("#login-email").should("be.visible").type("abc@r.com");
    cy.get("input[name='Password']").should("be.visible").type("xyz");
    cy.get("#login-button").should("be.visible").click();
    
  });

  it("Login Test- Negative Scenarioes-Invalid Email Id and Valid Password ", () => {
    cy.get("#login-email").should("be.visible").type("abc@r.com");
    cy.get("input[name='Password']").should("be.visible").type("Deepak@605");
    cy.get("#login-button").should("be.visible").click();
    
  });
});
