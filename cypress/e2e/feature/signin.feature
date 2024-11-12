@login @regression
Feature: signin to the account

    Background: pre-requisites
        Given Navigated to the avactis home screen
        When I click on signin button
        Then I should navigated to the my account screen

    Scenario: Validate to the signin functionality with valid credentials
        And I type the valid email id
        And I type the valid password
        When I click on the signin button
        Then I should be directed to the My Account screen
    Scenario: Validate to the signin functionality with invalid password
        And I type the invalid email id
        And I type the invalid password
        When I click on the signin button
        Then I should see the account and password could not findout  error

    Scenario: Validate to the signin functionality with invalid password
        And I type the valid email id
        And I type the invalid password
        When I click on the signin button
        Then I should see the account and password could not findout  error
    @smoke
    Scenario Outline: Validate signin successfull and unsuccessfull
        And I enter the email "<email>" and password "<password>"
        When I click on the signin button
        Then I should see the message "<message>"
        Examples:
            | email               | password   | message                                                                       |
            | test_0018@gmail.com | foobarbazz | My Account                                                                    |
            | 1245635@gmail.com   | foobarbazz | Account and password could not be identified. Try again or create an account. |
            | test_0018@gmail.com | 123456     | Account and password could not be identified. Try again or create an account. |