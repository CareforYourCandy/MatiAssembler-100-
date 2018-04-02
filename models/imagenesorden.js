const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const ImagenesOrden = connection.define('imagenesorden', {
    idOrden: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING
    },
    
});

module.exports = ImagenesOrden;

module.exports.getImagenesByOrden= function(ID, callback){ //Obtener las imagenes por orden 
    console.log('EL ID DE LA ORDEN ES:'+ID);
    const query = {where: {idVehiculo: ID}}
    ImagenesOrden.findAll(query).then(imagenes => {		
		let imagenes2 = imagenes.map(function(imagen) {
			dato = imagen.dataValues;   
			return dato; 
		})		
		return imagenes2; 
	})
	.then(datos => {
		console.log(datos); 
		return callback(null, datos);
	});

}
module.exports.addImagenesOrden = function(ordenImagenes, callback) { //Añadir un nuevo repuesto
    
        ImagenesOrden.create(ordenImagenes); 
   



    
    return callback();
    

}