import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild,} from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vehiculo } from '../vehiculo/vehiculo'; 
import { EmitirOrdenComponent } from '../emitir-orden/emitir-orden.component'; 
import {ReporteMecanicoComponent} from '../reporte-mecanico/reporte-mecanico.component'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'; 
@Component({
  selector: 'app-profile-gerente',
  templateUrl: './profile-gerente.component.html',
  styleUrls: ['./profile-gerente.component.css']
})
export class ProfileGerenteComponent implements OnInit {

  vista=1;
  @ViewChild(EmitirOrdenComponent)  ordenHijo;
  user;
  clientes;
  mecanicos;
  usuarios;
  modificar = false; 
  vistaModificar;
  usuario;
  citas = [];
  carrosCitas = [];
  ordenes = [];
  ordenesActivas = [];
  vehiculos = [];
  //Marcas 
  marcas = Array;
  vehiculoTemp;
  ordenInsertar;
  nuevaOrden = false;
  idVehiculotemp;
  idCitatemp;
  mecanicoReporte;
  myDatepicker; 
  
  nuevoReporte = false;

  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location) { 
    
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")); 
    this.getMarcas();
    this.obtenerClientes();
    this.obtenerMecanicos();  
    this.obtenerColaCitas();
    console.log("Ya se obtuvieron la cola de las citas")
    this.obtenerVehiculos(); 
    console.log("Se van a obtener las ordenes"); 
    this.obtenerOrdenes(); 

   //Para obtener todos los vehiculos registrados en el taller
  }

  setVista(id) {
    this.vista=id;
    console.log(this.vista); 
  }

  ngAfterViewInit() {
    this.ordenInsertar = this.ordenHijo.ordenGenerada;
    console.log(this.ordenInsertar); 
    this.obtenerOrdenes(); 
  }
  
  logout() {
    this.authService.logout(); 
    this.router.navigate(['login']); 
  }

  home() {
    this.router.navigate(['']);
  }
  
  obtenerOrdenes() {
    this.ordenes = new Array(); 

    console.log("Voy a obtener las ordenes"); 
    let data = this.authService.getOrdenes().subscribe( datos => {
      this.ordenes = datos.ordenes;

      this.ordenesActivas = this.ordenes.filter(function(orden) {
        if (orden.activada!=0) {
          return orden;
        }
      });

      for (let i = 0; i < this.ordenesActivas.length; i++) {
        let data2 = this.authService.getVehiculo(this.ordenesActivas[i].idVehiculo).subscribe( datos => {
          //console.log("IMPRIMIRE MAS DATOS"); 
          //console.log(datos); 
          this.ordenesActivas[i].vehiculo = datos.vehiculo; 
        })
      }
      console.log(this.ordenesActivas);
    });
   

  }
  obtenerVehiculos() {
    let data = this.authService.obtenerListaVehiculos().subscribe( datos => {
      console.log("Aqui estan los vehiculos"); 
      console.log(datos); 
      this.vehiculos = datos.vehiculos;       
    }); 
  }

  obtenerClientes() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.usuarios = datos.users
      console.log(this.usuarios); 

      this.clientes = this.usuarios.filter(function(user) {
        if (user.rol==1) {
           return user;
        }
      });
      console.log(this.clientes); 
    })
  }

  obtenerMecanicos() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.usuarios = datos.users
      console.log(this.usuarios); 

      this.mecanicos = this.usuarios.filter(function(user) {
        if (user.rol==4) {
           return user;
        }
      });

      console.log(this.mecanicos); 
    })
  }

  obtenerColaCitas() {
    let data = this.authService.obtenerCitas().subscribe( datos => {
     
      console.log("AQUI ESTOY IMPRIMIENDO LOS DATOS"); 
      console.log(datos);
      this.citas = datos.rcitas;
      console.log(this.citas); 
      let vehiculos2 = this.vehiculos; 
      console.log(vehiculos2); 
      for (let i = 0; i < this.citas.length ; i++) {
      let data2 = this.authService.getVehiculo(this.citas[i].vehiculoCita).subscribe( datos => {
        console.log("IMPRIMIRE MAS DATOS"); 
        console.log(datos); 
        datos.vehiculo.idCita = this.citas[i].idCita; 
        datos.vehiculo.fecha = this.citas[i].fechaSolicitud; 
        this.carrosCitas.push(datos.vehiculo); 
        this.citas[i].vehiculo = datos.vehiculo; 
       //ESTE CODIGO ESTA MUY FEO HAY QUE HACERLE REFACTOR 
      })
    }
    console.log("ARRAY FINALES");
    console.log(this.citas);
    console.log(this.carrosCitas); 

    }); 
 
 
  }
cuadrarCarros() {
  console.log("LAS CITAS SON ")
  console.log(this.citas); 
  this.citas.forEach(function(cita) {
    let data2 = this.authService.getVehiculo(cita.vehiculoCita).subscribe( datos => {
      console.log("IMPRIMIRE MAS DATOS"); 
      this.carrosCitas.push(datos); 
    })
  })

}

  async modificarCliente(id) {
    this.modificar = true;
    this.vistaModificar=2;

    let user; 
     
    await this.authService.getUserById(id).subscribe(datos => {
     
      console.log(datos); 
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
    })     
     console.log(this.usuario); 
 
  }

  getMarcas() {
    this.authService.getMarcas().subscribe(data => {
      console.log(data); 
      this.marcas = data.marcas; 
    }) 
  }

  setMarcaVista(idMarca) {
    return this.marcas[idMarca - 1].marca
  }

  verDetalle(idVehiculo) {
    this.authService.getVehiculo(idVehiculo).subscribe(data => {
      console.log(data); 
      this.vehiculoTemp = data.vehiculo; 
      this.authService.almacenarVehiculoLS(this.vehiculoTemp);
      this.router.navigate(['detalle-vehiculo']);

    });
  }

  agregarOrden(idVehiculo, idCita) {
    this.nuevaOrden = true;  
    this.idVehiculotemp=idVehiculo; 
    this.idCitatemp = idCita; 
    console.log(this.idCitatemp); 
    /*let user; 
     
    await this.authService.getUserById(id).subscribe(datos => {
     
      console.log(datos); 
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
    })    */ 
     console.log(this.idVehiculotemp); 
 
  }

  verReporte(id) {
    this.mecanicoReporte = id;
    this.nuevoReporte = true;  
  }

  cerrarOrden(orden) {
    let id=orden.idOrden;
    if(orden.activada==2) { //Cerrar la orden solo si esta finalizada, si esta en curso no permitirlo
    this.authService.cerrarOrden(orden).subscribe(data => {
      console.log(data); 

      for (let i = 0; i < this.ordenesActivas.length ; i++) {
        if(this.ordenesActivas[i].idOrden==id){
          this.ordenesActivas.splice(i, 1);
        }
      }
    })      
    }

  }
}
