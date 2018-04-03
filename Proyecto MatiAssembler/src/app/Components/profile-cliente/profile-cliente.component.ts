import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {UploadFileService} from '../../services/upload-file.service'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vehiculo } from '../vehiculo/vehiculo'; 
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
  marcaNuevo: Int16Array;
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
      console.log(this.user); 
      this.getMarcas();
      this.recuperarVehiculos(); 
      this.obtenerVehiculosTaller();
        
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
  }

  setMarcaNuevo(idMarca) {
    this.marcaNuevo = idMarca;
    console.log(this.marcaNuevo) ;
  }

  obtenerVehiculosTaller() {
    this.authService.obtenerListaVehiculos().subscribe( datos => {
      this.vehiculosTaller = datos.vehiculos;       
    }); 
  }

  recuperarVehiculos() {
    let data = this.authService.obtenerVehiculos(this.user).subscribe( datos => {
      console.log(datos); 
      this.vehiculos2 = datos.vehiculos; 
      this.vehiculos = this.vehiculos2.filter(function(vehiculo) {
        if (vehiculo.activado == 1) {
          return vehiculo;
        }
      });       
    });    
  }
 
  desactivarVehiculo(carro) {
    console.log(carro);
    this.authService.desactivarVehiculo(carro).subscribe(data => {
      console.log(data.success);
      if(data.success){
        for (let i = 0; i < this.vehiculos.length; i++) {
          if(this.vehiculos[i].idVehiculo==carro.idVehiculo){
            //this.vehiculos[i].activado=false;
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
    this.cerrarAlerta3();
    this.authService.solicitarCita(cita).subscribe(data => {
      console.log(data.success); 
      if(data.success){
         console.log("sirvio");
         this.router.navigate(['profile-cliente']);

      } else {
        console.log("fallo");
        this.router.navigate(['profile-cliente']); 
      }
    this.recuperarVehiculos(); 

    });

  }

  vehiculoSubmit() { 
        this.fechatemp= new Date();
        this.fechaRegistro= this.datePipe.transform(this.fechatemp);
        console.log(this.fechaRegistro); 
        var fileInput= document.getElementById('fileItem').attributes;
        //var fileInput2= document.querySelector("#fileItem").ATTRIBUTE_NODE;
        //var file= fileInput.item(0);
        var inputFile = (<HTMLInputElement>document.getElementById('fileItem')).files;
        var file; 
        console.log(inputFile);
        console.log(file);
       
        console.log("hola"); 
      
        
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
        
        console.log(vehiculo); //Para registrar un vehiculo

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
        this.cerrarAlerta3();
      if(this.registroInactivo(vehiculo)){ //activar nuevamente el vehiculo
          this.authService.activarVehiculo(vehiculo).subscribe(data => {
            console.log(data.success);
            if(data.success){
               console.log("sirvio");
               this.vehiculos.push(this.vehiculoActivar); 
               this.vista=1;
               for ( var i = 0; i < inputFile.length; i++) {
                file = inputFile.item(i); 
               this.uploadService.uploadfile(file, this.vehiculoActivar.idVehiculo, 1, this.authService); 
                } 
            }
            else {
              console.log("fallo");
              this.router.navigate(['profile-cliente']); 
            } 
          })        
      }
      else {
        //Registrar vehiculo
        this.authService.registerVehiculo(vehiculo).subscribe(data => {     
            let vehiculoNuevo = data.vehiculo; 
           
            if(data.success){
               console.log("sirvio");
               this.vehiculos.push(vehiculoNuevo); 
               this.vista=1;
               for ( var i = 0; i < inputFile.length; i++) {
                file = inputFile.item(i); 
               this.uploadService.uploadfile(file, vehiculoNuevo.idVehiculo, 1, this.authService); 
                } 
            }
            else {
              console.log("fallo");
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
//-------- VALIDACIONES

  validarRegistroVehiculo(newVehiculo) { //Validar que no se registre un vehiculo con placa y serial existente
    for (let i=0; i<this.vehiculosTaller.length; i++){
      if(this.vehiculosTaller[i].placa==newVehiculo.placa && this.vehiculosTaller[i].serialMotor==newVehiculo.serialMotor){ //Si hay un vehiculo con la misma placa
          if(this.vehiculosTaller[i].activado){
            return false;
          } 
      } else if(this.vehiculosTaller[i].placa==newVehiculo.placa){
          if(this.vehiculosTaller[i].activado){
            return false;
          } 
      } else if(this.vehiculosTaller[i].serialMotor==newVehiculo.serialMotor){
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
    for (let i=0; i<this.vehiculos.length; i++){ //Obtener el vehiculo que se desea solicitar la cita
      if(this.vehiculos[i].idVehiculo==idVehiculo){ 
        this.vehiculoCita = this.vehiculos[i];
      }
    } 
    //Buscar si hay ordenes activas de este vehículo
    this.authService.obtenerOrdenesVehiculo(this.vehiculoCita).subscribe( datos => {
      this.ordenes = datos.ordenes;
      console.log(this.ordenes);
      for (let i=0; i<this.ordenes.length; i++){
        if (this.ordenes[i].activada==1 || this.ordenes[i].activada==2) { //Si hay alguna orden activa o finalizada (en vez de cerrada)
          return false;
        }
      }
      return true;
    });         

  }

  validarCitaPendiente(idVehiculo){
    this.authService.obtenerCitas().subscribe( datos => {
      this.citas = datos.rcitas;
      console.log(this.citas);
      let citasVehiculo=[];
      for (let i=0; i<this.citas.length; i++){
        if (this.citas[i].vehiculoCita==idVehiculo) {
          citasVehiculo.push(this.citas[i]);
        }
      }
      console.log(citasVehiculo);
      if(citasVehiculo.length>0){
        return false;
      }
      return true;

    });   
  }
}
