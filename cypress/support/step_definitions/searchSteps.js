import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../e2e/pages/HomePage';
import Header from '../../e2e/pages/Header';
import CookiesDialog from '../../e2e/pages/CookiesDialog';
import SearchPage from '../../e2e/pages/SearchPage';

When('I search for a condition or treatment called {string}', (condition) => {
  Header.searchConditionOrTreatment(condition);
});

Then('the search results page should display results for {string}', (condition) => {
  SearchPage.urlContainsQuery(condition);
  SearchPage.searchFieldHasValue(condition);
  SearchPage.filterByTypeSelectIsVisible();
  SearchPage.checkFoundMoreThanZeroHits();
});

Then('the search results should mention {string}', (text) => {
  SearchPage.waitForResultInformationBlockContainsText(text);
});

Then('the search results should include details about asthma treatments', () => {
  SearchPage.waitForResultInformationBlockContainsText(
    'Asthma can affect anyone at any age. We prescribe a range of inhalers to prevent and relieve asthma symptoms.'
  );
});

Then('the search results should include a product called {string}', (productName) => {
  SearchPage.waitForResultProductBlockContainsText(productName);
});
