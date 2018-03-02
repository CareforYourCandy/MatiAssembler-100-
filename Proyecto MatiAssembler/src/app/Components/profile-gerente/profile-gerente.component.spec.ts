import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGerenteComponent } from './profile-gerente.component';

describe('ProfileGerenteComponent', () => {
  let component: ProfileGerenteComponent;
  let fixture: ComponentFixture<ProfileGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
