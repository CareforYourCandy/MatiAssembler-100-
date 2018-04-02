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
import {IMyDpOptions} from 'mydatepicker';
import {UploadFileService} from '../../services/upload-file.service'; 
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
  //usuarios;
  usuario;
  citas = [];
  carrosCitas = [];
  ordenes = [];
  ordenesActivas = [];
  vehiculos = [];
  //Marcas 
  marcas = Array;
  vehiculoTemp;
  idVehiculotemp;
  idCitatemp;
  mecanicoReporte;
  myDatepicker; 
  nuevoReporte = false;
  //Para modificar un usuario
  id; 
  name: String;
  lastname: String;
  email: String;
  rol=1;
  password: String;
  cedula: String; 
  direccion: String;
  telefono: String;
  //Para emitir la orden
  fechaOrden: String;
  diagnostico: String;
  mecanico: String;
  repuesto: String;
  motivo: String;
  ordenGenerada;
  activada: Boolean;
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location,
              private uploadService: UploadFileService) { 
    
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
  }

  setVista(id) {
    this.vista=id;
    console.log(this.vista); 
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

     
    this.authService.getOrdenes().subscribe( datos => {
      this.ordenes = datos.ordenes;
      console.log("Voy a obtener las ordenes");
      console.log(this.ordenes); 
      this.ordenesActivas = this.ordenes.filter(function(orden) {
        if (orden.activada != 0 ) {
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
      let usuarios = datos.users
      console.log(usuarios); 

      this.clientes = usuarios.filter(function(user) {
        if (user.rol==1) {
           return user;
        }
      });
      console.log(this.clientes); 
    })
  }

  obtenerMecanicos() {
    let data = this.authService.getUsers().subscribe( datos => {
      let usuarios = datos.users
      console.log(usuarios); 

      this.mecanicos = usuarios.filter(function(user) {
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

   //------------ FUNCIONES PARA MODIFICAR USUARIO -------------

   modificarCliente(id) {
    let user;      
    this.authService.getUserById(id).subscribe(datos => {     
      console.log(datos); 
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
      this.obtenerDatos(this.usuario);    
      console.log(this.usuario); 
      this.vista=8;      
    });
  }

  obtenerDatos(user) {
    console.log(user); 
    this.id = user.idUsuario;
    this.name = user.nombre;
    this.lastname = user.apellido;
    this.email = user.correo;
    this.rol = user.rol;
    this.password = user.contraseña;
    this.cedula = user.cedula;
    this.direccion = user.direccion;
    this.telefono = user.telefono; 
  }

  modificarClienteSubmit() {
    console.log("hola"); 
    const usuario = {
      idUsuario: this.id,
      nombre: this.name,
      apellido: this.lastname,
      correo: this.email,
      rol: this.rol,
      contraseña: this.password,
      cedula: this.cedula,
      telefono: this.telefono,
      direccion: this.direccion
      
    }
    console.log(usuario); 
    this.authService.actualizarUsuario(usuario).subscribe(data => {
          console.log(data.success); 
          if(data.success) {
            for (let i=0; i<this.clientes.length; i++){
              if(this.clientes[i].idUsuario==usuario.idUsuario){
                this.clientes[i]=usuario;
              }
            }
            this.vista=1;
          }     
    });  
  }

  setRol(numero) {
    this.rol = numero; 
  }

  obtenerRolSubmit() {
    if(this.rol==1) {
      return "Cliente";
    }
    if(this.rol==2) {
      return "Administrador";
    }
    if(this.rol==3) {
      return "Gerente";
    }
    if(this.rol==4) {
      return "Mecanico";
    }
  }
//----------- FUNCIONES PARA EMITIR UNA ORDEN ---------------------
  agregarOrden(idVehiculo, idCita) { 
    this.idVehiculotemp=idVehiculo; 
    this.idCitatemp = idCita; 
    console.log(this.idCitatemp); 
    console.log(this.idVehiculotemp); 
    this.vista=9;
  }

  seleccionarMecanico(id) {
    this.mecanico = id;
  }

  registrarOrden() {
    let fechaOrdenFormateada = ""; 
    fechaOrdenFormateada += this.model.date.year + "-" + this.model.date.month + "-" + this.model.date.day; 
    const orden = {
    idVehiculo: this.idVehiculotemp,
    idMecanico: this.mecanico,
    diagnostico: this.diagnostico,
    fecha: fechaOrdenFormateada,
    motivo: this.motivo,
    activada: 1
    }
    var inputFile = (<HTMLInputElement>document.getElementById('fileItem')).files;
    var file; 
    
    this.authService.registerOrden(orden).subscribe(data => {
      console.log(data); 
      let ordenNueva = data.ordenNueva; 
      console.log(data.success); 
      if(data.success) {
        this.authService.eliminarCita(this.idCitatemp).subscribe( data => { 
          console.log(data.success); 
          this.ordenesActivas.push(orden);
          for (let i=0; i<this.carrosCitas.length; i++){
            if(this.carrosCitas[i].idCita==this.idCitatemp){
              this.carrosCitas.splice(i, 1);
            }
          } 
          for ( var i = 0; i < inputFile.length; i++) {
						file = inputFile.item(i); 
					 this.uploadService.uploadfile(file, ordenNueva.idOrden, 2, this.authService); 

				} 
          this.vista=3;              
          //this.router.navigate['home-page'];
        })
      }      
    }); 
  }


}
