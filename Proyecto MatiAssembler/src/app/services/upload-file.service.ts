import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { AuthService } from './auth.service';

@Injectable()
export class UploadFileService {
  
  FOLDER = 'jsa-s3/';
  
   constructor() { 
   
   }
  
   uploadfile(file, id, identificador, authService ) {
     
     const bucket = new S3(
       {
         accessKeyId: 'AKIAJTOIL2JOG5VHSOXQ',
         secretAccessKey: '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',
         region: 'us-east-1'
       }
     );
  
     const params = {
       Bucket: 'matiassembler',
       Key: this.FOLDER + file.name,
       Body: file
     };
  
     bucket.upload(params, function (err, data) {
       if (err) {
         console.log('There was an error uploading your file: ', err);
         
       }
  
       console.log('Successfully uploaded file.', data);
    
       if (identificador == 1 ) {
       let imagenesVehiculo = {
         idVehiculo: id, 
          imagen: data.Location
       }
       authService.addImagenesVehiculo(imagenesVehiculo).subscribe(datos => {
        return true; 
       });
       
      }
      if (identificador == 2) {
        console.log("EL IDENTIFICADOR ES 2"); 

        var imagenesOrden = {
          idOrden: id, 
           imagen: data.Location
        }
        authService.addImagenesOrden(imagenesOrden).subscribe(datos => {
         return true; 
        });
      }
   }) 
  

  }
}





