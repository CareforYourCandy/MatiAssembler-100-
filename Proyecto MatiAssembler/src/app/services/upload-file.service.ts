import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class UploadFileService {

  FOLDER = 'jsa-s3/';
  
   constructor() { }
  
   uploadfile(file) {
  
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
         return false;
       }
  
       console.log('Successfully uploaded file.', data);
       return true;
     });
   }
  

}
