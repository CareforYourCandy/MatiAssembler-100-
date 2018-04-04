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
  marcaNuevo;
  modelo;
  marcas = Array;
  //Alertas
  mostrarAlerta = false; 
  mostrarAlerta2 = false; 
  mostrarAlerta3 = false; 
  mensajeAlerta: String;
  constructor(private validateService: ValidateService, 
              private authService: AuthService,
              private router: Router ) { }
  
  
  
  ngOnInit() {
    this.getMarcas();
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
    this.setearCampos();
    this.cerrarAlerta();
    this.cerrarAlerta2();
    this.cerrarAlerta3();
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
    this.setearCampos();
    this.authService.getUserById(id).subscribe(datos => {
      user = datos.usuario; 
      console.log(user); 
      this.usuario = user; 
      this.obtenerDatos(this.usuario);    
      console.log(this.usuario); 
      this.cerrarAlerta();
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
    //Validar nombre
    if(!this.validateService.validarNombre(usuario.nombre)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Nombre demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar apellido
    if(!this.validateService.validarApellido(usuario.apellido)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Apellido demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar correo
    if(!this.validateService.validarCorreo(usuario.correo)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar cedula
    if(!this.validateService.validarCedula(usuario.cedula)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Cedula demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar direccion
    if(!this.validateService.validarDireccion(usuario.direccion)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Direccion demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar telefono
    if(!this.validateService.validarTelefono(usuario.telefono)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Telefono demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Required fields
    if(!this.validateService.validateRegister(usuario)){
      console.log("Fallo val usuario");
      this.cerrarAlerta3();
      this.mensajeAlerta="Por favor rellene todos los campos"
      this.mostrarAlerta2=true;  
      return false;
    }
    //Validar formato email
    if(!this.validateService.validateEmail(usuario.correo)){
      console.log("Fallo val email"); 
      this.cerrarAlerta2();
      this.mensajeAlerta="Correo inválido, por favor ingrese correctamente."
      this.mostrarAlerta3=true;
      return false;
    }
    this.cerrarAlerta2();
    this.cerrarAlerta3();

    this.authService.actualizarUsuario(usuario).subscribe(data => {
          console.log(data.success); 
          if(data.success) {
            for (let i=0; i<this.usuarios.length; i++){
              if(this.usuarios[i].idUsuario==usuario.idUsuario){
                this.usuarios[i]=usuario;
              }
            }
            this.setearCampos();
            this.vista=1;
            this.mensajeAlerta="Usuario modificado correctamente"
            this.mostrarAlerta=true;  
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
    this.cerrarAlerta();  
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
    //Validar nombre
    if(!this.validateService.validarNombre(user.nombre)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Nombre demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar apellido
    if(!this.validateService.validarApellido(user.apellido)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Apellido demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar correo
    if(!this.validateService.validarCorreo(user.correo)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar contraseña
    if(!this.validateService.validarPassword(user.contraseña)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Contraseña demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar cedula
    if(!this.validateService.validarCedula(user.cedula)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Cedula demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar direccion
    if(!this.validateService.validarDireccion(user.direccion)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Direccion demasiado larga, ingrese una mas corta."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar telefono
    if(!this.validateService.validarTelefono(user.telefono)){
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Telefono demasiado largo, ingrese uno mas corto."
      this.mostrarAlerta3=true;
      return false;
    }
    //Validar usuario existente por correo electronico
    if(!this.validarUsuario(user)){
      this.mensajeAlerta="Este correo ya esta registrado, por favor ingrese otro."
      this.mostrarAlerta3=true;     
      return false;
    }
    //Required fields
    if(!this.validateService.validateRegister(user) && !this.validateService.validateEmail(user.correo)){
      console.log("Fallo val usuario");
      this.mensajeAlerta="Por favor rellene todos los campos, con un correo válido"
      this.mostrarAlerta2=true;     
      return false;
    }
    if(!this.validateService.validateRegister(user)){
      console.log("Fallo val usuario");
      this.cerrarAlerta3();
      this.mensajeAlerta="Por favor rellene todos los campos"
      this.mostrarAlerta2=true;     
      return false;
    }
    //Validar formato email
    if(!this.validateService.validateEmail(user.correo)){
      console.log("Fallo val email");
      this.cerrarAlerta2(); 
      this.mensajeAlerta="Correo inválido, por favor ingrese correctamente."
      this.mostrarAlerta3=true;
      return false;
    }
    this.cerrarAlerta2();
    this.cerrarAlerta3();
    //Registrar usuario
    this.authService.registerUser(user).subscribe(data => {
      console.log(data.success);
      if(data.success){
        let usuarioNuevo = data.user;
        this.usuarios.push(usuarioNuevo);
        this.mensajeAlerta="Usuario registrado correctamente"
        this.mostrarAlerta=true;       
      } 
    });        
    this.setearCampos();
    this.vista=1;
    //this.router.navigate['profile-administrador'];             
  }

//--------- FUNCION AGREGAR REPUESTO -----------------
  registrarRepuesto() {
    if(this.pieza==undefined || this.pieza==""){
      this.mensajeAlerta="El campo pieza está vacío, por favor ingrese un valor.";
      this.mostrarAlerta3=true;      
    }
    else {
      this.cerrarAlerta3();      
      const repuesto = {
        pieza: this.pieza, 
        modelo: this.modelo,
        marca: this.marcaNuevo
      }
      this.authService.registerRepuesto(repuesto).subscribe(data => {
        console.log(data.success);
        this.repuestos.push(repuesto); 
        this.pieza="";
        this.marcaNuevo=null;
        this.modelo=null;
        //this.router.navigate(['/profile-administrador']);
        this.mensajeAlerta="Repuesto registrado correctamente"
        this.mostrarAlerta=true;  
        this.vista=2; 
      });      
    }

  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
    this.mensajeAlerta=""; 
  }
  cerrarAlerta2() {
    this.mostrarAlerta2 = false;
    this.mensajeAlerta=""; 
  }
  cerrarAlerta3() {
    this.mostrarAlerta3 = false;
    this.mensajeAlerta=""; 
  }
  setearCampos() {
      this.name="";
      this.lastname="";
      this.email="";
      this.password="";
      this.cedula="";
      this.direccion="";
      this.telefono="";
      this.rol=1;
  }

  getMarcas() {
    this.authService.getMarcas().subscribe(data => {
      console.log(data); 
      this.marcas = data.marcas; 
    }) 
  }

  setMarcaVista(idMarca) {
    if(idMarca!=null) {
      return this.marcas[idMarca - 1].marca;
    } 
    else {
      return "-----";
    }    
  }
  setModeloVista(modelo) {
    if(modelo!=null) {
      return modelo;
    } 
    else {
      return "-----";
    }   
  }


  setMarcaNuevo(idMarca) {
    this.marcaNuevo = idMarca;
    console.log(this.marcaNuevo) ;
  }

  validarUsuario(newUsuario) { //Validar que no se registre un usuario con un correo ya existente
    for (let i=0; i<this.usuarios.length; i++){
      if(this.usuarios[i].correo==newUsuario.correo){
        return false;
      }
    }
    return true;
  }

}
