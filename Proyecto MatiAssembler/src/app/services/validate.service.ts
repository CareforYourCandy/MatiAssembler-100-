import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validarLogin(user) {
    if( user.correo == undefined || user.contraseña == undefined) {
      return false;
    }else if( user.correo == "" || user.contraseña == "") {
      return false;
    } else {
      return true;
    }
  }
  validateRegister(user){
  	if(user.nombre == undefined || user.cedula == undefined || user.apellido == undefined || user.correo == undefined || user.contraseña == undefined || user.direccion == undefined || user.telefono == undefined) {
  		return false;
  	}else if(user.nombre == "" || user.cedula == "" || user.apellido == "" || user.correo == "" || user.contraseña == "" || user.direccion == "" || user.telefono == "") {
      return false;
    } else {
  		return true;
  	}
  }

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
    if(orden.idVehiculo==undefined || orden.idMecanico==undefined || orden.motivo==undefined){
      return false;
    } else {
      return true;
    }
  }

  validarFechaOrden(fechaIngresada, fechaActual){
    let yearIng=fechaIngresada.year;
    let monthIng=fechaIngresada.month;
    let dayIng=fechaIngresada.day;

    let yearActual= fechaActual.getFullYear();
    let monthActual= (fechaActual.getMonth()+1);
    let dayActual= fechaActual.getDate();
    if (yearIng < yearActual) {
        //alert ("La fecha introducida es anterior a Hoy");
        return false;
    }
    else {
        if (yearIng == yearActual && monthIng < monthActual) {
           return false;     
        }
        else {
            if (yearIng == yearActual && monthIng == monthActual && dayIng < dayActual){
                return false;
            }
            else {
                /*if (yearIng == yearActual && monthIng == monthActual && dayIng == dayActual){
                     alert ("Has introducido la fecha de Hoy");
                }
                else{
                    alert ("La fecha introducida es posterior a Hoy");
                }*/
                return true;
            }
        }
    }
  }
  //Validar longitud campos al ingresar ordenes
  validarMotivo(orden){
    if(orden.motivo.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarDiagnostico(diagnostico){
    if(diagnostico.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarProcedimiento(procedimiento){
    if(procedimiento.length>255){
      return false;
    } else {
      return true;
    }
  }
  validarDesperfecto(desperfecto){
    if(desperfecto.length>45){
      return false;
    } else {
      return true;
    }
  }

  validarFechas(fechaInicio, fechaFinal){
    let yearI=fechaInicio.year;
    let monthI=fechaInicio.month;
    let dayI=fechaInicio.day;

    let yearFin=fechaFinal.year;
    let monthFin=fechaFinal.month;
    let dayFin=fechaFinal.day;
    if (yearFin < yearI) {
        return false;
    }
    else {
        if (yearFin == yearI && monthFin < monthI) {
           return false;     
        }
        else {
            if (yearFin == yearI && monthFin == monthI && dayFin < dayI){
                return false;
            }
            else {
                return true;
            }
        }
    }
  }

  validarPieza(pieza){
     if(pieza.length>45){
      return false;
    } else {
      return true;
    }
  }
  validarModeloRep(modelo){
     if(modelo.length>45){
      return false;
    } else {
      return true;
    }
  }

  }


