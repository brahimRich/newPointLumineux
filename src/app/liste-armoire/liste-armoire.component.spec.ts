import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArmoireComponent } from './liste-armoire.component';

describe('ListeArmoireComponent', () => {
  let component: ListeArmoireComponent;
  let fixture: ComponentFixture<ListeArmoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeArmoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArmoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
