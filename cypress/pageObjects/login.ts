class Login {
  ID_TB = "#login-email";
  PASS_TB = "input[name='Password']";  
  LOGIN_BTN = "#login-button";

  navigation() {
    cy.visit("/");
  }

  enterUserID(username) {
    return cy.get(this.ID_TB).type(username);
  }

  enterPassword(password) {
    return cy.get(this.PASS_TB).type(password, { log: false });
  }  

  clickOnLoginButton() {
    return cy.get(this.LOGIN_BTN).click();
  }

  loginToApp(username, password, type) {
    cy.get(this.ID_TB).type(username);
    cy.get(this.PASS_TB).type(password, { log: false });    
    cy.get(this.LOGIN_BTN).click();   
    return this;
  }  
}

export default Login;
