@footer
Feature: Footer
  In order to provide some mandatory information to the user in the footer
  As a user
  I want to be able to see footer mandatory elements and access to the pages and their content

  @linksAndPages
  Scenario: Links and pages content
    Given a user coming to Betclic
    When the user goes to the link in footer
      | regul      | about                                                                                                                                                                                                                                                                                                                                                                                         | responsibleGaming                                                                                                   |
      | fr button  | À propos de Betclic                                                                                                                                                                                                                                                                                                                                                                           | Jeu responsable                                                                                                     |
      | fr message | Betclic possède une offre de paris sportifs complète sur l'ensemble des sports autorisés par l'ANJ.\nVous pouvez également miser sur toutes les courses hippiques françaises et sur une sélection des meilleures courses internationales.\nEnfin, Betclic vous propose également l'un des logiciels poker les plus fiables du marché. Jouez sur nos tables facile d'accès et 100% sécurisées. | La pratique des jeux d’argent est récréative quand elle est avant tout une source de divertissement et d’amusement. |
    Then the user sees text content in the page



