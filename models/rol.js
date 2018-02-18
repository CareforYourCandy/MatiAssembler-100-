const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

//Rol Schema
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario', {
		idRol: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false
		},
		rol: {
			type: DataTypes.STRING
		}
	});
}