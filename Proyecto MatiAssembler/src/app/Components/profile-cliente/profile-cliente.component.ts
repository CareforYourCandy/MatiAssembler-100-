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
  vehiculos= []; 
  vehiculos2= [];  
  fecha: String; 
  vehiculoCita: Int16Array;
  vehiculoIteracion: Vehiculo; 
  myDatepicker; 
  //Marcas 
  marcas = Array; 
  file;
  vista=1;
    
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
  }

  setMarcaNuevo(idMarca) {
    this.marcaNuevo = idMarca;
    console.log(this.marcaNuevo) ;
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
         console.log("Fallo validacion del vehiculo");
          return false;
        }

        //Registrar usuario
        this.authService.registerVehiculo(vehiculo).subscribe(data => {
       
       let vehiculoNuevo = data.vehiculo; 
         
          if(data.success){
             console.log("sirvio");
             this.vehiculos.push(vehiculo); 
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

  getMarcas() {
    this.authService.getMarcas().subscribe(data => {
      console.log(data); 
      this.marcas = data.marcas; 
    } ) 
  }
  
  setMarcaVista(idMarca) {
  return this.marcas[idMarca].marca
  }

 /*imprimirFile(event){
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file.setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]          
        })
      };
 }*/
}
