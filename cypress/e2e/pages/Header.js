class Header {

    elements = {
        searchButton : () => cy.get('#har-header-search'),
        searchInput : () => cy.get('input[name="query"]'),
        suggestionList : () => cy.get('.har-header-suggestions-list'),
        searchInputButton : () => cy.get('.har-search-form .har-header-search-button'),
        accountLink: () => cy.get('.har-header__icon-nav-link[href="/login"]'),
        treatmentsLink: () => cy.get('a[href="#menu0"]'),
        treatmentsAsthmaLink: () => cy.get('.har-header__sub-nav-link[href="/uk/asthma"]'),
        headerDropdownMenu: () => cy.get('.har-header-dropdown')
    }

    headerDropdownMenuIsVisible() {
        this.elements.headerDropdownMenu().should('be.visible')
    }

    headerDropdownMenuIsNotVisible() {
        this.elements.headerDropdownMenu().should('not.be.visible')
    }

    clickSearch() {
        this.elements.searchButton().should('be.visible').click()
    }

    typeSearchInput(text) {
        this.elements.searchInput().type(text)
    }

    suggestionListIsVisible() {
        this.elements.suggestionList().should('be.visible')
    }

    clickSearchInputButton() {
        this.elements.searchInputButton().click()
    }

    searchConditionOrTreatment(searchText) {
        this.clickSearch()
        this.typeSearchInput(searchText)
        this.suggestionListIsVisible()
        this.clickSearchInputButton()
    }

    clickAccount() {
        this.elements.accountLink().should('be.visible').click()
    }

    clickTreatmentsLink() {
        this.ignoreJSError()
        cy.wait(2000)
        this.elements.treatmentsLink().should('be.visible').click()
    }

    clickTreatmentsAsthmaLink() {
        this.headerDropdownMenuIsVisible()
        this.elements.treatmentsAsthmaLink().should('be.visible').click()
        this.headerDropdownMenuIsNotVisible()
    }

    ignoreJSError() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    }
}

module.exports = new Header();