const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Vehiculo = require('../models/vehiculo');
const Cita = require('../models/cita');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Repuesto = require('../models/repuesto'); 
const Marca = require('../models/marca'); 
//Register
router.post('/register', (req, res, next) => {

	let newUser = new User({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		correo: req.body.correo,
		rol: req.body.rol,
		contraseña: req.body.contraseña,
		cedula: req.body.cedula,
		telefono: req.body.telefono,
		direccion: req.body.direccion
	});
	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success:false, msg:'No funciono el registro de usuario'});
		} else {
			res.json({success:true, msg:'Usuario registrado'});
		}
	});
});
 router.post('/getUser', (req, res, next)  => {
	id = req.body.id; 
	
	User.getUserByID(id, (user) => {
		res.json( {
			success: true,
			user
		})
	});

 }
)
router.post('/modificarUsuario'), (req, res, next) => {
	usuario = req.body.usuario;
	console.log("Estoy en obtener users"); 
	let usuarios = User.getUsers(req, (err, users) => {
		if (err) {
			console.log("algo fallo"); 
		}
		if(!users) {
			console.log("No hay repuestos"); 
		}
		
		res.json( {
			success:true, 
			users
		})
	});
	
	}
router.post('/getUsers', (req, res, next) => {
	console.log("Estoy en obtener users"); 
	let usuarios = User.getUsers(req, (err, users) => {
		if (err) {
			console.log("algo fallo"); 
		}
		if(!users) {
			console.log("No hay repuestos"); 
		}
		
		res.json( {
			success:true, 
			users
		})
	});
	
	}); 

	router.post('/getMarcas', (req, res, next) => {
		console.log("Estoy en obtener users"); 
		let marcas = Marca.getMarcas(req, (err, marcas) => {
			if (err) {
				console.log("algo fallo"); 
			}
			if(!marcas) {
				console.log("No hay marcas"); 
			}
			
			res.json( {
				success:true, 
				marcas 
			})
		});
		
		}); 


router.post('/obtenerRepuestos', (req, res, next) => {
	console.log("Estoy en obtener repuestos"); 
	let repuestos2 = Repuesto.getRepuesto(req, (err, repuestos) => {
		if (err) {
			console.log("algo fallo"); 
		}
		if(!repuestos) {
			console.log("No hay repuestos"); 
		}
		
		res.json( {
			success:true, 
			repuestos
		})
	});
	
	}); 
//Obtener Vehiculos
router.post('/getVehiculos', (req, res, next) => {
	const id=req.body.idUsuario;
	console.log();
	Vehiculo.getVehiculosByDueño(id, (err, vehiculos) => {
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!vehiculos){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'User not found'});
		}
		res.json({
			success: true,
			vehiculos});
	});
})


//Obtener la cola de citas por asignar
router.post('/getCitas', (req, res, next) => {
	console.log("Estoy en obtener citas"); 
	let citas = Cita.getCitas(req, (err, rcitas) => {
		if (err) {
			console.log("algo fallo"); 
		}
		if(!rcitas) {
			console.log("No hay citas"); 
		}
		let vehiculosCitas = rcitas.map ( function(cita) {
			Vehiculo.getVehiculoByID(cita.vehiculoCita, (err, vehiculo) => {
				console.log('ESTE ES EL VEHICULO RESP:');
				console.log(vehiculo);
				if(err) {
					console.log('AQUI PASO ALGO');
				}
				if(!vehiculo){
					console.log('AQUI PASO ALGO2');
					return res.json({success: false, msg:'Vehiculo not found'});
				}
				return vehiculo; //AQUI NO SE COMO RETORNARLO
			});
		});
		console.log('vehiculosCitas:');
		console.log(vehiculosCitas);
		res.json({
			success: true,
			rcitas,
			vehiculosCitas
		});
	});	
})

//Obtener los vehiculos de la cola de citas
/*router.post('/getVehiculosCola', (req, res, next) => {
	console.log("Estoy en obtener vehiculos de la cola"); 
	let idVehiculo = req.body.idVehiculo;
	Vehiculo.getVehiculoByID(idVehiculo, (err, carro) => {
				
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!carro){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'Carro no encontrado'});
		}
		console.log('este es el carro:');
		console.log(carro);
		res.json({
			success: true,
			vehiculo: {
				idVehiculo: carro.idVehiculo,
				placa: carro.placa,
				marca: carro.marca,
				modelo: carro.modelo,
				activado: carro.activado,
				serialMotor: carro.serialMotor,
				ano: carro.ano
			}
		});

	});
});*/

//Authenticate
router.post('/authenticate', (req, res, next) => {
	const correo = req.body.correo;
	const contraseña = req.body.contraseña;

	User.getUserByEmail(correo, (err, user) => {
				console.log(user);
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!user){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'User not found'});
		}
		User.comparePassword(contraseña, user.contraseña, (err, isMatch) => {
			console.log('estoy en comparar');
			if(err) {
				console.log('ERROR EN COMPARAR');
			}
			if(isMatch){
				const token = jwt.sign(user, config.secret, {
					expiresIn:604800 //Una semana
				});

				res.json({
					success: true,
					//token:  'JWT '+token,
					token:  'Bearer '+token,
					user: {
						idUsuario: user.idUsuario,
						nombre: user.nombre,
						apellido: user.apellido,
						correo: user.correo,
						rol: user.rol,
						cedula: user.cedula,
						direccion: user.direccion,
						telefono: user.telefono
					}
				});
			} else {
				return res.json({success:false, msg: 'Wrong password'});
			}
		});
	});
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    //console.log(req.user);
    res.json({ user: req.user });
});

router.post('/registerVehiculo', (req, res, next) => {
    
    let newVehiculo = new Vehiculo({
        placa: req.body.placa,
        marca: req.body.marca,
        modelo: req.body.modelo,
        activado: req.body.activado,
        serialMotor: req.body.serialMotor,
        ano: req.body.ano,
        dueño: req.body.dueño
       
    });
    Vehiculo.addVehiculo(newVehiculo, (err, user) => {
		if(err){
			res.json({success:false, msg:'No funciono el registro vehiculo'});
		} else {
			res.json({success:true, msg:'Vehiculo registrado'});
		}
	});

});



router.post('/registerCita', (req, res, next) => {
    
    let newCita = new Cita({
        vehiculoCita: req.body.vehiculoCita, 
        
    });
    Cita.addCita(newCita, (err, user) => {
		if(err){
			res.json({success:false, msg:'No funciono el registro de cita'});
		} else {
			res.json({success:true, msg:'Cita en cola :)'});
		}
	});

});



router.post('/desactivarVehiculo',  (req, res, next) => {
console.log(req.body); 
Vehiculo.desactivarVehiculo(req.body.idVehiculo, (err, vehiculo)  => {
	if (err) {
		res.json({success:false, msg:'No funciono'});
	} else {
		res.json({success:true, msg:'furula'});
	}
})

}); 
router.post('/registerRepuesto', (req, res, next) => {
	let repuesto = new Repuesto({
		pieza:  req.body.pieza 
	});
	Repuesto.addRepuesto(repuesto);
}); 
module.exports = router;