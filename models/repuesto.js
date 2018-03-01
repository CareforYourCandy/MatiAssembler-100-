const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const bcrypt = require('bcryptjs');
const path = require('path');

const Repuesto = connection.define('repuesto', {
    idRepuesto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    pieza: {
        type: Sequelize.STRING
    }
  

});
module.exports = Repuesto;

module.exports.addRepuesto = function(newRepuesto, callback) { //Añadir una nueva cita a la cola al solicitar una
    console.log("estoy en addRepuesto");
    newRepuesto.save(callback);
 

}


    
module.exports.getRepuesto = function(id, callback){
    
        
        Repuesto.findAll().then(datos => {
            

            let repuestos = datos.map(function(datoCrudo) {
                dato = datoCrudo.dataValues;   
                return dato; 
            })
            
            
            return repuestos; 
        })
        .then(datos => {
            console.log(datos); 
            return callback(null, datos);
        });
    }
