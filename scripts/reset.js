'use strict';

const reset     = require( process.cwd() + '/test/data/reset' );
const Sequelize = require( 'sequelize' );

reset( ( error ) => {
	Sequelize.CON.close();

	if ( error ) {
		return console.log( error );
	}

	console.log( 'Done reset DB' );
} );
