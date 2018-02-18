import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-administrador',
  templateUrl: './profile-administrador.component.html',
  styleUrls: ['./profile-administrador.component.css']
})
export class ProfileAdministradorComponent implements OnInit {

  nuevoRepuesto = false; 
  
  constructor() { }

  ngOnInit() {
  }

  agregarRepuesto() {
    this.nuevoRepuesto = true; 
  }

}
