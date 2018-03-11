const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const bcrypt = require('bcryptjs');
const path = require('path');

const Orden = connection.define('orden', {
    idOrden: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    
    },
    idVehiculo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    idMecanico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    }, 
    diagnostico: {
        type:Sequelize.STRING
    },
    imagenes: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.DATE
    }, 
    motivo: {
        type: Sequelize.STRING 
    }



})
module.exports = Orden;

module.exports.getOrdenbyMecanico = function(id, callback){
	const query = {where: {idMecanico: id }}
	Orden.findOne(query).then(orden => {
		console.log(orden);
		return orden.get();
	})
	.then(datos => {

        return callback(null, datos);
        
	});		
}