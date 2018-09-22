//Complete siguiendo las instrucciones del taller

var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
    
	When(/^I fill with (.*) and (.*)$/ , (email, password) => {
		 var cajaLogIn = browser.element('.cajaLogIn');

		var mailInput = cajaLogIn.element('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);

		var passwordInput = cajaLogIn.element('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password)
	});

	Then('I expect to see {string}', error => {
		browser.waitForVisible('.aviso.alert.alert-danger', 10000);
		var alertText = browser.element('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	});

  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 10000);
    browser.click('button=Ingresar');
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 10000);
  });
  
   
});