'use strict';

const glob  = require( 'glob' );
const async = require( 'async' );

function truncate () {}
function create () {}

module.exports = function ( done ) {
	glob( process.cwd() + '/models/*.js', function ( error, files ) {
		if ( error ) {
			return done( error );
		}
		files.forEach( ( file ) => {
			Sequelize.CON.import( file );
		} );

		async.series( [ truncate, create ], function () {
			done();
		} );
	} );
};
