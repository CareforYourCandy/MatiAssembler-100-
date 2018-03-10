const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const bcrypt = require('bcryptjs');
const path = require('path');


//User Schema
	//var marca = connection.import(path.join(process.cwd(), 'models', 'marca'));

const Vehiculo = connection.define('vehiculo', {
	idVehiculo: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	placa: {
		type: Sequelize.STRING
	},
	marca: {
		type: Sequelize.INTEGER
	},
	modelo: {
		type: Sequelize.INTEGER
	},
	activado: {
		type: Sequelize.BOOLEAN
	},
	serialMotor: {
		type: Sequelize.STRING
		
	}, 
	ano: {
		type: Sequelize.INTEGER
	}, 
	foto: {
		type: Sequelize.STRING
		
	},
	dueño: {
        type: Sequelize.INTEGER
    }
});	

module.exports = Vehiculo;

module.exports.getVehiculoByID= function(ID, callback){
	console.log('EL ID DEL VEHICULO ES:'+ID);
	const query = {where: {idVehiculo: ID}}
	Vehiculo.findOne(query).then(dato => {
		//console.log(dato.get());
		return dato.get();
	})
	.then(datos => {
		console.log('aqui los datos son');
		console.log(datos);
		callback(null, datos);
	});	

}

	module.exports.getMarcas = function(id, callback){
		
			
			Marca.findAll().then(datos => {
				
	
				let marcas = datos.map(function(datoCrudo) {
					dato = datoCrudo.dataValues;   
					return dato; 
				})
				
				
				return marcas; 
			})
			.then(datos => {
				 
				return callback(null, datos);
			});
		}

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

module.exports.desactivarVehiculo = function(vehiculoID, callback) {
	Vehiculo.update(
		{activado: 0},
		{where: {idVehiculo: vehiculoID} }
	).then(datos => {
		//console.log(datos);
		return callback(null, datos);
	});	
}




