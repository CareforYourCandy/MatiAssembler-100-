import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {IMyDpOptions} from 'mydatepicker';
@Component({
  selector: 'app-reporte-mecanico',
  templateUrl: './reporte-mecanico.component.html',
  styleUrls: ['./reporte-mecanico.component.css']
})
export class ReporteMecanicoComponent implements OnInit {

@Input() idMecanico; 
@Input() mecanicos; 
@Input() vehiculos; 

ordenes = []; 
mecanico; 
selecciono=false;
fechaIF;
fechaFF;
//Alertas
mostrarAlerta = false; 
mostrarAlerta2 = false; 
mostrarAlerta3 = false; 
mensajeAlerta: String; 

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


constructor(private http:Http,
  private validateService: ValidateService, 
  private authService: AuthService,
  private router: Router, 
  ) { 

}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['idMecanico']) {
    this.obtenerVehiculos(this.idMecanico); 
    }
  }

  obtenerOrdenes() {
    this.ordenes = null; 
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
    if(this.selecciono==false){
      this.mensajeAlerta="Debes seleccionar un mecánico."
      this.mostrarAlerta3=true;
      return false;     
    }
    if(!this.validateService.validarFechas(this.fechaInicio.date, this.fechaFinal.date)){
      this.mensajeAlerta="La fecha final es anterior a la inicial";
      this.mostrarAlerta3=true;
      return false;
    }
    this.cerrarAlerta3();
    this.authService.getOrdenesFecha(fechas).subscribe( datos => {
      this.ordenes=[];
      let todasOrdenes = datos.ordenes;
      for (var i = 0; i < todasOrdenes.length; i++) {
        if ( todasOrdenes[i].idMecanico == this.mecanico.idUsuario) {
          this.ordenes.push(todasOrdenes[i]); 
        }
      }
      if(this.ordenes.length==0){
        this.mensajeAlerta="Este mecánico no tiene ordenes asignadas"
        this.mostrarAlerta3=true;
        return false;
      }
      this.cerrarAlerta3();
      this.ordenes.forEach(orden => {
        this.vehiculos.forEach(vehiculo => {
            if (vehiculo.idVehiculo == orden.idVehiculo) {
              orden.vehiculo = vehiculo; 
            }
        });
      });
    })
  }
  obtenerMecanicos() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.mecanicos = datos.users
      

      this.mecanicos = this.mecanicos.filter(function(user) {
        if (user.rol==4) {
           return user;
        }
      });

  
    })
  }
generarReporte() {
  let filename = ""; 
  filename += "" + this.mecanico.idUsuario + " " + this.mecanico.apellido + " " + this.mecanico.nombre + ".csv"; 
  //DEFINICION DEL REPOTE
  let reporte ="" + this.mecanico.nombre + " " + this.mecanico.apellido + ", "  + this.fechaIF + "-" + this.fechaFF + " " + "\r\n";  
   reporte +=  "Ordenes totales: " + this.ordenes.length + "\r\n" + "\r\n";
  
  reporte += "Orden" + "," + "Modelo" + "," + "Año" + "," + "Diagnóstico" + "," + "Procedimiento" + "\r\n";
  this.ordenes.forEach(orden => {
    reporte += orden.idOrden + "," + orden.vehiculo.modelo + "," + orden.vehiculo.ano + "," + orden.diagnostico + "," + orden.procedimiento +"\r\n"
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
seleccionarMecanico(meca) {
  this.mecanico = meca;
  this.selecciono=true; 
}

  obtenerVehiculos(id) {
    this.authService.getOrdenesMecanico(id).subscribe(data => {
      this.ordenes = data.ordenes; 
      for (let i = 0; i < this.ordenes.length; i++) {
        let data2 = this.authService.getVehiculo(this.ordenes[i].idVehiculo).subscribe( datos => {
          this.ordenes[i].vehiculo = datos.vehiculo; 
        })
      }
    } ) 
  }

  obtenerNombre(){
    if(this.mecanico!=undefined){
      return this.mecanico.nombre;
    }
    let vari = "Mecanicos";
    return vari;
  }

  setEstado(id){
    if(id==1){
      return "En curso";
    }
    if(id==2){
      return "Finalizada";
    }
    if(id==0){
      return "Cerrada";
    }
  }

  cerrarAlerta3() {
    this.mostrarAlerta3 = false;
    this.mensajeAlerta=""; 
  }
}
