import HomePage from "../pages/HomePage"
import CookiesDialog from "../pages/CookiesDialog"
import Header from "../pages/Header"
import ConditionPage from "../pages/ConditionPage"
import LoginPage from "../pages/LoginPage"
import QuestionnairePage from "../pages/QuestionnairePage"

describe('Consultation functionality', () => {
  it('start consultation as a new patient', () => {
    const expectedConditionUrl = "uk/asthma"
    const dob = {'day': '11', 'month': '11', 'year': '1991'}
    const treatmentSubtitleText = "Please make a treatment preference"
    const treatmentTitile = "Asthma treatment"

    HomePage.visit()
    CookiesDialog.clickAllowCookiesButton()
    Header.clickTreatmentsLink()
    Header.clickTreatmentsAsthmaLink()
    ConditionPage.ignoreDataIsNotDefinedError()
    ConditionPage.checkUrl(expectedConditionUrl)
    ConditionPage.clickStartConsultationButton()
    LoginPage.clickRegisterAsNewPatientButton()
    QuestionnairePage.checkUrl()
    QuestionnairePage.checkUnderstandCheckbox()
    QuestionnairePage.clickNextButton()
    QuestionnairePage.clickMaleRadioButton()
    QuestionnairePage.clickNextButton()
    QuestionnairePage.typeBirthDate(dob['day'], dob['month'], dob['year'])
    QuestionnairePage.checkAgeConfirmCheckbox()
    QuestionnairePage.clickNextButton()
    QuestionnairePage.waitForTreatmentSubtitleContainsText(treatmentSubtitleText)
    QuestionnairePage.clickLastNextButton()
    QuestionnairePage.foundTreatmentsTitleHasText(treatmentTitile)
  })
})
