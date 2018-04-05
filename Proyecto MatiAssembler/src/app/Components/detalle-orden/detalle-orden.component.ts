import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild,} from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { QrService } from '../../services/qr.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 



@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

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
	motivo: String;
	caucho: String;
	llaves: String;
	gato: String;
	herramientas: String;
	equipoSonido: String;
	desperfectoCarroceria: String;
	estado;
	mecanicos=[];
	elementType : 'url' | 'canvas' | 'img' = 'url';
	qr : String;
	primeraImagen; 
	repuestos; 
	repuestosTemp=[];
	ordenTemp;
	repuestosOrden = [];
	repuestosOrdenAux;
	imagenes; 
	//Alertas
	mostrarAlerta = false; 
	mostrarAlerta2 = false; 
	mostrarAlerta3 = false; 
	mensajeAlerta: String;
	constructor(private authService: AuthService,
				private validateService: ValidateService,
				private qrService: QrService, 
				private router: Router,
				private location: Location) { }

	ngOnInit() {
		this.obtenerMecanicos();
		this.gerente = JSON.parse(localStorage.getItem("user")); 
		this.vehiculo = JSON.parse(localStorage.getItem("vehiculo")); 
		this.orden = JSON.parse(localStorage.getItem("orden")); 
		this.estado = this.orden.activada;
		this.obtenerRepuestosOrden();
		this.obtenerAccesorios();
		this.obtenerDatos();
		let qr2 = this.qrService.generarQR(this.orden.idOrden.toString()); 
		this.qr = qr2; 
		this.getImagenesOrden(); 
		
	}

	logout() {
		this.authService.logout(); 
		this.router.navigate['login']; 
	}

	goBack(): void { //Volver a vista gerente
	this.location.back();
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

	obtenerMecanicos() {
		this.authService.getUsers().subscribe( datos => {
		let usuarios = datos.users
		this.mecanicos = usuarios.filter(function(user) {
			if (user.rol==4) {
			   return user;
			}
		});
		});
	}

	getMarcas() {
		this.authService.getMarcas().subscribe(data => {
		this.marcas = data.marcas; 
		}) 
	}
	getImagenesOrden() {
		this.authService.getImagenesOrden(this.orden.idOrden).subscribe(datos => {
			this.imagenes = datos.imagenesOrden;
			this.primeraImagen = this.imagenes[0];
			this.imagenes.shift(); 
		})
	}

	getLinkImagen(imagen) {
		return imagen.imagen; 
	}

	setMarcaVista(idMarca) {
		return this.marcas[idMarca-1].marca
	}

	obtenerAccesorios() {
		this.authService.getAccesorios(this.orden.idOrden).subscribe(data => {
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
		//this.serialMotor = this.vehiculo.serialMotor;
		this.fechaAdmision = this.orden.fecha;
		if(this.orden.diagnostico!=null){
			this.diagnostico = this.orden.diagnostico;
		}
		if(this.orden.procedimiento!=null){
			this.procedimiento =this.orden.procedimiento;			
		}
		this.motivo=this.orden.motivo;
	}


	setEstado(numero) {
		this.estado = numero; 
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
		this.cerrarAlerta();
		const orden = {
			idOrden: this.idOrden,
			diagnostico: this.diagnostico,
			procedimiento: this.procedimiento,
			activada: this.estado
		}
	    if(!this.validateService.validarDiagnostico(orden.diagnostico)) {
	      this.mensajeAlerta="Diagnóstico demasiado largo, ingrese uno mas corto."
	      this.mostrarAlerta2=true;
	      return false;
	    }
	    if(!this.validateService.validarProcedimiento(orden.procedimiento)) {
	      this.mensajeAlerta="Procedimiento demasiado largo, ingrese uno mas corto."
	      this.mostrarAlerta2=true;
	      return false;
	    }
	    this.cerrarAlerta2();
		this.authService.actualizarOrden(orden).subscribe(data => {
				this.authService.getOrden(orden.idOrden).subscribe(data => {
					if(data.success){
						this.ordenTemp = data.orden; 
						this.authService.almacenarOrdenLS(this.ordenTemp);
						this.mensajeAlerta="Orden modificada correctamente!"
						this.mostrarAlerta=true;
					}
				});							
		}); 
	}

	obtenerRepuestosOrden() {
		this.authService.obtenerRepuestosOrden(this.orden).subscribe( datos => {
			this.repuestosOrdenAux=datos.repuestosOrden;
			for (let i = 0; i < this.repuestosOrdenAux.length; i++) {
				this.authService.obtenerRepuesto(this.repuestosOrdenAux[i].idRepuesto).subscribe( datos => {
					this.repuestosOrden.push(datos.repuesto);
				})
			}
		}); 
	}

	//------ FUNCIONES PARA AÑADIR REPUESTOS

	modificarRepuestos() {
		this.obtenerRepuestos();
		this.vista=2; 
		this.cerrarAlerta();
		this.cerrarAlerta2();
		this.cerrarAlerta3(); 		
	}

	setVista(id) {
	this.vista=id;
	this.cerrarAlerta();
	this.cerrarAlerta2();
	this.cerrarAlerta3();
	}

	obtenerRepuestos() { //Se obtienen todos los repuestos disponibles
		let data = this.authService.obtenerRepuestos().subscribe( datos => {
			this.repuestos = datos.repuestos;
		}); 
	}

	sumarRepuesto(idRepuesto) {
		for (let i = 0; i < this.repuestosTemp.length; i++) {
			if(this.repuestosTemp[i]==idRepuesto){
				return;
			}
		}
		this.repuestosTemp.push(idRepuesto);
	}

	actualizarRepuestos() {
		if(!this.validarRepuestos()){
	      this.mensajeAlerta="La orden ya tiene alguno de los repuestos seleccionados."
	      this.mostrarAlerta2=true;
			this.repuestosTemp=[];
			this.vista=1;
	      return false;			
		}
		this.cerrarAlerta2();
		for (let i = 0; i < this.repuestosTemp.length; i++) {
			const repOrden = {
				idOrden:this.orden.idOrden,
				idRepuesto:this.repuestosTemp[i]
			};
			this.authService.addRepuestosOrden(repOrden).subscribe(data => {
					if(data.success){
						for (let i = 0; i < this.repuestos.length; i++) {
							if(this.repuestos[i].idRepuesto==repOrden.idRepuesto){
								this.repuestosOrden.push(this.repuestos[i]);
							}
						}						
					}
			});
		}
		this.repuestosTemp=[];
		this.vista=1;
 	
	}

	validarRepuestos(){
		for (let i = 0; i < this.repuestosOrden.length; i++) {
			for (let j = 0; j < this.repuestosTemp.length; j++) {
				if(this.repuestosTemp[j]==this.repuestosOrden[i].idRepuesto){
					return false;
				}
			}
		}
		return true;
	}

	/*obtenerNombreMecanico(idMecanico){
		console.log(this.mecanicos);
		for (let i = 0; i < this.mecanicos.length; i++) {
			if(this.mecanicos[i].idUsuario==idMecanico){
				return (this.mecanicos[i].nombre);
			}
		}
	}*/
}
