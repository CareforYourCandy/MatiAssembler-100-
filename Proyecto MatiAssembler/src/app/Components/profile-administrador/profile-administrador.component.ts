import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import {ModificarUsuarioComponent} from '../../components/modificar-usuario/modificar-usuario.component'
@Component({
  selector: 'app-profile-administrador',
  templateUrl: './profile-administrador.component.html',
  styleUrls: ['./profile-administrador.component.css']
})
export class ProfileAdministradorComponent implements OnInit {

  nuevoRepuesto = false; 
  repuestos; 
 
  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.obtenerRepuestos(); 
    console.log("hola"); 
    console.log(this.repuestos);
  }

  agregarRepuesto() {
    this.nuevoRepuesto = true; 
    
  }

  obtenerRepuestos() {
    let data = this.authService.obtenerRepuestos().subscribe( datos => {
       
      this.repuestos = datos.repuestos; 
      console.log(this.repuestos); 
       
      }); 
  }

}
