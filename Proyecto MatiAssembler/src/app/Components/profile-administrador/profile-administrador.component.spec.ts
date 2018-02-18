import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAdministradorComponent } from './profile-administrador.component';

describe('ProfileAdministradorComponent', () => {
  let component: ProfileAdministradorComponent;
  let fixture: ComponentFixture<ProfileAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
