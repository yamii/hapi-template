'use strict';

const Promise = require( 'bluebird' );
const Hapi    = require( 'hapi' );
const server  = new Hapi.Server();

const config  = require( './config' );
const storage = require( './storage' );

server.connection( config.server.connection );

// plugins
const options = config.server.options || {};

module.exports = function () {
	const plugins = require( './plugins' );

	return new Promise( ( resolve, reject ) => {
		storage
		.then( () => {
			server.register( plugins, options, ( registerError ) => {
				if ( registerError ) {
					return reject( registerError );
				}

				server.start( ( serverError ) => {
					if ( serverError ) {
						reject( serverError );
					}
					resolve( 'Server started ' + server.info.uri );
				} );
			} );
		} )
		.catch( storageError => {
			reject( storageError );
		} );
	} );
};
