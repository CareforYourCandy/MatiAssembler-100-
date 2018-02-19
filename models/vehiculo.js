const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const path = require('path');
const connection = new Sequelize('mydb', 'root', 'pink88pink', {
  	host: 'localhost',
  	dialect : 'mysql',
	define : {
		freezeTableName : true,
		timestamps : false
    }
});

//User Schema
module.exports = function(sequelize, DataTypes) {
	
	var marca = connection.import(path.join(process.cwd(), 'models', 'marca'));

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
		marca: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: marca,
				key: 'idMarca'
			}
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
		ano: {
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

const Vehiculo = module.exports = connection.import(path.join(process.cwd(), 'models', 'vehiculo'));

module.exports.getVehiculosByDueño = function(elquetal, callback){

	const query = {where: {dueño: elquetal}}
	Vehiculo.findAll(query).then(vehiculos => {
		
		let vehiculos2 = vehiculos.map(function(vehiculo) {
			dato = vehiculo.dataValues;   
			return dato; 
		})
		vehiculos = vehiculos2;
		
		return vehiculos; 
	})
	.then(datos => {
		console.log(datos); 
		return callback(null, datos);
	});		
}

module.exports.addVehiculo = function(newUser, callback) {
			console.log("estoy en addVehiculo");
			newUser.save(callback);
			return callback();
			console.log("añadi");
}




