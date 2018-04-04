import { Component, OnInit,  Input, } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

@Component({
  selector: 'app-reporte-cliente',
  templateUrl: './reporte-cliente.component.html',
  styleUrls: ['./reporte-cliente.component.css']
})
export class ReporteClienteComponent implements OnInit {

@Input()  clientes = []; 
@Input() marcas = []; 
vehiculos = []; 
ordenes = []; 
userSeleccionado; 

constructor(private http:Http,
  private validateService: ValidateService, 
  private authService: AuthService,
  private router: Router, 
  private location: Location,
  private datePipe: DatePipe ) { 

}

  ngOnInit() {
  }
  recuperarVehiculos(user) {
    this.userSeleccionado = user; 
    let data = this.authService.obtenerVehiculos(user).subscribe( datos => {
      console.log(datos); 
      this.vehiculos = datos.vehiculos; 
    this.vehiculos.forEach(vehiculo => {
      this.verCitas(vehiculo); 
    });
       
    }); 
     
  }

  verCitas(vehiculo) {
    console.log(vehiculo); 
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
          vehiculo.ordenes = ordenesTemp; 
        })
      }



  setMarcaVista(idMarca) {
    return this.marcas[idMarca - 1].marca
  }
  

  generarReporte() {
    let fechatemp= new Date();
     let fechaReporte= this.datePipe.transform(fechatemp);
    //Nombre del archivo 
    let filename = ""; 
    filename += "" + this.userSeleccionado.apellido + this.userSeleccionado.nombre + "Reporte" + ".csv"; 

    let reporte = "";
    reporte += this.userSeleccionado.apellido + " " +  this.userSeleccionado.nombre + " " + fechaReporte  + "\r\n" + "\r\n";

    this.vehiculos.forEach(vehiculo => {
      console.log(vehiculo); 
     reporte += "\r\n" + vehiculo.modelo + " " + vehiculo.ano + " " + "\r\n" ;
     reporte += "Orden" + "," + "Fecha" + "idMecanico"
     vehiculo.ordenes.forEach(orden => {
      reporte += orden.idOrden + "," + orden.fecha + "," + orden.idMecanico + "," + orden.diagnostico + "," + orden.procedimiento + "\r\n";
     });
    
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

}

