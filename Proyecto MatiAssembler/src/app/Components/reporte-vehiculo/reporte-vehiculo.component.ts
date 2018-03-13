import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vehiculo } from '../vehiculo/vehiculo'; 

@Component({
  selector: 'app-reporte-vehiculo',
  templateUrl: './reporte-vehiculo.component.html',
  styleUrls: ['./reporte-vehiculo.component.css']
})
export class ReporteVehiculoComponent implements OnInit {
  vehiculos = []; 


  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location) { }

  ngOnInit() {
  }

  obtenerVehiculos() {
    let data = this.authService.obtenerListaVehiculos().subscribe( datos => {
      console.log("Aqui estan los vehiculos"); 
      console.log(datos); 
      this.vehiculos = datos.vehiculos;       
    }); 
  }

}
