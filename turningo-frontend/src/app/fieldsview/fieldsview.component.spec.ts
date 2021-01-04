import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsviewComponent } from './fieldsview.component';

describe('FieldsviewComponent', () => {
  let component: FieldsviewComponent;
  let fixture: ComponentFixture<FieldsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
