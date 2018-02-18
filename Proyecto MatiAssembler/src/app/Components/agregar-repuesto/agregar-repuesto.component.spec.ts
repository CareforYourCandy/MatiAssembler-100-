import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRepuestoComponent } from './agregar-repuesto.component';

describe('AgregarRepuestoComponent', () => {
  let component: AgregarRepuestoComponent;
  let fixture: ComponentFixture<AgregarRepuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarRepuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRepuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
