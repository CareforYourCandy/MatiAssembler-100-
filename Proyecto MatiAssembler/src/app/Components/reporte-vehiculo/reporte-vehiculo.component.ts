import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reporte-vehiculo',
  templateUrl: './reporte-vehiculo.component.html',
  styleUrls: ['./reporte-vehiculo.component.css']
})
export class ReporteVehiculoComponent implements OnInit {
  vehiculos = []; 
  marcas; 
  ordenes; 
  mostrarAlerta = false; 
//Para el nombre del mecanico
mecanicos;
clientes;

  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location) { }

  ngOnInit() {
    this.getMarcas();
    this.obtenerVehiculos();
    this.obtenerMecanicosyClientes(); 
  }

  getMarcas() {
    this.authService.getMarcas().subscribe(data => {
      this.marcas = data.marcas; 
    } ) 
  }
  
  obtenerVehiculos() {
    let data = this.authService.obtenerListaVehiculos().subscribe( datos => { 
      this.vehiculos = datos.vehiculos;       
    }); 
  }
  
   generarReporte(vehiculo) {
    this.ordenes = null; 
    
        this.authService.obtenerOrdenesVehiculo(vehiculo).subscribe( datos => {
          this.ordenes = datos.ordenes;
         
          var ordenesTemp= [];
          ordenesTemp = this.ordenes.filter(function(orden) {
            if (orden.idVehiculo == vehiculo.idVehiculo) {
              return orden;
            }
          });
          
        this.ordenes = ordenesTemp; 
        let filename = ""; 
        filename += "Reporte " + this.setNombreCliente(vehiculo.propietario) + " " + vehiculo.modelo + " " + vehiculo.ano + ".csv"; 
        //DEFINICION DEL REPOTE
        let reporte ="" + vehiculo.modelo + " " + vehiculo.ano + "\r\n" + "\r\n";
        reporte += "Fecha" + "," + "idMecanico" + "," + "Diagnostico" + "," + "Procedimiento" + "\r\n";
        if ( this.ordenes !== undefined && this.ordenes.length > 0  ) {
        this.mostrarAlerta = false;
        this.ordenes.forEach(orden => {
           
          reporte += orden.fecha + "," + this.setNombreMecanico(orden.idMecanico) + "," + orden.diagnostico + "," + orden.procedimiento + "\r\n";
        });
    
        var blob = new Blob([reporte]);
        if (window.navigator.msSaveOrOpenBlob)  // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
            window.navigator.msSaveBlob(blob, filename);
        else
        {
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = filename;
            document.body.appendChild(a);
            a.click();  // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
            document.body.removeChild(a);
        }
      }
      else {
        console.log("Error. El vehículo no tiene ordenes"); 
        this.mostrarAlerta = true; 
      }
        })
    
  }

  setMarcaVista(idMarca) {
    return this.marcas[idMarca -1].marca
    }

  cerrarAlerta() {
    this.mostrarAlerta = false; 
  }

  obtenerMecanicosyClientes() {
    let data = this.authService.getUsers().subscribe( datos => {
      let usuarios = datos.users
      this.mecanicos = usuarios.filter(function(user) {
        if (user.rol==4) {
           return user;
        }
      });
      this.clientes = usuarios.filter(function(user) {
        if (user.rol==1) {
           return user;
        }
      });
    })
  }
  setNombreMecanico(idMecanico){
    for(let i=0; i<this.mecanicos.length; i++){
      if (this.mecanicos[i].idUsuario==idMecanico){
         return this.mecanicos[i].nombre;
      }
    }
  }
  setNombreCliente(idCliente){
    for(let i=0; i<this.clientes.length; i++){
      if (this.clientes[i].idUsuario==idCliente){
         return this.clientes[i].nombre;
      }
    }
  }

  setActivado(id){
    if(id==1){
      return "Activado";
    }
    if(id==0){
      return "Desactivado";
    }
  }
}
