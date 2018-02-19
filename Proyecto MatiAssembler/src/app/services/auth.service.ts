import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	authToken: any;
	user: any;
	vehiculo: any;

	constructor(private http:Http) { }

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

	obtenerVehiculos(user){ //ObtenerVehiculos
		let headers = new Headers();
		headers.append('Content-Type','application/json');
		return this.http.post('http://localhost:3000/users/getVehiculos', user, {headers: headers})
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

	storeVehiculosData(vehiculos) {
		localStorage.setItem('vehicles', JSON.stringify(vehiculos));
		this.vehiculo = vehiculos;
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
}
