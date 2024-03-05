import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFrontComponent } from './dashboard-front.component';

describe('DashboardFrontComponent', () => {
  let component: DashboardFrontComponent;
  let fixture: ComponentFixture<DashboardFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
