import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-reporte-modelo',
  templateUrl: './reporte-modelo.component.html',
  styleUrls: ['./reporte-modelo.component.css']
})
export class ReporteModeloComponent implements OnInit {

  @Input() vehiculos; 
  ordenes = []; 
  fechaIF;
  fechaFF;
  modelos = []; 
  //Alertas
  mostrarAlerta3 = false; 
  mensajeAlerta: String; 
  constructor(private http:Http,
    private validateService: ValidateService, 
    private authService: AuthService,
    private router: Router, 
    ) { 
  
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy.mm.dd',
  };
  public myDatePickerOptions2: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy.mm.dd',
  };
  public fechaInicio: any = { date: { year: 2018, month: 10, day: 9 } };
  public fechaFinal: any = { date: { year: 2018, month: 10, day: 9 } };

  ngOnInit() {
  }

  cerrarAlerta3() {
    this.mostrarAlerta3 = false;
    this.mensajeAlerta=""; 
  }
  
  obtenerVistaPrevia() {
    this.ordenes = null; 
    this.modelos = null; 
    this.modelos = []; 
    this.ordenes = []; 
    let fechaI = ""
    fechaI += this.fechaInicio.date.year + "." + this.fechaInicio.date.month + "." + this.fechaInicio.date.day; 
    
    let fechaF = "";
    fechaF += this.fechaFinal.date.year + "." + this.fechaFinal.date.month + "." + this.fechaFinal.date.day; 
    
    this.fechaIF = fechaI;
    this.fechaFF = fechaF; 
    let fechas = {
      fechaInicio: fechaI, 
      fechaFinal: fechaF
      
    }
    if(!this.validateService.validarFechas(this.fechaInicio.date, this.fechaFinal.date)){
      this.mensajeAlerta="La fecha final es anterior a la inicial";
      this.mostrarAlerta3=true;
      return false;
    }
    this.cerrarAlerta3();
    this.authService.getOrdenesFecha(fechas).subscribe( datos => {
      this.ordenes = datos.ordenes;  
      this.ordenes.forEach(orden => {
    this.vehiculos.forEach(vehiculo => {
        if (vehiculo.idVehiculo == orden.idVehiculo) {
          orden.vehiculo = vehiculo; 
        }
    });
  });

  var existe = false; 

  this.ordenes.forEach(orden => {
    existe = false; 

      for (var i = 0; i < this.modelos.length ; i++) {
        if (orden.vehiculo.modelo == this.modelos[i].modelo) {
          existe = true; 
          this.modelos[i].cantidad++; 
        }
      }
      if (!existe) {
        let modelo = {
          modelo: orden.vehiculo.modelo, 
          cantidad: 1
          
        }
        this.modelos.push(modelo); 
      } 


  })
  }) 
  
}

generarReporte() {

  let filename = ""; 
  filename += "" + this.fechaIF + "" + this.fechaFF + "" + "ReporteModelos" + ".csv"; 

  let reporte = "";
  reporte += this.fechaIF + "-" +  this.fechaFF + "\r\n" + "\r\n";
  reporte += "modelo,cantidad" + "\r\n"; 
  this.modelos.forEach(modelo => {
     
   reporte += "\r\n" + modelo.modelo + "," + modelo.cantidad + "\r\n" ;
   
  
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



