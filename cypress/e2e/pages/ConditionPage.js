class ConditionPage {
    elements = {
        startConsultationButton: () => cy.get('.har-button-group .har-button--primary')
    }

    checkUrl(url) {
        cy.url().should('include', url)
    }

    clickStartConsultationButton()
    {
        this.elements.startConsultationButton().should('be.visible').click()
    }

    ignoreDataIsNotDefinedError() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('data is not defined')) {
              return false;
            }
          });
    }
}

module.exports = new ConditionPage();