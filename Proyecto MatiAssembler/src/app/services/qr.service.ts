import { Injectable } from '@angular/core';

@Injectable()
export class QrService {

  constructor() { }


  generarQR(string) {
    var URL = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURI(string)  + "&size=200x200";
      return URL; 
  }
 

}
