'use strict';

module.exports = [
	require( 'inert' ),
	require( 'vision' ),
	{
		'register' : require( 'hapi-swagger' ),
		'options'  : {
			'info'           : { 'title' : 'API Documentation' },
			'pathPrefixSize' : 3
		}
	},
	{
		'register' : require( './plugins/users' )
	}
];
