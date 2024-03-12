class AccountDetails {
    elements = {
        postCodeInput: () => cy.get('input#mat-input-6'),
        findPostCodeButton: () => cy.get('button.address-lookup-btn'),
        addressCell: () => cy.get('.address-lookup-results-row .address1'),
        informGPNoOption: () => cy.get('[for="gpNotificationNo"]'),
        doneButton: () => cy.get('button#register-btn'),
        addressContainer: () => cy.get('address-container .address-view-mode-container')
    }

    fillInAccountDetails(postCode, address) {
        this.checkUrl()
        this.typePostCode(postCode)
        this.clickFindPostCodeButton()
        this.chooseAddressFromDropdownMenu(address)
        this.waitForBillingAddressAppear()
        this.chooseInformGPNo()
        this.clickDoneButton()
    }

    checkUrl() {
        cy.url().should('include', 'register')
    }

    typePostCode(postCode) {
        this.elements.postCodeInput().should('be.visible').click().type(postCode)
    }

    clickFindPostCodeButton() {
        this.elements.findPostCodeButton().should('be.visible').click()
    }

    findButtonIsNotVisible() {
        this.elements.findPostCodeButton().should('not.be.visible')
    }

    chooseAddressFromDropdownMenu(address) {
        this.elements.addressCell().contains(address).click()
    }

    waitForBillingAddressAppear() {
        this.findButtonIsNotVisible()
    }

    chooseInformGPNo() {
        this.elements.informGPNoOption().click()
    }

    waitForAddressContainerVisible() {
        this.elements.addressContainer().should('be.visible')
    }

    clickDoneButton() {
        this.elements.doneButton().should('be.visible').click()
    }
}

module.exports = new AccountDetails();