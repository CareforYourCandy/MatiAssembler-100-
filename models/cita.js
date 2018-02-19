const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const bcrypt = require('bcryptjs');
const path = require('path');


//Cita Schema
//const vehiculo = connection.import(path.join(process.cwd(), 'models', 'vehiculo'));	
const Cita = connection.define('cita', {
		idCita: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		vehiculoCita: {
			type: Sequelize.INTEGER
		}, 
		fecha: {
			type: Sequelize.DATE
		}, 
		motivo: {
			type: Sequelize.STRING
		}
	});	

module.exports = Cita;

module.exports.getCitas = function(callback){ //Obtener la cola de citas (PARA EL GERENTE)
	Cita.findAll().then(citas => {		
		let citas2 = citas.map(function(cita) {
			dato = cita.dataValues;   
			return dato; 
		})
		citas = citas2;		
		return citas; 
	})
	.then(datos => {
		console.log(datos); 
		return callback(null, datos);
	});		
}

module.exports.addCita = function(newCita, callback) { //Añadir una nueva cita a la cola al solicitar una
			console.log("estoy en addCita");
			newCita.save(callback);
			return callback();

}