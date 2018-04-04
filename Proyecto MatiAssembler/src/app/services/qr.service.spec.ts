import { TestBed, inject } from '@angular/core/testing';

import { QrService } from './qr.service';

describe('QrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrService]
    });
  });

  it('should be created', inject([QrService], (service: QrService) => {
    expect(service).toBeTruthy();
  }));
});
