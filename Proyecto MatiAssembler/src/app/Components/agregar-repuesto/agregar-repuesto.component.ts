import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';


import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-repuesto',
  templateUrl: './agregar-repuesto.component.html',
  styleUrls: ['./agregar-repuesto.component.css']
})
export class AgregarRepuestoComponent implements OnInit {

pieza: String; 
marca: String;
modelo: String; 
repuestoGenerado; 
nuevo = false;

  constructor(private validateService: ValidateService, 
    private authService: AuthService,
 
    private router: Router) { }

  ngOnInit() {
   
  }

  
  registrarRepuesto() {
    const repuesto = {
      pieza: this.pieza 
    }
    this.authService.registerRepuesto(repuesto).subscribe(data => {
      console.log(data.success);
      //this.repuestoGenerado = repuesto; 
      //this.nuevo=true;
      this.authService.almacenarNuevoLS(repuesto);
      this.router.navigate(['/profile-administrador']);
    }); 
  }

}
