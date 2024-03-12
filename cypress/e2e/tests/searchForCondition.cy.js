import HomePage from "../pages/HomePage"
import Header from "../pages/Header"
import CookiesDialog from "../pages/CookiesDialog"
import SearchPage from "../pages/SearchPage"

describe('Search for condition or treatment functionality', () => {
  it('should find results for condition or treatment', () => {
    const condition = "Asthma"

    HomePage.visit()
    CookiesDialog.clickAllowCookiesButton()
    Header.searchConditionOrTreatment(condition)
    SearchPage.urlContainsQuery(condition)
    SearchPage.searchFieldHasValue(condition)
    SearchPage.filterByTypeSelectIsVisible()
    SearchPage.checkFoundMoreThanZeroHits()
    SearchPage.waitForResultInformationBlockContainsText('Asthma inhalers and treatments')
    SearchPage.waitForResultInformationBlockContainsText(
      'Asthma can affect anyone at any age. We prescribe a range of inhalers to prevent and relieve asthma symptoms.'
    )
    SearchPage.waitForResultProductBlockContainsText('Seretide Accuhaler')
    SearchPage.waitForResultProductBlockContainsText('Seretide Evohaler')
  })
})
