import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    rol: any;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate() {
        if (this.authService.loggedIn()) {
            /*this.authService.getProfile().subscribe(profile => {
                this.rol = profile.user.rol;
            }, err => {
                console.log('Error while getting the profile: ', err);
                return false;
            });

            if (this.rol == 2){
                this.router.navigate(['/profile-administrador']);
            } else if(this.rol == 1){
                this.router.navigate(['/profile-cliente']);
            } else {
                this.router.navigate(['/login']);
                
            }*/
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }



}