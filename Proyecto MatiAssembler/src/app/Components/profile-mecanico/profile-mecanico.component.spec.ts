import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMecanicoComponent } from './profile-mecanico.component';

describe('ProfileMecanicoComponent', () => {
  let component: ProfileMecanicoComponent;
  let fixture: ComponentFixture<ProfileMecanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMecanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
