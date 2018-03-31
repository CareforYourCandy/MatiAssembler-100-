import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModificarUsuarioComponent } from '../modificar-usuario/modificar-usuario.component';
import { AgregarRepuestoComponent } from '../agregar-repuesto/agregar-repuesto.component'; 


@Component({
  selector: 'app-profile-administrador',
  templateUrl: './profile-administrador.component.html',
  styleUrls: ['./profile-administrador.component.css']
})
export class ProfileAdministradorComponent implements OnInit {
  admin: object;
  modificar = false; 
  vistaModificar;
  nuevoRepuesto = false; 
  @ViewChild(AgregarRepuestoComponent)  repuestoHijo;  
  repuestoInsertar; 
  usuarios; 
  usuario; 
  repuestos;
  vista=1;
  vistaTemp;
  nuevoRegistro = false;
  nuevoRep;
  constructor(private authService: AuthService ) { }
  
  
  
  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem("user")); 
    this.obtenerRepuestos(); 
    this.obtenerUsuarios();
    this.nuevoRep = JSON.parse(localStorage.getItem("nuevo")); 
      console.log(this.nuevoRep);
      /*this.repuestos.push(this.nuevoRep);
      console.log(this.repuestos);*/
  }

  /*ngAfterInit() {
    this.nuevoRep = JSON.parse(localStorage.getItem("nuevo")); 
    console.log(this.nuevoRep);
  }
  ngAfterViewInit() {
    if(this.repuestoHijo.nuevo) {
      this.repuestoInsertar = this.repuestoHijo.repuestoGenerado;
      console.log(this.repuestoInsertar); 
      this.repuestos.push(this.repuestoInsertar);      
    }
  }*/

  setVista(id) {
    this.vista=id;
  }

  Registrar(id) {
    this.nuevoRegistro=true;      
    this.vistaTemp=id;
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
    this.vistaModificar=1;
    let user; 
     
    await this.authService.getUserById(id).subscribe(datos => {
     
      console.log(datos); 
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
    })     
     console.log(this.usuario); 
 
  }
  obtenerRol(rol) {
    if(rol==1) {
      return "Cliente";
    }
    if(rol==2) {
      return "Administrador";
    }
    if(rol==3) {
      return "Gerente";
    }
    if(rol==4) {
      return "Mecanico";
    }
  }
}
