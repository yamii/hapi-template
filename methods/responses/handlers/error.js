'use strict';

const logger = require( process.cwd() + '/util/logger' )();

/*
 * @params error - Boom error
 */
module.exports = function ( reply, error, extend ) {
	logger.error( error.output.statusCode, error.message );
	if ( extend ) {
		logger.error( JSON.stringify( extend ) );
	}

	reply( error );
};
