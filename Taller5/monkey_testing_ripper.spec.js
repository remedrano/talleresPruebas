describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

var arrayElement = [ 'a', 'select', 'button', 'input[type=text]' ] ;

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
	
	var element = arrayElement[ getRandomInt(0, arrayElement.length - 1 ) ];

        cy.get( element ).then($element => {
            var randomLink = $element.get(getRandomInt(0, $element.length));
            if(!Cypress.dom.isHidden(randomLink)) {
		if( element == 'a' || element == 'button'){
			cy.wrap(randomLink).click({force: true});
		}else{
			if( element == 'input[type=text]'){
				cy.wrap(randomLink).type('Hola , taller semana 5');
			}
			else{
				if( element == 'select'){
					cy.wrap(randomLink).children().first;
				}
			}
		}  
		             
                monkeysLeft = monkeysLeft - 1;
            }
		cy.wait(50);
		randomEvent( monkeysLeft );

            //setTimeout(randomEvent, 1000, monkeysLeft);
        });

    }   
}
