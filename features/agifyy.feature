Feature: Agify API

  Background:
    Given the base url is "https://api.agify.io"

  Scenario: Predict age for a single name
    Given I have the name "David"
    When I request age prediction for that name
    Then the response status should be 200
    And the response should contain fields "name,age,count"

  Scenario: Predict age without a name
    When I request age prediction without a name
    Then the response status should be an error

  Scenario: Predict age for multiple names
    Given I have the names "Tosin" and "Taya"
    When I request age prediction for those names as a batch
    Then the response should be an array of length 2
