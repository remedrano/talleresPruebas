//Complete siguiendo las instrucciones del taller

var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
    
	When(/^I fill with (.*) and (.*) and (.*) and (.*)$/ , ( name,lastname,email,password) => {
		 var cajaSignUp = browser.element('.cajaSignUp');

		 var nameInput = cajaSignUp.element('input[name="nombre"]');
		nameInput.click();
		nameInput.keys(email);
				
		var lastnameInput = cajaSignUp.element('input[name="apellido"]');
		lastnameInput.click();
		lastnameInput.keys(email);
		
		var mailInput = cajaSignUp.element('input[name="correo"]');
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
	browser.waitForVisible('button=Cerrar', 5000);
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
  var loginInput = $('.botonIngresar');
    browser.waitForVisible('.botonIngresar', 10000);
	if(browser.isVisible('.botonIngresar')) {	
		//browser.click('.botonIngresar');
		loginInput.click();
	}  
  });
  
  When('I select the university {string}', university => {	  
	browser.waitForVisible('.cajaSignUp', 10000);
	var selectBox = $('select[name="idUniversidad"]');	
	selectBox.selectByValue( university );
  });
  
  When('I select the program {string}', program => {	  
	browser.waitForVisible('.cajaSignUp', 10000);
	var selectBox = $('select[name="idPrograma"]');	
	selectBox.selectByValue( university );
  });
  
  When('I select the conditions', university => {	  
	browser.waitForVisible('.cajaSignUp', 10000);
	var checkBox = $('input[name="acepta"]');	
	checkBox.click();
  });

  When('I try to create', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 10000);
  });
  
   
});