import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileClienteComponent } from './profile-cliente.component';


describe('ProfileClienteComponent', () => {
  let component: ProfileClienteComponent;
  let fixture: ComponentFixture<ProfileClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
