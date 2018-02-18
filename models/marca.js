const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

//Marca Schema
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marca', {
		idMarca: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false
		},
		marca: {
			type: DataTypes.STRING
		}
	});
}