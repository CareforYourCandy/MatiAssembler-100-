import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-profile-cliente',
  templateUrl: './profile-cliente.component.html',
  styleUrls: ['./profile-cliente.component.css']
})
export class ProfileClienteComponent implements OnInit {

  user; 
  serialMotor: String; 
  modelo: String;
  año: String; 
  placa: String; 

  constructor(private http:Http ) { 
    
  }

  ngOnInit() {
   this.user = JSON.parse(localStorage.getItem("user")); 
 
    
  }

  vehiculoSubmit() {
    const vehiculo = {
      serialMotor : this.serialMotor,
      modelo: this.modelo,
      año: this.año,
      placa: this.placa, 
    }
    
      console.log(vehiculo); //Para registrar un usuario
      let headers = new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/vehiculo/registerVehiculo', vehiculo, {headers: headers})
        .map(res => res.json());
    }
  }
 
}


