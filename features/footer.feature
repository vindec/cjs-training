@footer
Feature: Footer links
  In order to visit footer links page
  As a user
  I want to be able to access to the footer pages and their content

  @about
  Scenario: About page
    Given a user coming to Betclic
    When the user goes to the about link in footer
    Then the user sees text content in the about page
