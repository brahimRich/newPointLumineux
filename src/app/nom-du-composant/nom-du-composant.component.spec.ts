import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomDuComposantComponent } from './nom-du-composant.component';

describe('NomDuComposantComponent', () => {
  let component: NomDuComposantComponent;
  let fixture: ComponentFixture<NomDuComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomDuComposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomDuComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
