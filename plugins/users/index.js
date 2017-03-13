'use strict';

exports.register = function ( server, options, next ) {
	server.route( require( './routes' ) );
	next();
};

exports.register.attributes = {
	'pkg' : {
		'name'    : 'users',
		'version' : '1.0.0'
	}
};
