const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Vehiculo = require('../models/vehiculo');
const Cita = require('../models/cita');
const Orden = require('../models/orden');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Repuesto = require('../models/repuesto'); 
const Marca = require('../models/marca');
const AccesoriosOrden = require('../models/accesoriosorden'); 

router.post('/modificarUsuario', (req, res, next) => {
	console.log("Estoy en modificar usuario"); 
	console.log(req.body);
	res.json({success:true, msg:'Usuario registrado'});
	//User.modificarUsuario(req.body);
	
}); 



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


//Obtener un solo usuario por su id
router.post('/getUser', (req, res, next) => {
	id = req.body.ID;
	console.log('el id del usuario es:');
	console.log(id);

	User.getUserByID(id, (err, user) => {
		console.log('ESTE ES EL Usuario RESP:');
		console.log(user);
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!user){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'Vehiculo not found'});
		}
		res.json({
			success: true,
			usuario: {
				idUsuario: user.idUsuario,
				nombre: user.nombre,
				apellido: user.apellido,
				correo: user.correo,
				rol: user.rol,
				contraseña: user.contraseña,
				cedula: user.cedula,
				direccion: user.direccion,
				telefono: user.telefono
			}
		});
	});
});

router.post('/eliminarCita', (req, res, next) => {

	console.log("Estoy en eliminar cita"); 
	console.log(req.body); 
	let cita = Cita.eliminarCitas(req.body.idCita, (err, cita) => {
		res.json( {
			success: true
		})
	})
	
})
router.post('/getOrdenes', (req, res, next) => {
	console.log("Estoy en obtener ordenes"); 
	let ordenes = Orden.getOrdenes(req, (err, ordenes) => {
		if (err) {
			console.log("algo fallo"); 
		}
		if(!ordenes) {
			console.log("No hay ordenes"); 
		}
		console.log("Hare un response ahora"); 
		res.json( {
			success:true, 
			ordenes
		})
	});
})
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

router.post('/getMecanicos', (req, res, next ) => {
	let mecanicos = User.getMecanicos(req, (err, mecanicos) => {
		res.json( {
			mecanicos
		})
	})
})
router.post('/modificarUsuario', (req, res, next) => {
	console.log("Estoy en modificar usuario"); 
	console.log(req.body);
	User.modificarUsuario(req.body);
	
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
//Obtener Vehiculos por cliente
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
		console.log(vehiculos);
		res.json({
			success: true,
			vehiculos});
	});
})

//Obtener todos los Vehiculos
router.post('/getVehiculos2', (req, res, next) => {
	//console.log();
	Vehiculo.getVehiculos(req, (err, vehiculos) => {
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

router.post('/getOrdenesMecanico', (req, res, next) => {
	console.log("Estoy en obtener ordenes por mecanico");
	let ordenes = Orden.getOrdenesMecanico(req, (err, ordenes) => {
		if (err) {
			console.log("algo fallo"); 
		}
		if(!marcas) {
			console.log("No hay marcas"); 
		}
		
		res.json( {
			success:true, 
			ordenes
		})
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
		console.log("Aqui esta rcitas"); 
		console.log(rcitas); 
		res.json({
			success: true,
			rcitas
			
		});
	});	
})

//Obtener los vehiculos de la cola de citas
router.post('/getVehiculosCola', (req, res, next) => {
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
				ano: carro.ano,
				propietario: carro.propietario,
				fechaRegistro: carro.fechaRegistro
			}
		});

	});
});

//Obtener un solo vehiculo por su id
router.post('/getVehiculo', (req, res, next) => {
	id = req.body.ID;
	console.log(req.body);
	console.log('el id del vehiculo es:');
	console.log(id);
	Vehiculo.getVehiculoByID(id, (err, carro) => {
		console.log('ESTE ES EL VEHICULO RESP:');
		console.log(carro);
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!carro){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'Vehiculo not found'});
		}
	
		res.json({
			success: true,
			vehiculo: {
				idVehiculo: carro.idVehiculo,
				placa: carro.placa,
				marca: carro.marca,
				modelo: carro.modelo,
				activado: carro.activado,
				serialMotor: carro.serialMotor,
				ano: carro.ano,
				propietario: carro.propietario,
				fechaRegistro: carro.fechaRegistro
			}
		});
	});
});

