class PatientRecordPage {
    elements = {
        patientName: () => cy.get('#mohc_wrapper .text-intro'),
        personalDetailsSection: () => cy.get('#mohc_personal_details .mb-2'),
        deliveryAddress: () => cy.get('#mohc_delivery_address .mb-1'),
        billingAddress: () => cy.get('#mohc_billing_address .mb-1')
    }

    checkUrl() {
        cy.url().should('include', 'patient_record')
    }

    waitForPatientRecordHeading() {
        cy.get('h2').contains('Patient Record')
    }

    checkPatientDetails(details) {
        this.checkPatientName(details.title, details.firstName, details.lastName);
        this.checkPersonalDetails(details.email, details.phone, details.year, details.month, details.day);
        this.checkDeliverAddress(details.address, details.postCode);
        this.checkBillingAddress(details.address, details.postCode);
    }

    checkPatientName(title, name, lastName) {
        this.elements.patientName().should('contain.text', title + ' ' + name + ' ' + lastName)
    }

    checkPersonalDetails(email, phone, yearBirth, monthBirth, dayBirth) {
        // check Username
        this.elements.personalDetailsSection().eq(0).should('contain.text', email);
        //data joined
        this.elements.personalDetailsSection().eq(1).should('contain.text', this.getCurrentDateFormatted());
        //date of birth
        this.elements.personalDetailsSection().eq(3).should('contain.text', this.formatPersonalDetailsDateOfBirth(yearBirth, monthBirth, dayBirth));
        //phone
        this.elements.personalDetailsSection().eq(4).should('contain.text', phone);
        //check Email
        this.elements.personalDetailsSection().eq(5).should('contain.text', email);
    }

    checkDeliverAddress(address, postCode) {
        //delivery address
        this.elements.deliveryAddress().eq(0).should('contain.text', address.toUpperCase())
        //deliver post code
        this.elements.deliveryAddress().eq(2).should('contain.text', postCode)
    }

    checkBillingAddress(address, postCode) {
        //billing address
        this.elements.billingAddress().eq(0).should('contain.text', address.toUpperCase())
        //billing post code
        this.elements.billingAddress().eq(2).should('contain.text', postCode)
    }

    getCurrentDateFormatted() {
        const date = new Date()
        const day = ("0" + date.getDate()).slice(-2)
        const month = ("0" + (date.getMonth() + 1)).slice(-2)
        const year = date.getFullYear()
        return `${day}-${month}-${year}`.toString()
    }

    formatPersonalDetailsDateOfBirth(yearBirth, monthBirth, dayBirth) {
        const monthMap = {
            'JAN': '01', 'FEB': '02', 'MAR': '03', 'APR': '04',
            'MAY': '05', 'JUN': '06', 'JUL': '07', 'AUG': '08',
            'SEP': '09', 'OCT': '10', 'NOV': '11', 'DEC': '12'
          };
        
          const month = monthMap[monthBirth.toUpperCase()];
          const formattedDate = `${dayBirth}-${month}-${yearBirth}`;
        
          return formattedDate;
    }
}

module.exports = new PatientRecordPage();
