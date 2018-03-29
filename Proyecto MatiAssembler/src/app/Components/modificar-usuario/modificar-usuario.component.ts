import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit, OnChanges {

  @Input() user;  
  id; 
  name: String;
	lastname: String;
	email: String;
	rol: String;
  password: String;
  cedula: String; 
  direccion: String;
  telefono: String; 

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.obtenerDatos(this.user); 
      console.log(this.user); 
    }
  }
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
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
  setRol(numero) {
    this.rol = numero; 
  }

  modificarUsuario() {
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
          this.router.navigate['profile-administrador'];      
    });  
  }
}
