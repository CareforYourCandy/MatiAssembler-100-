import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  serialMotor: String; 
  modelo: String;
  ano: Int16Array;  
  placa: String; 
  activado: Boolean;
  marca: Int16Array;
  vehiculoID: String; 

  constructor(serialMotor, modelo, ano, placa, activado, marca, vehiculoID) { 
    this.serialMotor = serialMotor;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.activado = activado;
    this.marca = marca;
    this.vehiculoID = 
  }

  ngOnInit() {
  }

}
