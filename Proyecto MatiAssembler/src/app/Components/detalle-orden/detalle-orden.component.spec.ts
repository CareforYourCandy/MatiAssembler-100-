import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenComponent } from './detalle-orden.component';

describe('DetalleOrdenComponent', () => {
  let component: DetalleOrdenComponent;
  let fixture: ComponentFixture<DetalleOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
