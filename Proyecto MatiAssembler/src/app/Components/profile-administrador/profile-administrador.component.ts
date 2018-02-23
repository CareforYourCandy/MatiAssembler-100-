import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModificarUsuarioComponent } from '../../modificar-usuario/modificar-usuario.component';
import {AgregarRepuestoComponent} from '../agregar-repuesto/agregar-repuesto.component'; 


@Component({
  selector: 'app-profile-administrador',
  templateUrl: './profile-administrador.component.html',
  styleUrls: ['./profile-administrador.component.css']
})
export class ProfileAdministradorComponent implements OnInit {
  
  modificar = false; 
  nuevoRepuesto = false; 
  @ViewChild(AgregarRepuestoComponent)  repuestoHijo;  
  repuestoInsertar; 
  usuarios; 
  usuario; 
  repuestos;


  constructor(private authService: AuthService ) { }
  
  
  
  ngOnInit() {
    this.obtenerRepuestos(); 
    this.obtenerUsuarios();
  }
  ngAfterViewInit() {
    this.repuestoInsertar = this.repuestoHijo.repuestoGenerado;
    console.log(this.repuestoInsertar); 
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

  obtenerUsuarios() {
    let data = this.authService.getUsers().subscribe( datos => {
      this.usuarios = datos.users
      console.log(this.usuarios); 
    })
  }
async modificarUsuario(id) {
  this.modificar = true;
  let user; 
   
  await this.authService.getUserById(id).subscribe(datos => {
   
    console.log(datos); 
    user = datos.user; 
    console.log(user); 
    this.usuario = user; 
  })  
 
 console.log(this.usuario); 

  
}
}
