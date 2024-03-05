import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReclamComponent } from './display-reclam.component';

describe('DisplayReclamComponent', () => {
  let component: DisplayReclamComponent;
  let fixture: ComponentFixture<DisplayReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReclamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
