import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.component.html',
  styleUrls: ['./leer-qr.component.css']
})
export class LeerQrComponent implements OnInit {
@ViewChild('videoElement') video; 
@ViewChild('canvas') canvas; 
context; 
qr;

  constructor() { }

  ngOnInit() {
    const camera = navigator.mediaDevices;
    const permisos =navigator.mediaDevices.getUserMedia; 
    if (camera && permisos) {
      navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      }).catch(err => console.log(err)); 

      }
    }

    picture() {
      this.context = this.canvas.nativeElement.getContext('2d');
      this.context.drawImage(this.video.nativeElement,0,0,400,400).then( context => {
        this.qr = this.canvas.nativeElemement.toDataURL('img/png');

      }); 
     
    

    }
  }


