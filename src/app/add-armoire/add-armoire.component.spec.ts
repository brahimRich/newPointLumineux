import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArmoireComponent } from './add-armoire.component';

describe('AddArmoireComponent', () => {
  let component: AddArmoireComponent;
  let fixture: ComponentFixture<AddArmoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArmoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArmoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
