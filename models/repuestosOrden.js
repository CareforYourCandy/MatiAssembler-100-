const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const RepuestosOrden = connection.define('repuestosorden', {
    idOrden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    idRepuesto: {
        type: Sequelize.INTEGER
    }
});

module.exports = RepuestosOrden;

module.exports.getRepuestosOrden = function(ID, callback){
    const query = {where: {idOrden: ID}}           
    RepuestosOrden.findAll(query).then(repuestos => {

            console.log("REPUESTOS:");
            console.log(repuestos); 
        let repuestos2 = repuestos.map(function(repuesto) {
            dato = repuesto.dataValues; 
            console.log("datos brutos:");
            console.log(repuesto);  
            return dato; 
        })
               
        return repuestos2; 
    })
    .then(datos => {
        console.log("repuestos orden");
        console.log(datos); 
        return callback(null, datos);
    });
}

/*module.exports.getVehiculosByDueño = function(elquetal, callback){

    const query = {where: {propietario: elquetal}}
    Vehiculo.findAll(query).then(vehiculos => {
        
        let vehiculos2 = vehiculos.map(function(vehiculo) {
            dato = vehiculo.dataValues;   
            return dato; 
        })
        vehiculos = vehiculos2;
        
        return vehiculos; 
    })
    .then(datos => {
        //console.log(datos); 
        return callback(null, datos);
    });     
}*/

/*module.exports.getRepuestoByID= function(ID, callback){
    const query = {where: {idRepuesto: ID}}
    Repuesto.findOne(query).then(dato => {
        console.log(dato.get());
        return dato.get();
    })
    .then(datos => {
        callback(null, datos);
    }); 
}*/
