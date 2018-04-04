import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  	if(user.nombre == undefined || user.cedula == undefined || user.apellido == undefined || user.correo == undefined || user.contraseña == undefined || user.direccion == undefined || user.telefono == undefined) {
  		return false;
  	}else if(user.nombre == "" || user.cedula == "" || user.apellido == "" || user.correo == "" || user.contraseña == "" || user.direccion == "" || user.telefono == "") {
      return false;
    } else {
  		return true;
  	}
  }

  /*validateLongitudCamposUsuario(user){
    if(user.nombre.length>45 || user.apellido.length>45 || user.correo.length>45 || user.contraseña.length>10 || user.cedula.length>11 || user.direccion.length>200 || user.telefono.length>45){
      return false;
    } else {
      return true;
    }
  }*/
  //Validaciones longitud de campos al registrar usuarios
  validarNombre(nombre){
    if(nombre.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarApellido(apellido){
    if(apellido.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarCorreo(correo){
    if(correo.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarPassword(password){
    if(password.length>10){
      return false;
    } else {
      return true;
    }
  }
  validarCedula(cedula){
    if(cedula.length>11){
      return false;
    } else {
      return true;
    }
  }
  validarDireccion(direccion){
    if(direccion.length>200){
      return false;
    } else {
      return true;
    }
  }
  validarTelefono(telefono){
    if(telefono.length>45){
      return false;
    } else {
      return true;
    }
  }

  //Validar registro de vehiculo
  validateRegisterVehiculo(carro){
    if(carro.placa == undefined || carro.marca == undefined || carro.modelo == undefined || carro.serialMotor == undefined || carro.ano == undefined) {
      return false;
    } /*else if(carro.placa == "" || carro.modelo == "" || carro.serialMotor == ""|| carro.ano == ""){
      return false;
    }*/else {
      return true;
    }
  }

  //Validaciones longitud de campos al registrar vehiculos
  /*validateLongitudCamposVehiculo(carro){
     if(carro.placa.length>45 || carro.modelo.length>45 || carro.serialMotor.length>45 || carro.ano.length>11){
      return false;
    } else {
      return true;
    }
  }*/
  validarPlaca(carro){
     if(carro.placa.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarModelo(carro){
     if(carro.modelo.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarSerial(carro){
     if(carro.serialMotor.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarYear(carro){
     if(carro.ano.length>11){
      return false;
    } else if(carro.ano<1920 || carro.ano>2018) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
  	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }

  //Validar ordenes
  validateOrden(orden){
    if(orden.idVehiculo==undefined, orden.idMecanico==undefined, orden.motivo==undefined){
      return false;
    } else {
      return true;
    }
  }
  
}
