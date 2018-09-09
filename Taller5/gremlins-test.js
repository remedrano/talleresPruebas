function loadScript(callback) {
    var s = document.createElement('script');
    s.src = 'https://rawgithub.com/marmelab/gremlins.js/master/gremlins.min.js';
    if(s.addEventListener) {
        s.addEventListener('load',callback,false);
    } else if(s.readyState) {
        s.onreadystatechange = callback
    }
    document.body.appendChild(s);
}

function unleashGremlins(ttl, callback) {
    function stop() {
        horde.stop();
        callback();
    }
    var horde = window.gremlins.createHorde()
		  
		  .gremlin(gremlins.species.clicker()
		  .clickTypes(['click']) // which mouse event types will be triggered
		  .canClick(function(element) {	
				if (element.nodeName && (element.nodeName.toLowerCase() === 'button' || element.nodeName.toLowerCase() === 'a') ) {  return true;}	
				else return false;
		 
		  }))
		 .gremlin(gremlins.species.formFiller())
		.gremlin(function() {
		    window.$ = function( element ) { return (element.offsetParent === null); }
		  });
    horde.seed(1234);
    horde.after(callback);
    window.onbeforeunload = stop;
    setTimeout(stop, ttl);
    horde.unleash();
}

describe('Monkey testing with gremlins ', function () {
  it('it should not raise any error', function () {
    browser.url('/');
    browser.click('button=Cerrar');

    browser.timeoutsAsyncScript(10000);
    browser.executeAsync(loadScript);

    browser.timeoutsAsyncScript(60000);
    browser.executeAsync(unleashGremlins, 50000);
  });

  afterAll(function() {
    browser.log('browser').value.forEach(function(log) {
        browser.logger.info(log.message.split(' ')[2]);
    ;});
  });
});
