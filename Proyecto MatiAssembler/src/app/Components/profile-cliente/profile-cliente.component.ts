import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-cliente',
  templateUrl: './profile-cliente.component.html',
  styleUrls: ['./profile-cliente.component.css']
})
export class ProfileClienteComponent implements OnInit {

  user; 
  serialMotor: String; 
  modelo: String;
  ano: Int16Array;
  placa: String; 
  activado: Boolean;
  marca: Int16Array;
  vehiculos;

  constructor(private http:Http,
              private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router) { 
    
  }

  ngOnInit() {
      this.user = JSON.parse(localStorage.getItem("user")); 
      this.vehiculos = this.authService.obtenerVehiculos(this.user).subscribe( datos => {
         console.log(datos.success);
      }); 
        
  }

  recuperarVehiculos() {
  }

  vehiculoSubmit() { 

    const vehiculo = {
      placa: this.placa,       
      marca: this.marca,
      modelo: this.modelo,
      activado: true,
      serialMotor: this.serialMotor,     
      año: this.ano,
      dueño: this.user.idUsuario    
    }
    console.log(vehiculo); //Para registrar un vehiculo

    //Required fields
    if(!this.validateService.validateRegisterVehiculo(vehiculo)){
     console.log("Fallo validacion del vehiculo");
      return false;
    }

    //Registrar usuario
    this.authService.registerVehiculo(vehiculo).subscribe(data => {
      console.log(data.success); 
      if(data.success){
         console.log("sirvio");
      } else {
        console.log("fallo");  
      }
      this.router.navigate(['/profile-cliente']);
    });

    //this.router.navigate(['/login']);

  }
 
}
