import { Component, OnInit, Input} from '@angular/core';
import { Vehiculo } from '../vehiculo/vehiculo'; 
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  @Input() vehiculo: Vehiculo;  

  constructor() { 
   
  }

  ngOnInit() {
  }

}



