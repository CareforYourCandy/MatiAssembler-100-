import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vehiculo } from '../vehiculo/vehiculo'; 
=======
>>>>>>> f0e27f81a1bf468431cd92345966fab76ca2c5ca

@Component({
  selector: 'app-profile-gerente',
  templateUrl: './profile-gerente.component.html',
  styleUrls: ['./profile-gerente.component.css']
})
export class ProfileGerenteComponent implements OnInit {
<<<<<<< HEAD
  
  user;

  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location) { 
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")); 
    //console.log(this.user); 
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['login']); 
  }

  home() {
    this.router.navigate(['']);
=======

  constructor() { }

  ngOnInit() {
>>>>>>> f0e27f81a1bf468431cd92345966fab76ca2c5ca
  }

}
