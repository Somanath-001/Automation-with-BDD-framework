Feature: signin to the account

    Scenario: Validated to the signin functionality with valid credentials
        Given Navigated to the avactis home screen
        When I click on signin button
        Then I should navigated to the my account screen
        And I type the valid email id
        And I type the valid password
        When I click on signin button
        Then I should be directed to the My Account screen


