import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    email: String;
    password: String; 
  
    constructor(private authService: AuthService,
          private router: Router
         ) { }
  
    ngOnInit() {
    }
  
    onLoginSubmit(){
      const user = {
        correo: this.email,
        contraseña: this.password
      }
      this.authService.authenticateUser(user).subscribe(data => {
        console.log(data);	
        if(data.success){
          this.authService.storeUserData(data.token, data.user);
        
          
         if ( data.user.rol == 1) {
          this.router.navigate(['profile-cliente']);
         }
         if (data.user.rol == 4) {
           this.router.navigate(['profile-administrador']); 
         }
        } else {
          console.log("Fallo"); 
          this.flashMessage.show(data.msg, {
            cssClass: 'alert-danger', 
            timeout:5000});
          this.router.navigate(['login']);
        }
      }); 
    }
  
  }
  