'use strict';

const glob      = require( 'glob' );
const Promise   = require( 'bluebird' );
const Sequelize = require( 'sequelize' );
const config    = require( process.cwd() + '/config' );

module.exports = function () {
	return new Promise( function ( resolve, reject ) {
		const db = config.db;

		// setup connection pool
		Sequelize.CON = new Sequelize( db.database, db.username, db.password, {
			'host'    : db.host,
			'port'    : db.port,
			'dialect' : 'postgres',
			'logging' : true
		} );

		// TODO find a way to catch error for db connection
		glob( process.cwd() + '/models/*.js', function ( error, files ) {
			if ( error ) {
				return reject( error );
			}

			files.forEach( ( file ) => {
				Sequelize.CON.import( file );
			} );

			resolve();
		} );
	} );
};

