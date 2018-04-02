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

  validateRegisterVehiculo(carro){
    if(carro.placa == undefined || carro.marca == undefined || carro.modelo == undefined || carro.serialMotor == undefined || carro.ano == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
  	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }
}
