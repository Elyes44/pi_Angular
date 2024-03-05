import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreclamationComponent } from './myreclamation.component';

describe('MyreclamationComponent', () => {
  let component: MyreclamationComponent;
  let fixture: ComponentFixture<MyreclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
