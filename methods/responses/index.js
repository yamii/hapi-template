'use strict';

exports.register = function registerResponsesMethod ( server, options, next ) {
	server.method( require( './methods' ) );
	next();
};

exports.register.attributes = {
	'pkg' : {
		'name'    : 'server-methods-reply',
		'version' : '1.0'
	}
};
