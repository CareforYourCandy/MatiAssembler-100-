import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    email: String;
    password: String; 
  
    constructor(private authService: AuthService,
          private router: Router,
          private flashMessage: FlashMessagesService) { }
  
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
        
            console.log("Entraste"); 
          this.router.navigate(['profile-cliente']);
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
  