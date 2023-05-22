import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarSuperAdminComponent } from './top-bar-super-admin.component';

describe('TopBarSuperAdminComponent', () => {
  let component: TopBarSuperAdminComponent;
  let fixture: ComponentFixture<TopBarSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarSuperAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
