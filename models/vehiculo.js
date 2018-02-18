const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const path = require('path');
const connection = new Sequelize('mydb', 'root', 'dictadormarico69', {
  	host: 'localhost',
  	dialect : 'mysql',
	define : {
		freezeTableName : true,
		timestamps : false
    }
});

//User Schema
module.exports = function(sequelize, DataTypes) {
	

	return sequelize.define('vehiculo', {
		idVehiculo: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		placa: {
			type: DataTypes.STRING
		},
		modelo: {
			type: DataTypes.INTEGER
		},
		activado: {
			type: DataTypes.BOOLEAN
		},
		serialMotor: {
			type: DataTypes.STRING
			
		}, 
		año: {
			type: DataTypes.INTEGER,
			allowNull: false
		}, 
		foto: {
			type: DataTypes.STRING,
			
		},
		dueño: {
            type: DataTypes.INTEGER
        }
	});	
}




