import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild,} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component'; 

//import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    email: String;
    password: String; 
    vistaTemp;
    nuevoRegistro = false;
      //Alertas
    mostrarAlerta = false; 
    mostrarAlerta2 = false; 
    mostrarAlerta3 = false; 
    mensajeAlerta: String;
  
    constructor(private authService: AuthService,
                private router: Router
                //private flashMessage: FlashMessagesService
               ) { }
  
    ngOnInit() {
    }
  
    onLoginSubmit(){
      const user = {
        correo: this.email,
        contraseña: this.password
      }
      this.authService.authenticateUser(user).subscribe(data => {
        //console.log(data);	
        if(data.success){
          this.mostrarAlerta3=false;
          this.authService.storeUserData(data.token, data.user);
          //this.flashMessage.show('¡Bienvenido, ${data.user.nombre}!', { cssClass: 'custom-success', timeout: 6000 });
          
         if ( data.user.rol == 1) {
          this.router.navigate(['profile-cliente']);
         }
         if (data.user.rol == 2) {
           this.router.navigate(['profile-administrador']); 
         }
         if (data.user.rol == 3) {
           this.router.navigate(['profile-gerente']); 
         }
         if (data.user.rol == 4) {
           this.router.navigate(['profile-mecanico']); 
         }
         
        } else {
          console.log("Fallo");
          this.mostrarAlerta3=true;
          this.mensajeAlerta="Usuario/Contraseña incorrectos. Intentelo de Nuevo";
          this.router.navigate(['login']);
        }
      }); 
    }

    Registrar(id) {
      this.nuevoRegistro=true;      
      this.vistaTemp=id;
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
  