import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../e2e/pages/HomePage';
import CookiesDialog from '../../e2e/pages/CookiesDialog';

Given('I visit the home page and allow cookies', () => {
    HomePage.visit();
    CookiesDialog.clickAllowCookiesButton();
  });