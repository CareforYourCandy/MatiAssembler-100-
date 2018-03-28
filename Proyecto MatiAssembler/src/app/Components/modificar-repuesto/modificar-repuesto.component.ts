import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-repuesto',
  templateUrl: './modificar-repuesto.component.html',
  styleUrls: ['./modificar-repuesto.component.css']
})
export class ModificarRepuestoComponent implements OnInit {

	repuestos;
	repuestosTemp;

	constructor(private authService: AuthService,
	          private router: Router,
	          private location: Location) { }

	ngOnInit() {
	}

  	obtenerRepuestos() {
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

	actualizarOrden() {
		/*for (let i = 0; i < this.repuestosTemp.length; i++) { 

		}
		this.authService.añadirRepuestosOrden(this.repuestosTemp).subscribe(data => {
				console.log(data);
				this.router.navigate['detalle-orden'];     	
		}); */
	}
}
