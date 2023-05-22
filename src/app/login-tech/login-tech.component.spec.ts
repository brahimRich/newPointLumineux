import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTechComponent } from './login-tech.component';

describe('LoginTechComponent', () => {
  let component: LoginTechComponent;
  let fixture: ComponentFixture<LoginTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
