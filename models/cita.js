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

//Cita Schema
module.exports = function(sequelize, DataTypes) {
	 
	 var vehiculo = connection.import(path.join(process.cwd(), 'models', 'vehiculo'));

	 
	return sequelize.define('cita', {
		idCita: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		vehiculoCita: {
			type: DataTypes.INTEGER,
			references: {
				model: vehiculo,
				key: 'idVehiculo'
			}
		}, 
		fecha: {
			type: DataTypes.DATE
		}, 
		motivo: {
			type: DataTypes.STRING
		}
	});	
}

const Cita = module.exports = connection.import(path.join(process.cwd(), 'models', 'cita'));

/*module.exports.getCitas = function(callback){ //Obtener la cola de citas (PARA EL GERENTE)
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
}*/

module.exports.addCita = function(newCita, callback) { //Añadir una nueva cita a la cola al solicitar una
			console.log("estoy en addCita");
			newCita.save(callback);
			return callback();

}