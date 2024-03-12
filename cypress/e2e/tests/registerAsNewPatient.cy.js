import HomePage from "../pages/HomePage"
import Header from "../pages/Header"
import LoginPage from "../pages/LoginPage"
import CookiesDialog from "../pages/CookiesDialog"
import CreatAccountPage from "../pages/CreatAccountPage"
import AccountDetails from "../pages/AccountDetails"
import PatientRecordPage from "../pages/PatientRecordPage"

describe('Registration functionality', () => {
  it('register as a new patient', () => {
    const title = 'Mr'
    const name = 'Alex'
    const lastname = 'Doe'
    const phoneNumber = '07925235841'
    const gender = 'Male'
    const address = '7 Cheriton Close'
    const postCode = 'W5 1TR'
    const password = 'jsd@nkjds3sdB'
    const dob = {'year': '1981', 'month': 'JAN', 'day': '10'}
    const randomEmail = CreatAccountPage.generateRandomEmail()

    HomePage.visit()
    CookiesDialog.clickAllowCookiesButton()
    Header.clickAccount()

    LoginPage.checkUrl()
    LoginPage.waitForLoginPageVisible()
    LoginPage.clickRegisterAsNewPatientButton()

    CreatAccountPage.fillInCreateAccountForm(
      title, name, lastname, randomEmail, password, phoneNumber, gender, dob['year'], dob['month'], dob['day']
    )

    AccountDetails.fillInAccountDetails(postCode, address)

    PatientRecordPage.checkUrl()
    PatientRecordPage.waitForPatientRecordHeading()
    PatientRecordPage.checkPatientName(title, name, lastname)
    PatientRecordPage.checkPersonalDetails(randomEmail, phoneNumber, dob['year'], dob['month'], dob['day'])
    PatientRecordPage.checkDeliverAddress(address, postCode)
    PatientRecordPage.checkBillingAddress(address, postCode)
  })
})
