import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [`
  .bannerStyle h1 {
      background-color: #ccc;
      min-height: 300px;
      text-align: center;
      line-height: 300px;
  }
  .leftRs {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
      border-radius: 999px;
      left: 0;
  }

  .rightRs {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
      border-radius: 999px;
      right: 0;
  }
`]
})
export class CarouselComponent implements OnInit {

@Input() imagenes; 

  constructor() { }

  ngOnInit() {
    
     
  }  

  /* It will be triggered on every slide*/


}
