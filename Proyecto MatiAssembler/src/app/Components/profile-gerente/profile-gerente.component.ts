import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vehiculo } from '../vehiculo/vehiculo'; 

@Component({
  selector: 'app-profile-gerente',
  templateUrl: './profile-gerente.component.html',
  styleUrls: ['./profile-gerente.component.css']
})
export class ProfileGerenteComponent implements OnInit {
  user;
  clientes;
  mecanicos;
  usuarios;
  modificar = false; 
  usuario;
  citas;
  carrosCitas;

  vehiculos;
  //Marcas 
  marcas = Array;
  vehiculoTemp;

  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location) { 
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")); 
    this.getMarcas();
    this.obtenerClientes();
    this.obtenerMecanicos();
    //this.obtenerColaCitas();
    this.obtenerVehiculos(); //Para obtener todos los vehiculos registrados en el taller
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['login']); 
  }

  home() {
    this.router.navigate(['']);
  }

  obtenerVehiculos() {
    let data = this.authService.obtenerListaVehiculos().subscribe( datos => {
      console.log(datos); 
      this.vehiculos = datos.vehiculos;       
    }); 
  }

  obtenerClientes() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.usuarios = datos.users
      console.log(this.usuarios); 

      this.clientes = this.usuarios.filter(function(user) {
        if (user.rol==1) {
           return user;
        }
      });
      console.log(this.clientes); 
    })
  }

  obtenerMecanicos() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.usuarios = datos.users
      console.log(this.usuarios); 

      this.mecanicos = this.usuarios.filter(function(user) {
        if (user.rol==3) {
           return user;
        }
      });

      console.log(this.mecanicos); 
    })
  }

  obtenerColaCitas() {
    let data = this.authService.obtenerCitas().subscribe( datos => {
      this.citas = datos.rcitas
      this.carrosCitas = datos.vehiculosCitas
      console.log(this.citas); 
      console.log(this.carrosCitas); 

    })
  }

  async modificarUsuario(id) {
    this.modificar = true;
    let user; 
     
    await this.authService.getUserById(id).subscribe(datos => {
     
      console.log(datos); 
      user = datos.user; 
      console.log(user); 
      this.usuario = user; 
    })     
     console.log(this.usuario); 
  }

  getMarcas() {
    this.authService.getMarcas().subscribe(data => {
      console.log(data); 
      this.marcas = data.marcas; 
    }) 
  }

  setMarcaVista(idMarca) {
    return this.marcas[idMarca].marca
  }

  verDetalle(idVehiculo) {
    this.authService.getVehiculo(idVehiculo).subscribe(data => {
      console.log(data); 
      this.vehiculoTemp = data.vehiculo; 
      this.authService.almacenarVehiculoLS(this.vehiculoTemp);
      this.router.navigate(['detalle-vehiculo']);

    });
  }
}
