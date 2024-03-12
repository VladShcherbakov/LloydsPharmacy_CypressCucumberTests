Feature: Search for condition or treatment functionality

  Scenario: Should find results for condition or treatment
    Given I visit the home page and allow cookies
    When I search for a condition or treatment called "Asthma"
    Then the search results page should display results for "Asthma"
    And the search results should mention "Asthma inhalers and treatments"
    And the search results should include details about asthma treatments
    And the search results should include a product called "Seretide Accuhaler"
    And the search results should include a product called "Seretide Evohaler"
