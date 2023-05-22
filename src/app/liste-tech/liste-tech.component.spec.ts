import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTechComponent } from './liste-tech.component';

describe('ListeTechComponent', () => {
  let component: ListeTechComponent;
  let fixture: ComponentFixture<ListeTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
