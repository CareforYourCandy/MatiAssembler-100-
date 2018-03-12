import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
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
  vehiculos2: Vehiculo[];  
  fecha: String; 
  vehiculoCita: Int16Array;
  vehiculoIteracion: Vehiculo; 

  //Marcas 
  marcas = Array; 
  file;

    
  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router, 
              private location: Location,
              private datePipe: DatePipe ) { 
    
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

  setMarcaNuevo(idMarca) {
    this.marcaNuevo = idMarca;
    console.log(this.marcaNuevo) ;
  }
  recuperarVehiculos() {
    let data = this.authService.obtenerVehiculos(this.user).subscribe( datos => {
      console.log(datos); 
      this.vehiculos = datos.vehiculos; 
      console.log(this.vehiculos);
      /*let vehiculos3 = []; 
      vehiculos3.push(datos.vehiculos.map(function(datosVehiculo) {
        console.log(datosVehiculo); 
        let vehiculo = new Vehiculo(datosVehiculo.serialMotor, datosVehiculo.modelo, datosVehiculo.ano, datosVehiculo.placa,
          datosVehiculo.activado, datosVehiculo.marca, datosVehiculo.idVehiculo, datosVehiculo.fechaRegistro); 
          console.log(vehiculo); 
          return vehiculo; 
          
       
      })); 
      this.vehiculos2 = vehiculos3;*/
       
    }); 
     
  }
 
  desactivarVehiculo(id, carro) {
    carro.activado = false; 
    const vehiculo = {
      idVehiculo: id,
      propietario: this.user.idUsuario
    }
    console.log("El id es" + id); 
    
    this.authService.desactivarVehiculo(vehiculo).subscribe(data => {
      console.log(data.success); 

    })
    this.recuperarVehiculos(); 
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
    if(this.validateService.validateRegisterVehiculo(vehiculo)){
     console.log("Fallo validacion del vehiculo");
      return false;
    }

    //Registrar usuario
    this.authService.registerVehiculo(vehiculo).subscribe(data => {
      console.log(data.success); 
      if(data.success){
         console.log("sirvio");
         this.vehiculos.push(vehiculo); 
      } else {
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
