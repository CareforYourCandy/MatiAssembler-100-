import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerQrComponent } from './leer-qr.component';

describe('LeerQrComponent', () => {
  let component: LeerQrComponent;
  let fixture: ComponentFixture<LeerQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
