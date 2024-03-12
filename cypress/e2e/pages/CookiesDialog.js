class CookiesDialog {
    elements = {
        cookieDialog: () => cy.get('.ch2-dialog'),
        allowCookieButton: () => cy.get('.ch2-dialog-actions-vertical .ch2-allow-all-btn')
    }

    cookieDialogNotPresent() {
        this.elements.cookieDialog().should('not.be.visible')
    }

    clickAllowCookiesButton() {
        this.elements.allowCookieButton().contains('Allow all cookies').should('be.visible').click()
        this.elements.allowCookieButton().contains('Allow all cookies').should('not.be.visible')
        this.cookieDialogNotPresent()
        this.ignoreDataJsError()
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

          return false;
      });
    }
}

module.exports = new CookiesDialog();