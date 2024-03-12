Feature: Consultation functionality

  Scenario: Start consultation as a new patient for asthma treatment
    Given I visit the home page and allow cookies
    When I navigate to the Asthma treatment section
    Then I start the consultation process as a new patient
    Then I complete the consultation questionnaire with my birthdate
    Then I should be presented with treatment options for asthma called "Ventolin (salbutamol)"
