import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitResultsComponent } from './submit-results.component';

describe('SubmitResultsComponent', () => {
  let component: SubmitResultsComponent;
  let fixture: ComponentFixture<SubmitResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
