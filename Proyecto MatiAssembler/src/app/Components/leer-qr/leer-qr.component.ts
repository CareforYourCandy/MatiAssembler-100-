import { Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-leer-qr',
  templateUrl: './leer-qr.component.html',
  styleUrls: ['./leer-qr.component.css']
})
export class LeerQrComponent implements OnInit {

@ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;

  constructor() { }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0){
          let choosenDev;
          for (const dev of videoDevices){
              if (dev.label.includes('front')){
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
          }
      }
  });

  this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
  });
  
    /*
    const camera = navigator.mediaDevices;
    const permisos =navigator.mediaDevices.getUserMedia; 
    if (camera && permisos) {
      navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      }).catch(err => console.log(err)); 

      }
      */
    }

    picture() {
      /*
      this.context = this.canvas.nativeElement.getContext('2d');

      this.context.drawImage(this.video.nativeElement,0,0,400,400).then( context => {
        this.qr = this.canvas.nativeElemement.toDataURL('img/png');

      }); 
      */
    

    }
  }


