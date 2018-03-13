import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-reporte-mecanico',
  templateUrl: './reporte-mecanico.component.html',
  styleUrls: ['./reporte-mecanico.component.css']
})
export class ReporteMecanicoComponent implements OnInit {

@Input() idMecanico; 
ordenes = []; 


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
