// APP
//----------------------------------------------------------//
;(function (window, document, $) {
	
	'use strict';

	var app = app || {};

	app.data = {
		// Misc. data goes here:
		// myInfo: {
		//    name: 'Will Dawson',
		//    age: 26,
		//    employer: 'Huge'
		// }
	}

	app.methods = {
		init: function () {
			console.log("Initializing app...");
			app.listenForEvents();
		}
	};

	app.listenForEvents = function () {
		// Event listeners go here:
		// $('.button').on('click', function () {
		//    app.doSomething();
		// })
	};

	$(document).ready(function () {
		app.methods.init();
	});

})(window, document, jQuery);
//----------------------------------------------------------//