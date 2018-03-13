import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirOrdenComponent } from './emitir-orden.component';

describe('EmitirOrdenComponent', () => {
  let component: EmitirOrdenComponent;
  let fixture: ComponentFixture<EmitirOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitirOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitirOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
