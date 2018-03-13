const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const RepuestosOrden = connection.define('repuestosorden', {
    idOrden: {
        type: Sequelize.INTEGER
    },
    idRepuesto: {
        type: Sequelize.INTEGER
    }
});

module.exports = RepuestosOrden;
