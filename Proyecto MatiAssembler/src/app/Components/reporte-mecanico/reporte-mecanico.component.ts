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
fechaIF;
fechaFF; 

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
    console.log(fechaI);
    let fechaF = "";
    fechaF += this.fechaFinal.date.year + "." + this.fechaFinal.date.month + "." + this.fechaFinal.date.day; 
    console.log(fechaF); 
    this.fechaIF = fechaI;
    this.fechaFF = fechaF; 

    let fechas = {
      fechaInicio: fechaI, 
      fechaFinal: fechaF
      
    }
    this.authService.getOrdenesFecha(fechas).subscribe( datos => {
      let todasOrdenes = datos.ordenes;
      console.log("EL MECANICO ES");
      console.log(this.mecanico); 
      console.log(todasOrdenes)
      for (var i = 0; i < todasOrdenes.length; i++) {
        if ( todasOrdenes[i].idMecanico == this.mecanico.idUsuario) {
          console.log("Tiene orden");

          this.ordenes.push(todasOrdenes[i]); 
        }
      }
      this.ordenes.forEach(orden => {
        this.vehiculos.forEach(vehiculo => {
            if (vehiculo.idVehiculo == orden.idVehiculo) {
              orden.vehiculo = vehiculo; 
            }
        });
      });
      console.log(this.ordenes);  
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
  
  reporte += "Orden" + "," + "Modelo" + "," + "Año" + "\r\n";
  this.ordenes.forEach(orden => {
    reporte += orden.idOrden + "," + orden.vehiculo.modelo + "," + orden.vehiculo.ano + "\r\n"
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
}

  obtenerVehiculos(id) {
    this.authService.getOrdenesMecanico(id).subscribe(data => {
      console.log(data); 
      this.ordenes = data.ordenes; 
      for (let i = 0; i < this.ordenes.length; i++) {
        let data2 = this.authService.getVehiculo(this.ordenes[i].idVehiculo).subscribe( datos => {
          console.log("IMPRIMIRE MAS DATOS"); 
          console.log(datos); 
          this.ordenes[i].vehiculo = datos.vehiculo; 
        })
      }
    } ) 
  }
}
