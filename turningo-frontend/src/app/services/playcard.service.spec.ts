import { TestBed } from '@angular/core/testing';

import { PlaycardService } from './playcard.service';

describe('PlaycardService', () => {
  let service: PlaycardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaycardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
