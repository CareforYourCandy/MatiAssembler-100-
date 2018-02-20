const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const bcrypt = require('bcryptjs');
const path = require('path');

const Repuesto = connection.define('cita', {
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
    console.log("estoy en addCita");
    newRepuesto.save(callback);
    return callback();

}