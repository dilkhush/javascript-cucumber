Feature: Deletion

  Scenario: should delete 3 from 2
  When I delete "3" and "2"
  Then responce should be "1"