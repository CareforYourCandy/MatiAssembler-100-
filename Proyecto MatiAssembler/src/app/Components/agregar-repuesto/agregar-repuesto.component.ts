import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-repuesto',
  templateUrl: './agregar-repuesto.component.html',
  styleUrls: ['./agregar-repuesto.component.css']
})
export class AgregarRepuestoComponent implements OnInit {

pieza: String; 
marca: String;
modelo: String; 

  

  constructor() { }

  ngOnInit() {
   
  }

  
 registrarRepuesto() {

 }

}
