const Sequelize = require('sequelize');
const config = require('./../config/database');
const connection = config.connection;

const ImagenesVehiculo = connection.define('imagenesvehiculo', {
    idVehiculo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING
    },
    
});

module.exports = ImagenesVehiculo;

module.exports.getImagenesByVehiculo= function(ID, callback){ //Obtener las imagenes por orden 
    console.log('EL ID DEL VEHICULO ES:'+ID);
    const query = {where: {idOrden: ID}}
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
module.exports.addImagenesVehiculo = function(vehiculoImagenes, callback) { //Añadir un nuevo repuesto
    vehiculosImagenes.imagenes.forEach( imagen => {
        let imagenVehiculo = {
            idVehiculo: vehiculoImagenes.idVehiculo,
            imagen: imagen 
        }
        ImagenesVehiculo.create(imagenVehiculo); 
    })



    
    return callback();
    

}