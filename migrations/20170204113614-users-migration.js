'use strict';

/* eslint new-cap:0 */

module.exports = {
	up ( queryInterface, Sequelize ) {
		return queryInterface.createTable( 'users', {
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
	},

	down ( queryInterface ) {
		return queryInterface.dropTable( 'users' );
	}
};
