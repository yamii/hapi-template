'use strict';

module.exports = [
	{
		'method' : 'POST',
		'path'   : '/v1/user',
		'config' : require( './handlers/create.js' )
	}
];
