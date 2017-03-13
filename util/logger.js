'use strict';

const winston = require( 'winston' );
let logger;

module.exports = function ( options ) {
	if ( !logger ) {
		for ( let key in options ) {
			if ( options.hasOwnProperty( key ) ) {
				winston.loggers.add( key, options[ key ] );
			}
		}

		logger = winston.loggers.get( process.env.NODE_ENV || 'development' );
	}

	return logger;
};
