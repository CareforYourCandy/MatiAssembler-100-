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
ordenes = []; 
mecanicos = [];
mecanico; 
public myDatePickerOptions: IMyDpOptions = {
  // other options...
  dateFormat: 'yyyy.mm.dd',
};
public fechaInicio: any = { date: { year: 2018, month: 10, day: 9 } };
public fechaFin: any = { date: { year: 2018, month: 10, day: 9 } };


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
  obtenerMecanicos() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.mecanicos = datos.users
      

      this.mecanicos = this.mecanicos.filter(function(user) {
        if (user.rol==2) {
           return user;
        }
      });

  
    })
  }
generarReporte() {

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