//Obtener una orden por su id
router.post('/getOrden', (req, res, next) => {
	id = req.body.ID;
	console.log('el id de la orden es:');
	console.log(id);
	Orden.getOrdenByID(id, (err, orden) => {
		console.log('ESTE ES EL VEHICULO RESP:');
		console.log(orden);
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!orden){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'Orden not found'});
		}
		res.json({
			success: true,
			orden: {
				idOrden: orden.idOrden,
				idVehiculo: orden.idVehiculo,
				idMecanico: orden.idMecanico,
				diagnostico: orden.diagnostico,
				motivo: orden.motivo,
				activada: orden.activada,
				fecha: orden.fecha
			}
		});
	});
});

//Obtener accesorio  por su idOrden
router.post('/getAccesorios', (req, res, next) => {
	id = req.body.ID;
	console.log(req.body);
	console.log('el id de la orden es:');
	console.log(id);
	AccesoriosOrden.getAccesorioByOrden(id, (err, accs) => {
		console.log(accs);
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!accs){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'Vehiculo not found'});
		}
		res.json({
			success: true,
			accesorios: {
				idAccesoriosOrden: accs.idAccesoriosOrden,
				idOrden: accs.idOrden,
				cauchoRepuesto: acaccs.cauchoRepuesto,
				llaves: accs.llaves,
				gato: accs.gato,
				herramientas: accs.herramientas,
				equipodeSonido: accs.equipodeSonido
			}
		});
	});
});

//Obtener todas las Ordenes por cliente
router.post('/getOrdenes', (req, res, next) => {
	const id=req.body.idVehiculo;
	console.log();
	Orden.getOrdenesPorVehiculo(id, (err, ordenes) => {
		if(err) {
			console.log('AQUI PASO ALGO');
		}
		if(!ordenes){
			console.log('AQUI PASO ALGO2');
			return res.json({success: false, msg:'User not found'});
		}
		res.json({
			success: true,
			ordenes});
	});
})

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
						contraseña: user.contraseña,
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
router.post('/registerOrden', (req, res, next) => {
	console.log(req.body);
	
	let newOrden = {
	
		idVehiculo: req.body.idVehiculo,
		idMecanico: req.body.idMecanico,
		diagnostico: req.body.diagnostico,
		motivo: req.body.motivo,
		fecha: req.body.fecha,
		activada: true, 

	}
	console.log(newOrden); 

    Orden.addOrden(newOrden, (err, orden) => {
		if(err){
			res.json({success:false, msg:'No funciono el registro vehiculo'});
		} else {
			res.json({success:true, msg:'Vehiculo registrado'});
		}
	});

});
router.post('/registerVehiculo', (req, res, next) => {
    
    let newVehiculo = new Vehiculo({
        placa: req.body.placa,
        marca: req.body.marca,
        modelo: req.body.modelo,
        activado: req.body.activado,
        serialMotor: req.body.serialMotor,
        ano: req.body.ano,
        propietario: req.body.propietario,
        fechaRegistro: req.body.fechaRegistro
       
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
        fechaSolicitud: req.body.fechaSolicitud 
        
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
	Repuesto.addRepuesto(repuesto, (err, repuesto) => {
		if(err){
			res.json({success:false, msg:'No funciono el registro de usuario'});
		} else {
			res.json({success:true, msg:'Usuario registrado'});
		}
	});
});

router.post('/registerOrden', (req, res, next) => {
	let orden = new Orden({
		idVehiculo: req.body.idVehiculo,
	    idMecanico: req.body.idMecanico,
	    diagnostico: req.body.diagnostico,
	    fecha: req.body.fecha,
	    motivo: req.body.motivo,
	    activada: req.body.activada 
	});
	Orden.addOrden(orden, (err, orden) => {
		if(err){
			res.json({success:false, msg:'No funciono el registro de usuario'});
		} else {
			res.json({success:true, msg:'Usuario registrado'});
		}
	});
});  

module.exports = router;

