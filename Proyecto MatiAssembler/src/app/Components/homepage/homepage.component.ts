import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	valor;
  valor2="envase";
  valor3="rueda";
  constructor() { }

  ngOnInit() {
  }

  prueba(){
  	console.log("AQUI BIEN");
  	console.log(this.valor);
  }
}
