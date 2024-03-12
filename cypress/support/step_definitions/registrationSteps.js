import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../e2e/pages/HomePage';
import Header from '../../e2e/pages/Header';
import CookiesDialog from '../../e2e/pages/CookiesDialog';
import LoginPage from '../../e2e/pages/LoginPage';
import AccountDetails from '../../e2e/pages/AccountDetails';
import PatientRecordPage from '../../e2e/pages/PatientRecordPage';
import CreatAccountPage from '../../e2e/pages/CreatAccountPage';

When('I navigate to the account section and initiate new patient registration', () => {
  Header.clickAccount();
  LoginPage.checkUrl();
  LoginPage.waitForLoginPageVisible();
  LoginPage.clickRegisterAsNewPatientButton();
});

When('I fill in the account creation form with the following details', (dataTable) => {
  const data = dataTable.hashes()[0];
  this.randomEmail = CreatAccountPage.generateRandomEmail();
  CreatAccountPage.fillInCreateAccountForm(
    data.title, data.firstName, data.lastName, this.randomEmail, data.password, data.phone, data.gender, data.year, data.month, data.day
  );
});

When('I enter the address details with postcode {string} and address {string}', (postCode, address) => {
  AccountDetails.fillInAccountDetails(postCode, address);
});

Then('I am taken to the patient record page and see the correct patient details', () => {
  PatientRecordPage.checkUrl();
  PatientRecordPage.waitForPatientRecordHeading();
  PatientRecordPage.checkPatientDetails({
    title: 'Mr',
    firstName: 'Alex',
    lastName: 'Doe',
    email: this.randomEmail,
    phone: '07925235841',
    year: '1981',
    month: 'JAN',
    day: '10',
    address: '7 Cheriton Close',
    postCode: 'W5 1TR'
  });
});
