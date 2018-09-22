#Complete siguiendo las instrucciones del taller.

Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Create new student 

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <name> and <lastname> and <email> and <password>    
	And I select the university <university>
	And I select the program <program>
	And I select the conditions
	And I try to create
    Then I expect to see <error>

    Examples:
      | name | lastname | email |  password | university | program | error |
      | Rafael | Medrano | ralph.1989@hotmail.com | 123456 | Universidad de los Andes | Economía | Usuario creado! | 