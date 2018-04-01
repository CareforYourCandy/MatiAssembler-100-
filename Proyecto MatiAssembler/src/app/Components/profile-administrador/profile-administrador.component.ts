import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { ModificarUsuarioComponent } from '../modificar-usuario/modificar-usuario.component';
import { AgregarRepuestoComponent } from '../agregar-repuesto/agregar-repuesto.component'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-administrador',
  templateUrl: './profile-administrador.component.html',
  styleUrls: ['./profile-administrador.component.css']
})
export class ProfileAdministradorComponent implements OnInit {
  admin: object;
  @ViewChild(AgregarRepuestoComponent)  repuestoHijo;  
  repuestoInsertar; 
  usuarios; 
  usuario; 
  repuestos;
  vista=1;

  id; 
  name: String;
  lastname: String;
  email: String;
  rol=1;
  password: String;
  cedula: String; 
  direccion: String;
  telefono: String;
  pieza: String; 

  constructor(private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router ) { }
  
  
  
  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem("user")); 
    this.obtenerRepuestos(); 
    this.obtenerUsuarios();
    //this.nuevoRep = JSON.parse(localStorage.getItem("nuevo")); 
      //console.log(this.nuevoRep);
      /*this.repuestos.push(this.nuevoRep);
      console.log(this.repuestos);*/
  }

  setVista(id) {
    this.vista=id;
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

   modificarUsuario(id) {
    let user;      
    this.authService.getUserById(id).subscribe(datos => {
     
      console.log(datos); 
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
      this.obtenerDatos(this.usuario);    
      console.log(this.usuario); 
      this.vista=3;      
    });

 
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
  //------------ FUNCIONES PARA MODIFICAR USUARIO -------------
  obtenerDatos(user) {
    console.log(user); 
    this.id = user.idUsuario;
    this.name = user.nombre;
    this.lastname = user.apellido;
    this.email = user.correo;
    this.rol = user.rol;
    this.password = user.contraseña;
    this.cedula = user.cedula;
    this.direccion = user.direccion;
    this.telefono = user.telefono; 
  }

  modificarUsuarioSubmit() {
    console.log("hola"); 
    const usuario = {
      idUsuario: this.id,
      nombre: this.name,
      apellido: this.lastname,
      correo: this.email,
      rol: this.rol,
      contraseña: this.password,
      cedula: this.cedula,
      telefono: this.telefono,
      direccion: this.direccion
      
    }
    console.log(usuario); 
    this.authService.actualizarUsuario(usuario).subscribe(data => {
          console.log(data.success); 
          if(data.success) {
            for (let i=0; i<this.usuarios.length; i++){
              if(this.usuarios[i].idUsuario==usuario.idUsuario){
                this.usuarios[i]=usuario;
              }
            }
            this.vista=1;
          }
          this.router.navigate['profile-administrador'];      
    });  
  }

  setRol(numero) {
    this.rol = numero; 
  }

  obtenerRolSubmit() {
    if(this.rol==1) {
      return "Cliente";
    }
    if(this.rol==2) {
      return "Administrador";
    }
    if(this.rol==3) {
      return "Gerente";
    }
    if(this.rol==4) {
      return "Mecanico";
    }
  }

  //------------ FUNCION PARA AGREGAR USUARIO -------------

  onRegisterSubmit() {   
    const user = {
      nombre: this.name,
      apellido: this.lastname,
      correo: this.email,
      contraseña: this.password,
      rol: this.rol, //el rol del usuario
      cedula: this.cedula,
      direccion: this.direccion,
      telefono: this.telefono,  
    }
    console.log(user); 
    console.log("Hola"); 
    //Required fields
    if(!this.validateService.validateRegister(user)){
     console.log("Fallo val usuario");
      return false;
    }
    //Validar email
    if(!this.validateService.validateEmail(user.correo)){
     console.log("Fallo val email"); 
      return false;
    }
    //Registrar usuario
    this.authService.registerUser(user).subscribe(data => {
      console.log(data.success); 
      //if(data.success) {

      //}
      //this.router.navigate['profile-administrador'];       
    });        
    this.usuarios.push(user);
    this.vista=1;       
  }

//--------- FUNCION AGREGAR REPUESTO -----------------
  registrarRepuesto() {
    const repuesto = {
      pieza: this.pieza 
    }
    this.authService.registerRepuesto(repuesto).subscribe(data => {
      console.log(data.success);
      this.repuestos.push(repuesto); 
      //this.router.navigate(['/profile-administrador']);
    });
     this.vista=2; 
  }
}
