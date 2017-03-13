'use strict';

/* eslint new-cap:0 */
module.exports = function ( queryString, Sequelize ) {
	queryString.define( 'user', {
		'id' : {
			'type'         : Sequelize.UUID,
			'defaultValue' : Sequelize.UUIDV4(),
			'primaryKey'   : true
		},

		'email' : {
			'type'   : Sequelize.STRING,
			'unique' : true
		},

		'name' : {
			'type'      : Sequelize.STRING,
			'allowNull' : false
		},

		'createdAt' : Sequelize.DATE,
		'deletedAt' : Sequelize.DATE,
		'updatedAt' : Sequelize.DATE
	} );
};
