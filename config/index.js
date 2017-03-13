'use strict';

const env = process.env;

module.exports = {

	'server' : {
		'connection' : {
			'port'   : 8080,
			'routes' : {
				'cors' : {
					'origin' : [ '*' ],
				}
			}
		},

		'options' : {
			'routes' : {
				'prefix' : '/api'
			}
		}
	},

	// redis : 5 hours expiry
	'redis' : {
		'host'         : 'redis',
		'port'         : 6379,
		'expiration'   : 18000,
		'collisionTag' : 'user:auth'
	},

	// postgres
	'db' : {
		'database' : env.DB_NAME,
		'username' : env.DB_USERNAME,
		'password' : env.DB_PASSWORD,
		'port'     : '5432',
		'host'     : env.DB_HOST,
	}
};
