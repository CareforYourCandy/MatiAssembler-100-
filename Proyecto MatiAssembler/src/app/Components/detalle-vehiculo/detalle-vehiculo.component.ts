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

	ordenTemp;
	marcas = Array;
	usuario;

	constructor(private authService: AuthService,
	          private router: Router,
	          private location: Location) { }

	ngOnInit() {
		console.log('marcas y usuarios:');
		this.getMarcas();
		//this.getUsuarios();		
		this.gerente = JSON.parse(localStorage.getItem("user")); 
		this.vehiculo = JSON.parse(localStorage.getItem("vehiculo")); 
		this.obtenerHistorial();
		this.obtenerImagenes(); 
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
			var numero = 0; 

			console.log("EL ARRAY DE LAS IMAAGENES ES ", this.imagenes); 
			this.imagenes.forEach(imagen => {
				imagen.numero = numero; 
				numero++; 
			})
		})
	}
	obtenerHistorial() {
		this.authService.obtenerOrdenesVehiculo(this.vehiculo).subscribe( datos => {
			this.ordenes = datos.ordenes;
			console.log(this.ordenes); 

			this.historial = this.ordenes.filter(function(orden) {
				if (orden.activada==0) {
					return orden;
				}
			});

			console.log(this.historial); 
		})
	}

  	verDetalleOrden(idOrden) {
		this.authService.getOrden(idOrden).subscribe(data => {
		console.log(data); 
		this.ordenTemp = data.orden; 
		this.authService.almacenarOrdenLS(this.ordenTemp);
		this.router.navigate(['detalle-orden']);
		});
    }

	getMarcas() {
		this.authService.getMarcas().subscribe(data => {
		console.log(data.marcas); 
		this.marcas = data.marcas; 
		}) 
	}

	setMarcaVista(idMarca) {
		return this.marcas[idMarca - 1].marca
	}
//------------------------
	/*getUsuarios(idUsuario) {
		this.authService.getUsers().subscribe(data => {
		console.log(data.users); 
		this.usuarios = data.usuarios; 
		});
	}

	setNombreUsuario(idUsuario) {
		let nombreCompleto= this.usuarios[idUsuario].nombre;
		return nombreCompleto;
	}*/
}
