class HomePage {
    visit() {
      cy.visit('/')
    }
}

module.exports = new HomePage();