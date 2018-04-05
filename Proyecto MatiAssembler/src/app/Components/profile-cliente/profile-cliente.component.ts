import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {UploadFileService} from '../../services/upload-file.service'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-cliente',
  templateUrl: './profile-cliente.component.html',
  styleUrls: ['./profile-cliente.component.css']
})
export class ProfileClienteComponent implements OnInit {
  form: FormGroup;
  //Datos usuario 
  user; 

  //Datos vehiculos 
  serialMotor: String; 
  modelo: String;
  ano: Int16Array;  
  placa: String; 
  fechatemp: any;
  fechaRegistro: any;
  activado: Boolean;
  marcaNuevo;
  selecciono=false;
  vehiculos= []; //Contiene los vehiculos de un cliente
  vehiculosTaller; //Contiene todos los vehiculos del taller
  vehiculos2= [];  
  vehiculoActivar; //Vehiculo desactivado que se quiere registrar
  fecha: String; 
  vehiculoCita: Int16Array;
  myDatepicker; 
  //Marcas 
  marcas = Array; 
  file;
  vista=1;
  //Alertas
  mostrarAlerta = false; 
  mostrarAlerta2 = false; 
  mostrarAlerta3 = false; 
  mensajeAlerta: String;
  citas;
  citasVehiculo;
  ordenes;
  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location,
              private datePipe: DatePipe,
              private uploadService: UploadFileService ) { 
    
  }

  ngOnInit() {
      this.user = JSON.parse(localStorage.getItem("user"));  
      this.getMarcas();
      this.recuperarVehiculos(); 
      this.obtenerVehiculosTaller();
      this.obtenerCitas();
      this.obtenerOrdenes();       
  }

  ngAfterInit() {
    this.getMarcas();
    this.recuperarVehiculos();
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['login']); 
  }

  home() {
    this.router.navigate(['']);
  }

  setVista(id) {
    this.vista=id;
    this.cerrarAlerta();
    this.cerrarAlerta2();
    this.cerrarAlerta3();
    this.setearCampos();
  }

  setMarcaNuevo(marca) {
    this.marcaNuevo=marca;
    this.selecciono=true;
  }

  obtenerVehiculosTaller() {
    this.authService.obtenerListaVehiculos().subscribe( datos => {
      this.vehiculosTaller = datos.vehiculos;       
    }); 
  }

  recuperarVehiculos() {
    let data = this.authService.obtenerVehiculos(this.user).subscribe( datos => { 
      this.vehiculos2 = datos.vehiculos; 
      this.vehiculos = this.vehiculos2.filter(function(vehiculo) {
        if (vehiculo.activado == 1) {
          return vehiculo;
        }
      });       
    });    
  }
 
  desactivarVehiculo(carro) {
    this.cerrarAlerta();
    if(!this.validarCitaPendiente(carro.idVehiculo)){ //Comprueba que no se haya solicitado una cita de este vehículo y siga pendiente
      this.mensajeAlerta="No puede desactivarse, tiene citas por asignar";
      this.mostrarAlerta2=true;
      return false;     
    }
    if(!this.validarSolicitudCita(carro.idVehiculo)){ //Comprueba que no haya ordenes en proceso
      this.mensajeAlerta="No puede desactivarse, tiene una orden de reparación en proceso";
      this.mostrarAlerta2=true;
      return false;
    }
    this.cerrarAlerta2();
    this.authService.desactivarVehiculo(carro).subscribe(data => {
      if(data.success){
        for (let i = 0; i < this.vehiculos.length; i++) {
          if(this.vehiculos[i].idVehiculo==carro.idVehiculo){
            this.vehiculos.splice(i, 1);
          }
        }        
      } 
    })
  }

  setActivado(id){
    if(id==1){
      return "Activado";
    }
    if(id==0){
      return "Desactivado";
    }
  }

  solicitarCita(idVehiculo) {
    this.cerrarAlerta();
    this.fechatemp= new Date();
    this.fechaRegistro= this.datePipe.transform(this.fechatemp);
    const cita = {
      vehiculoCita: idVehiculo,
      fechaSolicitud:this.fechaRegistro 
    }
    if(!this.validarCitaPendiente(idVehiculo)){ //Comprueba que no se haya solicitado una cita de este vehículo y siga pendiente
      this.mensajeAlerta="Este vehiculo ya tiene una cita solicitada";
      this.mostrarAlerta2=true;
      return false;     
    }
    if(!this.validarSolicitudCita(idVehiculo)){ //Comprueba que no haya ordenes en proceso
      this.mensajeAlerta="Este vehiculo ya tiene una orden de reparación en proceso";
      this.mostrarAlerta2=true;
      return false;
    }
    this.cerrarAlerta2();
    this.authService.solicitarCita(cita).subscribe(data => {
      if(data.success){
        let citaNueva=data.citaNueva;
        this.citas.push(citaNueva);
        this.mensajeAlerta="Solicitud de cita procesada exitosamente!";
        this.mostrarAlerta=true; 
      }
    });

  }

  vehiculoSubmit() { 
        this.fechatemp= new Date();
        this.fechaRegistro= this.datePipe.transform(this.fechatemp);
        var fileInput= document.getElementById('fileItem').attributes;
        var inputFile = (<HTMLInputElement>document.getElementById('fileItem')).files;
        var file; 
        console.log(inputFile);
        console.log(file);; 
        //this.fechaRegistro=this.fechatemp.getFullYear()+"-"+(this.fechatemp.getMonth()+1)+"-"+this.fechatemp.getDate();
        if (this.selecciono){
          this.marcaNuevo=this.marcaNuevo.idMarca;
        }
        const vehiculo = {
          placa: this.placa,       
          marca: this.marcaNuevo,
          modelo: this.modelo,
          ano: this.ano,
          serialMotor: this.serialMotor, 
          activado: true, 
          propietario: this.user.idUsuario, 
          fechaRegistro: this.fechaRegistro
        }
        //Required fields
        if(!this.validateService.validateRegisterVehiculo(vehiculo)){
            this.mensajeAlerta="Por favor rellene todos los campos";
            this.mostrarAlerta3=true;
            return false;
        }
        else if(!this.validarRegistroVehiculo(vehiculo)){
            this.mensajeAlerta="Ya existe un vehiculo con esta placa o serial";
            this.mostrarAlerta3=true;
            return false;
        }
        else if(!this.validateService.validarPlaca(vehiculo)){
            this.mensajeAlerta="Campo Placa demasiado largo, ingrese uno más corto";
            this.mostrarAlerta3=true;
            return false;
        }
        else if(!this.validateService.validarModelo(vehiculo)){
            this.mensajeAlerta="Campo Modelo demasiado largo, ingrese uno más corto";
            this.mostrarAlerta3=true;
            return false;
        }
        else if(!this.validateService.validarSerial(vehiculo)){
            this.mensajeAlerta="Campo Serial demasiado largo, ingrese uno más corto";
            this.mostrarAlerta3=true;
            return false;
        }
        else if(!this.validateService.validarYear(vehiculo)){
            this.mensajeAlerta="Campo Año inválido o demasiado largo";
            this.mostrarAlerta3=true;
            return false;
        }        
        else if(!this.validateService.validateRegisterVehiculo(vehiculo)){
            this.mensajeAlerta="Por favor rellene todos los campos";
            this.mostrarAlerta3=true;
            return false;
        }
        this.cerrarAlerta3();
      if(this.registroInactivo(vehiculo)){ //activar nuevamente el vehiculo
          this.authService.activarVehiculo(vehiculo).subscribe(data => {
            if(data.success){
              this.vehiculos.push(this.vehiculoActivar); 
              this.vehiculosTaller.push(this.vehiculoActivar);
              for ( var i = 0; i < inputFile.length; i++) {
                file = inputFile.item(i); 
                this.uploadService.uploadfile(file, this.vehiculoActivar.idVehiculo, 1, this.authService); 
              } 
              this.mensajeAlerta="Vehiculo registrado exitosamente!";
              this.mostrarAlerta=true; 
              this.vista=1;
            }
            else {
              this.router.navigate(['profile-cliente']); 
            } 
          })        
      }
      else {
        //Registrar vehiculo
        this.authService.registerVehiculo(vehiculo).subscribe(data => {     
            let vehiculoNuevo = data.vehiculo; 
            if(data.success){
              this.vehiculos.push(vehiculoNuevo); 
              this.vehiculosTaller.push(vehiculoNuevo);
              this.vista=1;
              for ( var i = 0; i < inputFile.length; i++) {
                file = inputFile.item(i); 
                this.uploadService.uploadfile(file, vehiculoNuevo.idVehiculo, 1, this.authService); 
              } 
              this.mensajeAlerta="Vehiculo registrado exitosamente!";
              this.mostrarAlerta=true;
              this.setearCampos(); 
              this.vista=1;
            }
            else {
              this.router.navigate(['profile-cliente']); 
            }
        });
      }

  }

  getMarcas() {
    this.authService.getMarcas().subscribe(data => {
      this.marcas = data.marcas; 
    }) 
  }
  
  setMarcaVista(idMarca) {
  return this.marcas[idMarca-1].marca
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

  setearCampos(){
    this.placa=undefined;       
    this.marcaNuevo=undefined; 
    this.modelo=undefined; 
    this.ano=undefined; 
    this.serialMotor=undefined; 
  }
//-------- VALIDACIONES

  validarRegistroVehiculo(newVehiculo) { //Validar que no se registre un vehiculo con placa y serial existente
    for (let i=0; i<this.vehiculosTaller.length; i++){
      if(this.vehiculosTaller[i].placa==newVehiculo.placa || this.vehiculosTaller[i].serialMotor==newVehiculo.serialMotor){ //Si hay un vehiculo con la misma placa
          if(this.vehiculosTaller[i].activado){
            return false;
          } 
      }
    }  
    return true; 
  }

  registroInactivo(newVehiculo) { //Revisar que el vehiculo este inactivo
    for (let i=0; i<this.vehiculosTaller.length; i++){
      if(this.vehiculosTaller[i].placa==newVehiculo.placa){ //Si hay un vehiculo con la misma placa
          if(!this.vehiculosTaller[i].activado){
            this.vehiculoActivar=this.vehiculosTaller[i];
            this.vehiculoActivar.activado=1;
            return true;
          } 
      }
    }  
    return false; 
  }

  validarSolicitudCita(idVehiculo){
    let ordenesVehiculo=[];
    for (let i=0; i<this.ordenes.length; i++){ //Obtener las ordenes del vehiculo
      if (this.ordenes[i].idVehiculo==idVehiculo) {
        ordenesVehiculo.push(this.ordenes[i]);
      }
    }  
    //Buscar si hay ordenes activas de este vehículo
    for (let i=0; i<ordenesVehiculo.length; i++){
      if (ordenesVehiculo[i].activada==1 || ordenesVehiculo[i].activada==2) { //Si hay alguna orden activa o finalizada (en vez de cerrada)
        return false;
      }
    }
    return true;
  }

  validarCitaPendiente(idVehiculo){
    let citasVehiculo=[];  
    for (let i=0; i<this.citas.length; i++){
      if (this.citas[i].vehiculoCita==idVehiculo) {
        citasVehiculo.push(this.citas[i]);
      }
    }
    if(citasVehiculo.length>0){
      return false;
    }
    return true;
  }

  obtenerCitas(){
    this.authService.obtenerCitas().subscribe( datos => {
      this.citas = datos.rcitas;
    });    
  }

  obtenerOrdenes(){
    this.authService.getOrdenes().subscribe( datos => {
      if(datos.success){
        this.ordenes = datos.ordenes;        
      }      
    });
  }

}
