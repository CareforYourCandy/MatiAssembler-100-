const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const bcrypt = require('bcryptjs');
const path = require('path');

const Orden = connection.define('orden', {
    idOrden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idVehiculo: {
        type: Sequelize.INTEGER
    },
    idMecanico: {
        type: Sequelize.INTEGER
    },
    diagnostico: {
        type: Sequelize.STRING
    },  
    /*imagenes: {
        type: Sequelize.STRING  
    },*/
    fecha: {
        type: Sequelize.DATE
    },
    procedimiento: {
        type: Sequelize.STRING      
    },  
    activada: {                  //1: en curso, 2: finalizada, 0: cerrada
        type: Sequelize.INTEGER
    }
});

module.exports = Orden;

module.exports.desactivarOrden = function(ordenID, callback) {
	Orden.update(
		{activada: 2},
		{where: {idOrden: ordenID} }
	).then(datos => {
		//console.log(datos);
		return callback(null, datos);
	});	
}

module.exports.activarOrden = function(ordenID, callback) {
    Orden.update(
        {activada: 1},
        {where: {idOrden: ordenID} }
    ).then(datos => {
        //console.log(datos);
        return callback(null, datos);
    }); 
}

module.exports.cerrarOrden = function(ordenID, callback) {
    Orden.update(
        {activada: 0},
        {where: {idOrden: ordenID} }
    ).then(datos => {
        //console.log(datos);
        return callback(null, datos);
    }); 
}

module.exports.addOrden = function(orden, callback) {
    console.log("estoy en addOrden");
    console.log(orden);
    Orden.create(orden); 
    
    
    return callback();
    console.log("añadi");
}

module.exports.getOrdenes =  function(req, callback){ //Obtener lista completa de ordenes
	Orden.findAll().then(ordenes => {		
		let ordenes2 = ordenes.map(function(orden) {
			dato = orden.dataValues;   
			return dato; 
		})		
		return ordenes2; 
	})
	.then(datos => {
		console.log(datos); 
		return callback(null, datos);
	});		
}

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

module.exports.getOrdenesPorVehiculo = function(elquetal, callback){

    const query = {where: {idVehiculo: elquetal}}
    Orden.findAll(query).then(ordenes => {
        
        let ordenes2 = ordenes.map(function(orden) {
            dato = orden.dataValues;   
            return dato; 
        })
        ordenes = ordenes2;
        return ordenes; 
    })
    .then(datos => {
        console.log(datos); 
        return callback(null, datos);
    });     
}

module.exports.getOrdenByID= function(ID, callback){
    const query = {where: {idOrden: ID}}
    Orden.findOne(query).then(dato => {
        console.log(dato.get());
        return dato.get();
    })
    .then(datos => {
        //console.log('aqui los datos son');
        //console.log(datos);
        callback(null, datos);
    }); 
}

module.exports.modificarOrden = function(orden, callback) {
    
    query = {diagnostico: orden.diagnostico,
        procedimiento: orden.procedimiento,
        activada: orden.activada
    }
    
    console.log("ESTOY UPDATEANDO ORDENES");
    Orden.update(query, {where: {idOrden: orden.idOrden}}); 

    return callback();
    console.log("update orden exitosa");
}

