import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service'; 
import { Router } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-emitir-orden',
  templateUrl: './emitir-orden.component.html',
  styleUrls: ['./emitir-orden.component.css']
})
export class EmitirOrdenComponent implements OnInit {
	@Input() idVehiculo;
	@Input() idCita; 
	@Input() mecanicos; 
	fechaOrden: String;
	diagnostico: String;
	mecanico: String;
	repuesto: String;
	motivo: String;
	ordenGenerada;
	activada: Boolean;
	myDatepicker; 
	file; 
	public myDatePickerOptions: IMyDpOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd',
	};
	public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(private validateService: ValidateService, 
			    private authService: AuthService,
					private router: Router,
					private qrService: QrService) { }

  ngOnInit() {
  }
  seleccionarMecanico(id) {
	  this.mecanico = id;
  }
/*
	registrarOrden() {
		console.log(this.idVehiculo);
		let fechaOrdenFormateada = ""; 
		fechaOrdenFormateada += this.model.date.year + "-" + this.model.date.month + "-" + this.model.date.day; 
		const orden = {
		idVehiculo: this.idVehiculo,
		idMecanico: this.mecanico,
		diagnostico: this.diagnostico,
		fecha: fechaOrdenFormateada,
		motivo: this.motivo,
		activada: 1
		}
		this.ordenGenerada = orden; 
		var inputFile = (<HTMLInputElement>document.getElementById('fileItem')).files;
		var file; 

		this.authService.registerOrden(orden).subscribe(data => {
			console.log(data.success); 
			let ordenNueva = data.ordenNueva; 
			if(data.success) {
				this.authService.eliminarCita(this.idCita).subscribe( data => { 
					console.log(data.success); 			
					for ( var i = 0; i < inputFile.length; i++) {
						file = inputFile.item(i); 
					 this.uploadService.uploadfile(file, ordenNueva.idOrden, 2, this.authService); 

				} 
					//this.router.navigate['home-page'];
				})
			}			
		}); 
	}
*/ 

  /*obtenerMecanico() {
  	let mecanicoAux = this.mecanicos.filter(function(user) {
        if (user.idUsuario==aux) {
           return user;
        }
    });
  	console.log(mecanicoAux[0]);
    return mecanicoAux[0].nombre || "Mecanicos"; 
  }*/

}
