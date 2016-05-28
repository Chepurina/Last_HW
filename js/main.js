requirejs.config({
	paths: {
		'jquery': 'jquery.min',
		'tmpl': 'tmpl',
	},
	shim:{
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require([
	'jquery',
	'tmpl',
	'mvc/model',
	'mvc/view',
	'mvc/controller'
	], 
function( $, tmpl, Model, View, Controller ) {

	$(function() {

    	var myPLan = [
        	'Добавить квоту ОЭ',
	        'Подготовить баннера на сайт',
	        'Реклама в соц. сетях'
	        ];

	    var myModel = new Model(myPLan);
	    var myView = new View(myModel);
	    var myController = new Controller(myModel, myView);

	}) 

});
