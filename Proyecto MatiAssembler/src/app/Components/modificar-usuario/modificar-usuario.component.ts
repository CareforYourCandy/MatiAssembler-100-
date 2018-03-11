import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit, OnChanges {

  @Input() user;   
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
  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }
  obtenerDatos(user) {
    console.log(user); 
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

  async modificarUsuario() {
    console.log("hola"); 
    let usuario = {
      nombre: this.name,
      apellido: this.lastname,
      correo: this.email,
      rol: this.rol,
      password: this.password,
      cedula: this.cedula,
      direccion: this.direccion,
      telefono: this.telefono
    }
    console.log(usuario); 
    await this.authService.modificarUsuario(usuario); 
  }
}
