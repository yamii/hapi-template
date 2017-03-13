'use strict';

const config = require( './config' );
const logger = require( './util/logger' )( config.logger );
const server = require( './server' );

server()
.then( ( data ) => {
	logger.info( data );
} )
.catch( ( serverError ) => {
	logger.error( serverError.stack || serverError );
} );
