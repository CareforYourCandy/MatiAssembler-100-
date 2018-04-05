import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.css']
})
export class DetalleVehiculoComponent implements OnInit {

	vehiculo;
	gerente;
	ordenes;
	historial;	
	imagenes; 
	primeraImagen; 
	ordenTemp;
	marcas = Array;
	usuario;
	carouselBanner; 
	constructor(private authService: AuthService,
	          private router: Router,
	          private location: Location) { }

	ngOnInit() {
		this.getMarcas();
		this.gerente = JSON.parse(localStorage.getItem("user")); 
		this.vehiculo = JSON.parse(localStorage.getItem("vehiculo")); 
		this.obtenerHistorial();
		this.obtenerImagenes(); 
	}

	getLinkImagen(imagen) {
		console.log("LINK IMAGEN", imagen.imagen)
		return imagen.imagen; 
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
	obtenerImagenes() {
		this.authService.getImagenesVehiculo(this.vehiculo.idVehiculo).subscribe( datos => {
			 
			this.imagenes = datos.imagenesVehiculo; 
			this.primeraImagen = this.imagenes[0];
			this.imagenes.shift(); 
			console.log("LA PRIMERA IMAGEN ES", this.primeraImagen); 
			console.log("EL ARRAY DE LAS IMAAGENES ES ", this.imagenes); 
			
		})
	}
	obtenerHistorial() {
		this.authService.obtenerOrdenesVehiculo(this.vehiculo).subscribe( datos => {
			this.ordenes = datos.ordenes;
			this.historial = this.ordenes.filter(function(orden) {
				if (orden.activada==0) {
					return orden;
				}
			});
		})
	}

  	verDetalleOrden(idOrden) {
		this.authService.getOrden(idOrden).subscribe(data => {
		this.ordenTemp = data.orden; 
		this.authService.almacenarOrdenLS(this.ordenTemp);
		this.router.navigate(['detalle-orden']);
		});
    }

	getMarcas() {
		this.authService.getMarcas().subscribe(data => {
		this.marcas = data.marcas; 
		}) 
	}

	setMarcaVista(idMarca) {
		return this.marcas[idMarca - 1].marca
	}

}
