import "./commands";

// @ts-ignore
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();

require("@cypress/xpath");

require("cypress-plugin-tab");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
