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
	fechaOrden: String;
	diagnostico: String;
	mecanico: String;
	repuesto: String;
	motivo: String;
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
	    motivo: this.motivo,
	    activada: true
	  }
	  this.ordenGenerada = orden; 
	  
	  this.authService.registerOrden(orden).subscribe(data => {
	    console.log(data.success); 
	    this.router.navigate['profile-gerente'];
	  }); 

 }

}
