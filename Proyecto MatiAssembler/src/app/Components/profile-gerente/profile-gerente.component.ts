import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild,} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EmitirOrdenComponent } from '../emitir-orden/emitir-orden.component'; 
import {ReporteMecanicoComponent} from '../reporte-mecanico/reporte-mecanico.component'; 
import {IMyDpOptions} from 'mydatepicker';
import {UploadFileService} from '../../services/upload-file.service'; 
import { QrService } from '../../services/qr.service';
import { DatePipe } from '@angular/common';

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
  //Accesorios orden
  cauchoRepuesto: boolean;
  llaves: boolean;
  gato: boolean;
  herramientas: boolean;
  equipodeSonido: boolean;
  desperfectoCarroceria: String;
  //Alertas
  mostrarAlerta = false; 
  mostrarAlerta2 = false; 
  mostrarAlerta3 = false; 
  mensajeAlerta: String;
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
              private qrService: QrService,
              private uploadService: UploadFileService,
              private datePipe: DatePipe) { 
             
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
    this.setearCampos();
    this.cerrarAlerta();
    this.cerrarAlerta2();
    this.cerrarAlerta3();
  }
  
  logout() {
    this.authService.logout(); 
    this.router.navigate(['login']); 
  }

  home() {
    this.router.navigate(['']);
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
    this.mensajeAlerta=""; 
  }
  cerrarAlerta2() {
    this.mostrarAlerta2 = false;
    this.mensajeAlerta=""; 
  }
  cerrarAlerta3() {
    this.mostrarAlerta3 = false;
    this.mensajeAlerta=""; 
  }
  setearCampos() {
      this.name="";
      this.lastname="";
      this.email="";
      this.password="";
      this.cedula="";
      this.direccion="";
      this.telefono="";
      this.rol=1;
  }
  
  obtenerOrdenes() {
    this.ordenes = new Array(); 
    this.authService.getOrdenes().subscribe( datos => {
      this.ordenes = datos.ordenes;
      this.ordenesActivas = this.ordenes.filter(function(orden) {
        if (orden.activada != 0 ) {
          return orden;
        }
      });

      for (let i = 0; i < this.ordenesActivas.length; i++) {
        let data2 = this.authService.getVehiculo(this.ordenesActivas[i].idVehiculo).subscribe( datos => {
          this.ordenesActivas[i].vehiculo = datos.vehiculo; 
        })
      }
      console.log(this.ordenesActivas);
    });
   

  }
  obtenerVehiculos() {
    let data = this.authService.obtenerListaVehiculos().subscribe( datos => {
      this.vehiculos = datos.vehiculos;       
    }); 
  }

  obtenerClientes() {
    let data = this.authService.getUsers().subscribe( datos => {
      let usuarios = datos.users
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
      this.citas = datos.rcitas;
      console.log(this.citas); 
      for (let i = 0; i < this.citas.length ; i++) {
      let data2 = this.authService.getVehiculo(this.citas[i].vehiculoCita).subscribe( datos => {
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
    this.setearCampos();
    //this.cerrarAlerta();       
    this.authService.getUserById(id).subscribe(datos => {     
      console.log(datos); 
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
      this.obtenerDatos(this.usuario);    
      console.log(this.usuario); 
      this.cerrarAlerta();       
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
    //Validar nombre
    if(!this.validateService.validarNombre(usuario.nombre)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Nombre demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar apellido
    if(!this.validateService.validarApellido(usuario.apellido)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Apellido demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar correo
    if(!this.validateService.validarCorreo(usuario.correo)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar cedula
    if(!this.validateService.validarCedula(usuario.cedula)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Cedula demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar direccion
    if(!this.validateService.validarDireccion(usuario.direccion)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Direccion demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar telefono
    if(!this.validateService.validarTelefono(usuario.telefono)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Telefono demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Required fields
    if(!this.validateService.validateRegister(usuario)){
      console.log("Fallo val usuario");
      this.cerrarAlerta3();
      this.mensajeAlerta="Por favor rellene todos los campos"
      this.mostrarAlerta2=true;  
      return false;
    }
    //Validar formato email
    if(!this.validateService.validateEmail(usuario.correo)){
      console.log("Fallo val email"); 
      this.cerrarAlerta2();
      this.mensajeAlerta="Correo inválido, por favor ingrese correctamente."
      this.mostrarAlerta3=true;
      return false;
    }
    this.cerrarAlerta2();
    this.cerrarAlerta3(); 
    this.authService.actualizarUsuario(usuario).subscribe(data => {
          console.log(data.success); 
          if(data.success) {
            for (let i=0; i<this.clientes.length; i++){
              if(this.clientes[i].idUsuario==usuario.idUsuario){
                this.clientes[i]=usuario;
              }
            }            
            this.setearCampos();
            this.vista=1;
            this.mensajeAlerta="Usuario modificado correctamente"
            this.mostrarAlerta=true;
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
    this.validarAccesorios();
    let fechaOrdenFormateada = ""; 
    fechaOrdenFormateada += this.model.date.year + "-" + this.model.date.month + "-" + this.model.date.day; 
    //Variables para comparar la fecha
    let year=this.model.date.year;
    let month=this.model.date.month;
    let day=this.model.date.day;
    let fechatemp= new Date();
    let fechaRegistro= this.datePipe.transform(fechatemp);

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
    if(!this.validateService.validateOrden(orden)){
      //this.cerrarAlerta2();
      this.mensajeAlerta="Por favor rellene todos los campos."
      this.mostrarAlerta3=true;
      return false;
    }/*
    if(!this.validateService.validarFechaOrden(this.model.date, )){
      this.mensajeAlerta="Fecha inválida, elige una que no haya pasado";
      this.mostrarAlerta3=true;
      return false;     
    }*/
    this.authService.registerOrden(orden).subscribe(data => {
      console.log(data.success); 
      if(data.success) {
        let ordenRetornada=data.orden;
        this.authService.eliminarCita(this.idCitatemp).subscribe( data2 => { 
          console.log("orden retornada:");
          console.log(data.orden);
          console.log(data2.success); 
          this.authService.getVehiculo(ordenRetornada.idVehiculo).subscribe( datos => {
            ordenRetornada.vehiculo = datos.vehiculo;
            this.ordenesActivas.push(ordenRetornada);
            for (let i=0; i<this.carrosCitas.length; i++){
              if(this.carrosCitas[i].idCita==this.idCitatemp){
                this.carrosCitas.splice(i, 1);
              }
            }
            for ( var i = 0; i < inputFile.length; i++) {
              file = inputFile.item(i); 
              this.uploadService.uploadfile(file, ordenRetornada.idOrden, 2, this.authService); 
            } 
            this.vista=3;              
          });                     
        });
        const accesoriosOrden = {
          idOrden: ordenRetornada.idOrden,
          cauchoRepuesto: this.cauchoRepuesto,
          llaves: this.llaves,
          gato: this.gato,
          herramientas: this.herramientas,
          equipodeSonido: this.equipodeSonido,
          desperfectoCarroceria: this.desperfectoCarroceria      
        }
        this.authService.addAccesorios(accesoriosOrden).subscribe(data => {
          console.log(data.success);
        });
      }      
    }); 
  }

  validarAccesorios(){
    if(this.cauchoRepuesto==undefined){
      this.cauchoRepuesto=false;
    }
    if(this.llaves==undefined){
      this.llaves=false;
    }
    if(this.gato==undefined){
      this.gato=false;
    }
    if(this.herramientas==undefined){
      this.herramientas=false;
    }
    if(this.equipodeSonido==undefined){
      this.equipodeSonido=false;
    }
    console.log("caucho:");
    console.log(this.cauchoRepuesto);
    console.log("llaves:");
    console.log(this.llaves);
    console.log("gato:");
    console.log(this.gato);

  }

  setearCamposOrden() {
    this.mecanico=undefined;
    //this.diagnostico=undefined;
    this.motivo=undefined;
  }

  setCamposAccesorios(){
    this.cauchoRepuesto=undefined;
    this.llaves=undefined;
    this.gato=undefined;
    this.herramientas=undefined;
    this.equipodeSonido=undefined;
    this.desperfectoCarroceria=undefined;  
  }


}
