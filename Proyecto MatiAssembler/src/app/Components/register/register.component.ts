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
  
  constructor(private validateService: ValidateService, 
    private authService: AuthService,
 
    private router: Router) { }

  ngOnInit() {
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
     
    /*  if(data.success){

        this.router.navigate(['/login']);
      } else {
        console.log("fallo"); 
        this.router.navigate(['/login']);
      }*/
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

}
