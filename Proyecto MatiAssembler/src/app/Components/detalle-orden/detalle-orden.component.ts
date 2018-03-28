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
	accesorios: any;

	idOrden: String;
	mecanico: String;
	modelo: String;
	ano: String;
	placa: String;
	serialMotor: String;
	fechaAdmision: String;
	diagnostico: String;
	procedimiento: String;
	caucho: String;
	llaves: String;
	gato: String;
	herramientas: String;
	equipoSonido: String;
	desperfectoCarroceria: String;
	estado;

	repuestos;
	ordenTemp;
	repuestosTemp= [];

	constructor(private authService: AuthService,
	          private router: Router,
	          private location: Location) { }

	ngOnInit() {
		console.log('marcas y usuarios:');
		this.getMarcas();
		this.obtenerRepuestos();			
		this.gerente = JSON.parse(localStorage.getItem("user")); 
		this.vehiculo = JSON.parse(localStorage.getItem("vehiculo")); 
		this.orden = JSON.parse(localStorage.getItem("orden")); 
		console.log(this.orden);
		this.obtenerAccesorios();
		this.estado = this.orden.activada;
		this.obtenerDatos();

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
		return this.marcas[idMarca-1].marca
	}

	obtenerAccesorios() {
		console.log(this.orden.idOrden);
		console.log('ESTOY EN OBT ACCS');
		this.authService.getAccesorios(this.orden.idOrden).subscribe(data => {
		console.log(data.accesorios); 
		this.accesorios = data.accesorios; 
		})
	}

	setBoolean(variable){
		if(variable){
			return "si";
		} else {
			return "no";
		}
	}

	obtenerDatos() { 
		this.idOrden = this.orden.idOrden;
		this.mecanico = this.orden.idMecanico;
		this.modelo = this.vehiculo.modelo;
		this.ano = this.vehiculo.ano;
		this.placa = this.vehiculo.placa;
		this.serialMotor = this.vehiculo.serialMotor;
		this.fechaAdmision = this.orden.fecha;
		this.diagnostico = this.orden.diagnostico;
		this.procedimiento =this.orden.procedimiento;
		this.caucho = this.accesorios.cauchoRepuesto;
		this.llaves = this.accesorios.llaves;
		this.gato = this.accesorios.gato;
		this.herramientas = this.accesorios.herramientas;
		this.equipoSonido = this.accesorios.equipoSonido;
		this.desperfectoCarroceria = this.accesorios.desperfectoCarroceria;
		
	}


	setEstado(numero) {
		this.estado = numero; 
		console.log(this.estado);
	}

	obtenerEstado() {
		console.log(this.estado);
		if(this.estado==1) {
			return "En curso";
		}
		if(this.estado==2) {
			return "Finalizada";
		}
	}

	obtenerRepuestos() {
		let data = this.authService.obtenerRepuestos().subscribe( datos => {
			this.repuestos = datos.repuestos;
			console.log("AQUI LOS REPUESTOS"); 
			console.log(this.repuestos); 
		}); 
	}

	actualizarOrden() {
	  	console.log(this.idOrden);
		  const orden = {
		    idOrden: this.idOrden,
		    diagnostico: this.diagnostico,
		    procedimiento: this.procedimiento,
		    activada: this.estado
		  }
		  
		this.authService.actualizarOrden(orden).subscribe(data => {
			console.log(data.success); 

			this.authService.añadirRepuestosOrden(this.repuestosTemp).subscribe(data => {
				console.log(data);
				this.authService.getOrden(orden.idOrden).subscribe(data => {
					console.log(data); 
					this.ordenTemp = data.orden; 
					this.authService.almacenarOrdenLS(this.ordenTemp);
					this.router.navigate['detalle-orden'];     
				});						
			});	
		}); 
	}

	sumarRepuesto(idRepuesto) {
		this.repuestosTemp.push(idRepuesto);
		console.log(this.repuestosTemp);
	}

}
