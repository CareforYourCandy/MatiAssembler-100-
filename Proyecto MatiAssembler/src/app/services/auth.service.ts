import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	authToken: any;
	user: any;
	vehiculo: any;
	orden: any;

	constructor(private http:Http) { }

	getMecanicos() {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getMecanicos', Object(), {headers: headers})
		.map(res => res.json());
	}

	getMarcas() {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getMarcas', Object(), {headers: headers})
		.map(res => res.json());

	}

	getAccesorios(ID) {
		let idOrden = {ID}
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getAccesorios', idOrden, {headers: headers})
		.map(res => res.json());

	}

	modificarUsuario(usuario) {
		console.log("Hola servicio"); 
		console.log(usuario); 
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		console.log("Voy a hacer el post"); 
		return this.http.post('http://localhost:3000/users/modificarUsuario', usuario, {headers: headers})
		.map(res => res.json());
	}
	registerRepuesto(repuesto) {
		console.log("Hola"); 
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/registerRepuesto', repuesto, {headers: headers})
		.map(res => res.json());
	}

	registerOrden(orden) {
		console.log("Hola aqui en registrar orden"); 
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/registerOrden', orden, {headers: headers})
		.map(res => res.json());
	}

	getUserById(ID) {
		let idUsuario = {ID};
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getUser', idUsuario, {headers: headers})
		.map(res => res.json());
	}
	
	getUsers() {
		console.log("Hola2"); 
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getUsers', Object(), {headers: headers})
		.map(res => res.json());
	}


	obtenerCitas() {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getCitas', {headers: headers})
		.map(res => res.json());
	}

	getVehiculo(ID) {
		let idVehiculo = {ID}
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getVehiculo', idVehiculo, {headers: headers})
		.map(res => res.json());
	}

	getOrden(ID) {
		let idOrden = {ID}
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getOrden', idOrden, {headers: headers})
		.map(res => res.json());
	}

	obtenerRepuestos() {
		console.log("Hola2"); 
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/obtenerRepuestos', Object(), {headers: headers})
		.map(res => res.json());
	}
	
	registerUser(user){ 
		//console.log(user); //Para registrar un usuario
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
			.map(res => res.json());
	}

	registerVehiculo(carro){ 
		//Para registrar un vehiculo
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/registerVehiculo', carro, {headers: headers})
			.map(res => res.json());
	}

	desactivarVehiculo(vehiculo) {
		console.log("entro en servicio"); 
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/desactivarVehiculo', vehiculo, {headers: headers})
		.map (res => res.json()); 
	}

	solicitarCita(cita) {
		//Para registrar una cita
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/registerCita', cita, {headers: headers})
			.map(res => res.json());		
	}

	authenticateUser(user){ //Iniciar sesión
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
			.map(res => res.json());
	}

	obtenerVehiculos(user){ //Obtener Vehiculos por cliente
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getVehiculos', user, {headers: headers})
			.map(res => res.json());
	}

	obtenerOrdenes(vehiculo){ //Obtener Ordenes por vehiculo
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getOrdenes', vehiculo, {headers: headers})
			.map(res => res.json());
	}

	obtenerListaVehiculos(){ //Obtener todos los Vehiculos
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getVehiculos2', {headers: headers})
			.map(res => res.json());
	}
	getOrdenesMecanico() {
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.get('http://localhost:3000/users/getOrdenesMecanico', {headers: headers})
		.map(res => res.json());
	}
	getProfile(){
		let headers = new Headers();
		this.loadToken();
		headers.append('Authorization', this.authToken);
		headers.append('Content-Type','application/json');
		return this.http.get('http://localhost:3000/users/profile', {headers: headers})
			.map(res => res.json());
	}

	storeUserData(token, user) { //Para almacenar los datos en el almacenamiento local
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	loadToken(){
		const token = localStorage.getItem('id_token');
		this.authToken = token;
	}

	logout(){ //Para cerrar sesión
		this.authToken = null;
		this.user = null;
		this.vehiculo = null;
		localStorage.clear();
	}

	loggedIn() {
	return tokenNotExpired('id_token');
	}
	

	almacenarVehiculoLS(vehiculo) { //Almacenar un vehiculo en Local Storage
		localStorage.setItem('vehiculo', JSON.stringify(vehiculo));
		this.vehiculo = vehiculo;
	}

	almacenarOrdenLS(orden) { //Almacenar una orden en Local Storage
		localStorage.setItem('orden', JSON.stringify(orden));
		this.orden = orden;
	}

}
