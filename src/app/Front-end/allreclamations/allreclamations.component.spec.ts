import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreclamationsComponent } from './allreclamations.component';

describe('AllreclamationsComponent', () => {
  let component: AllreclamationsComponent;
  let fixture: ComponentFixture<AllreclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreclamationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllreclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
