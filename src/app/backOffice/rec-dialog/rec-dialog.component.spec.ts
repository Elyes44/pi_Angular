import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDialogComponent } from './rec-dialog.component';

describe('RecDialogComponent', () => {
  let component: RecDialogComponent;
  let fixture: ComponentFixture<RecDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
