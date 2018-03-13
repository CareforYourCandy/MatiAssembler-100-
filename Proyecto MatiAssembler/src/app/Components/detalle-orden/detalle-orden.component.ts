import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

	vehiculo;
	gerente;
	orden;
	marcas = Array;
	accesorios;

	constructor(private authService: AuthService,
	          private router: Router,
	          private location: Location) { }

	ngOnInit() {
		console.log('marcas y usuarios:');
		this.getMarcas();			
		this.gerente = JSON.parse(localStorage.getItem("user")); 
		this.vehiculo = JSON.parse(localStorage.getItem("vehiculo")); 
		this.orden = JSON.parse(localStorage.getItem("orden")); 
		console.log(this.orden);
		this.obtenerAccesorios();
	}

	logout() {
		this.authService.logout(); 
		this.router.navigate(['login']); 
	}

	home() {
		this.router.navigate(['']);
	}

	goBack(): void { //Volver a vista gerente
	this.location.back();
	}


	getMarcas() {
		this.authService.getMarcas().subscribe(data => {
		console.log(data.marcas); 
		this.marcas = data.marcas; 
		}) 
	}

	setMarcaVista(idMarca) {
		return this.marcas[idMarca].marca
	}

	obtenerAccesorios() {
		console.log(this.orden.idOrden);
		this.authService.getAccesorios(this.orden.idOrden).subscribe(data => {
		console.log(data.accesorios); 
		this.accesorios = data.accesorios; 
		})
	}

}
