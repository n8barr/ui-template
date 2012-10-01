var require = {
	paths: {
		'jquery': 'lib/jquery/jquery-1.8.0.min',
		'underscore': 'lib/underscore/underscore-min',
		'backbone': 'lib/backbone/backbone-min',
		'handlebars': 'lib/handlebars/handlebarsWithHelpers',
		'helpers': 'lib/handlebars/helpers',
		'tmpl': '../tmpl',
		'text': 'lib/require/plugins/text',
		'domReady': 'lib/require/plugins/domReady'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'handlebars': {
			exports: 'Handlebars'
		}
	}
};