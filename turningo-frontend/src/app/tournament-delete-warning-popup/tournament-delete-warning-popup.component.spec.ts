import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDeleteWarningPopupComponent } from './tournament-delete-warning-popup.component';

describe('TournamentDeleteWarningPopupComponent', () => {
  let component: TournamentDeleteWarningPopupComponent;
  let fixture: ComponentFixture<TournamentDeleteWarningPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentDeleteWarningPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentDeleteWarningPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
