import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';

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
	public myDatePickerOptions: IMyDpOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd',
	};
	public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(private validateService: ValidateService, 
			    private authService: AuthService,
			    private router: Router) { }

  ngOnInit() {
  }
  seleccionarMecanico(id) {
	  this.mecanico = id;
  }

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

		this.authService.registerOrden(orden).subscribe(data => {
			console.log(data.success); 
			if(data.success) {
				this.authService.eliminarCita(this.idCita).subscribe( data => { 
					console.log(data.success); 			
					//this.router.navigate['home-page'];
				})
			}			
		}); 
	}

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
