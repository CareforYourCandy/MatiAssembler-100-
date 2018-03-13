import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-profile-mecanico',
  templateUrl: './profile-mecanico.component.html',
  styleUrls: ['./profile-mecanico.component.css']
})
export class ProfileMecanicoComponent implements OnInit {

  ordenes = []; 
  user; 
  
  constructor(private http:Http,
    private validateService: ValidateService, 
    private authService: AuthService,
    private router: Router, 
    ) { 
  
  }
  
    ngOnInit() {
      this.user = JSON.parse(localStorage.getItem("user")); 
      this.obtenerOrdenes(this.user.idUsuario); 
    }
   
  
    obtenerOrdenes(id) {
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
