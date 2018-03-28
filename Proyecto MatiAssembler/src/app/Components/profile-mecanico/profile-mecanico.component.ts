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
  estado; //Estado de una orden (en curso, finalizada)
  ordenTemp;
  vehiculoTemp;

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

    finalizarOrden(idOrden) { //Marcar orden como finalizada
      console.log(idOrden);
      if(this.estado==2) { //Finalizar orden
        this.authService.desactivarOrden(idOrden).subscribe(data => {
          console.log(data); 
        })        
      }
      if(this.estado==1) { //Poner en curso otra vez
        this.authService.activarOrden(idOrden).subscribe(data => {
          console.log(data); 
        })        
      }
      this.obtenerOrdenes(this.user.idUsuario); 
    }

    verDetalleOrden(orden) {
      this.authService.getOrden(orden.idOrden).subscribe(data => {
      console.log(data); 
      this.ordenTemp = data.orden; 
      this.authService.almacenarOrdenLS(this.ordenTemp);
      this.authService.getVehiculo(orden.idVehiculo).subscribe(data => {
        console.log(data); 
        this.vehiculoTemp = data.vehiculo; 
        this.authService.almacenarVehiculoLS(this.vehiculoTemp);
        this.router.navigate(['detalle-orden']);
      });      
      
      });
    }
  

}
