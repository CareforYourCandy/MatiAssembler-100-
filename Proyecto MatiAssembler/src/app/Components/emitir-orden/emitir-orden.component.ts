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
	fechaOrden: String;
	diagnostico: String;
	mecanico: String;
	repuesto: String;
	procedimiento: String;
	ordenGenerada;
	activada: Boolean;
	myDatepicker; 
	public myDatePickerOptions: IMyDpOptions = {
		// other options...
		dateFormat: 'yyyy.mm.dd',
	};
	public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(private validateService: ValidateService, 
			    private authService: AuthService,
			    private router: Router) { }

  ngOnInit() {
  }

  registrarOrden() {
	  console.log(this.idVehiculo);
	  this.fechaOrden = JSON.stringify(this.model); 
	  const orden = {
	    idVehiculo: this.idVehiculo,
	    idMecanico: this.mecanico,
	    diagnostico: this.diagnostico,
	    fecha: this.fechaOrden,
	    procedimiento: this.procedimiento,
	    activada: 1
	  }
	  this.ordenGenerada = orden; 
	  
	  this.authService.registerOrden(orden).subscribe(data => {
			console.log(data.success); 
			if(data.success) {
			this.authService.eliminarCita(this.idCita).subscribe( data => { 
				console.log(data.success); 
			})
		}
		
			this.router.navigate['profile-gerente'];
			
		}); 
		
		

 }

}
