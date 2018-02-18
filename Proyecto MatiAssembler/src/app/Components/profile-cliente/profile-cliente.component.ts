import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

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

  constructor() { 
    
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
  }
 
}


