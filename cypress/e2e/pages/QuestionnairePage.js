class QuestionnairePage {
    elements = {
        understadCheckbox: () => cy.get('form input[type="checkbox"]'),
        nextButton: () => cy.get('form button[type="submit"]'),
        maleGenderRadioButton: () => cy.get('#male'),
        dayOfBirth: () => cy.get('#day'),
        monthOfBirth: () => cy.get('#month'),
        yearOfBirth: () => cy.get('#year'),
        ageConfirmCheckbox: () => cy.get('[name="isAgeConfirmed"]'),
        treatmentSubtitle: () => cy.get('[class*="treatmentSubtitle"]'),
        lastNextButton: () => cy.get('.text-right button[class*="stepButton"]'),
        foundTreatmentsTitle: () => cy.get('h2[class*="clinicTitle"]')
    }

    checkUrl() {
        cy.url().should('include', 'questionnaire')
    }

    checkUnderstandCheckbox() {
        this.elements.understadCheckbox().should('be.visible').check({force: true})
    }

    clickNextButton() {
        this.elements.nextButton().should('be.visible').click()
    }

    clickMaleRadioButton() {
        this.elements.maleGenderRadioButton().should('be.visible').click({force: true})
    }

    typeBirthDate(day, month, year) {
        this.typeDayOfBirth(day)
        this.typeMonthOfBirth(month)
        this.typeYearfBirth(year)
    }

    typeDayOfBirth(day) {
        this.elements.dayOfBirth().type(day)
    }

    typeMonthOfBirth(month) {
        this.elements.monthOfBirth().type(month)
    }

    typeYearfBirth(year) {
        this.elements.yearOfBirth().type(year)
    }

    checkAgeConfirmCheckbox() {
        this.elements.ageConfirmCheckbox().should('be.visible').check({force: true})
    }

    waitForTreatmentSubtitleContainsText(text) {
        this.elements.treatmentSubtitle().should('contain.text', text)
    }

    clickLastNextButton() {
        this.elements.lastNextButton().should('contain.text', 'Next').click()
    }

    foundTreatmentsTitleHasText(text) {
        this.elements.foundTreatmentsTitle().should('contain.text', text)
    }
}

module.exports = new QuestionnairePage();