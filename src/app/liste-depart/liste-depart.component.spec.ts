import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDepartComponent } from './liste-depart.component';

describe('ListeDepartComponent', () => {
  let component: ListeDepartComponent;
  let fixture: ComponentFixture<ListeDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
