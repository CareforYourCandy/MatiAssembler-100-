import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenGerenteComponent } from './detalle-orden-gerente.component';

describe('DetalleOrdenGerenteComponent', () => {
  let component: DetalleOrdenGerenteComponent;
  let fixture: ComponentFixture<DetalleOrdenGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOrdenGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOrdenGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
