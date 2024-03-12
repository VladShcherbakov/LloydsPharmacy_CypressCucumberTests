Feature: Registration functionality
  Scenario: Register as a new patient
    Given I visit the home page and allow cookies
    When I navigate to the account section and initiate new patient registration
    And I fill in the account creation form with the following details
      | title | firstName | lastName | email               | password      | phone       | gender | year | month | day |
      | Mr    | Alex      | Doe      | <randomEmail>       | jsd@nkjds3sdB | 07925235841 | Male   | 1981 | JAN   | 10  |
    And I enter the address details with postcode "W5 1TR" and address "7 Cheriton Close"
    Then I am taken to the patient record page and see the correct patient details
