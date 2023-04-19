import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointLumineuxComponent } from './add-point-lumineux.component';

describe('AddPointLumineuxComponent', () => {
  let component: AddPointLumineuxComponent;
  let fixture: ComponentFixture<AddPointLumineuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPointLumineuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPointLumineuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
