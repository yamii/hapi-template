'use strict';

const Promise  = require( 'bluebird' );
const postgres = require( './postgres' );

// not including redis yet
module.exports = Promise.all( [ postgres() ] )
	.catch( ( storageError ) => {
		throw storageError;
	} );

