class LoginPage {
    elements = {
        loginPage: () => cy.get('.login-page'),
        registerNewPatientButton: () => cy.get('#mohc-register-button')
    }

    waitForLoginPageVisible() {
        this.elements.loginPage().should('be.visible')
    }
 
    clickRegisterAsNewPatientButton() {
        this.elements.registerNewPatientButton().should('be.visible').click()
    }

    checkUrl() {
        this.ignoreJSErrors()
        cy.url().should('include', `login`)
    }

    ignoreJSErrors() {
        this.ignoreDataJsError()
        this.ignorePageTypeError()
        this.ignoreUnexpectedTokenError()
    }

    ignorePageTypeError() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("Identifier 'pageType' has already been declared")) {
              return false;
            }
          });
    }

    ignoreUnexpectedTokenError() {
        Cypress.on('uncaught:exception', (err, runnable) => {

            if (err.message.includes("Invalid or unexpected token")) {

              return false;
            }
          });
    }

    ignoreDataJsError() {
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('data is not defined')) {
          // Prevent Cypress from failing the test
          return false;
        }
      });
    }
}

module.exports = new LoginPage();