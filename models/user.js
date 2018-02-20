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

//User Schema
module.exports = function(sequelize, DataTypes) {
	
	var rol = connection.import(path.join(process.cwd(), 'models', 'rol'));
	
	return sequelize.define('usuario', {
		idUsuario: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		nombre: {
			type: DataTypes.STRING
		},
		apellido: {
			type: DataTypes.STRING
		},
		correo: {
			type: DataTypes.STRING
		},
		rol: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: rol,
				key: 'idRol'
			}
		}, 
		contraseña: {
			type: DataTypes.STRING,
			allowNull: false
		}, 
		cedula: {
			type: DataTypes.INTEGER,
			
		},
		telefono: {
			type: DataTypes.STRING,
		},
		direccion: {
			type: DataTypes.STRING, 
		}
		
	});	
}


const User = module.exports = connection.import(path.join(process.cwd(), 'models', 'user'));

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
	const query = {where: {correo: email}}
	User.findOne(query).then(usuario => {
		//console.log(usuario);
		return usuario.get();
	})
	.then(datos => {
		//console.log(datos);
		return callback(null, datos);
	});		
}

module.exports.addUser = function(newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.contraseña, salt, (err, hash) => {
			if(err) throw err;
			newUser.contraseña = hash;
			newUser.save(callback);

		});
	});
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		console.log('HOLA QUE TAL');
		callback(null, isMatch);
	});
}
