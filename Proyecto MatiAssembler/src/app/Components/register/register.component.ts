import { Component, OnInit, Input } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

//import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() Vista;
	name: String;
	lastname: String;
	email: String;
	rol=1;
  password: String;
  cedula: String; 
  direccion: String;
  telefono: String; 
  usuarios;
  //Alertas
  mostrarAlerta = false; 
  mostrarAlerta2 = false; 
  mostrarAlerta3 = false; 
  mensajeAlerta: String;
  
  constructor(private validateService: ValidateService, 
    private authService: AuthService,
 
    private router: Router) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.usuarios = datos.users
    })
  }

  onRegisterSubmitCliente() {
  	this.cerrarAlerta();
  	const user = {
  		nombre: this.name,
  		apellido: this.lastname,
  		correo: this.email,
  		contraseña: this.password,
      rol: this.rol, //Este es el rol del cliente
      cedula: this.cedula,
      direccion: this.direccion,
      telefono: this.telefono,  
  	}
    if(!this.validateService.validateRegister(user)){
      this.cerrarAlerta3();
      this.mensajeAlerta="Por favor rellene todos los campos.";
      this.mostrarAlerta2=true;     
      return false;
    }
    //Validar nombre
    if(!this.validateService.validarNombre(user.nombre)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Nombre demasiado largo, ingrese uno mas corto.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar apellido
    if(!this.validateService.validarApellido(user.apellido)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Apellido demasiado largo, ingrese uno mas corto.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar correo
    if(!this.validateService.validarCorreo(user.correo)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo demasiado largo, ingrese uno mas corto.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar contraseña
    if(!this.validateService.validarPassword(user.contraseña)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Contraseña demasiado larga, ingrese una mas corta.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar cedula
    if(!this.validateService.validarCedula(user.cedula)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Cedula demasiado larga, ingrese una mas corta.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar direccion
    if(!this.validateService.validarDireccion(user.direccion)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Direccion demasiado larga, ingrese una mas corta.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar telefono
    if(!this.validateService.validarTelefono(user.telefono)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Telefono demasiado largo, ingrese uno mas corto.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Required fields
    if(!this.validateService.validateRegister(user) && !this.validateService.validateEmail(user.correo)){
      this.mensajeAlerta="Por favor rellene todos los campos, con un correo válido";
      this.mostrarAlerta2=true;     
      return false;
    }
    if(!this.validateService.validateRegister(user)){
      this.cerrarAlerta3();
      this.mensajeAlerta="Por favor rellene todos los campos.";
      this.mostrarAlerta2=true;     
      return false;
    }
    //Validar formato email
    if(!this.validateService.validateEmail(user.correo)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo inválido, por favor ingrese correctamente.";
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar usuario existente por correo electronico
    if(!this.validarUsuario(user)){ 
      this.mensajeAlerta="Este correo ya esta registrado, por favor ingrese otro.";
      this.mostrarAlerta2=true;     
      return false;
    }
    this.cerrarAlerta2();
    this.cerrarAlerta3();
    //Registrar usuario
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.mensajeAlerta="Usuario registrado correctamente";
        this.mostrarAlerta=true;      
        this.setearCampos();       
      } 
      //this.router.navigate['login'];       
    });
  }

  onRegisterSubmit() {
    
    const user = {
      nombre: this.name,
      apellido: this.lastname,
      correo: this.email,
      contraseña: this.password,
      rol: this.rol, //el rol del usuario
      cedula: this.cedula,
      direccion: this.direccion,
      telefono: this.telefono,  
    }
    //Required fields
    if(!this.validateService.validateRegister(user)){
      return false;
    }
    //Validar email
    if(!this.validateService.validateEmail(user.correo)){
      return false;
    }
    //Registrar usuario
    this.authService.registerUser(user).subscribe(data => {
      this.router.navigate['profile-administrador'];
    });       
  }

  setRol(numero) {
    this.rol = numero; 
  }

  obtenerRol() {
    if(this.rol==1) {
      return "Cliente";
    }
    if(this.rol==2) {
      return "Administrador";
    }
    if(this.rol==3) {
      return "Gerente";
    }
    if(this.rol==4) {
      return "Mecanico";
    }
  }

  validarUsuario(newUsuario) { //Validar que no se registre un usuario con un correo ya existente
    for (let i=0; i<this.usuarios.length; i++){
      if(this.usuarios[i].correo==newUsuario.correo){
        return false;
      }
    }
    return true;
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
    this.mensajeAlerta=""; 
  }
  cerrarAlerta2() {
    this.mostrarAlerta2 = false;
    this.mensajeAlerta=""; 
  }
  cerrarAlerta3() {
    this.mostrarAlerta3 = false;
    this.mensajeAlerta=""; 
  }

  setearCampos() {
      this.name="";
      this.lastname="";
      this.email="";
      this.password="";
      this.cedula="";
      this.direccion="";
      this.telefono="";
      this.rol=1;
  }

}
