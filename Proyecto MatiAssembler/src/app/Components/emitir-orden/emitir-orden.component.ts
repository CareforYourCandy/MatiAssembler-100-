import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private validateService: ValidateService, 
			    private authService: AuthService,
			    private router: Router) { }

  ngOnInit() {
  }

  registrarOrden() {
  	console.log(this.idVehiculo);
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
