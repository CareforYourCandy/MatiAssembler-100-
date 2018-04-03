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
      console.log(this.usuarios); 
    })
  }

  onRegisterSubmitCliente() {
  	
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
    console.log(user); 
    console.log("Hola"); 
    //Required fields
    if(!this.validateService.validateRegister(user) && !this.validateService.validateEmail(user.correo)){
      console.log("Fallo val usuario");
      this.mensajeAlerta="Por favor rellene todos los campos, con un correo válido"
      this.mostrarAlerta2=true;     
      return false;
    }
    if(!this.validateService.validateRegister(user)){
      console.log("Fallo val usuario");
      this.cerrarAlerta3();
      this.mensajeAlerta="Por favor rellene todos los campos"
      this.mostrarAlerta2=true;     
      return false;
    }
    //Validar email
    if(!this.validateService.validateEmail(user.correo)){
      console.log("Fallo val email");
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo inválido, por favor ingrese correctamente."
      this.mostrarAlerta3=true;
      return false;
    }
    if(!this.validarUsuario(user)){
      this.mensajeAlerta="Este correo ya esta registrado, por favor ingrese otro."
      this.mostrarAlerta2=true;     
      return false;
    }
    this.cerrarAlerta2();
    this.cerrarAlerta3();
    //Registrar usuario
    this.authService.registerUser(user).subscribe(data => {
      console.log(data.success); 
      this.router.navigate['login'];       
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
    console.log(user); 
    console.log("Hola"); 
    //Required fields
    if(!this.validateService.validateRegister(user)){
     console.log("Fallo val usuario");
      return false;
    }
    //Validar email
    if(!this.validateService.validateEmail(user.correo)){
     console.log("Fallo val email"); 
      return false;
    }
    //Registrar usuario
    this.authService.registerUser(user).subscribe(data => {
      console.log(data.success); 
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

}
