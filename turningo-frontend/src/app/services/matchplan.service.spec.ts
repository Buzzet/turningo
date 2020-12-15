import { TestBed } from '@angular/core/testing';

import { MatchplanService } from './matchplan.service';

describe('MatchplanService', () => {
  let service: MatchplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
