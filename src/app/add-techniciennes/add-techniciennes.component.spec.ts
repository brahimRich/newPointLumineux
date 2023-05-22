import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechniciennesComponent } from './add-techniciennes.component';

describe('AddTechniciennesComponent', () => {
  let component: AddTechniciennesComponent;
  let fixture: ComponentFixture<AddTechniciennesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechniciennesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTechniciennesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
