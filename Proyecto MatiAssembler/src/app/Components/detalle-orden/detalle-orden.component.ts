import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild,} from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { QrService } from '../../services/qr.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ModificarRepuestoComponent } from '../modificar-repuesto/modificar-repuesto.component'; 


@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

	@ViewChild(ModificarRepuestoComponent) repuestoHijo;
	//nuevoRepuesto = false;
	vista=1;
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
	diagnostico="";
	procedimiento="";
	caucho: String;
	llaves: String;
	gato: String;
	herramientas: String;
	equipoSonido: String;
	desperfectoCarroceria: String;
	estado;
	elementType : 'url' | 'canvas' | 'img' = 'url';
	qr : String;

	repuestos; 
	repuestosTemp=[];
	ordenTemp;
	repuestosOrden = [];
	repuestosOrdenAux;
	imagenes; 

	constructor(private authService: AuthService,
				private qrService: QrService, 
	          private router: Router,
	          private location: Location) { }

	ngOnInit() {
		this.gerente = JSON.parse(localStorage.getItem("user")); 
		this.vehiculo = JSON.parse(localStorage.getItem("vehiculo")); 
		this.orden = JSON.parse(localStorage.getItem("orden")); 
		this.estado = this.orden.activada;
		this.obtenerRepuestosOrden();
		console.log(this.repuestosOrden);		
		console.log(this.orden);
		this.obtenerAccesorios();

		this.obtenerDatos();
		let qr2 = this.qrService.generarQR(this.orden.idOrden.toString()); 
		console.log(qr2); 
		this.qr = qr2; 
		this.getImagenesOrden(); 
		
	}

	logout() {
		this.authService.logout(); 
		this.router.navigate(['login']); 
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
	getImagenesOrden() {
		this.authService.getImagenesOrden(this.orden.idOrden).subscribe(datos => {
			this.imagenes = datos.imagenesOrden;
			console.log("LAS IMAGENES DE LA ORDEN SON:", this.imagenes); 
		})
	}

	getLinkImagen(imagen) {
		return imagen.imagen; 
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
		/*if(this.accesorios.cauchoRepuesto==null){
			this.accesorios.cauchoRepuesto=false;
		}
		if(this.accesorios.llaves==null){
			this.accesorios.llaves=false;
		}
		if(this.accesorios.gato==null){
			this.accesorios.gato=false;
		}
		if(this.accesorios.herramientas==null){
			this.accesorios.herramientas=false;
		}
		if(this.accesorios.equipodeSonido==null){
			this.accesorios.equipodeSonido=false;
		}*/
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
		if(this.orden.diagnostico!=null){
			this.diagnostico = this.orden.diagnostico;
		}
		if(this.orden.procedimiento!=null){
			this.procedimiento =this.orden.procedimiento;			
		}
		/*if(this.accesorios.cauchoRepuesto!=null){
			this.caucho = this.accesorios.cauchoRepuesto;
		}
		if(this.accesorios.llaves!=null){
			this.llaves = this.accesorios.llaves;
		}
		if(this.accesorios.gato!=null){
			this.gato = this.accesorios.gato;
		}
		if(this.accesorios.herramientas!=null){
			this.herramientas = this.accesorios.herramientas;
		}
		if(this.accesorios.equipodeSonido!=null){
			this.equipoSonido = this.accesorios.equipoSonido;
		}
		this.desperfectoCarroceria = this.accesorios.desperfectoCarroceria;*/

	}


	setEstado(numero) {
		this.estado = numero; 
		console.log(this.estado);
	}

	obtenerEstado() {
		//console.log(this.estado);
		if(this.estado==1) {
			return "En curso";
		}
		if(this.estado==2) {
			return "Finalizada";
		}
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
				this.authService.getOrden(orden.idOrden).subscribe(data => {
					console.log(data); 
					this.ordenTemp = data.orden; 
					this.authService.almacenarOrdenLS(this.ordenTemp);
					this.router.navigate['detalle-orden'];     
				});						
			//});	
		}); 
	}

	obtenerRepuestosOrden() {
		this.authService.obtenerRepuestosOrden(this.orden).subscribe( datos => {
			this.repuestosOrdenAux=datos.repuestosOrden;
			console.log("id repuestos aux:");
			console.log(this.repuestosOrdenAux);
			for (let i = 0; i < this.repuestosOrdenAux.length; i++) {
				this.authService.obtenerRepuesto(this.repuestosOrdenAux[i].idRepuesto).subscribe( datos => {
					console.log(datos.repuesto);
					this.repuestosOrden.push(datos.repuesto);
				})
			}
			console.log("AQUI LOS REPUESTOS de la orden"); 
			console.log(this.repuestosOrden); 
		}); 
	}

	//------ FUNCIONES PARA AÑADIR REPUESTOS

	modificarRepuestos() {
		this.obtenerRepuestos();
		this.vista=2;  		
	}

	obtenerRepuestos() { //Se obtienen todos los repuestos disponibles
		let data = this.authService.obtenerRepuestos().subscribe( datos => {
			this.repuestos = datos.repuestos;
			console.log("AQUI LOS REPUESTOS"); 
			console.log(this.repuestos); 
		}); 
	}

	sumarRepuesto(idRepuesto) {
		this.repuestosTemp.push(idRepuesto);
		console.log(this.repuestosTemp);
	}

	actualizarRepuestos() {
		for (let i = 0; i < this.repuestosTemp.length; i++) {
			const repOrden = {
				idOrden:this.orden.idOrden,
				idRepuesto:this.repuestosTemp[i]
			};
			this.authService.addRepuestosOrden(repOrden).subscribe(data => {
					console.log(data.success);
					console.log("añadiendo un repuesto en la orden");
					if(data.success){
						for (let i = 0; i < this.repuestos.length; i++) {
							if(this.repuestos[i].idRepuesto==repOrden.idRepuesto){
								this.repuestosOrden.push(this.repuestos[i]);
							}
						}						
						console.log(this.repuestosOrden);
					}
					//this.router.navigate['detalle-orden'];     	
			});
		}
		this.repuestosTemp=[];
		this.vista=1;
 	
	}

}
