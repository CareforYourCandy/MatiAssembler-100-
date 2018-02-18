import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	name: String;
	lastname: String;
	email: String;
	rol: String;
  password: String;
  cedula: String; 

  constructor(private validateService: ValidateService, 
    private authService: AuthService,
 
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
  	
  	const user = {
  		nombre: this.name,
  		apellido: this.lastname,
  		correo: this.email,
  		contraseña: this.password,
      rol: this.rol, 
      cedula: this.cedula,
       
  	}
    console.log(user); 
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
      if(data.success){
       console.log("sirvio"); 
        this.router.navigate(['/login']);
      } else {
        console.log("fallo"); 
        this.router.navigate(['/register']);
      }
    });

    this.router.navigate(['/login']);

  }

}
