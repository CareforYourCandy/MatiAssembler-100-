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
public carouselBanner: NgxCarousel;
@Input() imagenes; 

  constructor() { }

  ngOnInit() {
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    }
  }
  afterCarouselViewedFn(data) {
    console.log(data);
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
  }

}
