class CreateAccountPage {
    elements = {
        mrTitle: () => cy.get('#title #mat-radio-2'),
        mrsTitle: () => cy.get('#title #mat-radio-3'),
        missTitle: () => cy.get('#title #mat-radio-4'),
        msTitle: () => cy.get('#title #mat-radio-5'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        email: () => cy.get('#email'),
        password: () => cy.get('#password'),
        mobile: () => cy.get('#mobile'),
        maleGender: () => cy.get('#gender #mat-radio-7'),
        femaleGender: () => cy.get('#gender #mat-radio-8'),
        openCalendarButton: () => cy.get('button.mat-icon-button'),
        calendar: () => cy.get('.mat-datepicker-popup'),
        calendarCell: () => cy.get('td.mat-calendar-body-cell .mat-calendar-body-cell-content'),
        privacyPolicyCheckbox: () => cy.get('#privacyPolicy-input'),
        continueButton: () => cy.get('#register-btn') 
    }

    fillInCreateAccountForm(
        title,
        firstName,
        lastName,
        email,
        password,
        mobile,
        gender,
        yearBirth,
        monthBirth,
        dayBirth
    ) {
        this.clickTitle(title)
        this.typeFirstName(firstName)
        this.typeLastName(lastName)
        this.typeEmail(email)
        this.typePassword(password),
        this.typeMobile(mobile)
        this.chooseGender(gender),
        this.selectDateOfBirth(yearBirth, monthBirth, dayBirth)
        this.checkPrivacyPolicy()
        this.clickContinueButton()
    }

    clickTitle(title) {
        if (title == 'Mr') {
            this.chooseMrTitle()
        } else if (title == 'Mrs') {
            this.chooseMrsTitle()
        } else if (title == 'Miss') {
            this.chooseMissTitle() 
        } else if (title == 'Ms') {
            this.chooseMsTitle()
        } else {
            throw new Error(`Unknown title given ${title}`)
        }
    }

    chooseRandomTitle() {
        const titles = [
            this.elements.mrTitle,
            this.elements.mrsTitle,
            this.elements.missTitle,
            this.elements.msTitle
        ];

        const randomIndex = Math.floor(Math.random() * titles.length);

        titles[randomIndex]().should('be.visible').click();
        
    }

    chooseMrTitle() {
        this.elements.mrTitle().should('be.visible').click()
    }

    chooseMrsTitle() {
        this.elements.mrsTitle().should('be.visible').click()
    }

    chooseMissTitle() {
        this.elements.missTitle().should('be.visible').click()
    }

    chooseMsTitle() {
        this.elements.msTitle().should('be.visible').click()
    }

    typeFirstName(firstName) {
        this.elements.firstName().type(firstName)
    }

    typeLastName(lastName) {
        this.elements.lastName().type(lastName)
    }

    generateRandomEmail() {
        let firstEmailPart = "blabla"
        let randomEmailPart = Math.floor(Math.random() * 10000).toString()
        let lastEmailPart = "@gmail.com"
        return `${firstEmailPart}${randomEmailPart}${lastEmailPart}`
    }

    typeRandomEmail() {
        let randomEmail = this.generateRandomEmail()
        this.typeEmail(randomEmail)
        return randomEmail
    }

    typeEmail(email) {
        this.elements.email().type(email)
    }

    typePassword(password) {
        this.elements.password().type(password)
    }

    typeMobile(mobile) {
        this.elements.mobile().type(mobile)
    }

    chooseGender(gender) {
        if (gender == 'Male') {
            this.chooseMaleGender()
        } else if (gender == 'Female') {
            this.chooseFemaileGender()
        } else {
            throw new Error(`Unknown gender given ${gender}`)
        }
    }

    chooseMaleGender() {
        this.elements.maleGender().should('be.visible').click()
    }

    chooseFemaileGender() {
        this.elements.maleGender().should('be.visible').click()
    }

    selectDateOfBirth(year, month, day) {
        this.openCalendar()
        this.calendarIsOpen()
        this.selectYearOfBirth(year)
        this.selectMonthOfBirth(month)
        this.selectDayOfBirth(day)
        this.calendarIsClosed()
    }

    openCalendar() {
        this.elements.openCalendarButton().click()
    }

    calendarIsOpen() {
        this.elements.calendar().should('be.visible')
    }

    calendarIsClosed() {
        this.elements.calendar().should('not.be.visible')
    }

    selectYearOfBirth(year) {
        this.elements.calendarCell().contains(year).click()
    }

    selectMonthOfBirth(month) {
        this.elements.calendarCell().contains(month).click()
    }

    selectDayOfBirth(day) {
        this.elements.calendarCell().contains(day).click()
    }

    checkPrivacyPolicy() {
        this.elements.privacyPolicyCheckbox().check({force: true})
        this.elements.privacyPolicyCheckbox().should('be.checked')
    }

    clickContinueButton() {
        this.elements.continueButton().should('be.visible').click()
    }
    
    ignoreFbqException() {
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('fbq is not defined')) {
              return false;
            }
            throw err;
          });
    }
}

module.exports = new CreateAccountPage();