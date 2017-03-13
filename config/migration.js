'use strict';

const env    = process.env;
const config = require( './index' );

module.exports = {
	'production' : {
		'username' : env.DB_USERNAME || config.db.username,
		'password' : env.DB_PASSWORD || config.db.password,
		'database' : env.DB_NAME || config.db.database,
		'host'     : env.DB_HOST || config.db.host,
		'dialect'  : 'postgres'
	}
};
