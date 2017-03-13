'use strict';
/* eslint-disable no-underscore-dangle */

const Boom      = require( 'boom' );
const Joi       = require( 'joi' );
const schema    = require( process.cwd() + '/lib/common/schema' );
const Sequelize = require( 'sequelize' );

module.exports = {
	'auth'        : 'authenticated',
	'tags'        : [ 'api', 'user', 'get' ],
	'description' : 'Create user',
	'validate'    : {
		'headers' : schema.headers,
		'payload' : {
			'name' : Joi.string().required().description( 'Name' ),
			'email' : Joi.string().email().required().description( 'Email Address' ),
		}
	},
	handler ( request, reply ) {
		const User = Sequelize.CON.model( 'user' );

		User.create( request.payload )
		.then( user => {
			// success
			reply();
		} )
		.catch( Sequelize.UniqueConstraintError, errUnique => {
			request.server.methods.reply.error(
				reply,
				Boom.badRequest( errUnique.errors[ 0 ].message ),
				errUnique
			);
		} )
		.catch( error => {
			// Probably DB error
			request.server.methods.reply.error(
				reply,
				Boom.badImplementation(),
				error
			);
		} );
	}
};

