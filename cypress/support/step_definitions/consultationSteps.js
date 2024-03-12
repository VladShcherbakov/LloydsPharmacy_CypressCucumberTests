import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../e2e/pages/HomePage';
import CookiesDialog from '../../e2e/pages/CookiesDialog';
import Header from '../../e2e/pages/Header';
import ConditionPage from '../../e2e/pages/ConditionPage';
import LoginPage from '../../e2e/pages/LoginPage';
import QuestionnairePage from '../../e2e/pages/QuestionnairePage';

When('I navigate to the Asthma treatment section', () => {
  Header.clickTreatmentsLink();
  Header.clickTreatmentsAsthmaLink();
});

Then('I start the consultation process as a new patient', () => {
  ConditionPage.checkUrl("uk/asthma");
  ConditionPage.clickStartConsultationButton();
  LoginPage.clickRegisterAsNewPatientButton();
});

Then('I complete the consultation questionnaire with my birthdate', () => {
  const dateOfBirth = { day: '11', month: '11', year: '1991' };
  QuestionnairePage.checkUrl();
  QuestionnairePage.checkUnderstandCheckbox();
  QuestionnairePage.clickNextButton();
  QuestionnairePage.clickMaleRadioButton();
  QuestionnairePage.clickNextButton();
  QuestionnairePage.typeBirthDate(dateOfBirth.day, dateOfBirth.month, dateOfBirth.year);
  QuestionnairePage.checkAgeConfirmCheckbox();
  QuestionnairePage.clickNextButton();
});

Then('I should be presented with treatment options for asthma', () => {
  const treatmentSubtitleText = "Please make a treatment preference";
  const treatmentTitle = "Asthma treatment";
  QuestionnairePage.waitForTreatmentSubtitleContainsText(treatmentSubtitleText);
  QuestionnairePage.clickLastNextButton();
  QuestionnairePage.foundTreatmentsTitleHasText(treatmentTitle);
});
